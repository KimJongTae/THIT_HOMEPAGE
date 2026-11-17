// ─────────────────────────────────────────────────────────────
// THIT 홈페이지 콘텐츠 데이터
// 근거: THIT_기업정체성_브랜드전략.docx (2026-11-13)
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'THIT',
  nameKo: '티에이치아이티',
  meaning: 'Tomorrow · Human · Information Technology',
  sloganKo: '사람과 기술로 내일을 만듭니다',
  sloganEn: 'Building Tomorrow with People and Technology',
  identity: '사람과 기술로 기업의 오늘을 지키고 내일을 만드는 IT 파트너',
  serviceLine: '소프트웨어 개발부터 운영과 기업 AI 도입까지',
  ceo: '김종태',
  bizNo: '804-39-00343',
  address: '경기도 성남시 성남대로1151번길 20-6, 3층',
  tel: '010-4240-4346',
  fax: '', // 팩스가 생기면 입력하면 자동 표시
  email: 'blackkjt@gmail.com',
  fields: '소프트웨어 개발, 유지보수·운영 지원, IT 전문인력 지원, 기업 AI 도입 컨설팅(확장 예정)',
  mapQuery: '경기도 성남시 성남대로1151번길 20-6',
  intro: [
    'THIT는 소프트웨어 개발과 유지보수, IT 전문인력 지원을 통해 기업의 업무와 시스템을 뒷받침하는 IT 서비스 기업입니다.',
    '고객의 업무에 필요한 기술과 사람을 연결하고, 구축 이후의 운영과 개선까지 함께합니다.',
    '앞으로는 기업 AI 도입 컨설팅으로 영역을 넓혀, 활용 과제 발굴부터 검증과 현장 적용까지 지원하고자 합니다.',
  ],
}

// 이름의 의미
export const nameMeaning = [
  { letter: 'T', word: 'Tomorrow', ko: '미래', desc: '고객의 내일을 함께 준비합니다.' },
  { letter: 'H', word: 'Human', ko: '사람', desc: '업무와 현장의 사람을 먼저 이해합니다.' },
  { letter: 'IT', word: 'Information Technology', ko: '정보기술', desc: '실제로 쓰이는 기술로 구현합니다.' },
]

export const mission = '고객의 업무를 이해하고 필요한 기술과 사람을 연결하여, 지속적으로 활용할 수 있는 소프트웨어와 AI 기반 업무 개선을 실현합니다.'
export const vision = '개발과 운영의 신뢰를 바탕으로 기업의 AI 전환까지 함께하는 장기 IT 파트너'

export const values = [
  { title: '신뢰', en: 'Trust', desc: '수행 범위와 일정, 운영 책임을 명확히 설명하고 약속한 내용을 관리합니다.' },
  { title: '사람', en: 'Human', desc: '고객의 업무와 현장 구성원의 사용 경험을 이해하고, 적합한 전문역량을 연결합니다.' },
  { title: '실행', en: 'Execution', desc: '기술 제안이 실제 시스템과 업무 변화로 이어지도록 구축과 적용을 연결합니다.' },
  { title: '지속적인 개선', en: 'Improvement', desc: '구축 이후에도 운영 피드백을 바탕으로 안정성과 활용도를 높입니다.' },
]

export const businesses = [
  {
    id: 'development',
    short: '소프트웨어 개발',
    tag: 'SOFTWARE DEVELOPMENT',
    icon: '💻',
    title: '소프트웨어',
    strong: '개발',
    card: '업무와 요구사항을 분석해 업무 시스템과 웹 서비스를 설계·개발합니다.',
    lead: '고객의 업무와 요구사항을 분석하고, 업무 시스템과 웹 서비스 등을 설계·개발합니다. 요구사항 정의부터 인수인계까지 수행 범위를 명확히 합니다.',
    feats: [
      ['요구사항 정의', '업무 분석과 기능 범위 합의'],
      ['설계·구현', '업무 시스템과 웹 서비스 개발'],
      ['시험', '기능·통합 테스트로 품질 확인'],
      ['배포·인수인계', '운영 환경 반영과 사용·운영 문서 전달'],
    ],
    promise: '업무에 필요한 기능을 이해하고 실제로 사용할 수 있는 시스템으로 구현합니다.',
  },
  {
    id: 'maintenance',
    short: '유지보수·운영',
    tag: 'MAINTENANCE & OPERATION',
    icon: '🛠️',
    title: '유지보수와',
    strong: '운영 지원',
    card: '장애 대응과 오류 수정, 기능 개선으로 시스템을 안정적으로 운영합니다.',
    lead: '기존 시스템의 장애 대응, 오류 수정, 기능 개선과 운영 지원을 제공합니다. 대응 시간과 지원 범위, 변경 절차를 고객과 합의하고 작업 이력을 축적합니다.',
    feats: [
      ['장애 대응·오류 수정', '합의한 대응 시간 안에 처리'],
      ['기능 개선', '변화하는 업무에 맞춘 개선 개발'],
      ['운영 지원', '정기 점검과 운영 문의 대응'],
      ['작업 이력 관리', '변경 절차와 처리 이력의 체계적 기록'],
    ],
    promise: '시스템이 안정적으로 운영되고 변화하는 업무를 따라갈 수 있도록 돕습니다.',
  },
  {
    id: 'staffing',
    short: 'IT 전문인력',
    tag: 'IT PROFESSIONALS',
    icon: '👥',
    title: 'IT 전문인력',
    strong: '지원',
    card: '프로젝트와 운영에 필요한 역할·기술·경력에 맞는 전문인력을 연결합니다.',
    lead: '고객의 프로젝트와 운영에 필요한 전문역량을 지원합니다. 역할·기술·경력에 맞는 인력을 연결하고, 투입 전 업무 이해와 협업·인수인계까지 함께 챙깁니다.',
    feats: [
      ['맞춤 인력 연결', '역할·기술·경력 기준의 매칭'],
      ['투입 전 업무 이해', '고객 업무와 환경 사전 파악'],
      ['협업·인수인계 지원', '원활한 합류와 마무리 지원'],
    ],
    promise: '필요한 시점에 업무에 적합한 IT 역량을 연결합니다.',
  },
  {
    id: 'ai',
    short: 'AI 도입 컨설팅',
    tag: 'ENTERPRISE AI CONSULTING',
    icon: '🤖',
    title: '기업 AI 도입',
    strong: '컨설팅',
    card: '업무에서 AI를 적용할 과제를 찾고, 검증부터 현장 정착까지 지원합니다.',
    lead: '고객의 업무에서 AI를 적용할 과제를 찾고 타당성을 검증하며, 현장 적용과 운영 정착을 지원합니다. 범위를 좁힌 시범 과제부터 시작해 검증 결과에 따라 확대합니다.',
    feats: [
      ['활용 과제 발굴', '반복 업무와 데이터 현황 진단'],
      ['타당성 검증', '제한된 범위의 개념검증(PoC)'],
      ['현장 적용', '기존 시스템 연계와 사용자 교육'],
      ['운영 정착', '이용 현황·성과 확인과 지속 개선'],
    ],
    promise: '도구 판매보다 고객의 업무 문제와 데이터 준비 상태, 기대 효과를 먼저 확인합니다.',
    badge: '확장 예정',
    to: '/ai',
  },
]

// 사업을 연결하는 방식
export const serviceFlow = [
  { step: '진단', desc: '고객의 업무와 시스템 현황을 이해합니다.' },
  { step: '실행', desc: '소프트웨어 개발 또는 전문인력 지원으로 구현합니다.' },
  { step: '운영', desc: '유지보수로 안정적인 운영과 개선을 이어갑니다.' },
  { step: 'AI 적용', desc: 'AI가 유효한 업무에는 컨설팅과 검증을 더합니다.' },
]

// 기업 AI 도입 컨설팅
export const aiSteps = [
  { no: 1, name: '진단', acts: ['업무 인터뷰와 반복 업무 분석', '데이터와 시스템 현황 파악'], outputs: ['현황 진단서', '활용 과제 목록'] },
  { no: 2, name: '설계', acts: ['효과와 난이도에 따른 우선순위', '도구·연계 방식과 비용 검토'], outputs: ['도입 로드맵', '시범 과제와 평가 기준'] },
  { no: 3, name: '검증', acts: ['제한된 범위의 개념검증(PoC)', '결과 품질과 사용성 평가'], outputs: ['검증 결과 보고서', '확대 또는 보완 판단'] },
  { no: 4, name: '적용', acts: ['기존 시스템 연계와 사용자 교육', '권한과 검토 절차 설계'], outputs: ['적용 시스템', '사용·운영 가이드'] },
  { no: 5, name: '개선', acts: ['이용 현황과 성과 확인', '비용·품질 모니터링'], outputs: ['성과 보고서', '개선 과제 목록'] },
]

export const aiUseCases = [
  { icon: '🔎', title: '사내 지식 검색', desc: '업무 문서에서 관련 내용을 찾고 출처를 확인하는 검색·답변을 지원합니다.', note: '문서 접근 권한과 답변 근거 확인을 함께 설계합니다.' },
  { icon: '📝', title: '문서 업무 보조', desc: '보고서·제안서 초안 작성과 회의록 요약을 지원합니다.', note: '최종 결과는 담당자가 검토하고 승인하는 흐름을 둡니다.' },
  { icon: '⚙️', title: '반복 업무 지원', desc: '문의 분류와 정보 정리처럼 범위가 명확한 작업부터 검증합니다.', note: '기존 시스템 연계가 필요한 부분은 개발 과제로 구분합니다.' },
]

export const aiMetrics = ['작업 시간', '수정에 드는 시간', '결과 정확도', '실제 사용자 비율', '운영비']

export const aiPrinciples = [
  { title: '데이터 보호', desc: '민감정보와 접근 권한, 외부 서비스로 전송하는 데이터 범위를 확인합니다.' },
  { title: '검토 절차', desc: '오류가 발생할 수 있는 결과에는 사람이 검토하는 절차를 마련합니다.' },
  { title: '투명한 비용', desc: '모델 사용료와 연계 개발·운영 비용을 구분해 설명합니다.' },
  { title: '현장 정착', desc: '업무 안에서 활용할 수 있도록 교육과 인수인계를 포함합니다.' },
]

export const nav = [
  {
    label: 'ABOUT',
    to: '/about',
    children: [
      { label: '인사말', to: '/about#greeting' },
      { label: 'THIT의 의미', to: '/about#meaning' },
      { label: '미션 & 비전', to: '/about#mission' },
      { label: '핵심가치', to: '/about#values' },
      { label: '오시는 길', to: '/about#location' },
    ],
  },
  {
    label: 'BUSINESS',
    to: '/business',
    children: businesses.map((b) => ({ label: `${b.title} ${b.strong}`, to: b.to || `/business#${b.id}` })),
  },
  {
    label: 'AI CONSULTING',
    to: '/ai',
    children: [
      { label: '도입 단계', to: '/ai#process' },
      { label: '활용 과제', to: '/ai#usecases' },
      { label: '효과 측정', to: '/ai#metrics' },
      { label: '도입 원칙', to: '/ai#principles' },
    ],
  },
  {
    label: 'COMMUNITY',
    to: '/notice',
    match: ['/notice', '/qna'],
    children: [
      { label: '공지사항', to: '/notice' },
      { label: '고객문의(Q&A)', to: '/qna' },
    ],
  },
]

export const seedNotices = [
  {
    id: 1,
    title: 'THIT 홈페이지 오픈 안내',
    date: '2026.11.13',
    views: 0,
    body: 'THIT 홈페이지를 오픈했습니다.\n\nTHIT는 소프트웨어 개발과 유지보수·운영 지원, IT 전문인력 지원을 제공하며, 기업 AI 도입 컨설팅으로 영역을 넓혀 갈 예정입니다.\n\n문의는 고객문의 게시판이나 대표 메일로 남겨 주세요.',
  },
]
