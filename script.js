let current=0;
const pages=[...document.querySelectorAll('.page')];
const dots=[...document.querySelectorAll('.dots i')];

function show(n){
  current=n;
  pages.forEach((p,i)=>p.classList.toggle('active',i===n));
  dots.forEach((d,i)=>d.classList.toggle('active',i===n));
}
function nextPage(){ if(current<pages.length-1) show(current+1); }
function replay(){show(0)}

setInterval(()=>{
  const h=document.createElement('div');
  h.className='heart';
  h.textContent=['♡','✦','♥'][Math.floor(Math.random()*3)];
  h.style.left=Math.random()*100+'vw';
  h.style.animationDuration=(5+Math.random()*4)+'s';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),9000);
},700);
