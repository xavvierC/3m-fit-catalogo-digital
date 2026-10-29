const products = [
  { id: "creatina-adaptogen", category: "Creatinas", name: "Creatina Adaptogen", variant: "300g", price: 44.9, image: "assets/catalog/p01-i09.jpg" },
  { id: "creatina-integralmedica", category: "Creatinas", name: "Creatina Integralmedica", variant: "300g", price: 44.9, image: "assets/catalog/p01-i02.jpg" },
  { id: "creatina-dux", category: "Creatinas", name: "Creatina DUX", variant: "300g", price: 51.9, image: "assets/catalog/p01-i12.jpg" },
  { id: "creatina-black-skull", category: "Creatinas", name: "Creatina Black Skull", variant: "300g", price: 44.9, image: "assets/catalog/p01-i04.jpg" },
  { id: "creatina-cannibal", category: "Creatinas", name: "Creatina Cannibal", variant: "300g", price: 34.9, image: "assets/catalog/p01-i10.jpg" },
  { id: "creatina-max-500", category: "Creatinas", name: "Creatina Max Titanium", variant: "500g", price: 59.9, image: "assets/catalog/p01-i13.jpg" },
  { id: "creatina-max-7belo", category: "Creatinas", name: "Creatina Max Titanium 7Belo", variant: "300g", price: 44.9, image: "assets/catalog/p01-i06.jpg" },
  { id: "creatina-max", category: "Creatinas", name: "Creatina Max", variant: "300g", price: 44.9, image: "assets/catalog/p01-i07.jpg" },
  { id: "creatina-dark-lab", category: "Creatinas", name: "Creatina Dark Labz", variant: "300g", price: 34.9, image: "assets/catalog/p01-i11.jpg" },

  { id: "omega-3-adaptogen", category: "Vitaminas", name: "Ômega 3 Adaptogen", variant: "60 caps", price: 66.9, image: "assets/catalog/p02-i05.jpg" },
  { id: "melatonina-lauton", category: "Vitaminas", name: "Melatonina em gotas", variant: "Sabor maracujá · 30ml", price: 47.9, image: "assets/catalog/p02-i04.jpg" },
  { id: "nac-lauton", category: "Vitaminas", name: "NAC Lauton", variant: "60 caps", price: 47.9, image: "assets/catalog/p02-i07.jpg" },
  { id: "b12-lauton", category: "Vitaminas", name: "Vitamina B12 Lauton", variant: "60 caps", price: 47.9, image: "assets/catalog/p02-i08.jpg" },
  { id: "maca-lauton", category: "Vitaminas", name: "Maca Peruana Lauton", variant: "100g", price: 44.9, image: "assets/catalog/p02-i09.jpg" },
  { id: "vitadaily-adaptogen", category: "Vitaminas", name: "VitaDaily Adaptogen", variant: "90 caps", price: 49.9, image: "assets/catalog/p02-i03.jpg" },
  { id: "omega-3-under-labz", category: "Vitaminas", name: "Ômega 3 Fish Oil Under Labz", variant: "60 caps", price: 99.9, image: "assets/catalog/p02-i06.jpg" },
  { id: "vitamina-d-adaptogen", category: "Vitaminas", name: "Vitamina D Adaptogen", variant: "60 caps", price: 47.9, image: "assets/catalog/p02-i01.jpg" },
  { id: "vitamina-c-adaptogen", category: "Vitaminas", name: "Vitamina C Adaptogen", variant: "60 caps", price: 47.9, image: "assets/catalog/p02-i02.jpg" },

  { id: "protein-crisp", category: "Snacks e pastas", name: "Protein Crisp Integralmedica", variant: "Ovomaltine · 12g", price: 99.9, image: "assets/catalog/p03-i04.jpg" },
  { id: "nutratta-havanna", category: "Snacks e pastas", name: "Nutratta Havanna", variant: "Doce de leite · 20g", price: 93.9, image: "assets/catalog/p03-i01.jpg" },
  { id: "power1one-tradicional", category: "Snacks e pastas", name: "Pasta de amendoim Power1One", variant: "Tradicional · 1,005kg", price: 23.9, image: "assets/catalog/p03-i02.jpg" },
  { id: "power1one-crocante", category: "Snacks e pastas", name: "Pasta de amendoim Power1One", variant: "Crocante · 1,005kg", price: 23.9, image: "assets/catalog/p03-i05.jpg" },
  { id: "dr-peanut-doce-leite", category: "Snacks e pastas", name: "Pasta de amendoim Dr. Peanut", variant: "Doce de leite · 600g", price: 39.9, image: "assets/catalog/p03-i06.jpg" },
  { id: "dr-peanut-avela", category: "Snacks e pastas", name: "Pasta de amendoim Dr. Peanut", variant: "Avelã · 600g", price: 39.9, image: "assets/catalog/p03-i07.jpg" },
  { id: "dr-peanut-buenissimo", category: "Snacks e pastas", name: "Pasta de amendoim Dr. Peanut", variant: "Buenissimo · 600g", price: 39.9, image: "assets/catalog/p03-i08.png" },
  { id: "dr-peanut-bombom", category: "Snacks e pastas", name: "Pasta de amendoim Dr. Peanut", variant: "Bombom Italiano · 600g", price: 39.9, image: "assets/catalog/p03-i09.jpg" },
  { id: "dr-peanut-leite-po", category: "Snacks e pastas", name: "Pasta de amendoim Dr. Peanut", variant: "Leite em pó · 600g", price: 39.9, image: "assets/catalog/p03-i03.jpg" },

  { id: "ganexa-leitinho", category: "Snacks e pastas", name: "Pasta de amendoim La Ganexa", variant: "Leitinho · 1,005kg", price: 59.9, image: "assets/catalog/p04-i04.jpg" },
  { id: "ganexa-black", category: "Snacks e pastas", name: "Pasta de amendoim La Ganexa", variant: "Leitinho Black · 1,005kg", price: 59.9, image: "assets/catalog/p04-i01.jpg" },
  { id: "tastycarb", category: "Whey e proteínas", name: "tastyCarb gel Adaptogen", variant: "10 sachês · Limonada · 300g", price: 99.9, image: "assets/catalog/p04-i05.png" },
  { id: "whey-isolado-dux", category: "Whey e proteínas", name: "Whey Protein Isolado Dux", variant: "Baunilha · 900g", price: 364.9, image: "assets/catalog/p04-i06.jpg" },
  { id: "isolate-newmillen-abacaxi", category: "Whey e proteínas", name: "Isolate Protein NewMillen", variant: "Abacaxi com hortelã · 900g", price: 139.9, image: "assets/catalog/p04-i07.png" },
  { id: "isolate-newmillen-laranja", category: "Whey e proteínas", name: "Isolate Protein NewMillen", variant: "Laranja · 900g", price: 139.9, image: "assets/catalog/p04-i02.png" },
  { id: "whey-max-morango", category: "Whey e proteínas", name: "100% Whey Max Titanium", variant: "Morango · 900g", price: 99.9, image: "assets/catalog/p04-i03.png" },
  { id: "top-whey-3w", category: "Whey e proteínas", name: "Top Whey 3W Max Titanium", variant: "Leite · 900g", price: 264.9, image: "assets/catalog/p04-i08.jpg" },
  { id: "mass-titanium", category: "Whey e proteínas", name: "Mass Titanium 17500", variant: "Morango · 1,4kg", price: 109.9, image: "assets/catalog/p04-i09.jpg" },

  { id: "double-tasty-baunilha", category: "Whey e proteínas", name: "100% Whey Double Tasty - MAX Titanium", variant: "Baunilha · 900g", price: 99.9, image: "assets/catalog/p05-i05.jpg" },
  { id: "double-tasty-morango", category: "Whey e proteínas", name: "100% Whey Double Tasty - MAX Titanium", variant: "Morango · 900g", price: 99.9, image: "assets/catalog/p05-i06.jpg" },
  { id: "double-tasty-chocolate", category: "Whey e proteínas", name: "100% Whey Double Tasty - MAX Titanium", variant: "Chocolate · 900g", price: 99.9, image: "assets/catalog/p05-i07.jpg" },
  { id: "dux-concentrado-morango", category: "Whey e proteínas", name: "Whey Protein Concentrado Dux", variant: "Morango · 900g", price: 199.9, image: "assets/catalog/p05-i09.jpg" },
  { id: "gold-whey", category: "Whey e proteínas", name: "Gold Whey Adaptogen", variant: "Chocolate · 900g", price: 164.9, image: "assets/catalog/p05-i04.jpg" },
  { id: "tastyiso-baunilha", category: "Whey e proteínas", name: "TastyIso Adaptogen", variant: "Sorvete de baunilha · 900g", price: 330, image: "assets/catalog/p05-i03.jpg" },
  { id: "tastyiso-cookies", category: "Whey e proteínas", name: "TastyIso Adaptogen", variant: "Cookies & cream · 900g", price: 330, image: "assets/catalog/p05-i08.jpg" },
  { id: "tastyiso-pure", category: "Whey e proteínas", name: "TastyIso Adaptogen", variant: "Pure · 900g", price: 330, image: "assets/catalog/p05-i11.jpg" },
  { id: "tastyiso-morango", category: "Whey e proteínas", name: "TastyIso Adaptogen", variant: "Morango · 900g", price: 330, image: "assets/catalog/p05-i12.jpg" },

  { id: "tasty-whey-baunilha", category: "Whey e proteínas", name: "Tasty Whey - Adaptogen", variant: "Sorvete de baunilha · 900g", price: 199.9, image: "assets/catalog/p06-i01.jpg" },
  { id: "tasty-whey-chocolate", category: "Whey e proteínas", name: "Tasty Whey - Adaptogen", variant: "Chocolate suíço · 900g", price: 199.9, image: "assets/catalog/p06-i02.jpg" },
  { id: "tasty-whey-morango", category: "Whey e proteínas", name: "Tasty Whey - Adaptogen", variant: "Morango · 900g", price: 199.9, image: "assets/catalog/p06-i03.jpg" },
  { id: "tasty-whey-cookies", category: "Whey e proteínas", name: "Tasty Whey - Adaptogen", variant: "Cookies & cream · 900g", price: 199.9, image: "assets/catalog/p06-i04.jpg" },
  { id: "tasty-whey-original", category: "Whey e proteínas", name: "Tasty Whey - Adaptogen", variant: "Original · 900g", price: 199.9, image: "assets/catalog/p06-i05.jpg" },
  { id: "tasty-whey-limao", category: "Whey e proteínas", name: "Tasty Whey - Adaptogen", variant: "Torta de limão · 900g", price: 199.9, image: "assets/catalog/p06-i06.jpg" },
  { id: "hit-protein-doce-leite", category: "Whey e proteínas", name: "Hit Protein - Adaptogen", variant: "Doce de leite · 900g", price: 199.9, image: "assets/catalog/p06-i07.jpg" },
  { id: "double-tasty-pistache", category: "Whey e proteínas", name: "100% Whey Double Tasty - MAX Titanium", variant: "Pistache · 900g", price: 199.9, image: "assets/catalog/p06-i08.jpg" },
  { id: "dux-concentrado-milho", category: "Whey e proteínas", name: "Whey Protein Concentrado - Dux", variant: "Milho verde · 900g", price: 199.9, image: "assets/catalog/p06-i09.jpg" },

  { id: "best-whey-bobs", category: "Whey e proteínas", name: "Best Whey Athletica Nutrition", variant: "Milkshake Bobs · 900g", price: 194.9, image: "assets/catalog/p07-i01.jpg" },
  { id: "best-whey-toddy", category: "Whey e proteínas", name: "Best Whey Athletica Nutrition", variant: "Toddy · 900g", price: 194.9, image: "assets/catalog/p07-i05.jpg" },
  { id: "best-whey-original", category: "Whey e proteínas", name: "Best Whey Athletica Nutrition", variant: "Original · 900g", price: 194.9, image: "assets/catalog/p07-i07.jpg" },
  { id: "hit-protein-morango", category: "Whey e proteínas", name: "Hit Protein Adaptogen", variant: "Morango · 900g", price: 94.9, image: "assets/catalog/p07-i02.jpg" },
  { id: "hit-protein-beijinho", category: "Whey e proteínas", name: "Hit Protein Adaptogen", variant: "Beijinho · 900g", price: 94.9, image: "assets/catalog/p07-i03.jpg" },
  { id: "hit-protein-chocolate", category: "Whey e proteínas", name: "Hit Protein Adaptogen", variant: "Chocolate · 900g", price: 94.9, image: "assets/catalog/p07-i06.jpg" },
  { id: "hit-protein-cookies", category: "Whey e proteínas", name: "Hit Protein Adaptogen", variant: "Cookies & cream · 900g", price: 94.9, image: "assets/catalog/p07-i09.jpg" },
  { id: "hit-protein-doce-leite-2", category: "Whey e proteínas", name: "Hit Protein Adaptogen", variant: "Doce de leite · 900g", price: 94.9, image: "assets/catalog/p07-i08.jpg" },
  { id: "hit-protein-original", category: "Whey e proteínas", name: "Hit Protein Adaptogen", variant: "Original · 900g", price: 94.9, image: "assets/catalog/p07-i04.jpg" },
];

const WHATSAPP_NUMBER = "5511991662195";
products.forEach((product) => {
  product.image = product.image
    .replace("assets/catalog/", "assets/catalog/png/")
    .replace(/\.(?:jpe?g|png)$/i, ".png");
  product.name = product.name.replace(/\s+[-–—]\s+/g, " ");
});
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const quantities = loadQuantities();
let activeCategory = "Todos";
let searchTerm = "";
let toastTimer;

const catalogGrid = document.querySelector("#catalog-grid");
const emptyState = document.querySelector("#empty-state");
const visibleCount = document.querySelector("#visible-count");
const productSearch = document.querySelector("#product-search");
const orderItems = document.querySelector("#order-items");
const orderTotal = document.querySelector("#order-total");
const orderBadge = document.querySelector("#order-badge");
const headerOrderCount = document.querySelector("#header-order-count");
const sendOrderButton = document.querySelector("#send-order");
const clearOrderButton = document.querySelector("#clear-order");
const mobileOrderCount = document.querySelector("#mobile-order-count");
const mobileOrderTotal = document.querySelector("#mobile-order-total");
const toast = document.querySelector("#toast");

function loadQuantities() {
  try {
    const saved = JSON.parse(localStorage.getItem("3m-fit-order") || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return Object.fromEntries(products.filter(product => Number.isInteger(saved[product.id]) && saved[product.id] > 0).map(product => [product.id, Math.min(99, saved[product.id])]));
  } catch {
    return {};
  }
}

function saveQuantities() {
  try {
    localStorage.setItem("3m-fit-order", JSON.stringify(quantities));
  } catch {
    // Local storage can be unavailable in private or embedded browser contexts.
  }
}

function formatCurrency(value) {
  return currency.format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getQuantity(productId) {
  return Number(quantities[productId]) || 0;
}

function getVisibleProducts() {
  const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
  const normalizedSearch = normalize(searchTerm.trim());
  return products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const searchable = normalize(`${product.name} ${product.variant} ${product.category}`);
    return matchesCategory && (!normalizedSearch || searchable.includes(normalizedSearch));
  });
}

function productCardTemplate(product) {
  const quantity = getQuantity(product.id);
  const selectedClass = quantity > 0 ? " is-selected" : "";
  const imageClass = product.id === "best-whey-toddy" ? " product-image-best-whey-toddy" : "";
  const controls = quantity > 0
    ? `<div class="quantity-control" role="group" aria-label="Quantidade de ${escapeHtml(product.name)}">
         <button type="button" data-action="decrement" data-id="${product.id}" aria-label="Diminuir quantidade">−</button>
         <span class="quantity-value" aria-live="polite">${quantity}</span>
         <button type="button" data-action="increment" data-id="${product.id}" aria-label="Aumentar quantidade">＋</button>
       </div>`
    : `<button class="add-button" type="button" data-action="increment" data-id="${product.id}">Adicionar</button>`;

  return `<article class="product-card${selectedClass}" data-product-id="${product.id}">
    <div class="product-media">
    <img class="product-image${imageClass}" src="${product.image}" alt="${escapeHtml(product.name)} ${escapeHtml(product.variant)}" loading="lazy" decoding="async" width="300" height="260" />
    </div>
    <div class="product-content">
      <div class="product-meta">
        <span>${escapeHtml(product.category)}</span>
      </div>
      <h3>${escapeHtml(product.name)}</h3>
      <p class="product-variant">${escapeHtml(product.variant)}</p>
      <div class="product-footer">
        <div class="product-price">
          <span>por unidade</span>
          <strong>${formatCurrency(product.price)}</strong>
        </div>
        ${controls}
      </div>
    </div>
  </article>`;
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  visibleCount.textContent = visibleProducts.length;
  catalogGrid.innerHTML = visibleProducts.map(productCardTemplate).join("");
  emptyState.hidden = visibleProducts.length > 0;
}

function setupRevealAnimations() {
  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  if (!revealItems.length) return;

  const show = (element) => element.classList.add("is-visible");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(show);
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      show(entry.target);
      currentObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  revealItems.forEach((element) => {
    const delay = Number(element.dataset.revealDelay);
    if (Number.isFinite(delay)) element.style.setProperty("--reveal-delay", `${Math.min(delay, 240)}ms`);
    observer.observe(element);
  });
}

function selectedProducts() {
  return products
    .filter((product) => getQuantity(product.id) > 0)
    .map((product) => ({ ...product, quantity: getQuantity(product.id) }));
}

function renderOrder() {
  const selected = selectedProducts();
  const itemCount = selected.reduce((sum, product) => sum + product.quantity, 0);
  const total = selected.reduce((sum, product) => sum + product.price * product.quantity, 0);

  orderBadge.textContent = itemCount;
  headerOrderCount.textContent = itemCount;
  orderTotal.textContent = formatCurrency(total);
  mobileOrderCount.textContent = `${itemCount} ${itemCount === 1 ? "item" : "itens"}`;
  mobileOrderTotal.textContent = formatCurrency(total);
  sendOrderButton.disabled = selected.length === 0;
  clearOrderButton.disabled = selected.length === 0;

  if (selected.length === 0) {
    orderItems.innerHTML = `<div class="order-empty" id="order-empty">
      <div class="order-empty-icon">＋</div>
      <strong>Seu pedido está vazio</strong>
      <span>Adicione produtos para começar.</span>
    </div>`;
    return;
  }

  orderItems.innerHTML = selected.map((product) => `
    <div class="order-line">
      <div class="order-line-info">
        <strong>${product.quantity}× ${escapeHtml(product.name)}</strong>
        <span>${escapeHtml(product.variant)}</span>
      </div>
      <div class="order-line-side">
        <strong>${formatCurrency(product.price * product.quantity)}</strong>
        <button class="remove-line" type="button" data-remove-id="${product.id}">remover</button>
      </div>
    </div>`).join("");
}

function setQuantity(productId, nextQuantity) {
  const previousQuantity = getQuantity(productId);
  const safeQuantity = Math.max(0, Math.min(99, Number(nextQuantity) || 0));
  if (safeQuantity === 0) {
    delete quantities[productId];
  } else {
    quantities[productId] = safeQuantity;
  }
  saveQuantities();
  renderProducts();
  renderOrder();
  const action = safeQuantity === 0 || safeQuantity >= previousQuantity ? 'increment' : 'decrement';
  const control = catalogGrid.querySelector(`[data-id="${productId}"][data-action="${action}"]`);
  control?.focus({ preventScroll: true });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function sendOrderToWhatsApp() {
  const selected = selectedProducts();
  if (selected.length === 0) {
    showToast("Adicione pelo menos um produto ao pedido.");
    return;
  }

  const total = selected.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const lines = selected.map((product) => `• ${product.quantity}x ${product.name} (${product.variant}): ${formatCurrency(product.price * product.quantity)}`);
  const message = [
    "Olá! Quero montar um pedido com a 3M Fit Suplementos:",
    "",
    ...lines,
    "",
    `Total estimado: ${formatCurrency(total)}`,
    "",
    "Podem confirmar disponibilidade, entrega e forma de pagamento?",
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function restoreHashTarget() {
  let targetId = window.location.hash.slice(1);
  try {
    targetId = decodeURIComponent(targetId);
  } catch {
    return;
  }
  if (!targetId) return;
  document.getElementById(targetId)?.scrollIntoView({ behavior: "auto", block: "start" });
}

function resetScrollOnReload() {
  if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function scheduleHashRestore() {
  window.setTimeout(restoreHashTarget, 120);
  window.setTimeout(restoreHashTarget, 520);
}

window.addEventListener("hashchange", scheduleHashRestore);
window.addEventListener("pageshow", scheduleHashRestore);
window.addEventListener("load", scheduleHashRestore, { once: true });
window.addEventListener("pageshow", resetScrollOnReload, { once: true });

document.querySelectorAll("[data-category]").forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.category === activeCategory));
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach((filter) => {
      filter.classList.toggle("is-active", filter === button);
      filter.setAttribute("aria-pressed", String(filter === button));
    });
    renderProducts();
    document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-category-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.categoryJump;
    const filter = document.querySelector(`[data-category="${category}"]`);
    filter?.click();
  });
});

productSearch.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderProducts();
});

catalogGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const current = getQuantity(button.dataset.id);
  const next = button.dataset.action === "increment" ? current + 1 : current - 1;
  setQuantity(button.dataset.id, next);
});

orderItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-id]");
  if (!removeButton) return;
  setQuantity(removeButton.dataset.removeId, 0);
  showToast("Produto removido do pedido.");
});

clearOrderButton.addEventListener("click", () => {
  Object.keys(quantities).forEach((productId) => delete quantities[productId]);
  saveQuantities();
  renderProducts();
  renderOrder();
  showToast("Pedido limpo.");
});

sendOrderButton.addEventListener("click", sendOrderToWhatsApp);

renderProducts();
renderOrder();
setupRevealAnimations();
document.querySelector("#top").setAttribute("aria-busy", "false");
document.body.classList.remove("app-loading");
resetScrollOnReload();
window.setTimeout(resetScrollOnReload, 80);
scheduleHashRestore();
