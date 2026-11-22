(()=>{
 const canvas=document.getElementById('rain'),ctx=canvas.getContext('2d'),wave=document.getElementById('spectrum'),wc=wave?.getContext('2d'),sound=document.getElementById('audio'),reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let active=!reduce.matches,reactive=false,ac,analyser,bins,last=0,frame=0;const levels=new Float32Array(30);
 const drops=Array.from({length:48},()=>({x:Math.random(),y:Math.random(),speed:.03+Math.random()*.06,length:4+Math.random()*12}));
 function resize(){canvas.width=innerWidth;canvas.height=innerHeight;}resize();addEventListener('resize',resize);
 async function connect(){if(location.protocol==='file:'&&!sound.src.startsWith('blob:')){document.getElementById('fx-status').textContent='For the live spectrum, use Start-preview.cmd or choose a local track from My playlist.';return;}try{if(!ac){const AudioCtx=window.AudioContext||window.webkitAudioContext;ac=new AudioCtx();analyser=ac.createAnalyser();analyser.fftSize=256;analyser.smoothingTimeConstant=.78;bins=new Uint8Array(analyser.frequencyBinCount);const source=ac.createMediaElementSource(sound);source.connect(analyser);analyser.connect(ac.destination);}if(ac.state==='suspended')await ac.resume();}catch(e){document.getElementById('fx-status').textContent='Audio visualisation is unavailable in this browser.';}}
 sound.addEventListener('play',()=>{connect();start();});
 function draw(t){frame=0;if(document.hidden)return;const dt=Math.min((t-last)/1000,.05);last=t;let energy=0;
  const live=analyser&&ac.state==='running'&&!sound.paused;
  if(live){analyser.getByteFrequencyData(bins);energy=bins.slice(0,32).reduce((a,b)=>a+b,0)/(32*255);}
  if(wc){wc.clearRect(0,0,wave.width,wave.height);const center=wave.width/2,mid=wave.height/2;for(let i=0;i<30;i++){const target=live?bins[Math.min(127,Math.floor(2+i*2.7))]/255:0;levels[i]+=(target-levels[i])*.22;const n=Math.floor(levels[i]*7);for(let side of [-1,1]){const x=center+side*(i*5.7+3);for(let j=-n;j<=n;j++){wc.fillStyle=j===0?'#b391d666':i<12?'#ccb4ff':'#92e6d7';wc.fillRect(Math.round(x),mid+j*4,4,3);}}}wave.dataset.energy=energy.toFixed(4);document.getElementById('spectrum-status').textContent=live?'NOW PLAYING · LIVE SPECTRUM':'PRESS PLAY · LIVE SPECTRUM';}
  ctx.clearRect(0,0,canvas.width,canvas.height);if(active){const e=reactive?energy:0;ctx.strokeStyle=`rgba(190,163,237,${.18+e*.35})`;for(const d of drops){d.y=(d.y+dt*d.speed*(1+e*2))%1;const x=d.x*canvas.width,y=d.y*canvas.height;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-3,y-d.length*(1+e));ctx.stroke();}}
  frame=requestAnimationFrame(draw);
 }
 function start(){if(!document.hidden&&!frame){last=performance.now();frame=requestAnimationFrame(draw);}}
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else start();});
 const toggle=document.getElementById('effects');function status(){toggle.textContent='Star rain: '+(active?'on':'off');toggle.setAttribute('aria-pressed',String(active));}toggle.onclick=()=>{active=!active;status();};reduce.addEventListener('change',()=>{active=!reduce.matches;status();});status();start();
 const rb=document.getElementById('reactive');rb.onclick=async()=>{reactive=!reactive;rb.setAttribute('aria-pressed',String(reactive));rb.textContent='Reactive rain: '+(reactive?'on':'off');await connect();document.getElementById('fx-status').textContent=reactive?'Rain follows the music.':'Rain moves independently.';};
 addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')document.documentElement.classList.add('drum-strike');});
 function release(){document.documentElement.classList.remove('drum-strike');}addEventListener('pointerup',release);addEventListener('blur',release);
})();
