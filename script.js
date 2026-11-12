(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const toast = $("#toast");
  let toastTimer;
  function notify(message, type="success") {
    if (!toast) return;
    toast.textContent = message;
    toast.dataset.type = type;
    toast.classList.add("show");
    toast.style.display = "block";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.classList.remove("show"); toast.style.display="none"; }, 4500);
  }
  // Mobile navigation
  const menu = $(".menu-toggle"), links = $(".nav-links");
  menu?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    window.lucide?.createIcons();
  });
  // Theme preference; stored locally only
  const themeButton = $(".theme-toggle");
  const savedTheme = localStorage.getItem("gngc-theme");
  if (savedTheme === "light") document.documentElement.classList.add("light");
  themeButton?.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    localStorage.setItem("gngc-theme", document.documentElement.classList.contains("light") ? "light" : "dark");
  });
  // Product filters
  $$(".filter").forEach(button => button.addEventListener("click", () => {
    $$(".filter").forEach(b => b.classList.toggle("active", b === button));
    const category = button.dataset.filter;
    $$(".product-card").forEach(card => card.classList.toggle("hidden", category !== "all" && card.dataset.category !== category));
  }));
  // Quote modal
  const modal = $("#quote-modal"), quoteInput = $("#quote-product");
  function closeModal(){ modal?.classList.remove("open"); modal?.setAttribute("aria-hidden","true"); }
  $$(".quote-btn").forEach(button => button.addEventListener("click", () => {
    if (!modal) return;
    quoteInput.value = button.dataset.product || "";
    modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
    $("input[name=name]", modal)?.focus();
  }));
  $(".modal-close")?.addEventListener("click", closeModal);
  modal?.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
  // Contact form tabs
  $$(".form-tab").forEach(button => button.addEventListener("click", () => {
    const target = button.dataset.formtab;
    $$(".form-tab").forEach(b => b.classList.toggle("active", b === button));
    $$(".contact-forms .demo-form").forEach(form => form.classList.toggle("active", form.id === target || form.dataset.formKind === target));
  }));
  // Client-side validation/demo submission. Never treat this as backend security.
  $$(".demo-form").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    // Basic trimming and control-character removal. Server must independently validate,
    // encode output, rate-limit, and protect against CSRF/spam.
    const safe = {};
    for (const [key, value] of data.entries()) {
      safe[key] = String(value).trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").slice(0, 2000);
    }
    console.info("GNGC demo form submission (not transmitted):", form.dataset.formKind, Object.keys(safe));
    notify("Form validated. Demo only—connect a secure backend to send this request.");
    form.reset();
    if (form.dataset.formKind === "quote") closeModal();
  }));
  // Set date minimum to today on meeting form
  const dateInput = $('input[name="date"]');
  if (dateInput) dateInput.min = new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,10);
  $("#year") && ($("#year").textContent = new Date().getFullYear());
  window.lucide?.createIcons();
})();