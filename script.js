(function () {
  const main = document.getElementById("main-image");
  document.querySelectorAll(".thumbs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".thumbs button").forEach((b) => b.removeAttribute("aria-current"));
      btn.setAttribute("aria-current", "true");
      main.src = btn.dataset.src;
      main.alt = btn.dataset.alt || "";
    });
  });

  const colorLabel = document.getElementById("color-label");
  document.querySelectorAll(".swatch").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".swatch").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      colorLabel.textContent = btn.dataset.color;
    });
  });

  let qty = 1;
  const qtyValue = document.getElementById("qty-value");
  document.getElementById("qty-minus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qtyValue.textContent = qty;
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    qty = Math.min(10, qty + 1);
    qtyValue.textContent = qty;
  });

  document.querySelectorAll(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });

  const modal = document.getElementById("pay-modal");
  const copy = document.getElementById("pay-copy");
  document.querySelectorAll("[data-pay]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const kind = btn.dataset.pay === "paypal" ? "PayPal" : "Stripe Payment Link";
      copy.textContent =
        "This " +
        kind +
        " button is a placeholder. Paste your live checkout URL into this button when the account is ready. No payment is taken from this preview page.";
      modal.hidden = false;
    });
  });
  document.getElementById("pay-close").addEventListener("click", () => {
    modal.hidden = true;
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.hidden = true;
  });
})();
