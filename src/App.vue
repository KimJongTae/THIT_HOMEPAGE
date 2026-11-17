<script setup>
import {ref,onMounted,onUnmounted,nextTick} from 'vue'
import {company} from './company'
import {navigation,currentPage,pageUrl} from './site'
import {useMotion} from './motion'
import HomePage from './pages/HomePage.vue'
import CompanyPage from './pages/CompanyPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import AiPage from './pages/AiPage.vue'
import ApproachPage from './pages/ApproachPage.vue'
import ContactPage from './pages/ContactPage.vue'

const logoUrl=import.meta.env.BASE_URL+'thit-logo.jpg'
const pages={home:HomePage,company:CompanyPage,services:ServicesPage,ai:AiPage,approach:ApproachPage,contact:ContactPage}
const pageInfo=navigation.find(item=>item.id===currentPage)
const expandedGroup=ref(null),menu=ref(false),active=ref(0),paused=ref(false),detail=ref(null)
const {slideProgress,scrolled,reset}=useMotion(()=>{active.value=(active.value+1)%3},paused)
function changeSlide(i){active.value=i;reset()}
function closeMenu(){menu.value=false;expandedGroup.value=null}
function itemUrl(group,item){return pageUrl(group.id,item.service,item.id)}
let previousFocus
function close(){detail.value=null;document.body.style.overflow='';previousFocus?.focus()}
function open(service){previousFocus=document.activeElement;detail.value=service;document.body.style.overflow='hidden';nextTick(()=>document.querySelector('.close')?.focus())}
function key(e){
  if(e.key==='Escape'){if(detail.value)close();closeMenu()}
  if(e.key==='Tab'&&detail.value){
    const nodes=[...document.querySelectorAll('.modal button,.modal a')]
    const first=nodes[0],last=nodes.at(-1)
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
}
onMounted(()=>window.addEventListener('keydown',key))
onUnmounted(()=>window.removeEventListener('keydown',key))
</script>
<template>
  <a class="skip" href="#main">본문 바로가기</a>
  <header :class="{scrolled,'menu-open':menu}">
    <a :href="pageUrl()" class="logo" aria-label="THIT 홈"><img :src="logoUrl" alt="THIT"></a>
    <nav :class="{show:menu}" aria-label="주 메뉴">
      <div v-for="(group,i) in navigation" :key="group.id" class="nav-group" :class="{expanded:expandedGroup===i,'nav-current':currentPage===group.id}"
        @pointerenter="e=>{if(e.pointerType==='mouse'&&!menu)expandedGroup=i}" @mouseleave="expandedGroup=null"
        @focusout="e=>{if(!e.currentTarget.contains(e.relatedTarget))expandedGroup=null}">
        <div class="nav-parent">
          <a :href="pageUrl(group.id)" :aria-current="currentPage===group.id?'page':undefined" @click="closeMenu">{{group.label}}</a>
          <button class="nav-toggle" :aria-label="group.label+' 하위 메뉴'" :aria-expanded="expandedGroup===i" :aria-controls="'nav-sub-'+i" @click="expandedGroup=expandedGroup===i?null:i" @keydown.esc="expandedGroup=null">
            <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m3 4.5 3 3 3-3"/></svg>
          </button>
        </div>
        <div class="nav-dropdown" :id="'nav-sub-'+i" :inert="expandedGroup!==i">
          <span class="dropdown-label">{{group.label}}</span>
          <a v-for="(item,j) in group.children" :key="item.label" :href="itemUrl(group,item)" @click="closeMenu"><small>0{{j+1}}</small>{{item.label}}<span>↗</span></a>
        </div>
      </div>
    </nav>
    <a class="header-contact" :href="pageUrl('contact')">함께 시작하기 <span>↗</span></a>
    <button class="menu" @click="menu=!menu;expandedGroup=null" :aria-expanded="menu" :aria-label="menu?'메뉴 닫기':'메뉴 열기'"><span></span><span></span></button>
    <div class="reading-progress"></div>
  </header>
  <main id="main" :class="{'inner-page':currentPage!=='home'}">
    <template v-if="pageInfo">
      <section class="page-intro">
        <div class="breadcrumb"><a :href="pageUrl()">Home</a><span>/</span><span>{{pageInfo.label}}</span></div>
        <div class="page-intro-heading"><div><p class="eyebrow">{{pageInfo.label.toUpperCase()}}</p><h1>{{pageInfo.title}}</h1><p>{{pageInfo.description}}</p><span v-if="currentPage==='ai'" class="pill">확장 계획</span></div><span class="page-number" aria-hidden="true">0{{navigation.findIndex(g=>g.id===currentPage)+1}}</span></div>
      </section>
      <nav class="page-subnav" :aria-label="pageInfo.label+' 페이지 내 메뉴'"><a v-for="item in pageInfo.children" :href="itemUrl(pageInfo,item)">{{item.label}}</a></nav>
    </template>
    <component :is="pages[currentPage]" v-bind="currentPage==='home'?{active,paused,slideProgress}:{}" @slide="changeSlide" @pause="paused=!paused" @open="open"/>
    <section v-if="currentPage!=='home'&&currentPage!=='contact'" class="page-contact-band"><div><small>LET'S BUILD YOUR TOMORROW</small><h2>다음 이야기를 시작할까요?</h2></div><a class="text-link" :href="pageUrl('contact')">프로젝트 상담 <span>↗</span></a></section>
  </main>
  <footer>
    <a :href="pageUrl()" aria-label="THIT 홈"><img :src="logoUrl" alt="THIT"></a><p>Tomorrow · Human · Information Technology<br>사람과 기술로 내일을 만듭니다.</p>
    <div>대표 {{company.ceo}} · 사업자등록번호 {{company.bizNo}}<br>© {{new Date().getFullYear()}} THIT. All rights reserved.</div><a href="#main">BACK TO TOP ↑</a>
  </footer>
  <a class="floating" :href="pageUrl('contact')" aria-label="상담 문의">↗</a>
  <Transition name="dialog"><div v-if="detail" class="modal-backdrop" @click.self="close"><section class="modal" role="dialog" aria-modal="true" :aria-label="detail.ko"><button class="close" @click="close" aria-label="닫기">✕</button><small>{{detail.en}}</small><h2>{{detail.ko}}</h2><p>{{detail.body}}</p><div class="tags"><span v-for="tag in detail.tags">{{tag}}</span></div><a :href="pageUrl('contact')" class="submit" @click="close">상담하기 ↗</a></section></div></Transition>
</template>
