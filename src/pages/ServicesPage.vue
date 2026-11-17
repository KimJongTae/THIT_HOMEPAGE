<script setup>
import {ref,nextTick} from 'vue'
import {services} from '../services'
import {businesses} from '../company'
import {pageUrl} from '../site'
import ServiceVisual from '../ServiceVisual.vue'
defineEmits(['open'])
const requested=new URLSearchParams(location.search).get('service')
const initial=services.findIndex(s=>s.id===requested)
const selected=ref(initial>=0?initial:0)
function select(i){selected.value=i;const url=new URL(location.href);url.searchParams.set('service',services[i].id);history.replaceState(null,'',url)}
function tabKey(e,i){let n;if(e.key==='ArrowRight')n=(i+1)%4;if(e.key==='ArrowLeft')n=(i+3)%4;if(e.key==='Home')n=0;if(e.key==='End')n=3;if(n!==undefined){e.preventDefault();select(n);nextTick(()=>document.getElementById('tab-'+n)?.focus())}}
</script>
<template><section id="services" class="services section"><div class="section-label"><i></i> WHAT WE DO</div><div class="section-heading"><h2>필요한 기술을 연결하고,<br>비즈니스의 다음을 만듭니다.</h2><p>구축부터 운영, 전문역량 지원까지.<br>고객의 과제에 맞는 방식으로 함께합니다.</p></div><div class="service-layout"><div class="service-tabs" role="tablist" aria-label="서비스"><button v-for="(s,i) in services" :id="'tab-'+i" role="tab" :aria-selected="selected===i" :tabindex="selected===i?0:-1" @keydown="tabKey($event,i)" :aria-controls="'panel-'+i" :class="{active:selected===i}" @click="select(i)"><small>0{{i+1}}</small>{{s.ko}} <span>↗</span></button></div><Transition name="service" mode="out-in"><article :key="selected" class="service-panel" role="tabpanel" :id="'panel-'+selected" :aria-labelledby="'tab-'+selected"><div class="service-art" aria-hidden="true"><span class="visual-caption">THIT / 0{{selected+1}}</span><ServiceVisual :variant="selected"/><span class="visual-coordinate">PEOPLE × TECHNOLOGY</span></div><div class="service-info"><small>{{services[selected].en.toUpperCase()}}</small><h3>{{services[selected].ko}}</h3><p>{{services[selected].desc}}</p><div class="tags"><span v-for="tag in services[selected].tags">{{tag}}</span></div><button class="round-link" @click="$emit('open',services[selected])">서비스 자세히 보기 <span>↗</span></button></div></article></Transition></div><div class="scope-section" id="service-scope"><div class="section-heading"><h2>{{services[selected].ko}}<br>함께하는 범위</h2><p>{{businesses[selected].promise}}</p></div><div class="scope-grid"><article v-for="(feat,i) in businesses[selected].feats" :key="selected+'-'+i"><small>0{{i+1}}</small><h3>{{feat[0]}}</h3><p>{{feat[1]}}</p></article></div><a class="text-link" :href="pageUrl('contact')">이 서비스로 상담하기 <span>↗</span></a></div></section></template>
