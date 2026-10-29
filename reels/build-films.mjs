// Rebuild the final HTML timelines from the checked-in timed storyboards.
// Run from the repository root: node reels/build-films.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const scope={window:{},URL,document:{baseURI:'https://study.invalid/'}};
vm.createContext(scope);
for(const source of ['reels/catalog.js','reels/film.js'])vm.runInContext(fs.readFileSync(source,'utf8'),scope);
const plans=JSON.parse(fs.readFileSync('reels/storyboards.json','utf8'));
const reels=scope.window.REELS_DATA.reels.filter(r=>['learn','example'].includes(r.type));
fs.mkdirSync('reels/films',{recursive:true});
for(const r of reels){const beats=plans[r.id];assert(beats?.length,`Missing storyboard: ${r.id}`);assert.equal(beats[0].start,0);assert.equal(beats.at(-1).end,r.duration);
 for(const reduced of [false,true]){const html=scope.window.ReelFilm.html(r,beats,{runtime:'../vendor/hyperframe.runtime.js?v=cinema-3',gsap:'../vendor/gsap.min.js',font:'../../fonts/DM-Sans.ttf',reduced});fs.writeFileSync(`reels/films/${r.id}${reduced?'.reduced':''}.html`,html);}
}
console.log(`Built ${reels.length} complete timelines and their reduced-motion variants.`);
