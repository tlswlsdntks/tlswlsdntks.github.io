'use strict';

// ── i18n 데이터 ────────────────────────────────────
const i18n = {
  ko: {
    'nav.about':      '소개',
    'nav.skills':     '기술',
    'nav.experience': '경력',
    'nav.certs':      '자격증',
    'nav.contact':    '연락',

    'hero.hi':    '안녕하세요,',
    'hero.name':  '신진우',
    'hero.role':  '백엔드 개발자 · 총 3년 10개월',
    'hero.quote': '버그를 두려워하지 않는 개발자, 오히려 버그에서 배웁니다.',
    'hero.desc':  'Java · Spring 기반 백엔드 개발을 중심으로 REST API 설계부터 운영 자동화까지.<br>문제를 회피하는 대신 원인을 파고드는 습관으로 팀의 신뢰를 쌓아왔습니다.',
    'hero.cta':   '연락하기',

    'about.title': '자기소개',
    'about.p1': '3년 전, 첫 배포에서 서버가 다운됐을 때 저는 그저 당황하는 초보였습니다. 하지만 그 순간부터 문제를 회피하는 대신 원인을 파고드는 습관을 들였습니다. 덕분에 지금은 장애 로그를 보면 머릿속에서 원인과 해결책이 동시에 그려집니다.',
    'about.p2': 'Java, Spring 기반으로 REST API 설계부터 운영 자동화까지 경험했고, 배포 후 발생한 수십 건의 장애를 원인 분석과 재발 방지 대책까지 책임졌습니다. 특히 API 응답 속도를 40% 단축한 프로젝트는 제게 "믿고 맡길 수 있는 개발자"라는 평판을 가져다주었습니다.',
    'about.p3': '강의와 깃허브 기록, 코드 리뷰 피드백을 통해 실력을 키우며, \'안 되는 이유\'보다 \'되게 하는 방법\'을 먼저 찾습니다.',

    'skills.title': '기술 스택',

    'exp.title': '경력',
    'exp.total': '총 3년 10개월',
    'exp.now':   '현재',
    'exp.c1': '주식회사 핑거포스트',
    'exp.r1': '백엔드 개발자',
    'exp.c1b1': 'Java / Spring Boot 기반 백엔드 시스템 개발 및 운영',
    'exp.c1b2': 'REST API 설계 및 운영 자동화',
    'exp.c2': '디투이노베이션',
    'exp.r2': '솔루션사업부 대리 · 백엔드 개발자',
    'exp.d2': '2년 2개월',
    'exp.c2b1': '솔루션 사업부 백엔드 개발 및 API 고도화',
    'exp.c2b2': '<strong>API 응답 속도 40% 단축</strong> — 성능 개선과 기능 확장 병행',
    'exp.c2b3': '배포 후 장애 원인 분석 및 재발 방지 대책 수립',
    'exp.c3': '맥스테드',
    'exp.r3': 'SI개발부 사원 · 백엔드 개발자',
    'exp.d3': '1년 2개월',
    'exp.c3b1': 'SI 프로젝트 백엔드 개발 참여',
    'exp.c3b2': 'REST API 개발 및 DB 연동',

    'cert.title': '자격증',
    'cert.c1': '정보처리기사',
    'cert.o1': '한국산업인력공단',
    'cert.c2': 'SQL 개발자 (SQLD)',
    'cert.o2': '한국데이터산업진흥원',

    'edu.title':  '학력',
    'edu.school': '대진대학교',
    'edu.major':  '토목공학과 · 졸업 · 학점 3.26 / 4.5',

    'contact.title': '연락하기',
    'contact.desc':  '새로운 기회나 협업 제안은 언제든지 환영합니다.',

    'footer': '© 2026 신진우. Built with HTML, CSS & JS.',
  },

  en: {
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.experience': 'Experience',
    'nav.certs':      'Certs',
    'nav.contact':    'Contact',

    'hero.hi':    "Hi, I'm",
    'hero.name':  'Jinwoo Shin',
    'hero.role':  'Backend Developer · 3 yrs 10 mos',
    'hero.quote': "I don't fear bugs — I learn from them.",
    'hero.desc':  'Experienced in backend development with Java & Spring, from REST API design to operational automation.<br>I build trust by digging into root causes rather than working around them.',
    'hero.cta':   'Get in Touch',

    'about.title': 'About Me',
    'about.p1': "Three years ago, I was a panicked junior developer when our server went down on the first deployment. But that moment taught me to dig into root causes instead of working around them. Now, when I see an error log, I can map out the cause and solution simultaneously.",
    'about.p2': 'I\'ve worked across the full backend lifecycle — REST API design, operational automation, and post-deployment incident analysis with root cause and prevention plans. A project where I cut API response time by 40% while adding new features earned me the reputation of "someone you can trust with the job."',
    'about.p3': "I grow through courses, GitHub streaks, and code review feedback. I look for ways to make things work before listing reasons they won't.",

    'skills.title': 'Tech Stack',

    'exp.title': 'Experience',
    'exp.total': '3 years 10 months total',
    'exp.now':   'Present',
    'exp.c1': 'Fingerpost Inc.',
    'exp.r1': 'Backend Developer',
    'exp.c1b1': 'Backend system development & operation with Java / Spring Boot',
    'exp.c1b2': 'REST API design and operational automation',
    'exp.c2': 'D2 Innovation',
    'exp.r2': 'Assistant Manager, Solutions · Backend Developer',
    'exp.d2': '2 yrs 2 mos',
    'exp.c2b1': 'Backend development and API enhancement for solution products',
    'exp.c2b2': '<strong>Reduced API response time by 40%</strong> while extending features in parallel',
    'exp.c2b3': 'Post-deployment incident analysis and prevention measures',
    'exp.c3': 'Maxted',
    'exp.r3': 'Junior Developer, SI Dept. · Backend Developer',
    'exp.d3': '1 yr 2 mos',
    'exp.c3b1': 'Participated in SI project backend development',
    'exp.c3b2': 'REST API development and database integration',

    'cert.title': 'Certifications',
    'cert.c1': 'Engineer Information Processing',
    'cert.o1': 'Human Resources Development Service of Korea',
    'cert.c2': 'SQL Developer (SQLD)',
    'cert.o2': 'Korea Data Agency',

    'edu.title':  'Education',
    'edu.school': 'Daejin University',
    'edu.major':  'Civil Engineering · Graduated · GPA 3.26 / 4.5',

    'contact.title': 'Get in Touch',
    'contact.desc':  'Open to new opportunities and collaboration.',

    'footer': '© 2026 Jinwoo Shin. Built with HTML, CSS & JS.',
  },
};

// ── 언어 전환 ────────────────────────────────────
let lang = 'ko';

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.getElementById('langBtn').textContent = lang === 'ko' ? 'EN' : 'KO';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

document.getElementById('langBtn').addEventListener('click', () => {
  applyLang(lang === 'ko' ? 'en' : 'ko');
});

// ── 스크롤 nav 하이라이트 ────────────────────────
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`);
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('section[id]').forEach(s => io.observe(s));
