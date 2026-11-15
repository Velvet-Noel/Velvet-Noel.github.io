(function () {
  const colorImagesFor = (root) => ({
    Crimson: root.dataset.imgCrimson,
    Forest: root.dataset.imgForest,
    Champagne: root.dataset.imgChampagne,
  });

  document.querySelectorAll("[data-product]").forEach((root) => {
    const main = root.querySelector(".gallery-main img");
    const thumbs = root.querySelectorAll(".thumbs button");

    thumbs.forEach((btn) => {
      btn.addEventListener("click", () => {
        thumbs.forEach((b) => b.removeAttribute("aria-current"));
        btn.setAttribute("aria-current", "true");
        if (main) {
          main.src = btn.dataset.src;
          main.alt = btn.dataset.alt || "";
        }
      });
    });

    const colorLabel = root.querySelector("[data-color-label]");
    const paypalColor = root.querySelector("[data-paypal-color]");
    const paypalItem = root.querySelector("[data-paypal-item]");
    const itemBase = root.dataset.itemName;
    const colorImages = colorImagesFor(root);
    const swatches = root.querySelectorAll(".swatch");

    swatches.forEach((btn) => {
      btn.addEventListener("click", () => {
        swatches.forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        const color = btn.dataset.color;
        if (colorLabel) colorLabel.textContent = color;
        if (paypalColor) paypalColor.value = color;
        if (paypalItem && itemBase) paypalItem.value = itemBase + " — " + color;
        if (colorImages[color] && main) {
          main.src = colorImages[color];
          main.alt = itemBase + " in " + color;
          thumbs.forEach((b) => {
            if (b.dataset.src === colorImages[color]) b.setAttribute("aria-current", "true");
            else b.removeAttribute("aria-current");
          });
        }
      });
    });

    const qtyValue = root.querySelector("[data-qty-value]");
    const paypalQty = root.querySelector("[data-paypal-qty]");
    const minus = root.querySelector("[data-qty-minus]");
    const plus = root.querySelector("[data-qty-plus]");
    let qty = 1;
    const setQty = (next) => {
      qty = next;
      if (qtyValue) qtyValue.textContent = qty;
      if (paypalQty) paypalQty.value = String(qty);
    };
    if (minus) minus.addEventListener("click", () => setQty(Math.max(1, qty - 1)));
    if (plus) plus.addEventListener("click", () => setQty(Math.min(10, qty + 1)));
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
