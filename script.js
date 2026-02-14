// Milany Saremo Fireworks - HunterBoom-style product list
const products = [
  { id: 1, name: '彩色砂炮', nameEn: 'Pop-Pop', hasVideo: true, image: 'https://placehold.co/400x400/f97316/fff?text=Pop-Pop' },
  { id: 2, name: '彩色大砂炮', nameEn: 'POP-POP BESAR', hasVideo: true, image: 'https://placehold.co/400x400/ea580c/fff?text=POP-POP+BESAR' },
  { id: 3, name: '超级雷神', nameEn: 'SUPER POP-POP', hasVideo: true, image: 'https://placehold.co/400x400/c2410c/fff?text=SUPER+POP-POP' },
  { id: 4, name: '小霞光', nameEn: 'SUNSET TIGA WARNA', hasVideo: true, image: 'https://placehold.co/400x400/eab308/1c1917?text=Sunset' },
  { id: 5, name: '15发奇幻魔术弹', nameEn: 'DAS 15', hasVideo: false, image: 'https://placehold.co/400x400/ca8a04/fff?text=DAS+15' },
  { id: 6, name: '彩色棒', nameEn: 'ASAP COLOR', hasVideo: true, image: 'https://placehold.co/400x400/65a30d/fff?text=ASAP+COLOR' },
  { id: 7, name: '四色花', nameEn: 'SUNSET 4 COLOR', hasVideo: true, image: 'https://placehold.co/400x400/d97706/fff?text=SUNSET+4' },
  { id: 8, name: '大霞光', nameEn: 'SUNSET BESAR', hasVideo: true, image: 'https://placehold.co/400x400/b45309/fff?text=SUNSET+BESAR' },
];

function renderProduct(product) {
  const title = product.nameEn ? `${product.name} | ${product.nameEn}` : product.name;
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${title}" class="product-image" loading="lazy">
      </div>
      <h3 class="product-title">${title}</h3>
      <div class="product-actions">
        ${product.hasVideo ? '<a href="#" class="product-link-video">View Video</a>' : ''}
        <a href="#" class="btn btn-details">Details</a>
      </div>
    </article>
  `;
}

function init() {
  const grid = document.getElementById('product-grid');
  if (grid) {
    grid.innerHTML = products.map(renderProduct).join('');
  }

  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
