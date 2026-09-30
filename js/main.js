/**
 * CODE NEXT - Core JavaScript Architecture
 * Interactive Cyber Experience, Advanced Animations, 3D Tilt,
 * Scroll Reveals, Live Terminal Simulator, and Bilingual Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Data & Translation System
  const translations = {
    ar: {
      navHome: "الرئيسية",
      navTeam: "الفريق البرمجي",
      navArsenal: "الترسانة التقنية",
      navProjects: "المشاريع",
      navValues: "معاييرنا",
      navContact: "تواصل معنا",
      heroBadge: "نخبة مهندسي البرمجيات والأنظمة المتقدمة",
      heroTitle1: "نبني مستقبل التكنولوجيا بـ",
      heroTitle2: "أعلى دقة برمجية",
      heroDesc: "فريق Code Next هو تحالف تقني متكامل يضم نخبة من مهندسي البرمجيات ذوي الخبرات العميقة في معمارية النظم المعقدة، الذكاء الاصطناعي، الأمن السيبراني، والتطبيقات فائقة السرعة.",
      btnExploreTeam: "استكشف الفريق البرمجي",
      btnConsult: "احجز استشارة تقنية",
      stat1Label: "مشروع منجز وموثوق",
      stat2Label: "سنوات خبرة متراكمة",
      stat3Label: "نسبة استقرار الأنظمة",
      stat4Label: "أسطر برمجية نظيفة",
      logoStatusText: "الأنظمة البرمجية قيد التشغيل والجاهزية",
      teamSectionTag: "أعضاء النخبة",
      teamSectionTitle: "فريق Code Next البرمجي",
      teamSectionDesc: "كل عضو في فريقنا يمتلك تخصصاً نادراً وخبرة عملية عميقة في بناء الأنظمة المعقدة وإدارة البنى التحتية المتطورة.",
      filterAll: "الكل",
      filterFrontend: "Full Stack & Front End",
      filterBackend: "هندسة النظم والباك إند",
      filterAI: "الذكاء الاصطناعي",
      filterSec: "الأمن السيبراني",
      filterMobile: "تطبيقات الموبايل",
      arsenalSectionTag: "التقنيات المتقنة",
      arsenalSectionTitle: "ترسانتنا التكنولوجية",
      arsenalSectionDesc: "نعتمد أحدث التقنيات وأكثرها أماناً وأعلى قدرة على التوسع لبناء أنظمة برمجية لا تعرف التوقف.",
      projectsSectionTag: "سجل الإنجازات",
      projectsSectionTitle: "حلول وهندسة متطورة",
      projectsSectionDesc: "نماذج من الأنظمة المعمارية التي طورها فريقنا بأعلى درجات الكفاءة.",
      valuesSectionTag: "فلسفة الكود",
      valuesSectionTitle: "مبادئنا الهندسية",
      valuesSectionDesc: "لا نكتب أسطر برمجية عشوائية؛ بل نصمم حلولاً معمارية متينة تدوم لسنوات.",
      contactSectionTag: "بدء التعاون",
      contactSectionTitle: "تواصل مع الفريق البرمجي",
      contactSectionDesc: "هل لديك فكرة أو منصة تحتاج لبناء فائق التطور؟ فريق Code Next مستعد لتحويل التحدي إلى واقع برمجي.",
      contactFormTitle: "إرسال استفسار أو مشروع",
      formNameLabel: "الاسم أو الجهة",
      formEmailLabel: "البريد الإلكتروني",
      formTypeLabel: "نوع المشروع البرمجي",
      formMsgLabel: "تفاصيل المتطلبات التقنية",
      btnSubmit: "إرسال إلى المهندسين",
      footerDesc: "فريق برمجي رائد متخصص في معمارية النظم، الذكاء الاصطناعي، والحلول الرقمية فائقة الأداء.",
      footerQuickLinks: "روابط سريعة",
      footerServices: "التخصصات",
      footerConnect: "قنوات التواصل",
      rightsText: "جميع الحقوق محفوظة لفريق Code Next © 2026",
      statusLive: "جميع الأنظمة تعمل بكفاءة قصوى"
    },
    en: {
      navHome: "Home",
      navTeam: "Engineering Team",
      navArsenal: "Tech Stack",
      navProjects: "Projects",
      navValues: "Standards",
      navContact: "Contact",
      heroBadge: "Elite Software Engineers & System Architects",
      heroTitle1: "Forging the Future with",
      heroTitle2: "Extreme Code Precision",
      heroDesc: "Code Next is a specialized syndicate of software engineers boasting deep proficiencies in mission-critical system architecture, AI/ML intelligence, cyber security, and high-throughput systems.",
      btnExploreTeam: "Explore The Team",
      btnConsult: "Request Tech Consultation",
      stat1Label: "Deployed Systems",
      stat2Label: "Years Combined Exp",
      stat3Label: "System Uptime Rate",
      stat4Label: "Clean Codebase Lines",
      logoStatusText: "Core Systems Active & Fully Operational",
      teamSectionTag: "Elite Personnel",
      teamSectionTitle: "The Code Next Engineering Core",
      teamSectionDesc: "Each engineer holds specialized mastery and enterprise field experience designing resilient, high-load software ecosystems.",
      filterAll: "All Members",
      filterFrontend: "Full Stack & Front End",
      filterBackend: "Backend & Systems",
      filterAI: "AI & Neural Systems",
      filterSec: "Cyber Security",
      filterMobile: "Mobile Solutions",
      arsenalSectionTag: "Battle-Tested Tools",
      arsenalSectionTitle: "Our Technology Arsenal",
      arsenalSectionDesc: "We leverage state-of-the-art, secure, and hyper-scalable programming ecosystems engineered for continuous zero-downtime execution.",
      projectsSectionTag: "Track Record",
      projectsSectionTitle: "Architectural Showcases",
      projectsSectionDesc: "A glance at production-grade systems engineered with rigorous reliability standards.",
      valuesSectionTag: "Code Philosophy",
      valuesSectionTitle: "Our Engineering Creed",
      valuesSectionDesc: "We don't merely produce code; we construct durable digital infrastructure built to endure.",
      contactSectionTag: "Initiate Collaboration",
      contactSectionTitle: "Engage With The Team",
      contactSectionDesc: "Got a high-stakes software project or looking for architectural mastery? The Code Next core is ready.",
      contactFormTitle: "Submit Project Specification",
      formNameLabel: "Name / Organization",
      formEmailLabel: "Email Address",
      formTypeLabel: "System Domain",
      formMsgLabel: "Project Brief & Architecture Scope",
      btnSubmit: "Transmit To Engineers",
      footerDesc: "Pioneering software engineering collective specialized in systems architecture, AI solutions, and high-performance digital platforms.",
      footerQuickLinks: "Navigation",
      footerServices: "Specializations",
      footerConnect: "Connect",
      rightsText: "All Rights Reserved to Code Next Team © 2026",
      statusLive: "All Systems Operational 100%"
    }
  };

  let currentLang = 'ar';

  // 2. Team Members Data
  const teamMembers = [
    {
      id: "DEV-01",
      name: { ar: "Ebraam Kamal", en: "Ebraam Kamal" },
      role: { ar: "Full Stack Developer , Front End", en: "Full Stack Developer , Front End" },
      category: "frontend",
      exp: "Full Stack",
      level: "FULL STACK DEV",
      image: "assets/ebraam.jpg",
      iconType: "terminal",
      portfolioUrl: "https://ebraamkportofolio.vercel.app/",
      bio: {
        ar: "مطور برمجيات Full Stack و Front End متميز في بناء وتطوير منصات وتطبيقات الويب الحديثة، بتجربة مستخدم تفاعلية متقنة وأداء برمجي فائق السرعة.",
        en: "Full Stack & Front End Developer specialized in crafting dynamic, resilient, and responsive web applications with cutting-edge architectures and fluid user experiences."
      },
      skills: ["Full Stack Developer", "Front End", "JavaScript", "React", "Next.js", "Node.js", "Tailwind / CSS3", "Web Applications"],
      dossier: {
        achievements: {
          ar: [
            "تطوير منصات وتطبيقات ويب متكاملة Full Stack و Front End بأعلى معايير السرعة والتجاوب.",
            "إتقان بناء واجهات مستخدم سلسة وعصرية مع معمارية برمجية متماسكة وتجاوب كامل مع مختلف الشاشات.",
            "بناء وإطلاق Portfolio تقني متقدم يستعرض أحدث المشاريع البرمجية التفاعلية."
          ],
          en: [
            "Engineered end-to-end full stack web platforms with modern reactive frontend frameworks.",
            "Demonstrated mastery in modern UI/UX design architecture, responsiveness, and performance optimization.",
            "Crafted and deployed an interactive personal portfolio showcasing cutting-edge solutions."
          ]
        },
        philosophy: {
          ar: "البرمجة تجمع بين الشغف الهندسي بالـ Full Stack والإبداع الجمالي في الـ Front End لتقديم تجارب رقمية ملهمة.",
          en: "Coding is where full-stack engineering logic harmonizes with frontend visual artistry to build inspiring digital experiences."
        }
      }
  ];


  // SVG Icon mapping for tech avatars
  function getAvatarSvg(type) {
    switch (type) {
      case 'chip':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path>
        </svg>`;
      case 'brain':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 .77.2 1.5.54 2.14A5.5 5.5 0 0 0 4 14a5.5 5.5 0 0 0 5 5.48V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.52A5.5 5.5 0 0 0 20 14a5.5 5.5 0 0 0-4.04-5.36c.34-.64.54-1.37.54-2.14A4.5 4.5 0 0 0 12 2z"></path>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>`;
      case 'cloud':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          <polyline points="12 12 12 16 16 16"></polyline>
        </svg>`;
      case 'shield':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>`;
      case 'mobile':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
          <line x1="9" y1="5" x2="15" y2="5"></line>
        </svg>`;
      case 'terminal':
      default:
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>`;
    }
  }

  // 3. Team Grid initialization (audio removed)

  // 4. Render Team Grid
  const teamGrid = document.getElementById('team-grid');
  function renderTeam() {
    if (!teamGrid) return;
    applyTiltToCards();
  }

  // 6. Developer Tech Dossier Modal
  const modalOverlay = document.getElementById('dossier-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openMemberModal(memberId) {
    const member = teamMembers.find(m => m.id === memberId);
    if (!member || !modalOverlay) return;

    document.getElementById('modal-name').textContent = member.name[currentLang];
    document.getElementById('modal-role').textContent = member.role[currentLang];
    document.getElementById('modal-level').textContent = `${member.id} // ${member.level}`;
    
    const avatarSlot = document.getElementById('modal-avatar-slot');
    if (member.image) {
      avatarSlot.classList.add('has-photo');
      avatarSlot.innerHTML = `<img src="${member.image}" alt="${member.name[currentLang]}" class="modal-photo-img">`;
    } else {
      avatarSlot.classList.remove('has-photo');
      avatarSlot.innerHTML = getAvatarSvg(member.iconType);
    }

    const portfolioSlot = document.getElementById('modal-portfolio-slot');
    if (portfolioSlot) {
      if (member.portfolioUrl) {
        portfolioSlot.innerHTML = `
          <a href="${member.portfolioUrl}" target="_blank" rel="noopener noreferrer" class="btn-portfolio">
            <span>Veiw Portfolio</span>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        `;
      } else {
        portfolioSlot.innerHTML = '';
      }
    }

    const achievementsList = document.getElementById('modal-achievements-list');
    achievementsList.innerHTML = member.dossier.achievements[currentLang].map(item => `
      <li class="modal-project-item">
        <strong>${currentLang === 'ar' ? 'إنجاز هندسي' : 'Architectural Milestone'}</strong>
        ${item}
      </li>
    `).join('');

    document.getElementById('modal-philosophy').textContent = `"${member.dossier.philosophy[currentLang]}"`;

    const modalSkillsList = document.getElementById('modal-skills-badges');
    modalSkillsList.innerHTML = member.skills.map(s => `<span class="tech-tag" style="border-color: var(--primary); color: var(--primary);">${s}</span>`).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Open Dossier Modal on button or card click
  document.addEventListener('click', (e) => {
    const profileBtn = e.target.closest('.btn-view-profile');
    if (profileBtn) {
      e.preventDefault();
      e.stopPropagation();
      openMemberModal(profileBtn.dataset.id || 'DEV-01');
      return;
    }
    const memberCard = e.target.closest('.member-card');
    if (memberCard && !e.target.closest('a')) {
      openMemberModal(memberCard.dataset.id || 'DEV-01');
    }
  });



  // 8. Contact Form Submission & Toast
  const contactForm = document.getElementById('contact-form');
  const toastMsg = document.getElementById('toast-msg');

  function showToast(text) {
    if (!toastMsg) return;
    toastMsg.textContent = text;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const successMessage = currentLang === 'ar' 
        ? `تم استلام طلبك بنجاح يا ${name}! سيتواصل معك أحد مهندسي Code Next خلال وقت وجيز.`
        : `Request registered, ${name}! A Code Next engineer will reply within hours.`;
      
      showToast(successMessage);
      contactForm.reset();
    });
  }

  // 9. Bilingual Switcher (Arabic <-> English)
  const langToggleBtn = document.getElementById('lang-toggle');

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    renderTeam();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(newLang);
    });
  }

  // 10. Navbar Scroll & Mobile Menu Toggle
  const navbar = document.querySelector('.navbar-wrapper');
  const mobileToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 11. Cyber Canvas Background - Connected Node Constellation
  const canvas = document.getElementById('cyber-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 24), 55);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1.2
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCyberGrid() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.strokeStyle = `rgba(0, 255, 102, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        const mdx = particles[i].x - mouseX;
        const mdy = particles[i].y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          const mAlpha = (1 - mdist / 140) * 0.35;
          ctx.strokeStyle = `rgba(0, 255, 102, ${mAlpha})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = 'rgba(0, 255, 102, 0.7)';
        ctx.shadowColor = '#00ff66';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(animateCyberGrid);
    }
    animateCyberGrid();
  }

  // 12. 3D Tilt & Holographic Reflection Effect
  function applyTiltToCards() {
    const cards = document.querySelectorAll('.member-card, .logo-display-card, .project-card, .arsenal-category-card, .value-card');
    cards.forEach(card => {
      if (card.dataset.tiltInit) return;
      card.dataset.tiltInit = 'true';
      card.classList.add('tilt-card');

      const glare = document.createElement('div');
      glare.className = 'glare-overlay';
      card.appendChild(glare);

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

        glare.style.opacity = '0.75';
        glare.style.background = `radial-gradient(circle at ${(x / rect.width * 100).toFixed(1)}% ${(y / rect.height * 100).toFixed(1)}%, rgba(0, 255, 102, 0.22) 0%, transparent 60%)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        glare.style.opacity = '0';
      });
    });
  }

  // 13. Dynamic Animated Numbers Counter
  function initStatCounters() {
    const statElements = document.querySelectorAll('.stat-quick-num');
    const statsData = [
      { target: 50, prefix: '+', suffix: '' },
      { target: 8, prefix: '+', suffix: '' },
      { target: 99.98, prefix: '', suffix: '%', decimals: 2 },
      { target: 1.2, prefix: '+', suffix: 'M', decimals: 1 }
    ];

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statElements.forEach((el, idx) => {
            const data = statsData[idx] || { target: 100, prefix: '', suffix: '' };
            const duration = 1800;
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = (data.target * easeProgress).toFixed(data.decimals || 0);

              el.textContent = `${data.prefix}${currentVal}${data.suffix}`;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                el.textContent = `${data.prefix}${data.target}${data.suffix}`;
              }
            }
            requestAnimationFrame(updateCounter);
          });
        }
      });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.hero-stats-quick');
    if (statsSection) observer.observe(statsSection);
  }

  // 14. Scroll Reveal Engine
  function initScrollReveal() {
    const revealTargets = document.querySelectorAll('section, .section-header, .project-card, .arsenal-category-card, .value-card, .contact-grid');
    revealTargets.forEach((el, index) => {
      el.classList.add('reveal');
      if (index % 3 === 1) el.classList.add('reveal-delay-1');
      if (index % 3 === 2) el.classList.add('reveal-delay-2');
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });

    revealTargets.forEach(el => observer.observe(el));
  }

  // 15. Cyber Cursor Spotlight Follower
  function initCursorSpotlight() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const glow = document.createElement('div');
    glow.className = 'cyber-cursor-glow';
    document.body.appendChild(glow);

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function renderGlow() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      glow.style.transform = `translate3d(${currentX - 160}px, ${currentY - 160}px, 0)`;
      requestAnimationFrame(renderGlow);
    }
    renderGlow();
  }

  // 16. Text Matrix Scramble Decryption Effect
  function scrambleText(element, finalText, duration = 800) {
    const chars = '01#@$%&*<>~/[]+=';
    const startTime = performance.now();
    const length = finalText.length;

    function frame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const solvedCount = Math.floor(progress * length);

      let output = '';
      for (let i = 0; i < length; i++) {
        if (i < solvedCount) {
          output += finalText[i];
        } else if (finalText[i] === ' ') {
          output += ' ';
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      element.textContent = output;

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        element.textContent = finalText;
      }
    }
    requestAnimationFrame(frame);
  }

  const heroGlowTitle = document.querySelector('.hero-title .glow-text');
  if (heroGlowTitle) {
    const originalText = heroGlowTitle.textContent;
    setTimeout(() => {
      scrambleText(heroGlowTitle, originalText, 1200);
    }, 400);
  }

  // Initial runs
  renderTeam('all');
  applyTiltToCards();
  initStatCounters();
  initScrollReveal();
  initCursorSpotlight();
});
