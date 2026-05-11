'use strict';

const i18n = {
  ko: {
    'nav.skills': '기술', 'nav.exp': '경력', 'nav.proj': '프로젝트', 'nav.certs': '자격증', 'nav.contact': '연락',
    'hero.caption': 'Developer',
    'hero.tagline': '코드로 말합니다.',
    'hero.status': '재직중 · 핑거포스트',
    'skills.title': '기술 스택',
    'proj.title': '프로젝트',
    'exp.title': '경력', 'exp.total': '총 4년 이상', 'exp.now': '현재',
    'exp.c0': '주식회사 핑거포스트', 'exp.r0': '서비스개발팀 · 매니저',
    'exp.c0b1': 'Java / Spring Boot 기반 시스템 설계 및 개발',
    'exp.c0b2': 'REST API 설계 및 운영 자동화',
    'exp.c1': '크림소프트', 'exp.r1': '솔루션사업부 · 대리', 'exp.d1': '1년 2개월',
    'exp.c1b1': '공공안전 분야 SI 프로젝트 개발 (Java, Spring Boot)',
    'exp.c1b2': '범죄 위험도 예측 분석 시스템 구현 (PostgreSQL, Geoserver 연동)',
    'exp.c1b3': '자율방범대 관리시스템 개발 (JPA, MySQL)',
    'exp.c2': '디투이노베이션', 'exp.r2': '솔루션사업부 · 대리', 'exp.d2': '1년 2개월',
    'exp.c2b1': '공공안전 솔루션 개발 (총포화약 관리, 경비업 관리시스템 등)',
    'exp.c2b2': '외부 기관 연계 서비스 구현 (네이버, 경찰청 자격증 API 연동)',
    'exp.c2b3': '배포 후 장애 원인 분석 및 재발 방지 체계 수립',
    'exp.c3': '맥스테드', 'exp.r3': 'SI개발부 · 사원', 'exp.d3': '1년 1개월',
    'exp.c3b1': '차세대 사회보장 정보시스템 개발 (Java, eGov, Oracle)',
    'exp.c3b2': 'WebSocket 기반 채팅 및 알림 시스템 구현',
    'exp.c3b3': '실내측위를 위한 융합데이터 세트 개발 (Spring Boot, PostgreSQL)',
    'cert.title': '자격증',
    'cert.c1': '정보처리기사', 'cert.o1': '한국산업인력공단',
    'cert.c2': 'SQL 개발자 (SQLD)', 'cert.o2': '한국데이터산업진흥원',
    'cert.c3': '토목기사', 'cert.o3': '한국산업인력공단',
    'cert.c4': '자동차 운전면허 1종', 'cert.o4': '도로교통공단',
    'edu.title': '학력', 'edu.school': '대진대학교', 'edu.major': '토목공학과 · 졸업 · 학점 3.26 / 4.5',
    'contact.title': '연락하기', 'contact.desc': '새로운 기회나 협업 제안은 언제든지 환영합니다.',
    'footer': '© 2026 신진우. Built with HTML, CSS & JS.',
  },
  en: {
    'nav.skills': 'Skills', 'nav.exp': 'Experience', 'nav.proj': 'Projects', 'nav.certs': 'Certs', 'nav.contact': 'Contact',
    'hero.caption': 'Developer',
    'hero.tagline': 'Code speaks louder.',
    'hero.status': 'Employed · Fingerpost',
    'skills.title': 'Tech Stack',
    'proj.title': 'Projects',
    'exp.title': 'Experience', 'exp.total': '4+ years total', 'exp.now': 'Present',
    'exp.c0': 'Fingerpost Inc.', 'exp.r0': 'Service Dev. Team · Manager',
    'exp.c0b1': 'System design and development with Java / Spring Boot',
    'exp.c0b2': 'REST API design and operational automation',
    'exp.c1': 'Kreamsoft', 'exp.r1': 'Solutions Dept. · Asst. Manager', 'exp.d1': '1 yr 2 mos',
    'exp.c1b1': 'Public safety SI project development (Java, Spring Boot)',
    'exp.c1b2': 'Crime risk prediction analysis system (PostgreSQL, Geoserver integration)',
    'exp.c1b3': 'Volunteer patrol management system (JPA, MySQL)',
    'exp.c2': 'D2 Innovation', 'exp.r2': 'Solutions Dept. · Asst. Manager', 'exp.d2': '1 yr 2 mos',
    'exp.c2b1': 'Public safety solution development (firearms management, security management systems)',
    'exp.c2b2': 'External agency API integration (Naver, National Police Agency certificate API)',
    'exp.c2b3': 'Post-deployment incident analysis and prevention measures',
    'exp.c3': 'Maxted', 'exp.r3': 'SI Dept. · Staff', 'exp.d3': '1 yr 1 mo',
    'exp.c3b1': 'Next-gen social security information system development (Java, eGov, Oracle)',
    'exp.c3b2': 'WebSocket-based chat and notification system',
    'exp.c3b3': 'Indoor positioning fusion dataset development (Spring Boot, PostgreSQL)',
    'cert.title': 'Certifications',
    'cert.c1': 'Engineer Information Processing', 'cert.o1': 'HRD Korea',
    'cert.c2': 'SQL Developer (SQLD)', 'cert.o2': 'Korea Data Agency',
    'cert.c3': 'Civil Engineer', 'cert.o3': 'HRD Korea',
    'cert.c4': "Driver's License Class 1", 'cert.o4': 'Road Traffic Authority',
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

/* ── Terminal typing animation ─────────────────────────── */
const terminalSequences = [
  {
    cmd: 'git log --oneline -3',
    outputs: [
      'a7f3c1 feat: JWT auth middleware',
      '9b2d4f fix: DB connection pool',
      '3e8a6c refactor: API response',
    ],
  },
  {
    cmd: 'docker ps',
    outputs: [
      'spring-app   Up 2 days',
      'mysql        Up 2 days',
      'nginx        Up 2 days',
    ],
  },
  {
    cmd: 'curl /api/health',
    outputs: ['{"status":"UP"}'],
  },
];

function initTerminal() {
  const body = document.getElementById('terminalBody');
  if (!body) return;

  let seqIndex = 0;
  let charIndex = 0;
  let phase = 'typing'; // 'typing' | 'output' | 'gap'
  let currentLine = null;
  let outputIndex = 0;
  let timeoutId = null;

  function appendPromptLine() {
    const line = document.createElement('span');
    line.className = 't-line';

    const prompt = document.createElement('span');
    prompt.className = 't-prompt';
    prompt.textContent = '$ ';

    const cmdSpan = document.createElement('span');
    cmdSpan.className = 't-cmd';

    const cursor = document.createElement('span');
    cursor.className = 't-cursor';

    line.appendChild(prompt);
    line.appendChild(cmdSpan);
    line.appendChild(cursor);
    body.appendChild(line);
    currentLine = { line, cmdSpan, cursor };
    return currentLine;
  }

  function appendOutputLine(text) {
    const line = document.createElement('span');
    line.className = 't-line t-out';
    line.textContent = text;
    body.appendChild(line);
  }

  function appendBlankLine() {
    const line = document.createElement('span');
    line.className = 't-line';
    line.innerHTML = '&nbsp;';
    body.appendChild(line);
  }

  function typeChar() {
    const seq = terminalSequences[seqIndex];
    if (charIndex < seq.cmd.length) {
      currentLine.cmdSpan.textContent += seq.cmd[charIndex];
      charIndex++;
      timeoutId = setTimeout(typeChar, 50);
    } else {
      // done typing cmd — remove cursor, start outputs
      currentLine.cursor.remove();
      charIndex = 0;
      phase = 'output';
      outputIndex = 0;
      timeoutId = setTimeout(showOutputs, 120);
    }
  }

  function showOutputs() {
    const seq = terminalSequences[seqIndex];
    if (outputIndex < seq.outputs.length) {
      appendOutputLine(seq.outputs[outputIndex]);
      outputIndex++;
      timeoutId = setTimeout(showOutputs, 80);
    } else {
      // all outputs shown — gap then next cmd
      appendBlankLine();
      seqIndex++;
      if (seqIndex < terminalSequences.length) {
        timeoutId = setTimeout(startNext, 500);
      } else {
        // full cycle done — wait 3s then restart
        timeoutId = setTimeout(restart, 3000);
      }
    }
  }

  function startNext() {
    appendPromptLine();
    charIndex = 0;
    phase = 'typing';
    timeoutId = setTimeout(typeChar, 50);
  }

  function restart() {
    body.innerHTML = '';
    seqIndex = 0;
    charIndex = 0;
    phase = 'typing';
    appendPromptLine();
    timeoutId = setTimeout(typeChar, 50);
  }

  // Start
  appendPromptLine();
  timeoutId = setTimeout(typeChar, 600);
}

initTerminal();

/* ── Hero canvas — laptop silhouette point-cloud ────── */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let nodes = [], pulses = [], LINK = 40, frame = 0;

  /* draw laptop shape onto offscreen canvas, return it */
  function buildMask(w, h) {
    const off = document.createElement('canvas');
    off.width = w; off.height = h;
    const c = off.getContext('2d');
    c.fillStyle = '#fff';

    const sx = w * 0.18, sy = h * 0.04, sw = w * 0.64, sh = h * 0.46;
    const B = 7; // bezel thickness

    /* screen bezel */
    c.fillRect(sx,       sy,       sw,  B);
    c.fillRect(sx,       sy+sh-B,  sw,  B);
    c.fillRect(sx,       sy,       B,   sh);
    c.fillRect(sx+sw-B,  sy,       B,   sh);

    /* scanlines inside screen */
    const gap = h * 0.030;
    for (let ly = sy + B + gap; ly < sy + sh - B; ly += gap)
      c.fillRect(sx + B, ly, sw - B * 2, 1.4);

    /* hinge */
    c.fillRect(w * 0.37, sy + sh, w * 0.26, h * 0.036);

    /* keyboard base */
    const kx = w * 0.10, ky = sy + sh + h * 0.036;
    const kw = w * 0.80, kh = h * 0.235;
    const KB = 5;
    c.fillRect(kx,       ky,       kw,  KB);
    c.fillRect(kx,       ky+kh-KB, kw,  KB);
    c.fillRect(kx,       ky,       KB,  kh);
    c.fillRect(kx+kw-KB, ky,       KB,  kh);

    /* key grid: 3 rows × 14 cols */
    const cols = 14, rows = 3;
    const kaX = kx + KB + kw * 0.02;
    const kaW = kw - KB * 2 - kw * 0.04;
    const kaY = ky + kh * 0.09;
    const kW  = kaW / cols;
    const kH  = kh * 0.145;
    const kRG = kH * 1.72;
    for (let r = 0; r < rows; r++)
      for (let col = 0; col < cols; col++)
        c.fillRect(kaX + col * kW + kW * 0.07, kaY + r * kRG, kW * 0.82, kH);

    /* trackpad */
    c.strokeStyle = '#fff'; c.lineWidth = 2;
    c.strokeRect(kx + kw * 0.35, ky + kh * 0.68, kw * 0.30, kh * 0.24);

    return off;
  }

  /* sample filled pixels → node positions */
  function sampleMask(off, step) {
    const d = off.getContext('2d').getImageData(0, 0, off.width, off.height).data;
    const pts = [];
    for (let y = 0; y < off.height; y += step)
      for (let x = 0; x < off.width; x += step)
        if (d[(y * off.width + x) * 4 + 3] > 80)
          pts.push({ x: x + (Math.random()-.5)*step*.4,
                     y: y + (Math.random()-.5)*step*.4 });
    return pts;
  }

  function init() {
    const w = canvas.width, h = canvas.height;
    const step = Math.max(9, Math.floor(w / 115));
    LINK = step * 3.4;
    const pts = sampleMask(buildMask(w, h), step);
    nodes = pts.map(p => ({
      x: p.x, y: p.y, ox: p.x, oy: p.y,
      vx: (Math.random()-.5) * .12,
      vy: (Math.random()-.5) * .12,
      r:  Math.random() * 1.3 + .55,
      hub: Math.random() < .038,
    }));
    pulses = [];
  }

  function spawnPulse() {
    if (!nodes.length) return;
    const a = nodes[Math.random() * nodes.length | 0];
    const b = nodes[Math.random() * nodes.length | 0];
    if (a === b) return;
    const dx = a.x - b.x, dy = a.y - b.y;
    if (dx*dx + dy*dy < (LINK*1.6)**2)
      pulses.push({ a, b, p: 0,
        sp: .009 + Math.random()*.009,
        color: Math.random() < .4 ? '74,222,128' : '231,197,154' });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;
    const LS = LINK * LINK;

    /* spring drift */
    nodes.forEach(n => {
      n.vx += (n.ox - n.x) * .00022; n.vy += (n.oy - n.y) * .00022;
      n.vx *= .993; n.vy *= .993;
      n.x += n.vx;  n.y += n.vy;
    });

    /* edges */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i+1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x-b.x, dy = a.y-b.y, d2 = dx*dx+dy*dy;
        if (d2 > LS) continue;
        const boost = (a.hub||b.hub) ? 2.4 : 1;
        const α = Math.min((1 - Math.sqrt(d2)/LINK) * .30 * boost, .55);
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle = `rgba(255,255,255,${α})`;
        ctx.lineWidth   = .5; ctx.stroke();
      }
    }

    /* nodes */
    nodes.forEach(n => {
      if (n.hub) {
        const g = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,11);
        g.addColorStop(0,'rgba(255,255,255,.28)');
        g.addColorStop(1,'rgba(255,255,255,0)');
        ctx.beginPath(); ctx.arc(n.x,n.y,11,0,Math.PI*2);
        ctx.fillStyle=g; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle = n.hub ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.68)';
      ctx.fill();
    });

    /* pulses */
    pulses = pulses.filter(p => {
      p.p += p.sp; if (p.p >= 1) return false;
      const x = p.a.x+(p.b.x-p.a.x)*p.p, y = p.a.y+(p.b.y-p.a.y)*p.p;
      const g = ctx.createRadialGradient(x,y,0,x,y,9);
      g.addColorStop(0,`rgba(${p.color},.72)`);
      g.addColorStop(1,`rgba(${p.color},0)`);
      ctx.beginPath(); ctx.arc(x,y,9,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
      ctx.beginPath(); ctx.arc(x,y,2.2,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.color},1)`; ctx.fill();
      return true;
    });

    if (frame % 7 === 0) spawnPulse();
    requestAnimationFrame(draw);
  }

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    init();
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

initHeroCanvas();

/* ── Custom cursor ───────────────────────────────────────── */
const cursorEl = document.getElementById('cursor');
if (cursorEl && window.matchMedia('(pointer: fine)').matches) {
  document.body.style.cursor = 'none';
  document.addEventListener('mousemove', e => {
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button').forEach(el => {
    el.style.cursor = 'none';
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ── Scroll reveal ──────────────────────────────────────── */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    revealIO.unobserve(e.target);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

/* ── Nav scroll highlight ───────────────────────────────── */
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach(s => io.observe(s));

/* ── Nav shadow on scroll ───────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,.08)' : '';
}, { passive: true });
