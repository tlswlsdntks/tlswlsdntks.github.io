'use strict';

const i18n = {
  ko: {
    'nav.company': '주식회사 핑거포스트', 'nav.role': '백엔드 개발자',
    'nav.skills': '기술', 'nav.exp': '경력', 'nav.certs': '자격증', 'nav.contact': '연락',
    'hero.q': '버그를 두려워하지<br>않는 개발자,<br>오히려 버그에서<br>배웁니다.',
    'hero.name.ko': '신진우', 'hero.name': '신진우',
    'hcard.label': '주요 기술 스택', 'hcard.more': '더 보기 →',
    'hcard.badge': '재직중', 'hcard.company': '주식회사 핑거포스트',
    'hcard.role': '백엔드 개발자',
    'skills.title': '기술 스택',
    'exp.title': '경력', 'exp.total': '총 3년 10개월', 'exp.now': '현재',
    'exp.c1': '주식회사 핑거포스트', 'exp.r1': '백엔드 개발자',
    'exp.c1b1': 'Java / Spring Boot 기반 백엔드 시스템 개발 및 운영',
    'exp.c1b2': 'REST API 설계 및 운영 자동화',
    'exp.c2': '디투이노베이션', 'exp.r2': '솔루션사업부 대리 · 백엔드 개발자', 'exp.d2': '2년 2개월',
    'exp.c2b1': '솔루션 사업부 백엔드 개발 및 API 고도화',
    'exp.c2b2': '<strong>API 응답 속도 40% 단축</strong> — 성능 개선과 기능 확장 병행',
    'exp.c2b3': '배포 후 장애 원인 분석 및 재발 방지 대책 수립',
    'exp.c3': '맥스테드', 'exp.r3': 'SI개발부 사원 · 백엔드 개발자', 'exp.d3': '1년 2개월',
    'exp.c3b1': 'SI 프로젝트 백엔드 개발 참여', 'exp.c3b2': 'REST API 개발 및 DB 연동',
    'cert.title': '자격증', 'cert.c1': '정보처리기사', 'cert.o1': '한국산업인력공단',
    'cert.c2': 'SQL 개발자 (SQLD)', 'cert.o2': '한국데이터산업진흥원',
    'edu.title': '학력', 'edu.school': '대진대학교', 'edu.major': '토목공학과 · 졸업 · 학점 3.26 / 4.5',
    'contact.title': '연락하기', 'contact.desc': '새로운 기회나 협업 제안은 언제든지 환영합니다.',
    'footer': '© 2026 신진우. Built with HTML, CSS & JS.',
  },
  en: {
    'nav.company': 'Fingerpost Inc.', 'nav.role': 'Backend Developer',
    'nav.skills': 'Skills', 'nav.exp': 'Experience', 'nav.certs': 'Certs', 'nav.contact': 'Contact',
    'hero.q': "I don't fear bugs —<br>I learn from them.",
    'hero.name.ko': 'Jinwoo Shin', 'hero.name': '신진우',
    'hcard.label': 'Tech Stack', 'hcard.more': 'See more →',
    'hcard.badge': 'Employed', 'hcard.company': 'Fingerpost Inc.',
    'hcard.role': 'Backend Developer',
    'skills.title': 'Tech Stack',
    'exp.title': 'Experience', 'exp.total': '3 years 10 months total', 'exp.now': 'Present',
    'exp.c1': 'Fingerpost Inc.', 'exp.r1': 'Backend Developer',
    'exp.c1b1': 'Backend system development & operation with Java / Spring Boot',
    'exp.c1b2': 'REST API design and operational automation',
    'exp.c2': 'D2 Innovation', 'exp.r2': 'Asst. Manager, Solutions · Backend Developer', 'exp.d2': '2 yrs 2 mos',
    'exp.c2b1': 'Backend development and API enhancement for solution products',
    'exp.c2b2': '<strong>Reduced API response time by 40%</strong> while extending features',
    'exp.c2b3': 'Post-deployment incident analysis and prevention measures',
    'exp.c3': 'Maxted', 'exp.r3': 'Junior Dev, SI Dept. · Backend Developer', 'exp.d3': '1 yr 2 mos',
    'exp.c3b1': 'SI project backend development', 'exp.c3b2': 'REST API development and DB integration',
    'cert.title': 'Certifications', 'cert.c1': 'Engineer Information Processing', 'cert.o1': 'HRD Korea',
    'cert.c2': 'SQL Developer (SQLD)', 'cert.o2': 'Korea Data Agency',
    'edu.title': 'Education', 'edu.school': 'Daejin University', 'edu.major': 'Civil Engineering · Graduated · GPA 3.26/4.5',
    'contact.title': 'Get in Touch', 'contact.desc': 'Open to new opportunities and collaboration.',
    'footer': '© 2026 Jinwoo Shin. Built with HTML, CSS & JS.',
  },
};

let lang = 'ko';

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.getElementById('langBtn').textContent = lang === 'ko' ? 'EN' : 'KO';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = i18n[lang][el.getAttribute('data-i18n')];
    if (v !== undefined) el.innerHTML = v;
  });
}

document.getElementById('langBtn').addEventListener('click', () => applyLang(lang === 'ko' ? 'en' : 'ko'));

/* Nav scroll highlight */
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach(s => io.observe(s));

/* Nav shadow on scroll */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,.08)' : '';
}, { passive: true });
