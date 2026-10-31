// Pure Vanilla TypeScript/JavaScript for Campaign Website
// Provides instant interactions: Language switch, Ballot Stamp simulator, Village Tabs, Message Launcher

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Toggle
  const langToggleButtons = document.querySelectorAll('.lang-toggle-btn');
  const htmlRoot = document.documentElement;

  function setLanguage(lang: 'te' | 'en') {
    htmlRoot.setAttribute('data-lang', lang);
    htmlRoot.setAttribute('lang', lang);

    // Update buttons text
    langToggleButtons.forEach((btn) => {
      const labelSpan = btn.querySelector('.lang-btn-label');
      if (labelSpan) {
        labelSpan.textContent = lang === 'te' ? 'English' : 'తెలుగు';
      }
    });

    try {
      localStorage.setItem('candidate_site_lang', lang);
    } catch {
      // Ignore if localStorage unavailable
    }
  }

  // Load stored language or default to 'te'
  const savedLang = (localStorage.getItem('candidate_site_lang') as 'te' | 'en') || 'te';
  setLanguage(savedLang);

  langToggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-lang') === 'en' ? 'en' : 'te';
      const next = current === 'te' ? 'en' : 'te';
      setLanguage(next);
    });
  });

  // 2. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });

    if (mobileMenuCloseBtn) {
      mobileMenuCloseBtn.addEventListener('click', () => {
        mobileMenuDrawer.classList.add('hidden');
      });
    }

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenuDrawer.classList.add('hidden');
      });
    });
  }

  // 3. Village Tabs in Commitments Section
  const villageTabs = document.querySelectorAll('.village-tab-btn');
  const villagePanels = document.querySelectorAll('.village-panel');

  villageTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-village-target');

      villageTabs.forEach((t) => t.classList.remove('active', 'bg-blue-900', 'text-white'));
      villageTabs.forEach((t) => t.classList.add('bg-slate-100', 'text-slate-700'));

      tab.classList.remove('bg-slate-100', 'text-slate-700');
      tab.classList.add('active', 'bg-blue-900', 'text-white');

      villagePanels.forEach((panel) => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 4. Interactive Sample Ballot Stamp Simulation
  const stampBox = document.getElementById('ballot-stamp-target');
  const stampGraphic = document.getElementById('ballot-stamp-graphic');
  const stampPrompt = document.getElementById('ballot-stamp-prompt');
  const stampToggleBtn = document.getElementById('ballot-stamp-toggle-btn');
  const stampSuccessNotice = document.getElementById('ballot-stamp-status-msg');

  let isStamped = true;

  function updateStampDisplay() {
    if (stampGraphic && stampPrompt) {
      if (isStamped) {
        stampGraphic.classList.remove('hidden');
        stampPrompt.classList.add('hidden');
      } else {
        stampGraphic.classList.add('hidden');
        stampPrompt.classList.remove('hidden');
      }
    }

    if (stampSuccessNotice) {
      const teMsg = isStamped
        ? 'మీ ఓటు సరిగ్గా సంఖ్య 3 ఫ్యాన్ గుర్తుపై ముద్రించబడింది!'
        : 'పై వరుస 3లో మీ ఓటును పరీక్షించండి (ట్యాప్ చేయండి)';
      const enMsg = isStamped
        ? 'Vote accurately stamped on Serial No. 3 — Ceiling Fan Symbol!'
        : 'Click Row 3 to simulate your ballot stamp!';

      const teSpan = stampSuccessNotice.querySelector('.lang-te');
      const enSpan = stampSuccessNotice.querySelector('.lang-en');
      if (teSpan) teSpan.textContent = teMsg;
      if (enSpan) enSpan.textContent = enMsg;
    }

    if (stampToggleBtn) {
      const teBtn = isStamped ? 'స్టాంప్ రీసెట్ చేయండి' : 'స్టాంప్ వేయండి';
      const enBtn = isStamped ? 'Reset Stamp' : 'Stamp Now';
      const teSpan = stampToggleBtn.querySelector('.lang-te');
      const enSpan = stampToggleBtn.querySelector('.lang-en');
      if (teSpan) teSpan.textContent = teBtn;
      if (enSpan) enSpan.textContent = enBtn;
    }
  }

  if (stampBox) {
    stampBox.addEventListener('click', () => {
      isStamped = !isStamped;
      updateStampDisplay();
    });
  }

  if (stampToggleBtn) {
    stampToggleBtn.addEventListener('click', () => {
      isStamped = !isStamped;
      updateStampDisplay();
    });
  }

  // 5. WhatsApp Campaign Share Button
  const shareButtons = document.querySelectorAll('.share-whatsapp-btn');
  shareButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isTe = htmlRoot.getAttribute('data-lang') === 'te';
      const shareText = isTe
        ? 'కైరుప్పల, పుప్పాల దొడ్డి, చెన్నంపల్లి గ్రామాల ఎంపీటీసీ అభ్యర్థి బురునదొడ్డి రాజమ్మ గారికి మీ అమూల్యమైన ఓటు వేసి గెలిపించండి.\n\nక్రమ సంఖ్య: 3\nఎన్నికల గుర్తు: సీలింగ్ ఫ్యాన్\nసంప్రదించండి: 9700949414\nమరిన్ని వివరాలు: '
        : 'Vote for Burunadoddi Rajamma - YSRCP MPTC Candidate for Kairuppala, Puppala Doddi, and Chennampalli.\n\nBallot No: 3\nSymbol: Ceiling Fan\nContact: 9700949414\nCampaign Website: ';
      
      const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + window.location.href)}`;
      window.open(shareUrl, '_blank');
    });
  });

  // 6. Direct Message Form (WhatsApp & Email - No Data Stored)
  const contactForm = document.getElementById('contact-direct-form') as HTMLFormElement | null;
  const sendEmailBtn = document.getElementById('send-email-btn');

  function getFormValues() {
    const nameInput = document.getElementById('sender-name') as HTMLInputElement | null;
    const villageSelect = document.getElementById('sender-village') as HTMLSelectElement | null;
    const messageInput = document.getElementById('sender-message') as HTMLTextAreaElement | null;

    const name = nameInput ? nameInput.value.trim() : '';
    const village = villageSelect ? villageSelect.value : '';
    const message = messageInput ? messageInput.value.trim() : '';

    return { name, village, message };
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const { name, village, message } = getFormValues();

      if (!message || !village) {
        alert(htmlRoot.getAttribute('data-lang') === 'te' ? 'దయచేసి గ్రామం మరియు సందేశం నమోదు చేయండి' : 'Please select village and enter message');
        return;
      }

      const isTe = htmlRoot.getAttribute('data-lang') === 'te';
      let formattedMsg = '';
      if (name) formattedMsg += `${isTe ? 'పేరు' : 'Name'}: ${name}\n`;
      formattedMsg += `${isTe ? 'గ్రామం' : 'Village'}: ${village}\n\n`;
      formattedMsg += `${isTe ? 'సందేశం' : 'Message'}:\n${message}`;

      const waUrl = `https://wa.me/919700949414?text=${encodeURIComponent(formattedMsg)}`;
      window.open(waUrl, '_blank');
    });
  }

  if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { name, village, message } = getFormValues();
      const isTe = htmlRoot.getAttribute('data-lang') === 'te';

      let formattedMsg = '';
      if (name) formattedMsg += `${isTe ? 'పేరు' : 'Name'}: ${name}\n`;
      if (village) formattedMsg += `${isTe ? 'గ్రామం' : 'Village'}: ${village}\n\n`;
      formattedMsg += `${isTe ? 'సందేశం' : 'Message'}:\n${message}`;

      const subject = encodeURIComponent(
        isTe ? `కైరుప్పల ఎంపీటీసీ సందేశం - ${village || 'గ్రామస్తుడు'}` : `Message for MPTC Campaign - ${village || 'Citizen'}`
      );
      window.location.href = `mailto:info@gkveereshkhyruppalla.online?subject=${subject}&body=${encodeURIComponent(formattedMsg)}`;
    });
  }

  // 7. Back to top button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
