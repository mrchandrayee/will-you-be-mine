const noBtn=document.querySelector("#noBtn");
const yesBtn=document.querySelector("#yesBtn");
const card=document.querySelector("#card");
const photo=document.querySelector("#catPhoto");
const promptEl=document.querySelector("#photoPrompt");
const buttons=document.querySelector("#buttons");
const success=document.querySelector("#success");
const hearts=document.querySelector("#hearts");
const taunts=["Are you sure?","Think again 🥺","Last chance!","Just say Yes!","Pretty please?","Nope! 😼"];
let noAttempts=0, promptTimer;
function dodge(){
  if(noBtn.classList.contains("loose")===false) noBtn.classList.add("loose");
  const rect=noBtn.getBoundingClientRect();
  const margin=18;
  const maxX=Math.max(margin,window.innerWidth-rect.width-margin);
  const maxY=Math.max(margin,window.innerHeight-rect.height-margin);
  let x=margin+Math.random()*(maxX-margin);
  let y=margin+Math.random()*(maxY-margin);
  // Avoid placing the button directly over the Yes button/card center.
  const yesRect=yesBtn.getBoundingClientRect();
  if(x>yesRect.left-90&&x<yesRect.right+90&&y>yesRect.top-70&&y<yesRect.bottom+70){
    x=x<window.innerWidth/2?window.innerWidth-rect.width-margin:margin;
    y=y<window.innerHeight/2?window.innerHeight-rect.height-margin:margin;
  }
  noBtn.style.left=`${x}px`;noBtn.style.top=`${y}px`;
  noAttempts++;
  promptEl.textContent=taunts[Math.min(noAttempts-1,taunts.length-1)];
  promptEl.classList.add("show");
  clearTimeout(promptTimer);
  promptTimer=setTimeout(()=>promptEl.classList.remove("show"),1150);
  yesBtn.style.transform=`scale(${Math.min(1+noAttempts*.045,1.35)})`;
}
noBtn.addEventListener("pointerenter",dodge);
noBtn.addEventListener("click",e=>{e.preventDefault();dodge()});
noBtn.addEventListener("focus",dodge);
function burstHearts(){
  const symbols=["💗","💕","💖","💘","♥"];
  for(let i=0;i<34;i++){
    const el=document.createElement("span");el.className="heart";
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=`${Math.random()*96}%`;
    el.style.bottom=`${8+Math.random()*24}%`;
    el.style.animationDelay=`${Math.random()*.8}s`;
    el.style.fontSize=`${14+Math.random()*19}px`;
    hearts.appendChild(el);setTimeout(()=>el.remove(),3400);
  }
}
function accept(){
  photo.src="assets/cat-happy.jpg";photo.classList.add("happy");
  buttons.classList.add("hidden");
  document.querySelector("#question").classList.add("hidden");
  success.classList.remove("hidden");
  noBtn.classList.remove("loose");noBtn.style.left="";noBtn.style.top="";
  burstHearts();
}
yesBtn.addEventListener("click",accept);
document.querySelector("#againBtn").addEventListener("click",()=>{
  photo.src="assets/cat-ask.jpg";photo.classList.remove("happy");
  success.classList.add("hidden");
  document.querySelector("#question").classList.remove("hidden");
  buttons.classList.remove("hidden");
  noAttempts=0;yesBtn.style.transform="";
  promptEl.classList.remove("show");
});
document.querySelector("#soundBtn").addEventListener("click",e=>{
  e.currentTarget.textContent=e.currentTarget.textContent==="🔈"?"🔇":"🔈";
  const toast=document.querySelector("#toast");
});
// On narrow screens the No button still escapes, but remains inside the viewport.
window.addEventListener("resize",()=>{
  if(noBtn.classList.contains("loose")){
    const r=noBtn.getBoundingClientRect();
    noBtn.style.left=`${Math.min(r.left,window.innerWidth-r.width-12)}px`;
    noBtn.style.top=`${Math.min(r.top,window.innerHeight-r.height-12)}px`;
  }
});
