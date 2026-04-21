console.log("Portfolio loaded");
/* =========================
   COPY EMAIL BUTTONS
   ========================= */
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-copy");
    const target = document.getElementById(id);
    if (!target) return;
    const text = target.textContent.trim();
    if (!navigator.clipboard) {
      console.warn("Clipboard API not available");
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = "✔";
      setTimeout(() => (btn.textContent = original), 800);
    });
  });
});
/* =========================
   HERO CODE TABS
   ========================= */
const codeTabs = document.querySelectorAll(".code-tab");
const codeBlocks = document.querySelectorAll(".code-block");
codeTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const lang = tab.dataset.lang;
    const targetId = code-${lang};
    codeTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    codeBlocks.forEach(block => {
      block.classList.toggle("active", block.id === targetId);
    });
  });
});
/* =========================
   CONTACT FORM (DEMO)
   ========================= */
function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  if (status) {
    status.textContent = "Thanks for reaching out! This demo form doesn’t send emails yet.";
  }
}
