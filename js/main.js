(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Mise en marche du hero : balayage de la photo, puis le titre ---
  if (!calm) {
    root.classList.add("boot");
    const start = () => requestAnimationFrame(() => requestAnimationFrame(() => { root.classList.add("on"); root.classList.remove("boot"); }));
    const img = document.querySelector(".shot img");
    if (img && !img.complete) { img.addEventListener("load", start, { once: true }); setTimeout(start, 1200); }
    else start();
  }

  // --- Défilement : progression, en-tête, profondeur de la photo du hero ---
  const bar = document.querySelector(".progress");
  const top = document.querySelector(".top");
  const shotImg = document.querySelector(".shot img");
  if (bar) {
    let ticking = false;
    const upd = () => {
      const max = root.scrollHeight - innerHeight;
      bar.style.setProperty("--p", max > 0 ? Math.min(scrollY / max, 1) : 0);
      top.classList.toggle("scrolled", scrollY > 24);
      if (shotImg && !calm && scrollY < innerHeight * 1.2) {
        shotImg.style.setProperty("--py", (scrollY * 0.12).toFixed(1) + "px");
        shotImg.style.setProperty("--z", (1.04 + scrollY / innerHeight * 0.06).toFixed(3));
      }
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }

  // --- Révélations au défilement ---
  document.querySelectorAll(".band-head, .who-copy, .values, .who-ph, .contact").forEach(el => el.classList.add("rv"));
  const shown = document.querySelectorAll(".rv, .plate, .line");
  if ("IntersectionObserver" in window && !calm) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("in");
      io.unobserve(el);
    }), { rootMargin: "0px 0px -12% 0px" });
    document.querySelectorAll(".plate").forEach((p, i) => {
      const d = (i % 4) * 110 + "ms";
      p.style.transitionDelay = d;
      p.querySelector("img")?.style.setProperty("transition-delay", d);
      p.addEventListener("transitionend", () => { p.style.transitionDelay = ""; p.querySelector("img")?.style.removeProperty("transition-delay"); }, { once: true });
    });
    shown.forEach(el => io.observe(el));
  } else shown.forEach(el => el.classList.add("in"));
  // --- Menu mobile ---
  const btn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.textContent = open ? "Fermer" : "Menu";
  });
  nav.addEventListener("click", e => {
    if (e.target.closest("a") && nav.classList.contains("open")) btn.click();
  });

  // --- Onglet actif selon la section visible, pastille qui glisse dessous ---
  const links = [...nav.querySelectorAll("a")];
  const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const pill = document.createElement("span");
  pill.className = "nav-pill";
  pill.setAttribute("aria-hidden", "true");
  nav.prepend(pill);
  const movePill = () => {
    const a = links.find(l => l.getAttribute("aria-current") === "true") || links[0];
    pill.style.width = a.offsetWidth + "px";
    pill.style.transform = `translateX(${a.offsetLeft}px)`;
  };
  const setCurrent = id => {
    links.forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === id ? "true" : "false"));
    movePill();
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) setCurrent("#" + en.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => io.observe(s));
  }
  links.forEach(a => a.addEventListener("mouseenter", () => {
    pill.style.width = a.offsetWidth + "px";
    pill.style.transform = `translateX(${a.offsetLeft}px)`;
  }));
  nav.addEventListener("mouseleave", movePill);
  addEventListener("resize", movePill);
  document.fonts?.ready.then(movePill);
  movePill();

  // --- Barre d'appel mobile : masquée quand le bouton d'appel du hero est à l'écran ---
  const mobCall = document.querySelector(".mob-call");
  const heroCall = document.querySelector(".hero .btn-run");
  if (mobCall && heroCall && "IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => {
      mobCall.classList.toggle("show", !en.isIntersecting);
    }).observe(heroCall);
  } else if (mobCall) mobCall.classList.add("show");

  // --- Formulaire de demande ---
  const form = document.querySelector(".bon");
  const msg = form.querySelector(".form-msg");
  const submit = form.querySelector("button[type=submit]");

  function check() {
    let firstBad = null;
    form.querySelectorAll("[required]").forEach(f => {
      const bad = !f.value.trim();
      f.setAttribute("aria-invalid", bad);
      if (bad && !firstBad) firstBad = f;
    });
    const mail = form.elements.email;
    if (mail.value && !mail.checkValidity()) { mail.setAttribute("aria-invalid", "true"); firstBad = firstBad || mail; }
    else mail.removeAttribute("aria-invalid");
    return firstBad;
  }
  form.addEventListener("input", e => { if (e.target.getAttribute("aria-invalid") === "true") e.target.setAttribute("aria-invalid", !e.target.value.trim()); });

  form.addEventListener("submit", async e => {
    e.preventDefault();
    msg.className = "form-msg";
    const bad = check();
    if (bad) {
      msg.textContent = "Il manque votre nom, votre téléphone ou la description du besoin (ou l'e-mail est mal saisi).";
      bad.focus();
      return;
    }
    submit.disabled = true; submit.textContent = "Envoi en cours…";
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      msg.classList.add("ok");
      msg.textContent = "Demande envoyée. Je vous recontacte rapidement. Si c'est urgent, appelez le 06 87 61 97 39.";
    } catch {
      msg.textContent = "L'envoi n'a pas fonctionné. Appelez le 06 87 61 97 39 ou écrivez à maheas@opti-maintenance.fr.";
    } finally {
      submit.disabled = false; submit.textContent = "Envoyer la demande";
    }
  });
})();
