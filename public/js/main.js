(function () {
  'use strict';
  var doc = document;

  // Header shadow on scroll
  var header = doc.querySelector('.site-header');
  function onScroll() { header && header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var burger = doc.querySelector('.burger');
  var menu = doc.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      doc.body.style.overflow = open ? 'hidden' : '';
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        doc.body.style.overflow = '';
      }
    });
  }

  // Scroll reveal
  var items = [].slice.call(doc.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Count-up numbers
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var counters = [].slice.call(doc.querySelectorAll('.count'));
  function fmt(el, v) {
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    return v.toFixed(dec) + (el.getAttribute('data-suffix') || '');
  }
  function run(el) {
    var to = parseFloat(el.getAttribute('data-to'));
    if (reduce) { el.textContent = fmt(el, to); return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(el, to * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = fmt(el, parseFloat(el.getAttribute('data-to'))); });
  }

  // Contact form -> WhatsApp message
  var form = doc.getElementById('wa-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = doc.getElementById('f-name').value.trim();
      var svc = doc.getElementById('f-service').value;
      var time = doc.getElementById('f-time').value.trim();
      var msg = 'Hello The Smile Lounge, I would like to book an appointment.\n' +
        'Name: ' + name + '\nTreatment: ' + svc + (time ? '\nPreferred time: ' + time : '');
      window.open('https://wa.me/919911892424?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }
})();
