/* SEATOP AI — static website interaction layer */
const SEATOP_CONFIG = {
  email: "hello@seatop.ai",       // Replace with your real receiving email
  whatsapp: "60000000000"         // Replace with country code + number, no + sign
};

// Active nav state
const currentFile = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentFile || (currentFile === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Mobile navigation
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

document.querySelectorAll('.nav-drop-btn').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('.nav-dropdown')?.classList.toggle('open'));
});

// Subtle 3D tilt for hero and cards
const tiltTargets = document.querySelectorAll('[data-tilt]');
tiltTargets.forEach(el => {
  const strength = Number(el.dataset.tiltStrength || 5);
  el.addEventListener('mousemove', event => {
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--ry', `${x * strength}deg`);
    el.style.setProperty('--rx', `${-y * strength}deg`);
  });
  el.addEventListener('mouseleave', () => {
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// Canvas background particles
const canvas = document.getElementById('neuralCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = 1, points = [];

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.floor(window.innerWidth * dpr);
    h = canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const count = Math.min(90, Math.max(42, Math.floor(window.innerWidth / 20)));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.16 * dpr,
      vy: (Math.random() - 0.5) * 0.16 * dpr,
      r: (Math.random() * 1.7 + 0.7) * dpr
    }));
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, w, h);
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i], b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const max = 145 * dpr;
        if (dist < max) {
          ctx.globalAlpha = (1 - dist / max) * 0.16;
          ctx.strokeStyle = '#075fff';
          ctx.lineWidth = 1 * dpr;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const p of points) {
      ctx.globalAlpha = 0.34;
      ctx.fillStyle = '#05cfff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(animateCanvas);
  }

  window.addEventListener('resize', resizeCanvas, { passive: true });
  resizeCanvas();
  animateCanvas();
}

// Dropshipping product filters
const filterButtons = document.querySelectorAll('[data-filter]');
const productCards = document.querySelectorAll('[data-category]');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    productCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// Product shortlist for dropshipping page
const shortlist = new Map();
const shortlistCount = document.querySelector('[data-shortlist-count]');
const shortlistValue = document.querySelector('[data-shortlist-value]');
const shortlistEmail = document.querySelector('[data-shortlist-email]');

function updateShortlist() {
  const items = Array.from(shortlist.values());
  const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);
  if (shortlistCount) shortlistCount.textContent = String(items.length);
  if (shortlistValue) shortlistValue.textContent = `RM ${total.toFixed(2)}`;
  if (shortlistEmail) shortlistEmail.disabled = items.length === 0;
}

document.querySelectorAll('[data-add-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('[data-product-name]');
    if (!card) return;
    const name = card.dataset.productName;
    const price = card.dataset.price;
    if (shortlist.has(name)) {
      shortlist.delete(name);
      btn.textContent = 'Add to Shortlist';
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-ghost');
    } else {
      shortlist.set(name, { name, price });
      btn.textContent = 'Added ✓';
      btn.classList.add('btn-primary');
      btn.classList.remove('btn-ghost');
    }
    updateShortlist();
  });
});

if (shortlistEmail) {
  shortlistEmail.addEventListener('click', () => {
    const items = Array.from(shortlist.values())
      .map((item, index) => `${index + 1}. ${item.name} — RM ${item.price}`)
      .join('\n');
    const subject = encodeURIComponent('SEATOP AI Dropshipping Product Quote');
    const body = encodeURIComponent(`Hi SEATOP AI,\n\nI am interested in these products:\n${items}\n\nPlease send sourcing, pricing and delivery details.\n\nThank you.`);
    location.href = `mailto:${SEATOP_CONFIG.email}?subject=${subject}&body=${body}`;
  });
}
updateShortlist();

// Margin calculator
const calcInputs = document.querySelectorAll('[data-calc]');
const profitOutput = document.querySelector('[data-profit-output]');
function calculateMargin() {
  if (!profitOutput) return;
  const selling = Number(document.querySelector('[data-calc="selling"]')?.value || 0);
  const cost = Number(document.querySelector('[data-calc="cost"]')?.value || 0);
  const shipping = Number(document.querySelector('[data-calc="shipping"]')?.value || 0);
  const fees = Number(document.querySelector('[data-calc="fees"]')?.value || 0);
  const profit = selling - cost - shipping - fees;
  const margin = selling > 0 ? (profit / selling) * 100 : 0;
  profitOutput.textContent = `RM ${profit.toFixed(2)} / ${margin.toFixed(1)}%`;
}
calcInputs.forEach(input => input.addEventListener('input', calculateMargin));
calculateMargin();

// Static contact form: opens email client
const forms = document.querySelectorAll('[data-seatop-form]');
forms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const lines = [];
    formData.forEach((value, key) => lines.push(`${key}: ${value}`));
    const service = formData.get('Service') || 'SEATOP AI Enquiry';
    const subject = encodeURIComponent(`SEATOP AI Enquiry — ${service}`);
    const body = encodeURIComponent(lines.join('\n'));
    location.href = `mailto:${SEATOP_CONFIG.email}?subject=${subject}&body=${body}`;
  });
});

// Newsletter mailto
const newsletterForms = document.querySelectorAll('[data-newsletter]');
newsletterForms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const email = new FormData(form).get('email') || '';
    const subject = encodeURIComponent('SEATOP AI Newsletter Signup');
    const body = encodeURIComponent(`Please add this email to SEATOP AI updates: ${email}`);
    location.href = `mailto:${SEATOP_CONFIG.email}?subject=${subject}&body=${body}`;
  });
});

// WhatsApp links
const whatsappLinks = document.querySelectorAll('[data-whatsapp]');
whatsappLinks.forEach(link => {
  link.href = `https://wa.me/${SEATOP_CONFIG.whatsapp}?text=${encodeURIComponent('Hi SEATOP AI, I would like to discuss your AI solutions.')}`;
});
