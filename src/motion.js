import {onMounted,onUnmounted,ref} from 'vue'
export function useMotion(onSlide, paused) {
 const slideProgress=ref(0), currentSection=ref(''), scrolled=ref(false)
 let frame, observer, sectionObserver, media, hero, story, elapsed=0,last=0,dirty=true,pointerX=0,pointerY=0,x=0,y=0
 const scroll=()=>{dirty=true}
 const pointer=e=>{pointerX=(e.clientX/innerWidth-.5)*22;pointerY=(e.clientY/innerHeight-.5)*16}
 const reset=()=>{elapsed=0;slideProgress.value=0}
 onMounted(()=>{
  media=matchMedia('(prefers-reduced-motion: reduce)');hero=document.querySelector('.hero');story=document.querySelector('.statement')
  observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -25px 0px'})
  document.querySelectorAll('.section-label,.company-top,.section-heading,.statement,.value-grid article,.service-layout,.ai-grid,.ai-use,.steps article,.contact>div,.contact form,.identity-strip,.ai-process').forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--delay',`${el.matches('article')?(i%4)*85:0}ms`);observer.observe(el)})
  document.documentElement.classList.add('motion-ready')
  sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)currentSection.value=e.target.id}),{rootMargin:'-15% 0px -60% 0px'})
  document.querySelectorAll('main>section[id]').forEach(el=>sectionObserver.observe(el))
  window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('pointermove',pointer,{passive:true})
  const tick=t=>{
   const dt=last?Math.min(t-last,80):0;last=t
   if(!document.hidden&&!paused.value&&!media.matches){elapsed+=dt;slideProgress.value=Math.min(elapsed/6500,1);if(elapsed>=6500){onSlide();reset()}}
   if(dirty){const sy=window.scrollY;scrolled.value=sy>30;document.documentElement.style.setProperty('--read',`${sy/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100}%`);if(!media.matches){hero.style.setProperty('--scroll-y',`${Math.min(sy,innerHeight)*.17}px`);const r=story.getBoundingClientRect();story.style.setProperty('--ink',`${Math.max(0,Math.min(1,(innerHeight*.8-r.top)/(innerHeight*.65)))*100}%`)}dirty=false}
   if(!media.matches&&innerWidth>700&&window.scrollY<innerHeight){x+=(pointerX-x)*.035;y+=(pointerY-y)*.035;hero.style.setProperty('--mx',`${x}px`);hero.style.setProperty('--my',`${y}px`)}
   frame=requestAnimationFrame(tick)
  };frame=requestAnimationFrame(tick)
 })
 onUnmounted(()=>{cancelAnimationFrame(frame);observer?.disconnect();sectionObserver?.disconnect();window.removeEventListener('scroll',scroll);window.removeEventListener('pointermove',pointer);document.documentElement.classList.remove('motion-ready')})
 return {slideProgress,currentSection,scrolled,reset}
}
