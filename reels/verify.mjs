// Run from the repository root: node reels/verify.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const scope={window:{}};vm.createContext(scope);
vm.runInContext(fs.readFileSync('data.js','utf8'),scope);
vm.runInContext(fs.readFileSync('reels/catalog.js','utf8'),scope);
const {lessons}=scope.window.STUDY_DATA,{reels}=scope.window.REELS_DATA;
const expected=[];
for(const l of lessons){
 l.sections.forEach((s,i)=>expected.push({id:`${l.id}-s${i+1}`,lesson:l.id,body:s.text}));
 expected.push({id:`${l.id}-example`,lesson:l.id,body:l.example});
 l.cards.forEach((c,i)=>expected.push({id:`${l.id}-c${i+1}`,lesson:l.id,body:c.q,answer:c.a}));
 l.checks.forEach((q,i)=>expected.push({id:`${l.id}-q${i+1}`,lesson:l.id,body:q.q,answer:q.options[q.answer],options:[...q.options],explain:q.explain}));
}
assert.equal(reels.length,expected.length);assert.equal(new Set(reels.map(r=>r.id)).size,reels.length);
let audioFiles=0;
for(const e of expected){const r=reels.find(r=>r.id===e.id);assert(r,'Missing '+e.id);assert.equal(r.lesson,e.lesson);assert.equal(r.body,e.body);assert.equal(r.captions.join(' ').replace(/\s+/g,' '),(r.narration||r.body).replace(/\s+/g,' '));
 if(e.answer){assert.equal(r.answer,e.answer);assert(r.answerDuration>.2);assert(fs.statSync(r.answerAudio).size>1000);audioFiles++;}
 if(e.options){assert.deepEqual([...r.options],e.options);assert.equal(r.explain,e.explain);assert.equal(r.options[r.correct],r.answer);}
 assert(r.duration>.2);assert(fs.statSync(r.audio).size>1000);audioFiles++;
}
const plans=JSON.parse(fs.readFileSync('reels/storyboards.json'));let beatCount=0;
for(const r of reels.filter(r=>['learn','example'].includes(r.type))){const p=plans[r.id];assert(p?.length,`Missing film ${r.id}`);assert.equal(p[0].start,0);assert.equal(p.at(-1).end,r.duration);for(let i=0;i<p.length;i++){const b=p[i];assert(b.end>b.start);if(i)assert.equal(b.start,p[i-1].end);assert(b.nodes.length<=5);assert(b.nodeTimes.every(t=>t>=0&&t<b.end-b.start));beatCount++;}for(const suffix of ['', '.reduced']){const html=fs.readFileSync(`reels/films/${r.id}${suffix}.html`,'utf8');assert(html.includes('data-duration="'+r.duration+'"'));assert(!/repeat:\s*-1|<video|autoplay/.test(html));}}
assert.equal(Object.keys(plans).length,137);assert.equal(beatCount,796);
assert(!fs.existsSync('reels/scenes.js'));assert(!fs.readdirSync('reels/media').some(n=>n.startsWith('story-')));
console.log(`PASS: 137 complete HyperFrames films, 796 continuous speech-timed beats, reduced-motion variants; no short video loops.`);
for(const file of ['focus','flow','spark'])assert(fs.statSync(`reels/media/music-${file}.mp3`).size>1000);
console.log(`PASS: ${lessons.length} lessons, ${reels.length} reels, ${audioFiles} narration files; every section/example/card/question preserved.`);
console.log(`Narrated explainer range: ${Math.min(...reels.filter(r=>r.type==='learn').map(r=>r.duration)).toFixed(1)}–${Math.max(...reels.filter(r=>r.type==='learn').map(r=>r.duration)).toFixed(1)} seconds.`);
