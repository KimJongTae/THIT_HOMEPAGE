export const pageUrl = (page = 'home', service = '', section = '') => {
  const query = service ? `?service=${encodeURIComponent(service)}` : ''
  return `${import.meta.env.BASE_URL}${page === 'home' ? '' : page + '/'}${query}${section ? '#' + section : ''}`
}
export const navigation = [
  {label:'Company',id:'company',title:'사람과 기술로, 내일을 만듭니다.',description:'THIT의 이름과 철학, 그리고 고객과의 약속을 소개합니다.',children:[{label:'THIT 소개',id:'company'},{label:'브랜드 의미',id:'identity'},{label:'핵심가치',id:'values'},{label:'미션과 비전',id:'mission'}]},
  {label:'Services',id:'services',title:'비즈니스에 필요한 IT를 연결합니다.',description:'개발과 운영, 전문역량 지원까지 고객의 과제에 맞게 함께합니다.',children:[{label:'소프트웨어 개발',id:'services',service:'development'},{label:'유지보수 · 운영 지원',id:'services',service:'maintenance'},{label:'IT 전문인력 지원',id:'services',service:'staffing'}]},
  {label:'AI Consulting',id:'ai',title:'AI의 가능성을, 업무의 변화로.',description:'고객의 업무 문제에서 출발하는 기업 AI 도입 컨설팅을 준비합니다.',children:[{label:'AI 도입 방향',id:'ai'},{label:'활용 과제',id:'ai-use'},{label:'도입 단계',id:'ai-process'},{label:'도입 원칙',id:'ai-principles'}]},
  {label:'Our Approach',id:'approach',title:'시작부터 그다음까지, 함께합니다.',description:'업무 이해에서 구축과 운영까지, THIT가 고객과 함께 일하는 방식입니다.',children:[{label:'함께하는 방식',id:'approach'}]},
  {label:'Contact',id:'contact',title:'함께 만들 내일을 이야기해 주세요.',description:'지금 필요한 개발부터 운영의 고민까지, THIT가 함께 생각하겠습니다.',children:[{label:'프로젝트 상담',id:'contact'},{label:'연락처 안내',id:'contact-details'}]},
]
const relativePath = location.pathname.slice(import.meta.env.BASE_URL.length).replace(/index\.html$/, '').replace(/\/$/, '')
export const currentPage = navigation.some(item => item.id === relativePath) ? relativePath : 'home'
