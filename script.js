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
  const paypalColor = document.getElementById("paypal-color");
  document.querySelectorAll(".swatch").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".swatch").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      colorLabel.textContent = btn.dataset.color;
      if (paypalColor) paypalColor.value = btn.dataset.color;
    });
  });

  let qty = 1;
  const qtyValue = document.getElementById("qty-value");
  const paypalQty = document.getElementById("paypal-qty");
  const setQty = (next) => {
    qty = next;
    qtyValue.textContent = qty;
    if (paypalQty) paypalQty.value = String(qty);
  };
  document.getElementById("qty-minus").addEventListener("click", () => {
    setQty(Math.max(1, qty - 1));
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    setQty(Math.min(10, qty + 1));
  });

  document.querySelectorAll(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });
})();
