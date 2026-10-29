/* Repeated views reduce selection weight. All history stays on this device. */
(()=>{
 const weight=n=>1/Math.pow(1+Math.max(0,Number(n)||0),1.7);
 function pick(pool,history={},random=Math.random){
  if(!pool.length)return null;
  const recent=Array.isArray(history.recent)?history.recent:[];
  // Leave at least one eligible item in very small topic/bookmark pools.
  let eligible=pool;
  for(let cooldown=Math.min(8,recent.length);cooldown>=0;cooldown--){const avoid=new Set(recent.slice(-cooldown||recent.length));eligible=cooldown?pool.filter(r=>!avoid.has(r.id)):pool;if(eligible.length)break;}
  const weights=eligible.map(r=>weight(history.views?.[r.id]));
  let draw=Math.min(.999999999999,Math.max(0,random()))*weights.reduce((a,b)=>a+b,0);
  for(let i=0;i<eligible.length;i++){draw-=weights[i];if(draw<0)return eligible[i];}
  return eligible[eligible.length-1];
 }
 window.ReelDiscovery={pick,weight};
})();
