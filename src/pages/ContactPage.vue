<script setup>
import {ref} from 'vue'
import {company} from '../company'
import {services} from '../services'
const sent=ref(false)
const form=ref({name:'',email:'',service:'소프트웨어 개발',message:'',consent:false})
function send(){const f=form.value; window.location.href=`mailto:${company.email}?subject=${encodeURIComponent('[THIT 상담] '+f.service)}&body=${encodeURIComponent('이름 / 회사: '+f.name+'\n회신 이메일: '+f.email+'\n\n'+f.message)}`;sent.value=true}
</script>
<template><section id="contact" class="contact section"><div><div class="section-label"><i></i> LET'S WORK TOGETHER</div><h2>함께 만들 내일을<br>이야기해 주세요.</h2><p>지금 필요한 개발부터 운영의 고민까지,<br>THIT가 함께 생각하겠습니다.</p><a :href="'mailto:'+company.email" class="email">{{company.email}} ↗</a><p class="contact-details" id="contact-details">{{company.tel}}<br>{{company.address}}</p></div><form @submit.prevent="send"><label>이름 / 회사명<input required v-model="form.name" placeholder="이름과 회사명을 입력해 주세요" maxlength="100"></label><label>회신 이메일<input type="email" required v-model="form.email" placeholder="name@company.com"></label><label>관심 서비스<select v-model="form.service"><option v-for="s in services">{{s.ko}}</option></select></label><label>문의 내용<textarea required v-model="form.message" placeholder="어떤 도움이 필요하신가요?" rows="3" maxlength="5000"></textarea></label><label class="check"><input type="checkbox" required v-model="form.consent">문의 회신을 위해 입력한 정보를 이메일로 전달하는 데 동의합니다.</label><button class="submit">이메일로 상담 요청하기 <span>↗</span></button><p class="form-note" role="status">{{sent?'메일 앱에서 내용을 확인한 뒤 전송해 주세요. 아직 문의가 접수되지는 않았습니다.':'기본 메일 앱이 열립니다. 내용 확인 후 직접 전송해 주세요.'}}</p></form></section></template>
