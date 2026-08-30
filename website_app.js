/* ==========================================================================
   SHINE Boutique @ Triveni - Luxury Boutique Showcase Logic (AURORA Inspired)
   ========================================================================== */

const STORE_PHONE = "17038178344"; // (703) 817-8344
const STORE_EMAIL = "shineattriveni@gmail.com";
const STORE_ADDRESS = "43090 Peacock Market Plaza #190, South Riding, VA 20152";

// Boutique Collection Database (100% Verbatim Client Taxonomy Product List)
const BOUTIQUE_COLLECTIONS = [
  {
    id: 'shine-col-001',
    name: '1 Gram Gold Necklace Sets',
    category: 'jewelry',
    categoryName: '1 Gram Gold Jewelry',
    badge: '1 GRAM GOLD',
    image: 'assets/card_kundan_necklace.jpg',
    description: 'Traditional 1 Gram Gold necklace set for weddings, festive occasions and special celebrations.',
    finish: '1 Gram Gold Jewelry',
    availability: 'In-Store Display at South Riding'
  },
  {
    id: 'shine-col-002',
    name: 'Temple Jewelry Sets',
    category: 'jewelry',
    categoryName: 'Temple Jewelry',
    badge: '1 GRAM GOLD',
    image: 'assets/card_temple_nakshi.jpg',
    description: 'Traditional Temple Jewelry long haram with matching Jhumka earrings for bridal and festive celebrations.',
    finish: 'Temple Jewelry',
    availability: 'In-Store Display at South Riding'
  },
  {
    id: 'shine-col-003',
    name: 'Silk Sarees',
    category: 'apparel',
    categoryName: "Women's Clothing",
    badge: "WOMEN'S CLOTHING",
    image: 'assets/card_kanjeevaram_saree.jpg',
    description: 'Traditional silk saree with rich border design. In-store saree prepleating and blouse alterations available.',
    finish: 'Silk Sarees',
    availability: 'Available for Fitting & Prepleating'
  },
  {
    id: 'shine-col-004',
    name: 'Wedding / Bridal Lehengas',
    category: 'apparel',
    categoryName: "Women's Clothing",
    badge: "WOMEN'S CLOTHING",
    image: 'assets/card_bridal_lehenga.jpg',
    description: 'Designer lehenga set with detailed embroidery for weddings and festive occasions.',
    finish: 'Designer Lehengas',
    availability: 'Available for Boutique Trial'
  },
  {
    id: 'shine-col-005',
    name: 'Kurta Pajama Sets',
    category: 'men',
    categoryName: "Men's Clothing",
    badge: "MEN'S CLOTHING",
    image: 'assets/card_silk_kurta.jpg',
    description: "Traditional Men's Kurta Pajama set tailored for festive ceremonies and weddings.",
    finish: 'Kurta Pajama Sets',
    availability: 'In Stock at Boutique for Fitting'
  },
  {
    id: 'shine-col-006',
    name: 'Wedding Kurtas',
    category: 'men',
    categoryName: "Men's Clothing",
    badge: "MEN'S CLOTHING",
    image: 'assets/card_wedding_sherwani.jpg',
    description: "Traditional Men's Wedding Kurta Set with matching stole for grooms, family, and wedding guests.",
    finish: 'Wedding Kurtas',
    availability: 'In-Store Trial & Fitting'
  },
  {
    id: 'shine-col-007',
    name: 'Jhumkas & Traditional Accessories',
    category: 'accessories',
    categoryName: 'Accessories',
    badge: 'ACCESSORIES',
    image: 'assets/shine_accessories_card.jpg',
    description: 'Exquisite diamond CZ & gold peacock Jhumka earrings paired with handcrafted gold bangles and bridal accessories.',
    finish: 'Jhumkas & Bangles',
    availability: 'In Stock at South Riding Boutique'
  },
  {
    id: 'shine-col-008',
    name: 'Wedding Return Gifts',
    category: 'gifts',
    categoryName: 'Return Gifts',
    badge: 'RETURN GIFTS',
    image: 'assets/card_return_gift_box.jpg',
    description: 'Special return gifts starting at $2.99: Pichwai cow boxes, silver Ganesha idols, crystal diyas, haldi-kumkum sets & hammered copper jars. Bulk orders & custom packing available.',
    finish: 'Starting at $2.99 • Bulk Orders Available',
    availability: 'Custom Event Orders Available'
  }
];

// App State
let currentFilter = 'jewelry';
let searchQuery = '';
let currentHeroImageIndex = 0;
let heroImageTimer = null;
let isHeroImagePaused = false;

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderShowcase();
  initFilterPills();
  initSearch();
  initAppointmentModal();
  initHeroImageSlider();
});

/* --------------------------------------------------------------------------
   Right-Side Hero Image Slideshow Controller (Scoped to .hero-visual)
   -------------------------------------------------------------------------- */
function initHeroImageSlider() {
  showHeroImage(currentHeroImageIndex);
  startHeroImageTimer();
}

function showHeroImage(index) {
  const slides = document.querySelectorAll('.hero-img-slide');
  const dots = document.querySelectorAll('.hero-img-dot');
  if (slides.length === 0) return;

  const totalHeroImages = slides.length;
  currentHeroImageIndex = (index + totalHeroImages) % totalHeroImages;

  slides.forEach((slide, idx) => {
    if (idx === currentHeroImageIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === currentHeroImageIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextHeroImage() {
  showHeroImage(currentHeroImageIndex + 1);
}

function prevHeroImage() {
  showHeroImage(currentHeroImageIndex - 1);
}

function goToHeroImage(index) {
  showHeroImage(index);
}

function startHeroImageTimer() {
  if (heroImageTimer) clearInterval(heroImageTimer);
  heroImageTimer = setInterval(() => {
    if (!isHeroImagePaused) {
      nextHeroImage();
    }
  }, 4500);
}

function pauseHeroImageSlider() {
  isHeroImagePaused = true;
}

function resumeHeroImageSlider() {
  isHeroImagePaused = false;
}

// Text-Based Boutique Collection Directory Data (Verbatim Client Taxonomy)
const BOUTIQUE_DIRECTORY = [
  {
    key: 'jewelry',
    title: 'JEWELRY',
    badge: '1 GRAM GOLD & HERITAGE',
    subcategories: [
      {
        name: '1 Gram Gold Jewelry',
        items: [
          '1 Gram Gold Necklaces',
          '1 Gram Gold Necklace Sets',
          '1 Gram Gold Earrings',
          '1 Gram Gold Bangles',
          '1 Gram Gold Chains',
          '1 Gram Gold Bridal Sets',
          '1 Gram Gold Traditional Jewelry'
        ]
      },
      {
        name: 'Necklace Sets',
        items: [
          'Short Necklace Sets',
          'Long Necklace Sets',
          'Choker Sets',
          'Layered Necklace Sets',
          'Pendant Sets',
          'Traditional Necklace Sets',
          'Temple Jewelry Sets',
          'Stone Necklace Sets'
        ]
      },
      {
        name: 'Earrings',
        items: [
          'Jhumkas',
          'Chandbali Earrings',
          'Stud Earrings',
          'Drop Earrings',
          'Long Earrings',
          'Temple Earrings',
          'Stone Earrings',
          'Pearl Earrings',
          'Bridal Earrings',
          'Party Wear Earrings'
        ]
      },
      {
        name: 'Bridal Jewelry',
        items: [
          'Bridal Necklace Sets',
          'Bridal Chokers',
          'Long Bridal Harams',
          'Bridal Earrings',
          'Bridal Bangles',
          'Complete Bridal Jewelry Sets',
          'Temple Bridal Jewelry'
        ]
      },
      {
        name: 'Bangles & Bracelets',
        items: [
          'Traditional Bangles',
          'Stone Bangles',
          'Bridal Bangles',
          'Kada / Kadas',
          'Bracelets',
          'Bangle Sets'
        ]
      },
      {
        name: 'Other Jewelry',
        items: [
          'Chains',
          'Pendants',
          'Long Harams',
          'Pearl Jewelry',
          'Beaded Jewelry',
          'Temple Jewelry',
          'Fashion Jewelry',
          'Traditional South Indian Jewelry'
        ]
      }
    ]
  },
  {
    key: 'apparel',
    title: "WOMEN'S CLOTHING",
    badge: 'SAREES, LEHENGAS & ETHNIC',
    subcategories: [
      {
        name: 'Sarees',
        items: [
          'Silk Sarees',
          'Pattu / Traditional Sarees',
          'Banarasi-Style Sarees',
          'Party Wear Sarees',
          'Designer Sarees',
          'Embroidered Sarees',
          'Festive Sarees',
          'Wedding Sarees',
          'Casual Sarees'
        ]
      },
      {
        name: 'Lehengas',
        items: [
          'Traditional Lehengas',
          'Designer Lehengas',
          'Wedding / Bridal Lehengas',
          'Party Wear Lehengas',
          'Lehenga Choli Sets'
        ]
      },
      {
        name: 'Dresses & Ethnic Wear',
        items: [
          'Anarkali Dresses',
          'Long Dresses',
          'Gowns',
          'Salwar / Suit Sets',
          'Kurti Sets',
          'Ethnic Sets',
          'Party Wear',
          'Festive Wear',
          'Wedding Wear'
        ]
      },
      {
        name: 'Blouses',
        items: [
          'Designer Blouses',
          'Ready-Made Blouses',
          'Traditional Blouses',
          'Party Wear Blouses',
          'Saree Blouses'
        ]
      },
      {
        name: 'Dupattas',
        items: [
          'Traditional Dupattas',
          'Designer Dupattas',
          'Embroidered Dupattas',
          'Festive Dupattas'
        ]
      }
    ]
  },
  {
    key: 'men',
    title: "MEN'S CLOTHING",
    badge: 'KURTAS & FESTIVE WEAR',
    subcategories: [
      {
        name: "Men's Kurtas",
        items: [
          'Traditional Kurtas',
          'Kurta Sets',
          'Festive Kurtas',
          'Wedding Kurtas',
          'Party Wear Kurtas',
          'Kurta Pajama Sets'
        ]
      }
    ]
  },
  {
    key: 'accessories',
    title: 'ACCESSORIES',
    badge: 'BRIDAL & FASHION ACCESSORIES',
    subcategories: [
      {
        name: "Women's Accessories",
        items: [
          'Hair Accessories',
          'Fashion Accessories',
          'Bangles',
          'Bracelets',
          'Beaded Accessories',
          'Traditional Accessories',
          'Wedding Accessories'
        ]
      }
    ]
  },
  {
    key: 'kids',
    title: "KIDS DRESSES & ETHNIC WEAR",
    badge: 'KIDS DRESSES & HALF SAREES',
    subcategories: [
      {
        name: 'Pattu Langa & Half Sarees',
        items: [
          'Traditional Pattu Langa Sets',
          'Designer Half Sarees',
          'Silk Lehenga Cholis',
          'Embroidered Kids Blouses',
          'Festive Zari Border Langa'
        ]
      },
      {
        name: 'Girls Festive Lehengas & Frocks',
        items: [
          'Designer Party Lehengas',
          'Ethnic Anarkali Frocks',
          'Festive Crop Top Sets',
          'Gown & Dupatta Sets',
          'Kid Mini Lehenga Sets'
        ]
      }
    ]
  },
  {
    key: 'festival',
    title: "✨ FESTIVAL & WEDDING COLLECTION",
    badge: 'DIWALI, NAVRATRI & WEDDING SPECIALS',
    subcategories: [
      {
        name: 'Festive Ethnic Collections',
        items: [
          'Diwali Special Silk Sarees',
          'Navratri Chaniya Cholis',
          'Karwa Chauth Festive Sets',
          'Ugadi / Dussehra Pattu Wear',
          'Wedding Guest Ethnic Sets',
          'North Indian Festival Kurtis',
          'Puja & Ceremony Outfits'
        ]
      },
      {
        name: 'Festival Jewelry & Gifting',
        items: [
          'Festive 1 Gram Gold Harams',
          'Temple Nakshi Festive Sets',
          'German Silver Diya Favors',
          'Brass Ganesha Idols',
          'Pichwai Decorative Hampers'
        ]
      }
    ]
  },
  {
    key: 'gifts',
    title: 'RETURN GIFTS',
    badge: 'EVENT & FESTIVAL FAVORS',
    subcategories: [
      {
        name: 'Return Gifts',
        items: [
          'Pichwai Cow Boxes',
          'Silver Ganesha Idols',
          'Crystal Diyas',
          'Haldi-Kumkum Sets',
          'Hammered Copper Jars',
          'Wedding Return Gifts',
          'Housewarming Return Gifts',
          'Baby Shower Return Gifts',
          'Birthday Return Gifts',
          'Pooja / Religious Event Return Gifts',
          'Festival Return Gifts',
          'Traditional Indian Return Gifts',
          'Ladies Return Gifts',
          'Customized / Bulk Return Gifts'
        ]
      }
    ]
  }
];

function toggleSubcategory(index) {
  const card = document.getElementById(`subcat-card-${index}`);
  if (card) {
    card.classList.toggle('expanded');
  }
}

function inquireSubcategoryOnWhatsApp(subcategoryName, categoryTitle) {
  const message = encodeURIComponent(`Hi! I'm interested in "${subcategoryName}" under ${categoryTitle} at S.H.I.N.E✨ Studio. Can you share available options or schedule an in-store trial?`);
  window.open(`https://wa.me/${STORE_PHONE}?text=${message}`, '_blank');
}

/* --------------------------------------------------------------------------
   Render Boutique Subcategory Cards (Open By Default, Clean & Minimal)
   -------------------------------------------------------------------------- */
function renderShowcase() {
  const container = document.getElementById('showcase-grid');
  if (!container) return;

  const currentCategory = BOUTIQUE_DIRECTORY.find(sec => sec.key === currentFilter) || BOUTIQUE_DIRECTORY[0];

  // Update category title bar
  const countElem = document.getElementById('catalog-count-text');
  if (countElem) {
    countElem.innerHTML = `<i class="fa-solid fa-gem text-gold" style="margin-right: 6px;"></i> ${currentCategory.title} Collections`;
  }

  container.innerHTML = currentCategory.subcategories.map(sub => `
    <div class="subcat-card">
      <div class="subcat-card-header">
        <h3 class="subcat-card-title">
          <i class="fa-solid fa-crown text-gold" style="font-size: 0.85rem;"></i>
          ${sub.name}
        </h3>
      </div>
      <div class="subcat-card-body">
        <ul class="subcat-type-list">
          ${sub.items.map(item => `
            <li><i class="fa-solid fa-check text-gold"></i> ${item}</li>
          `).join('')}
        </ul>
        <button class="btn btn-burgundy btn-sm subcat-inquire-btn" onclick="inquireSubcategoryOnWhatsApp('${sub.name}', '${currentCategory.title}')">
          <i class="fa-brands fa-whatsapp"></i> INQUIRE ABOUT ${sub.name.toUpperCase()} ON WHATSAPP
        </button>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   Filter & Search Controls
   -------------------------------------------------------------------------- */
function initFilterPills() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter');
      currentSubFilter = 'all';
      renderShowcase();
    });
  });
}

function setFilter(categoryName) {
  currentFilter = categoryName;
  currentSubFilter = 'all';
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => {
    if (p.getAttribute('data-filter') === categoryName) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
  renderShowcase();
  const showcaseSec = document.getElementById('collections');
  if (showcaseSec) {
    showcaseSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function initSearch() {
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderShowcase();
    });
  }
}

function findItemById(itemId) {
  let found = BOUTIQUE_COLLECTIONS.find(i => i.id === itemId);
  if (found) return found;

  for (const catKey in CATEGORY_PRODUCTS) {
    found = CATEGORY_PRODUCTS[catKey].find(i => i.id === itemId);
    if (found) return found;
  }
  return null;
}

/* --------------------------------------------------------------------------
   Detail Modal Logic
   -------------------------------------------------------------------------- */
function openDetailModal(itemId) {
  const item = findItemById(itemId);
  if (!item) return;

  const modal = document.getElementById('quickview-modal');
  if (!modal) return;

  document.getElementById('modal-img').src = item.image;
  document.getElementById('modal-title').textContent = item.name;
  document.getElementById('modal-category').textContent = item.categoryName;
  document.getElementById('modal-desc').textContent = item.description;
  document.getElementById('modal-finish').textContent = item.finish || '';
  document.getElementById('modal-availability').textContent = item.availability || 'In Stock at Studio';
  
  // Set WhatsApp Inquiry Link
  const waBtn = document.getElementById('modal-wa-btn');
  const waMessage = encodeURIComponent(`Hi! I'm inquiring about "${item.name}" from S.H.I.N.E✨ Studio. Can you provide details on availability or scheduling an in-store trial?`);
  waBtn.href = `https://wa.me/${STORE_PHONE}?text=${waMessage}`;

  modal.classList.add('active');
}

function closeDetailModal() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.remove('active');
}

function inquireOnWhatsApp(itemId) {
  const item = findItemById(itemId);
  if (!item) return;

  const message = encodeURIComponent(`Hi! I'm interested in "${item.name}" at S.H.I.N.E✨ Studio. Please let me know more details!`);
  window.open(`https://wa.me/${STORE_PHONE}?text=${message}`, '_blank');
}

/* --------------------------------------------------------------------------
   Appointment Booking Modal
   -------------------------------------------------------------------------- */
function initAppointmentModal() {
  const form = document.getElementById('appointment-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('appt-name').value;
    const phone = document.getElementById('appt-phone').value;
    const service = document.getElementById('appt-service').value;
    const date = document.getElementById('appt-date').value;

    showToast(`Thank you ${name}! Your store visit request has been submitted for ${service}.`, 5000);
    closeAppointmentModal();

    // Trigger WhatsApp visit notification
    const waText = encodeURIComponent(`Hi! My name is ${name} (${phone}). I would like to schedule a store visit at S.H.I.N.E✨ Studio for: ${service} on ${date}. Please confirm availability!`);
    window.open(`https://wa.me/${STORE_PHONE}?text=${waText}`, '_blank');

    form.reset();
  });
}

function openAppointmentModal(preselectService = 'Jewelry Styling Consultation') {
  const modal = document.getElementById('appointment-modal');
  const select = document.getElementById('appt-service');
  if (select && preselectService) {
    select.value = preselectService;
  }
  if (modal) modal.classList.add('active');
}

function closeAppointmentModal() {
  const modal = document.getElementById('appointment-modal');
  if (modal) modal.classList.remove('active');
}

/* --------------------------------------------------------------------------
   Toast Banner Utility
   -------------------------------------------------------------------------- */
function showToast(message, duration = 3000) {
  let toast = document.getElementById('website-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'website-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 24px;
      background: #ffffff;
      color: #2c151a;
      border: 1px solid #c89d53;
      padding: 14px 22px;
      border-radius: 10px;
      font-size: 0.88rem;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(60, 13, 24, 0.15);
      z-index: 9999;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 10px;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-crown text-gold"></i> ${message}`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, duration);
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer Controller
   -------------------------------------------------------------------------- */
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-menu-drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-menu-drawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}
