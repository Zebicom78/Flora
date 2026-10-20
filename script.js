/**
 * FLORA CITY — LUXURY REAL ESTATE APPLICATION SCRIPT
 * Production-ready Vanilla JavaScript (ES6+)
 * Inspired by Godrej Properties visual & functional hierarchy
 */

// ==========================================================================
// 1. DATA REPOSITORY (Demonstration Content Clearly Labelled)
// ==========================================================================

const FLORA_DATA = {
  projects: [
    {
      id: 'flora-botanica',
      name: 'Flora Botanica Residences',
      city: 'Gwalior',
      locality: 'City Center Extension',
      type: 'Residential',
      configurations: '2, 3 & 4 BHK Luxury Apartments',
      bedrooms: ['2 BHK', '3 BHK', '4 BHK'],
      priceStarting: '₹ 85 Lakhs*',
      priceNumeric: 8500000,
      status: 'Under Construction',
      possession: 'December 2027',
      image: '/src/assets/images/hero_luxury_residence_1792473663001.jpg',
      featured: true,
      tagline: 'Refined biophilic living with private botanical sky gardens.',
      overview: 'Flora Botanica Residences presents an elevated sanctuary situated in Gwalior\'s premier growth corridor. Thoughtfully oriented to capture prevailing breezes and abundant morning sunlight, each tower is enveloped by curated flora, tranquil reflection pools, and 78% open landscape.',
      highlights: [
        '78% dedicated green landscape & botanical conservatory',
        'Double-height air-conditioned entrance lobby with concierge',
        'State-of-the-art 35,000 sq.ft. clubhouse & infinity pool',
        'IGBC Pre-Certified Platinum green residential development',
        'Zero-vehicle ground level for uncompromised pedestrian safety'
      ],
      amenities: [
        { title: 'Temperature-Controlled Pool', desc: 'Olympic-size pool with sun cabanas' },
        { title: 'Sky Fitness Pavilion', desc: 'Technogym-equipped gymnasium & yoga deck' },
        { title: 'Private Forest Trail', desc: '1.2 km nature walkway lined with native flora' },
        { title: 'Organic Kitchen Garden', desc: 'Community farm-to-table herb and vegetable plots' },
        { title: 'Tennis & Squash Courts', desc: 'Championship-grade indoor & outdoor courts' },
        { title: 'Children\'s Discovery Zone', desc: 'Biophilic playground & sensory learning garden' }
      ],
      reraNumber: 'MPRERA/PRJ/DEMO/2026/089 (Demonstration RERA)',
      brochureUrl: '#download-brochure'
    },
    {
      id: 'the-flora-reserve',
      name: 'The Flora Reserve',
      city: 'Indore',
      locality: 'Super Corridor',
      type: 'Residential',
      configurations: '3 & 4 BHK Forest Villas & Penthouses',
      bedrooms: ['3 BHK', '4 BHK'],
      priceStarting: '₹ 1.85 Cr*',
      priceNumeric: 18500000,
      status: 'New Launch',
      possession: 'March 2028',
      image: '/src/assets/images/project_flora_grand_tower_1792473663159.jpg',
      featured: true,
      tagline: 'Exclusive low-density forest villas nestled along the Super Corridor.',
      overview: 'The Flora Reserve is an exclusive enclave of bespoke forest villas and sprawling penthouses. Built around a preserved woodland canopy, these residences offer double-height living areas, private dip pools, and panoramic parkland views.',
      highlights: [
        'Low-density living with only 12 residences per acre',
        'Private plunge pool and landscaped courtyard for each villa',
        'Dedicated 24/7 butler service & private estate management',
        'Solar microgrid powering all common utilities and charging bays',
        'Direct access to metro network and international airport corridor'
      ],
      amenities: [
        { title: 'Private Clubhouse', desc: 'The Reserve Lounge with banquet & wine cellar' },
        { title: 'Executive Golf Putting Green', desc: 'Championship 9-hole synthetic turf' },
        { title: 'Ayurvedic Spa & Hydrotherapy', desc: 'Treatment rooms & steam sanctuary' },
        { title: 'EV Charging Hub', desc: 'Fast DC chargers at every parking bay' },
        { title: 'Smart Home Automation', desc: 'Lutron lighting & Daikin VRV air-conditioning' },
        { title: '24/7 Triple-Layer Security', desc: 'Biometric access & perimeter smart sensors' }
      ],
      reraNumber: 'MPRERA/PRJ/DEMO/2026/104 (Demonstration RERA)',
      brochureUrl: '#download-brochure'
    },
    {
      id: 'flora-verdant-heights',
      name: 'Flora Verdant Heights',
      city: 'Bhopal',
      locality: 'Arera Hills',
      type: 'Residential',
      configurations: '3 & 4 BHK Sky Mansions',
      bedrooms: ['3 BHK', '4 BHK'],
      priceStarting: '₹ 1.45 Cr*',
      priceNumeric: 14500000,
      status: 'Ready to Move',
      possession: 'Immediate Possession',
      image: '/src/assets/images/values_sustainable_architecture_1792473663362.jpg',
      featured: true,
      tagline: 'Iconic panoramic lake-view residences in the prestigious heart of Bhopal.',
      overview: 'Flora Verdant Heights captures the calm elegance of lakeside living from high above Arera Hills. Crafted with Italian marble finishes, acoustic double-glazed windows, and wrap-around balconies, it offers panoramic vistas over Bhopal\'s natural waterways.',
      highlights: [
        'Immediate possession with Occupancy Certificate (OC) received',
        '360-degree lake and reserve forest vistas',
        'Private elevator foyer for signature 4 BHK suites',
        'Zero water wastage with multi-tier recycling systems',
        'Walking distance to cultural landmarks and administrative hub'
      ],
      amenities: [
        { title: 'Rooftop Infinity Lake Deck', desc: 'Panoramic sunset view lounge' },
        { title: 'Acoustic Mini-Theatre', desc: 'Dolby Atmos 24-seater screening room' },
        { title: 'Heated Jacuzzi & Sauna', desc: 'Year-round wellness suite' },
        { title: 'Business Lounge & Library', desc: 'Private meeting rooms & high-speed workstations' },
        { title: 'Fine Dining Café', desc: 'Artisanal coffee bar & outdoor terrace' },
        { title: 'Automated Car Wash Bay', desc: 'Complimentary eco-friendly service' }
      ],
      reraNumber: 'MPRERA/PRJ/DEMO/2025/042 (Demonstration RERA)',
      brochureUrl: '#download-brochure'
    },
    {
      id: 'flora-grand-avenue',
      name: 'Flora Grand Avenue',
      city: 'Delhi NCR',
      locality: 'Golf Course Extension Road',
      type: 'Commercial',
      configurations: 'Grade-A Office Suites & Retail Promenade',
      bedrooms: ['Commercial Suite', 'Retail Bay'],
      priceStarting: '₹ 1.20 Cr*',
      priceNumeric: 12000000,
      status: 'Under Construction',
      possession: 'August 2027',
      image: '/src/assets/images/project_flora_grand_tower_1792473663159.jpg',
      featured: false,
      tagline: 'Next-generation biophilic business park and luxury high-street promenade.',
      overview: 'Flora Grand Avenue redefines commercial excellence with climate-controlled open atriums, smart touchless turnstiles, and IGBC Net Zero Energy targets. Designed for forward-thinking enterprises and luxury flagships.',
      highlights: [
        'Double-glazed curtain wall minimizing solar thermal gain',
        'Floor-to-ceiling 3.8m clear office ceiling height',
        'Biophilic landscaped terraces on every alternate floor',
        'Direct multi-modal connectivity to rapid transit',
        'Dedicated VIP valet & multi-level basement parking'
      ],
      amenities: [
        { title: 'Auditorium & Conference Hub', desc: '200-seat multi-media conference venue' },
        { title: 'Open-Air Amphitheatre', desc: 'Landscaped cultural and events plaza' },
        { title: 'Corporate Wellness Center', desc: 'Pilates studio, nap pods & fitness club' },
        { title: 'Fine Dining Al Fresco Courtyard', desc: 'Michelin-starred & specialty restaurants' }
      ],
      reraNumber: 'HRERA/PRJ/DEMO/2026/310 (Demonstration RERA)',
      brochureUrl: '#download-brochure'
    },
    {
      id: 'flora-serene-woods',
      name: 'Flora Serene Woods',
      city: 'Bengaluru',
      locality: 'Whitefield',
      type: 'Residential',
      configurations: '2 & 3 BHK Biophilic Smart Homes',
      bedrooms: ['2 BHK', '3 BHK'],
      priceStarting: '₹ 1.10 Cr*',
      priceNumeric: 11000000,
      status: 'New Launch',
      possession: 'November 2028',
      image: '/src/assets/images/sustainability_green_living_1792473663058.jpg',
      featured: true,
      tagline: 'Quiet luxury nestled amid ancient banyan groves and organic orchards.',
      overview: 'Flora Serene Woods blends modern tech living with lush woodland tranquility. Located minutes from the tech hubs of Whitefield, this development preserves over 300 heritage trees within its 14-acre master plan.',
      highlights: [
        'Smart AI energy management reducing household utility bills',
        '80% open biophilic greens and butterfly sanctuary',
        'Electric vehicle charging infrastructure at all parking bays',
        'Rainwater percolation trenches recharging local aquifer',
        'Co-working hub embedded inside landscaped gardens'
      ],
      amenities: [
        { title: 'Woodland Club', desc: 'Natural stone clubhouse with indoor heated pool' },
        { title: 'Zen Meditation Deck', desc: 'Shaded bamboo pavilion for quiet reflection' },
        { title: 'Skatepark & Pump Track', desc: 'Recreational sporting zones for all ages' },
        { title: 'Pet Park & Agility Ring', desc: 'Dedicated exercise and grooming lawns' }
      ],
      reraNumber: 'K-RERA/PRJ/DEMO/2026/512 (Demonstration RERA)',
      brochureUrl: '#download-brochure'
    },
    {
      id: 'flora-solitaire',
      name: 'Flora Solitaire',
      city: 'Mumbai',
      locality: 'Worli Bay',
      type: 'Residential',
      configurations: '4 & 5 BHK Bespoke Sea-Facing Suites',
      bedrooms: ['4 BHK', '5 BHK'],
      priceStarting: '₹ 9.50 Cr*',
      priceNumeric: 95000000,
      status: 'Upcoming',
      possession: 'Expression of Interest (EOI)',
      image: '/assets/images/hero_skyline_penthouse_1792475200074.jpg',
      featured: true,
      tagline: 'An ultra-rare waterfront address commanding unobstructed views of the Arabian Sea.',
      overview: 'Flora Solitaire represents the pinnacle of residential prestige on the Mumbai coastline. Limited to only 48 bespoke sky residences, each floor houses a single expansive residence with 180-degree ocean views.',
      highlights: [
        'Only 48 exclusive residences with private lift access',
        'Wraparound viewing deck with infinity edge glass balustrade',
        '24/7 dedicated resident lifestyle concierge & valet',
        'High-velocity elevator travelling at 6 meters per second',
        'Private temperature-controlled wine cellar & humidor'
      ],
      amenities: [
        { title: 'Rooftop Helipad & Sky Lounge', desc: 'Skyline dining overlooking the sea' },
        { title: 'Private Screening Room', desc: 'Curated cinema experience for residents' },
        { title: 'Therapeutic Saltwater Pool', desc: 'Mineral heated spa & steam suite' },
        { title: 'Yacht Charter Concierge', desc: 'Exclusive marina booking access' }
      ],
      reraNumber: 'MAHARERA/PRJ/DEMO/2026/999 (Demonstration RERA)',
      brochureUrl: '#download-brochure'
    },
    {
      id: 'flora-grand-pavilion',
      name: 'Flora Grand Pavilion & Estates',
      city: 'Delhi NCR',
      locality: 'Sohna Road Sanctuary',
      type: 'Residential',
      configurations: '4 & 5 BHK Botanical Mansions',
      bedrooms: ['4 BHK', '5 BHK'],
      priceStarting: '₹ 4.80 Cr*',
      priceNumeric: 48000000,
      status: 'New Launch',
      possession: 'December 2028',
      image: '/assets/images/hero_botanical_pavilion_1792475216155.jpg',
      featured: true,
      tagline: 'Sculptural botanical gateways and generational private estates in a secure sanctuary.',
      overview: 'Flora Grand Pavilion sets a new benchmark in gated residential grandeur. Boasting triple-tier water cascades, bronze gateway architecture, and expansive 1-acre private garden plots surrounded by Aravali greenery.',
      highlights: [
        'Signature architectural entrance with cascading water features',
        'Private 1-acre botanical garden parcel for every mansion',
        'Multi-court sports pavilion & Olympic-length swimming pool',
        '24/7 armed private estate patrol & perimeter smart analytics',
        'Direct 15-minute signal-free access to central business hubs'
      ],
      amenities: [
        { title: 'The Pavilion Clubhouse', desc: '50,000 sq.ft. private member sanctuary' },
        { title: 'Indoor Heated Lap Pool', desc: 'Temperature controlled year-round aquatic facility' },
        { title: 'Clay Tennis & Squash Courts', desc: 'Championship standards with pro coaching' },
        { title: 'Private Dining Salon', desc: 'Michelin-curated catering kitchen for resident events' }
      ],
      reraNumber: 'HARERA/PRJ/DEMO/2026/778 (Demonstration RERA)',
      brochureUrl: '#download-brochure'
    }
  ],

  awards: [
    {
      year: '2025',
      title: 'Excellence in Sustainable Architecture',
      org: 'National Green Building Council',
      category: 'Sustainability',
      desc: 'Recognized for pioneering biophilic residential architecture with 75%+ green cover and zero-discharge water recycling.'
    },
    {
      year: '2025',
      title: 'Best Luxury Residential Development',
      org: 'Real Estate Design Forum Awards',
      category: 'Design & Luxury',
      desc: 'Awarded to Flora Botanica Residences for flawless structural integration of botanical gardens and smart luxury amenities.'
    },
    {
      year: '2024',
      title: 'Outstanding Masterplan & Community Living',
      org: 'Urban Habitat Guild',
      category: 'Masterplanning',
      desc: 'Honoring Flora City’s pedestrian-first residential enclaves and community-oriented open space planning.'
    },
    {
      year: '2024',
      title: 'Developer of the Year (Central India)',
      org: 'Apex Real Estate Leadership Conclave',
      category: 'Leadership',
      desc: 'Acknowledging Flora City’s commitment to architectural integrity, customer trust, and on-time project milestones.'
    }
  ],

  news: [
    {
      id: 'news-vision-urban-living',
      date: 'October 15, 2026',
      category: 'Corporate Announcement',
      title: 'Flora City Shares Its Vision for Thoughtful Urban Living & Biophilic Communities',
      summary: 'At the annual Urban Future Summit, Flora City unveiled its manifesto for nature-integrated residential architecture designed for wellness and longevity.',
      image: '/src/assets/images/values_sustainable_architecture_1792473663362.jpg',
      readTime: '4 min read',
      content: `At the annual Urban Future Summit held yesterday, Flora City leadership presented a comprehensive architectural roadmap that bridges contemporary luxury with regenerative environmental stewardship.
      
      "Real estate must evolve past mere square footage. Our mission at Flora City is to craft living environments where fresh air, natural sunlight, and thriving botanical landscapes are built directly into the fabric of everyday life," stated the executive address.
      
      The address highlighted how biophilic design principles improve cognitive wellbeing, reduce ambient temperature in residential communities, and create authentic bonds between neighbors.`
    },
    {
      id: 'news-super-corridor-phase2',
      date: 'September 28, 2026',
      category: 'Project Milestone',
      title: 'Flora City Announces Groundbreaking on Phase II of Forest Villas in Super Corridor',
      summary: 'Following overwhelming buyer response to Phase I, work begins on the next phase of luxury low-density villas surrounded by native woodlands.',
      image: '/src/assets/images/project_flora_grand_tower_1792473663159.jpg',
      readTime: '3 min read',
      content: `Flora City has formally commenced construction on Phase II of The Flora Reserve in Indore’s high-growth Super Corridor.
      
      Phase II adds 36 bespoke residences, each with private plunge pools, floor-to-ceiling low-E double-glazed glass, and direct access to an interconnected central ecological corridor.`
    },
    {
      id: 'news-net-zero-roadmap',
      date: 'August 19, 2026',
      category: 'Sustainability',
      title: 'Flora City Unveils Net-Zero Carbon Commitment Across Upcoming Residential Estates',
      summary: 'A new framework mandates 100% on-site rainwater harvesting, solar microgrids, and locally sourced low-carbon building materials for all future developments.',
      image: '/src/assets/images/sustainability_green_living_1792473663058.jpg',
      readTime: '5 min read',
      content: `Reaffirming its pledge towards responsible development, Flora City has announced that all projects launched from 2026 onward will target IGBC Net-Zero Energy and Net-Zero Water certifications.
      
      Through passive solar building orientation, high-efficiency geothermal cooling elements, and indigenous landscape choices, Flora City communities reduce overall lifecycle energy consumption by upwards of 42%.`
    }
  ],

  cities: ['All Cities', 'Gwalior', 'Indore', 'Bhopal', 'Delhi NCR', 'Bengaluru', 'Mumbai', 'Jaipur', 'Pune', 'Hyderabad'],

  careers: [
    { title: 'Senior Project Architect (Biophilic Design)', dept: 'Architecture & Design', location: 'Corporate Office', type: 'Full-time' },
    { title: 'Manager — Sustainable Construction & ESG', dept: 'Engineering', location: 'Indore / Gwalior', type: 'Full-time' },
    { title: 'Senior Relationship Manager (Luxury Residences)', dept: 'Sales & Advisory', location: 'Bhopal / Delhi NCR', type: 'Full-time' },
    { title: 'Quality Assurance & Structural Engineer', dept: 'Civil Engineering', location: 'Multiple Sites', type: 'Full-time' }
  ]
};

// ==========================================================================
// 2. REUSABLE RENDERING TEMPLATES
// ==========================================================================

function createProjectCardHTML(project) {
  return `
    <article class="project-card" data-city="${project.city}" data-type="${project.type}" data-status="${project.status}" data-id="${project.id}">
      <div class="project-card-image-wrap">
        <img 
          src="${project.image}" 
          alt="${project.name} - ${project.locality}, ${project.city}" 
          class="project-card-img" 
          loading="lazy"
          onerror="this.src='/src/assets/images/hero_luxury_residence_1792473663001.jpg'"
        />
        <span class="project-badge-status">${project.status}</span>
      </div>
      <div class="project-card-body">
        <span class="project-card-location">${project.locality}, ${project.city}</span>
        <h3 class="project-card-title">${project.name}</h3>
        <div class="project-card-meta">
          <span>${project.configurations}</span>
        </div>
        <div class="project-card-pricing-row">
          <div>
            <span class="price-label">Starting Price</span>
            <div class="price-value">${project.priceStarting}</div>
          </div>
          <div style="text-align: right;">
            <span class="price-label">Possession</span>
            <div style="font-size: 0.875rem; font-weight: 600; color: var(--color-charcoal);">${project.possession}</div>
          </div>
        </div>
        <div class="project-card-actions">
          <button class="btn btn-outline-forest btn-know-more" data-id="${project.id}" aria-label="View details for ${project.name}">
            Know More
          </button>
          <button class="btn btn-gold btn-enquire-project" data-project="${project.name}" aria-label="Enquire about ${project.name}">
            Enquire
          </button>
        </div>
      </div>
    </article>
  `;
}

function createAwardCardHTML(award) {
  return `
    <article class="award-card">
      <div class="award-year">${award.year} · ${award.category.toUpperCase()}</div>
      <h3 class="award-title">${award.title}</h3>
      <div class="award-org">${award.org}</div>
      <p class="award-desc">${award.desc}</p>
    </article>
  `;
}

function createNewsCardHTML(news) {
  return `
    <article class="news-card" data-news-id="${news.id}">
      <div class="news-card-img-wrap">
        <img 
          src="${news.image}" 
          alt="${news.title}" 
          class="news-card-img" 
          loading="lazy"
          onerror="this.src='/src/assets/images/values_sustainable_architecture_1792473663362.jpg'"
        />
      </div>
      <div class="news-card-body">
        <div class="news-meta-row">
          <span>${news.category}</span>
          <span aria-hidden="true">·</span>
          <span>${news.date}</span>
          <span aria-hidden="true">·</span>
          <span>${news.readTime}</span>
        </div>
        <h3 class="news-card-title">${news.title}</h3>
        <p class="news-card-desc">${news.summary}</p>
        <button class="btn-link btn-read-news" data-news-id="${news.id}" style="margin-top: auto;">
          Read Story
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </article>
  `;
}

// ==========================================================================
// 3. CORE INTERACTIVE CONTROLLERS
// ==========================================================================

class FloraApp {
  constructor() {
    this.currentHeroIndex = 0;
    this.heroInterval = null;
    this.projectCarouselIndex = 0;
    this.awardsCarouselIndex = 0;
    this.newsCarouselIndex = 0;
    this.init();
  }

  init() {
    this.setupHeaderScroll();
    this.setupDrawerNavigation();
    this.setupSearchModal();
    this.setupHeroCarousel();
    this.setupFeaturedProjectsCarousel();
    this.setupLocationFilters();
    this.setupAwardsCarousel();
    this.setupNewsCarousel();
    this.setupModals();
    this.setupForms();
    this.setupBackToTop();
    this.setupFooterAccordions();
    this.setupProjectsFilterPage();
    this.setupMobileStickyBar();
    this.setupHeroRecommendations();
    this.checkUrlForModals();
  }

  // --- Header Sticky Behavior ---
  setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- Full-Screen Navigation Drawer ---
  setupDrawerNavigation() {
    const toggleBtn = document.querySelector('.menu-toggle-btn');
    const closeBtn = document.querySelector('.drawer-close-btn');
    const drawer = document.querySelector('.nav-drawer');
    const overlay = document.querySelector('.drawer-overlay');

    if (!drawer) return;

    const openMenu = () => {
      drawer.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.classList.add('menu-open');
    };

    const closeMenu = () => {
      drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.classList.remove('menu-open');
    };

    if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Escape Key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu();
      }
    });

    // Submenu expandable toggles (+ / -)
    const submenuToggles = drawer.querySelectorAll('.drawer-submenu-toggle');
    submenuToggles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const parent = btn.closest('.drawer-nav-item');
        const submenu = parent.querySelector('.drawer-submenu');
        if (submenu) {
          const isExpanded = submenu.classList.toggle('expanded');
          btn.textContent = isExpanded ? '−' : '+';
          btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        }
      });
    });

    // Close menu when clicking normal links
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  // --- Search Overlay with Live Filtering ---
  setupSearchModal() {
    const searchBtns = document.querySelectorAll('.btn-open-search');
    const searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-close-btn');
    const searchInput = document.querySelector('.search-input');
    const resultsContainer = document.querySelector('.search-results-list');

    if (!searchModal) return;

    const openSearch = () => {
      searchModal.classList.add('open');
      document.body.classList.add('modal-open');
      setTimeout(() => { if (searchInput) searchInput.focus(); }, 150);
    };

    const closeSearch = () => {
      searchModal.classList.remove('open');
      document.body.classList.remove('modal-open');
      if (searchInput) searchInput.value = '';
      if (resultsContainer) resultsContainer.innerHTML = '';
    };

    searchBtns.forEach(btn => btn.addEventListener('click', openSearch));
    if (searchClose) searchClose.addEventListener('click', closeSearch);

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('open')) {
        closeSearch();
      }
    });

    if (searchInput && resultsContainer) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 2) {
          resultsContainer.innerHTML = '<div style="color: rgba(255,255,255,0.5); padding: 1rem 0;">Type at least 2 characters to search across Flora City estates, locations, and updates...</div>';
          return;
        }

        const matchedProjects = FLORA_DATA.projects.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query) ||
          p.locality.toLowerCase().includes(query) ||
          p.configurations.toLowerCase().includes(query)
        );

        const matchedNews = FLORA_DATA.news.filter(n =>
          n.title.toLowerCase().includes(query) ||
          n.category.toLowerCase().includes(query)
        );

        if (matchedProjects.length === 0 && matchedNews.length === 0) {
          resultsContainer.innerHTML = `<div style="color: rgba(255,255,255,0.7); padding: 1.5rem 0;">No verified matches found for "<strong>${query}</strong>". Explore our Gwalior, Indore, or Bhopal estates.</div>`;
          return;
        }

        let html = '';
        matchedProjects.forEach(p => {
          html += `
            <div class="search-result-item" onclick="window.floraApp.openProjectDetailModal('${p.id}')" style="cursor: pointer;">
              <div>
                <div style="font-size: 0.75rem; color: var(--color-gold); text-transform: uppercase;">Project · ${p.city}</div>
                <div style="font-weight: 600; font-size: 1.05rem;">${p.name}</div>
                <div style="font-size: 0.8125rem; color: rgba(255,255,255,0.6);">${p.configurations} · ${p.priceStarting}</div>
              </div>
              <span class="btn-link" style="color: var(--color-gold);">View Details →</span>
            </div>
          `;
        });

        matchedNews.forEach(n => {
          html += `
            <div class="search-result-item" onclick="window.floraApp.openNewsDetailModal('${n.id}')" style="cursor: pointer;">
              <div>
                <div style="font-size: 0.75rem; color: var(--color-gold); text-transform: uppercase;">Media · ${n.category}</div>
                <div style="font-weight: 600; font-size: 1.05rem;">${n.title}</div>
                <div style="font-size: 0.8125rem; color: rgba(255,255,255,0.6);">${n.date}</div>
              </div>
              <span class="btn-link" style="color: var(--color-gold);">Read Story →</span>
            </div>
          `;
        });

        resultsContainer.innerHTML = html;
      });
    }
  }

  // --- Section A: Hero Banner & Image Slider ---
  setupHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const thumbCards = document.querySelectorAll('.hero-thumb-card');
    const dots = document.querySelectorAll('.hero-dot');
    const currentNumDisplay = document.querySelector('.hero-current-num');
    const totalNumDisplay = document.querySelector('.hero-total-num');
    const prevBtn = document.querySelector('.hero-prev-btn');
    const nextBtn = document.querySelector('.hero-next-btn');
    const sidePrevBtn = document.querySelector('.hero-side-prev');
    const sideNextBtn = document.querySelector('.hero-side-next');
    const heroContainer = document.querySelector('.hero-section');

    if (!slides.length) return;

    if (totalNumDisplay) {
      totalNumDisplay.textContent = String(slides.length).padStart(2, '0');
    }

    const resetProgressBar = (card) => {
      const bar = card.querySelector('.hero-thumb-progress-bar');
      if (bar) {
        bar.style.animation = 'none';
        void bar.offsetWidth; // trigger reflow
        bar.style.animation = '';
      }
    };

    const showSlide = (index) => {
      const safeIndex = (index + slides.length) % slides.length;

      // Update slide visibility
      slides.forEach((s, i) => {
        const isActive = i === safeIndex;
        s.classList.toggle('active', isActive);
        s.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });

      // Update desktop/tablet thumbnail cards
      thumbCards.forEach((c, i) => {
        const isActive = i === safeIndex;
        c.classList.toggle('active', isActive);
        c.setAttribute('aria-selected', isActive ? 'true' : 'false');
        if (isActive) {
          resetProgressBar(c);
          // Smoothly scroll active thumbnail into view if track overflows
          c.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
        }
      });

      // Update mobile pagination dots
      dots.forEach((dot, i) => {
        const isActive = i === safeIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Update fraction counter
      if (currentNumDisplay) {
        currentNumDisplay.textContent = String(safeIndex + 1).padStart(2, '0');
      }

      this.currentHeroIndex = safeIndex;
    };

    const nextSlide = () => {
      showSlide(this.currentHeroIndex + 1);
    };

    const prevSlide = () => {
      showSlide(this.currentHeroIndex - 1);
    };

    // Bottom strip arrows
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); restartAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); restartAutoPlay(); });

    // Side navigation chevrons
    if (sideNextBtn) sideNextBtn.addEventListener('click', () => { nextSlide(); restartAutoPlay(); });
    if (sidePrevBtn) sidePrevBtn.addEventListener('click', () => { prevSlide(); restartAutoPlay(); });

    // Thumbnail cards click & key navigation
    thumbCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        showSlide(idx);
        restartAutoPlay();
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showSlide(idx);
          restartAutoPlay();
        }
      });
    });

    // Mobile pagination dots click & key navigation
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        restartAutoPlay();
      });

      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showSlide(idx);
          restartAutoPlay();
        }
      });
    });

    // Keyboard Arrow navigation when focus is inside hero
    if (heroContainer) {
      heroContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          nextSlide();
          restartAutoPlay();
        } else if (e.key === 'ArrowLeft') {
          prevSlide();
          restartAutoPlay();
        }
      });
    }

    // Touch Swipe Gesture support for mobile devices
    let touchStartX = 0;
    let touchStartY = 0;
    if (heroContainer) {
      heroContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      heroContainer.addEventListener('touchend', (e) => {
        const diffX = touchStartX - e.changedTouches[0].clientX;
        const diffY = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          restartAutoPlay();
        }
      }, { passive: true });
    }

    // Auto rotate every 6 seconds, pause on hover / touch
    const startAutoPlay = () => {
      if (!this.heroInterval) {
        this.heroInterval = setInterval(nextSlide, 6000);
      }
    };

    const stopAutoPlay = () => {
      if (this.heroInterval) {
        clearInterval(this.heroInterval);
        this.heroInterval = null;
      }
    };

    const restartAutoPlay = () => {
      stopAutoPlay();
      startAutoPlay();
    };

    if (heroContainer) {
      heroContainer.addEventListener('mouseenter', stopAutoPlay);
      heroContainer.addEventListener('mouseleave', startAutoPlay);
      heroContainer.addEventListener('touchstart', stopAutoPlay, { passive: true });
    }

    // Initial activation
    showSlide(0);
    startAutoPlay();
  }

  // --- Section A.2: Hero Curated Property Recommendations & Matcher ---
  setupHeroRecommendations() {
    const recWidget = document.getElementById('hero-rec-widget');
    if (!recWidget) return;

    const citySelect = document.getElementById('hero-rec-city');
    const typeSelect = document.getElementById('hero-rec-type');
    const budgetSelect = document.getElementById('hero-rec-budget');
    const countBadge = document.getElementById('hero-rec-count');
    const categoryBtns = document.querySelectorAll('.hero-rec-cat-btn');
    const resultsDrawer = document.getElementById('hero-rec-drawer');
    const resultsContainer = document.getElementById('hero-rec-cards-container');
    const resultsTitle = document.getElementById('hero-rec-drawer-title');
    const resultsMeta = document.getElementById('hero-rec-drawer-meta');
    const closeBtn = document.getElementById('hero-rec-drawer-close');
    const form = document.getElementById('hero-rec-form');

    let currentCategory = 'all';

    // Metadata & Match calculation for each project
    const getProjectRecData = (p) => {
      let score = 95;
      let usp = p.tagline || 'Curated luxury residence';
      let matchLabel = 'Top Recommendation';
      let tags = ['all'];

      if (p.id === 'flora-botanica') {
        score = 98;
        usp = '78% dedicated botanical landscape & 35,000 sq.ft. clubhouse';
        matchLabel = 'Best for Families';
        tags.push('budget', 'green');
      } else if (p.id === 'the-flora-reserve') {
        score = 99;
        usp = 'Low-density living (12 residences/acre) with private plunge pool';
        matchLabel = 'Best Forest Villa';
        tags.push('villas', 'ultra');
      } else if (p.id === 'flora-solitaire') {
        score = 99;
        usp = 'Only 48 rare sea-facing sky suites commanding Worli Bay';
        matchLabel = 'Signature Waterfront';
        tags.push('waterfront', 'ultra');
      } else if (p.id === 'flora-grand-pavilion') {
        score = 97;
        usp = 'Sculptural bronze gates & 1-acre private botanical gardens';
        matchLabel = 'Prestigious Enclave';
        tags.push('villas', 'ultra');
      } else if (p.id === 'flora-verdant-heights') {
        score = 96;
        usp = 'Ready to move with OC received & 360° lakeview terraces';
        matchLabel = 'Ready to Move';
        tags.push('ready', 'waterfront', 'budget');
      } else if (p.id === 'flora-serene-woods') {
        score = 98;
        usp = 'Smart AI energy efficiency & heritage banyan tree sanctuary';
        matchLabel = 'Best for Tech Leaders';
        tags.push('budget', 'green');
      }

      return { score, usp, matchLabel, tags };
    };

    // Filter projects based on current selections
    const filterProjects = () => {
      const city = citySelect ? citySelect.value : 'all';
      const type = typeSelect ? typeSelect.value : 'all';
      const budget = budgetSelect ? budgetSelect.value : 'all';

      return FLORA_DATA.projects.filter(p => {
        // Exclude commercial suites from home recommendations unless specifically matching all
        if (p.type === 'Commercial' && (type !== 'all' || budget !== 'all' || currentCategory !== 'all')) return false;

        // Category filter
        if (currentCategory === 'ready' && p.status !== 'Ready to Move') return false;
        if (currentCategory === 'waterfront' && !p.id.includes('solitaire') && !p.id.includes('verdant')) return false;
        if (currentCategory === 'villas' && !p.id.includes('reserve') && !p.id.includes('pavilion')) return false;
        if (currentCategory === 'ultra' && (!p.priceNumeric || p.priceNumeric < 18500000)) return false;
        if (currentCategory === 'budget' && (!p.priceNumeric || p.priceNumeric > 15000000)) return false;

        // City filter
        if (city !== 'all' && p.city !== city) return false;

        // Typology filter
        if (type !== 'all') {
          if (type === 'Villas' && !p.configurations.toLowerCase().includes('villa') && !p.configurations.toLowerCase().includes('mansion')) return false;
          if (type !== 'Villas' && !p.bedrooms.includes(type)) return false;
        }

        // Budget filter
        if (budget === 'under-1cr' && p.priceNumeric > 10000000) return false;
        if (budget === '1cr-2cr' && (p.priceNumeric < 10000000 || p.priceNumeric > 20000000)) return false;
        if (budget === '2cr-5cr' && (p.priceNumeric < 20000000 || p.priceNumeric > 50000000)) return false;
        if (budget === 'ultra' && p.priceNumeric < 50000000) return false;

        return true;
      });
    };

    // Update the live counter badge on the Find button
    const updateCount = () => {
      const matches = filterProjects();
      if (countBadge) {
        countBadge.textContent = matches.length;
        countBadge.style.transform = 'scale(1.25)';
        setTimeout(() => { countBadge.style.transform = 'scale(1)'; }, 200);
      }
    };

    // Render recommendation cards into the drawer
    const renderRecommendations = () => {
      const matches = filterProjects();
      if (countBadge) countBadge.textContent = matches.length;

      if (resultsTitle) {
        const catBtn = document.querySelector('.hero-rec-cat-btn.active');
        const catLabel = catBtn ? catBtn.textContent.trim() : 'Curated Top Picks';
        resultsTitle.textContent = `${matches.length} Recommended Residences (${catLabel})`;
      }

      if (resultsMeta) {
        resultsMeta.textContent = `Personalized matches ranked by architectural pedigree, lifestyle fit & capital growth`;
      }

      if (!resultsContainer) return;

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 2.5rem 1rem; text-align: center; color: rgba(255,255,255,0.85);">
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--color-gold);">✦</div>
            <h5 style="color: var(--color-white); font-family: var(--font-serif); font-size: 1.15rem; margin-bottom: 0.5rem;">No exact match for these specific filters</h5>
            <p style="font-size: 0.8125rem; color: rgba(255,255,255,0.7); max-width: 440px; margin: 0 auto 1.25rem;">
              Our private concierge can source bespoke off-market residences that align precisely with your vision.
            </p>
            <button class="btn btn-gold" onclick="window.floraApp.openEnquiryModal('Bespoke Recommendation Concierge')">
              Connect With Flora Concierge
            </button>
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = matches.map(p => {
        const { score, usp, matchLabel } = getProjectRecData(p);
        const imgSrc = p.image.replace('/src/assets/images/', '/assets/images/');
        return `
          <div class="hero-rec-card" data-project-id="${p.id}">
            <div class="hero-rec-card-media">
              <img src="${imgSrc}" alt="${p.name}" class="hero-rec-card-img" loading="lazy" />
              <div class="hero-rec-card-score">★ ${score}% Match · ${matchLabel}</div>
              <div class="hero-rec-card-status">${p.status}</div>
            </div>
            <div class="hero-rec-card-body">
              <span class="hero-rec-card-city">${p.city} · ${p.locality}</span>
              <h5 class="hero-rec-card-title">${p.name}</h5>
              <div class="hero-rec-card-config">${p.configurations}</div>
              <p class="hero-rec-card-usp">${usp}</p>
              <div class="hero-rec-card-footer">
                <span class="hero-rec-card-price">${p.priceStarting}</span>
                <div class="hero-rec-card-actions">
                  <button type="button" class="hero-rec-card-btn hero-rec-btn-primary" onclick="window.floraApp.openProjectDetailModal('${p.id}')">
                    View Project
                  </button>
                  <button type="button" class="hero-rec-card-btn hero-rec-btn-secondary" onclick="window.floraApp.openSiteVisitModal('${p.name}')">
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    };

    const openDrawer = () => {
      renderRecommendations();
      if (resultsDrawer) {
        resultsDrawer.style.display = 'flex';
        resultsDrawer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('rec-drawer-open');
      }
    };

    const closeDrawer = () => {
      if (resultsDrawer) {
        resultsDrawer.style.display = 'none';
        resultsDrawer.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('rec-drawer-open');
      }
    };

    // Category Buttons click handler
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        currentCategory = btn.getAttribute('data-category');

        updateCount();
        openDrawer();
      });
    });

    // Select change listeners for real-time count
    [citySelect, typeSelect, budgetSelect].forEach(sel => {
      if (sel) {
        sel.addEventListener('change', () => {
          updateCount();
          if (resultsDrawer && resultsDrawer.style.display === 'flex') {
            renderRecommendations();
          }
        });
      }
    });

    // Form submit
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        openDrawer();
      });
    }

    // Close button
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resultsDrawer && resultsDrawer.style.display === 'flex') {
        closeDrawer();
      }
    });

    // Expose helpers on FloraApp instance
    this.filterHeroRecommendations = openDrawer;
    this.closeHeroRecommendations = closeDrawer;

    // Initial count
    updateCount();
  }

  // --- Section C: Featured Projects Carousel ---
  setupFeaturedProjectsCarousel() {
    const track = document.querySelector('.projects-track');
    const prevBtn = document.querySelector('.projects-prev-btn');
    const nextBtn = document.querySelector('.projects-next-btn');

    if (!track) return;

    // Render featured project cards
    const featuredProjects = FLORA_DATA.projects.filter(p => p.featured);
    track.innerHTML = featuredProjects.map(createProjectCardHTML).join('');

    const getCardWidth = () => {
      const firstCard = track.querySelector('.project-card');
      return firstCard ? firstCard.offsetWidth + 28 : 420;
    };

    const updateTrack = () => {
      const offset = this.projectCarouselIndex * getCardWidth();
      track.style.transform = `translateX(-${offset}px)`;
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const maxIndex = Math.max(0, featuredProjects.length - (window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1));
        if (this.projectCarouselIndex < maxIndex) {
          this.projectCarouselIndex++;
        } else {
          this.projectCarouselIndex = 0;
        }
        updateTrack();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.projectCarouselIndex > 0) {
          this.projectCarouselIndex--;
        } else {
          const maxIndex = Math.max(0, featuredProjects.length - (window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1));
          this.projectCarouselIndex = maxIndex;
        }
        updateTrack();
      });
    }

    // Touch swipe support
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (diff > 50 && nextBtn) nextBtn.click();
      if (diff < -50 && prevBtn) prevBtn.click();
    }, { passive: true });

    // Delegate "Know More" & "Enquire" buttons inside track
    track.addEventListener('click', (e) => {
      const knowMoreBtn = e.target.closest('.btn-know-more');
      if (knowMoreBtn) {
        const id = knowMoreBtn.getAttribute('data-id');
        this.openProjectDetailModal(id);
      }

      const enquireBtn = e.target.closest('.btn-enquire-project');
      if (enquireBtn) {
        const projectName = enquireBtn.getAttribute('data-project');
        this.openEnquiryModal(projectName);
      }
    });
  }

  // --- Section D: Explore Projects by Location ---
  setupLocationFilters() {
    const container = document.querySelector('.location-filtered-grid');
    const pillsContainer = document.querySelector('.city-pill-selector');

    if (!container || !pillsContainer) return;

    const renderGrid = (selectedCity) => {
      const matches = selectedCity === 'All Cities' 
        ? FLORA_DATA.projects 
        : FLORA_DATA.projects.filter(p => p.city.toLowerCase() === selectedCity.toLowerCase());

      if (matches.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <h4 class="empty-state-title">Expansion in Progress for ${selectedCity}</h4>
            <p class="empty-state-desc">Flora City currently has premier developments underway in Gwalior, Indore, Bhopal, Delhi NCR, and Bengaluru. New land parcels in ${selectedCity} are undergoing architectural feasibility and environmental assessment.</p>
            <button class="btn btn-outline-forest" onclick="window.floraApp.openSiteVisitModal()">
              Register Interest for ${selectedCity}
            </button>
          </div>
        `;
        return;
      }

      container.innerHTML = matches.map(createProjectCardHTML).join('');
    };

    // Render city pills
    pillsContainer.innerHTML = FLORA_DATA.cities.map((city, idx) => `
      <button class="city-pill-btn ${idx === 0 ? 'active' : ''}" data-city="${city}">
        ${city}
      </button>
    `).join('');

    pillsContainer.querySelectorAll('.city-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        pillsContainer.querySelectorAll('.city-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const city = btn.getAttribute('data-city');
        renderGrid(city);
      });
    });

    // Initial render
    renderGrid('All Cities');

    // Delegate buttons
    container.addEventListener('click', (e) => {
      const knowMoreBtn = e.target.closest('.btn-know-more');
      if (knowMoreBtn) {
        const id = knowMoreBtn.getAttribute('data-id');
        this.openProjectDetailModal(id);
      }
      const enquireBtn = e.target.closest('.btn-enquire-project');
      if (enquireBtn) {
        const projectName = enquireBtn.getAttribute('data-project');
        this.openEnquiryModal(projectName);
      }
    });
  }

  // --- Section E: Awards Carousel ---
  setupAwardsCarousel() {
    const track = document.querySelector('.awards-track');
    const prevBtn = document.querySelector('.awards-prev-btn');
    const nextBtn = document.querySelector('.awards-next-btn');

    if (!track) return;

    track.innerHTML = FLORA_DATA.awards.map(createAwardCardHTML).join('');

    const getCardWidth = () => {
      const firstCard = track.querySelector('.award-card');
      return firstCard ? firstCard.offsetWidth + 24 : 360;
    };

    const updateTrack = () => {
      track.style.transform = `translateX(-${this.awardsCarouselIndex * getCardWidth()}px)`;
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const max = Math.max(0, FLORA_DATA.awards.length - (window.innerWidth > 1024 ? 3 : 1));
        this.awardsCarouselIndex = this.awardsCarouselIndex < max ? this.awardsCarouselIndex + 1 : 0;
        updateTrack();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.awardsCarouselIndex = this.awardsCarouselIndex > 0 ? this.awardsCarouselIndex - 1 : Math.max(0, FLORA_DATA.awards.length - 1);
        updateTrack();
      });
    }
  }

  // --- Section G: News Carousel ---
  setupNewsCarousel() {
    const track = document.querySelector('.news-track');
    const prevBtn = document.querySelector('.news-prev-btn');
    const nextBtn = document.querySelector('.news-next-btn');

    if (!track) return;

    track.innerHTML = FLORA_DATA.news.map(createNewsCardHTML).join('');

    const getCardWidth = () => {
      const firstCard = track.querySelector('.news-card');
      return firstCard ? firstCard.offsetWidth + 28 : 390;
    };

    const updateTrack = () => {
      track.style.transform = `translateX(-${this.newsCarouselIndex * getCardWidth()}px)`;
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const max = Math.max(0, FLORA_DATA.news.length - (window.innerWidth > 1024 ? 3 : 1));
        this.newsCarouselIndex = this.newsCarouselIndex < max ? this.newsCarouselIndex + 1 : 0;
        updateTrack();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.newsCarouselIndex = this.newsCarouselIndex > 0 ? this.newsCarouselIndex - 1 : Math.max(0, FLORA_DATA.news.length - 1);
        updateTrack();
      });
    }

    track.addEventListener('click', (e) => {
      const readBtn = e.target.closest('.btn-read-news');
      if (readBtn) {
        const newsId = readBtn.getAttribute('data-news-id');
        this.openNewsDetailModal(newsId);
      }
    });
  }

  // --- Modals Setup (Enquiry, Site Visit, Project Details, Lightbox) ---
  setupModals() {
    const enquiryModal = document.querySelector('#enquiry-modal');
    const siteVisitModal = document.querySelector('#site-visit-modal');
    const projectDetailModal = document.querySelector('#project-detail-modal');
    const lightboxModal = document.querySelector('#lightbox-modal');

    // General close handlers
    document.querySelectorAll('.site-modal').forEach(modal => {
      const closeBtn = modal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.classList.remove('open');
          document.body.classList.remove('modal-open');
        });
      }

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          document.body.classList.remove('modal-open');
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.site-modal.open, .lightbox-modal.open').forEach(m => {
          m.classList.remove('open');
        });
        document.body.classList.remove('modal-open');
      }
    });

    // Wire universal CTA buttons
    document.querySelectorAll('.btn-trigger-enquiry').forEach(btn => {
      btn.addEventListener('click', () => {
        const project = btn.getAttribute('data-project') || 'General Luxury Portfolio';
        this.openEnquiryModal(project);
      });
    });

    document.querySelectorAll('.btn-trigger-site-visit').forEach(btn => {
      btn.addEventListener('click', () => {
        const project = btn.getAttribute('data-project') || '';
        this.openSiteVisitModal(project);
      });
    });

    if (lightboxModal) {
      const lbClose = lightboxModal.querySelector('.lightbox-close-btn');
      if (lbClose) {
        lbClose.addEventListener('click', () => {
          lightboxModal.classList.remove('open');
          document.body.classList.remove('modal-open');
        });
      }
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
          lightboxModal.classList.remove('open');
          document.body.classList.remove('modal-open');
        }
      });
    }
  }

  openEnquiryModal(projectName) {
    const modal = document.querySelector('#enquiry-modal');
    if (!modal) return;
    const select = modal.querySelector('#enquiry-project');
    if (select) {
      select.value = projectName || select.options[0]?.value;
    }
    const alert = modal.querySelector('.form-alert');
    if (alert) alert.style.display = 'none';

    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  openSiteVisitModal(projectName) {
    const modal = document.querySelector('#site-visit-modal');
    if (!modal) return;
    const select = modal.querySelector('#visit-project');
    if (select && projectName) {
      select.value = projectName;
    }
    const dateInput = modal.querySelector('#visit-date');
    if (dateInput) {
      // Prevent selecting past dates: set min to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.min = tomorrow.toISOString().split('T')[0];
    }
    const alert = modal.querySelector('.form-alert');
    if (alert) alert.style.display = 'none';

    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  openProjectDetailModal(projectId) {
    const project = FLORA_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.querySelector('#project-detail-modal');
    if (!modal) return;

    const contentBox = modal.querySelector('.project-detail-content-target');
    if (contentBox) {
      contentBox.innerHTML = `
        <div style="margin-bottom: 1.5rem; position: relative; border-radius: var(--radius-sm); overflow: hidden; height: 320px;">
          <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem; background: linear-gradient(to top, rgba(13,38,27,0.95), transparent); color: #fff;">
            <div style="font-size: 0.8125rem; color: var(--color-gold); font-weight: 600; text-transform: uppercase;">${project.locality}, ${project.city}</div>
            <h2 style="font-family: var(--font-serif); font-size: 1.75rem; margin-top: 0.25rem;">${project.name}</h2>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 2rem; background: var(--color-ivory); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-muted); text-transform: uppercase;">Configuration</span>
            <div style="font-weight: 600; font-size: 0.95rem; color: var(--color-forest-dark);">${project.configurations}</div>
          </div>
          <div>
            <span style="font-size: 0.75rem; color: var(--color-muted); text-transform: uppercase;">Starting Price</span>
            <div style="font-weight: 700; font-size: 1.1rem; color: var(--color-forest-dark);">${project.priceStarting}</div>
          </div>
          <div>
            <span style="font-size: 0.75rem; color: var(--color-muted); text-transform: uppercase;">Status</span>
            <div style="font-weight: 600; font-size: 0.95rem; color: var(--color-forest-dark);">${project.status}</div>
          </div>
          <div>
            <span style="font-size: 0.75rem; color: var(--color-muted); text-transform: uppercase;">Possession</span>
            <div style="font-weight: 600; font-size: 0.95rem; color: var(--color-forest-dark);">${project.possession}</div>
          </div>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-forest-dark); margin-bottom: 0.75rem;">Overview</h4>
          <p style="font-size: 0.95rem; color: var(--color-muted); line-height: 1.65;">${project.overview}</p>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-forest-dark); margin-bottom: 1rem;">Project Highlights</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
            ${project.highlights.map(h => `
              <li style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9375rem; color: var(--color-charcoal);">
                <span style="color: var(--color-gold); font-size: 1.1rem; line-height: 1;">✦</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-forest-dark); margin-bottom: 1rem;">Exclusive Amenities</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
            ${project.amenities.map(a => `
              <div style="background: var(--color-ivory); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                <div style="font-weight: 600; font-size: 0.95rem; color: var(--color-forest-dark); margin-bottom: 0.25rem;">${a.title}</div>
                <div style="font-size: 0.8125rem; color: var(--color-muted);">${a.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: #F4EEDF; border: 1px solid rgba(201,166,90,0.3); padding: 1rem 1.25rem; border-radius: var(--radius-sm); margin-bottom: 2rem; font-size: 0.8125rem; color: #5B4823;">
          <strong>RERA Verification:</strong> ${project.reraNumber}. All specifications, artist renderings, and layouts are for illustrative demonstration.
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--color-border); padding-top: 1.5rem;">
          <button class="btn btn-gold" onclick="window.floraApp.openEnquiryModal('${project.name}')">
            Request Callback
          </button>
          <button class="btn btn-outline-forest" onclick="window.floraApp.openSiteVisitModal('${project.name}')">
            Schedule a Site Visit
          </button>
          <button class="btn btn-primary" onclick="alert('Demo Brochure: Real estate specifications and floor plans will download once brochure PDF is connected.')">
            Download Brochure (PDF)
          </button>
        </div>
      `;
    }

    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  openNewsDetailModal(newsId) {
    const news = FLORA_DATA.news.find(n => n.id === newsId);
    if (!news) return;

    const modal = document.querySelector('#project-detail-modal');
    if (!modal) return;

    const contentBox = modal.querySelector('.project-detail-content-target');
    if (contentBox) {
      contentBox.innerHTML = `
        <div style="margin-bottom: 1.5rem; position: relative; border-radius: var(--radius-sm); overflow: hidden; height: 260px;">
          <img src="${news.image}" alt="${news.title}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div style="font-size: 0.8125rem; color: var(--color-gold); font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem;">
          ${news.category} · ${news.date}
        </div>
        <h2 style="font-family: var(--font-serif); font-size: 1.75rem; color: var(--color-forest-dark); margin-bottom: 1.25rem; line-height: 1.3;">
          ${news.title}
        </h2>
        <div style="font-size: 0.95rem; color: var(--color-charcoal); line-height: 1.75; white-space: pre-line; margin-bottom: 2rem;">
          ${news.content}
        </div>
        <div style="border-top: 1px solid var(--color-border); padding-top: 1.5rem;">
          <button class="btn btn-outline-forest" onclick="document.querySelector('#project-detail-modal').classList.remove('open'); document.body.classList.remove('modal-open');">
            ← Back to News & Media
          </button>
        </div>
      `;
    }

    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  // --- Form Validation & Submission Demonstration ---
  setupForms() {
    // 1. Enquiry Form
    const enquiryForm = document.querySelector('#enquiry-form');
    if (enquiryForm) {
      enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = enquiryForm.querySelector('[name="name"]')?.value.trim();
        const email = enquiryForm.querySelector('[name="email"]')?.value.trim();
        const phone = enquiryForm.querySelector('[name="phone"]')?.value.trim();
        const consent = enquiryForm.querySelector('[name="consent"]')?.checked;
        const alert = enquiryForm.querySelector('.form-alert');

        if (!name || !email || !phone || !consent) {
          if (alert) {
            alert.className = 'form-alert error';
            alert.textContent = 'Please fill out all required fields and accept the privacy consent.';
            alert.style.display = 'block';
          }
          return;
        }

        // Email regex
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          if (alert) {
            alert.className = 'form-alert error';
            alert.textContent = 'Please provide a valid email address.';
            alert.style.display = 'block';
          }
          return;
        }

        // Phone check
        if (!/^\d{10}$/.test(phone.replace(/[^0-9]/g, ''))) {
          if (alert) {
            alert.className = 'form-alert error';
            alert.textContent = 'Please provide a valid 10-digit mobile number.';
            alert.style.display = 'block';
          }
          return;
        }

        if (alert) {
          alert.className = 'form-alert success';
          alert.innerHTML = `<strong>Thank you, ${name}!</strong> Your enquiry has been registered for demonstration. Our advisory team will contact you at ${phone}.`;
          alert.style.display = 'block';
        }
        enquiryForm.reset();
      });
    }

    // 2. Site Visit Form
    const visitForm = document.querySelector('#site-visit-form');
    if (visitForm) {
      visitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = visitForm.querySelector('[name="name"]')?.value.trim();
        const phone = visitForm.querySelector('[name="phone"]')?.value.trim();
        const email = visitForm.querySelector('[name="email"]')?.value.trim();
        const project = visitForm.querySelector('[name="project"]')?.value;
        const date = visitForm.querySelector('[name="date"]')?.value;
        const time = visitForm.querySelector('[name="time"]')?.value;
        const consent = visitForm.querySelector('[name="consent"]')?.checked;
        const alert = visitForm.querySelector('.form-alert');

        if (!name || !phone || !email || !project || !date || !time || !consent) {
          if (alert) {
            alert.className = 'form-alert error';
            alert.textContent = 'Please complete all fields and acknowledge the privacy statement.';
            alert.style.display = 'block';
          }
          return;
        }

        if (new Date(date) <= new Date()) {
          if (alert) {
            alert.className = 'form-alert error';
            alert.textContent = 'Site visit dates must be scheduled at least one day in advance.';
            alert.style.display = 'block';
          }
          return;
        }

        if (alert) {
          alert.className = 'form-alert success';
          alert.innerHTML = `<strong>Visit Reserved!</strong> We look forward to welcoming you to ${project} on <strong>${date} (${time})</strong>. A concierge briefing has been sent to ${email}.`;
          alert.style.display = 'block';
        }
        visitForm.reset();
      });
    }

    // 3. Contact Us Form (if present on contact page or section)
    const contactForm = document.querySelector('#contact-main-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('[name="name"]')?.value.trim();
        const email = contactForm.querySelector('[name="email"]')?.value.trim();
        const message = contactForm.querySelector('[name="message"]')?.value.trim();
        const alert = contactForm.querySelector('.form-alert');

        if (!name || !email || !message) {
          if (alert) {
            alert.className = 'form-alert error';
            alert.textContent = 'Please provide your name, email, and message.';
            alert.style.display = 'block';
          }
          return;
        }

        if (alert) {
          alert.className = 'form-alert success';
          alert.innerHTML = `<strong>Message Received, ${name}!</strong> Our corporate desk will review your enquiry and respond to ${email}.`;
          alert.style.display = 'block';
        }
        contactForm.reset();
      });
    }
  }

  // --- Projects Listing Page with Full Filtering ---
  setupProjectsFilterPage() {
    const grid = document.querySelector('#all-projects-grid');
    if (!grid) return;

    const searchInput = document.querySelector('#filter-search');
    const citySelect = document.querySelector('#filter-city');
    const typeSelect = document.querySelector('#filter-type');
    const statusSelect = document.querySelector('#filter-status');
    const sortSelect = document.querySelector('#filter-sort');
    const resetBtn = document.querySelector('#filter-reset-btn');
    const countDisplay = document.querySelector('#filter-count-display');
    const gridViewBtn = document.querySelector('#view-grid-btn');
    const listViewBtn = document.querySelector('#view-list-btn');

    const applyFilters = () => {
      const query = (searchInput?.value || '').trim().toLowerCase();
      const city = citySelect?.value || 'all';
      const type = typeSelect?.value || 'all';
      const status = statusSelect?.value || 'all';
      const sort = sortSelect?.value || 'default';

      let results = FLORA_DATA.projects.filter(p => {
        const matchesQuery = !query || 
          p.name.toLowerCase().includes(query) ||
          p.locality.toLowerCase().includes(query) ||
          p.configurations.toLowerCase().includes(query);

        const matchesCity = city === 'all' || p.city.toLowerCase() === city.toLowerCase();
        const matchesType = type === 'all' || p.type.toLowerCase() === type.toLowerCase();
        const matchesStatus = status === 'all' || p.status.toLowerCase() === status.toLowerCase();

        return matchesQuery && matchesCity && matchesType && matchesStatus;
      });

      // Sorting
      if (sort === 'price-low') {
        results.sort((a, b) => a.priceNumeric - b.priceNumeric);
      } else if (sort === 'price-high') {
        results.sort((a, b) => b.priceNumeric - a.priceNumeric);
      } else if (sort === 'name') {
        results.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (countDisplay) {
        countDisplay.textContent = `Showing ${results.length} of ${FLORA_DATA.projects.length} verified developments`;
      }

      if (results.length === 0) {
        grid.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1;">
            <h4 class="empty-state-title">No matching developments found</h4>
            <p class="empty-state-desc">Try resetting your search query or selecting a different city or project status filter.</p>
            <button class="btn btn-outline-forest" id="empty-state-reset">Reset All Filters</button>
          </div>
        `;
        const emptyReset = grid.querySelector('#empty-state-reset');
        if (emptyReset) emptyReset.addEventListener('click', resetFilters);
        return;
      }

      grid.innerHTML = results.map(createProjectCardHTML).join('');
    };

    const resetFilters = () => {
      if (searchInput) searchInput.value = '';
      if (citySelect) citySelect.value = 'all';
      if (typeSelect) typeSelect.value = 'all';
      if (statusSelect) statusSelect.value = 'all';
      if (sortSelect) sortSelect.value = 'default';
      applyFilters();
    };

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (citySelect) citySelect.addEventListener('change', applyFilters);
    if (typeSelect) typeSelect.addEventListener('change', applyFilters);
    if (statusSelect) statusSelect.addEventListener('change', applyFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);

    if (gridViewBtn && listViewBtn) {
      gridViewBtn.addEventListener('click', () => {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        grid.classList.remove('list-view');
      });

      listViewBtn.addEventListener('click', () => {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        grid.classList.add('list-view');
      });
    }

    grid.addEventListener('click', (e) => {
      const knowMoreBtn = e.target.closest('.btn-know-more');
      if (knowMoreBtn) {
        const id = knowMoreBtn.getAttribute('data-id');
        this.openProjectDetailModal(id);
      }
      const enquireBtn = e.target.closest('.btn-enquire-project');
      if (enquireBtn) {
        const projectName = enquireBtn.getAttribute('data-project');
        this.openEnquiryModal(projectName);
      }
    });

    // Initial render
    applyFilters();
  }

  // --- Back to Top ---
  setupBackToTop() {
    const btn = document.querySelector('.back-to-top-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Mobile Footer Accordions ---
  setupFooterAccordions() {
    const columns = document.querySelectorAll('.footer-column');
    columns.forEach(col => {
      const headerBtn = col.querySelector('.footer-column-header');
      const linksList = col.querySelector('.footer-column-links');
      const icon = col.querySelector('.footer-accordion-icon');

      if (headerBtn && linksList && window.innerWidth < 900) {
        headerBtn.addEventListener('click', () => {
          const isOpen = linksList.classList.toggle('open');
          if (icon) icon.textContent = isOpen ? '−' : '+';
        });
      }
    });
  }

  // --- Mobile Sticky Quick-Action Bar Scroll Reveal ---
  setupMobileStickyBar() {
    const bar = document.querySelector('.mobile-sticky-bar');
    const hero = document.querySelector('.hero-section');
    if (!bar) return;

    const onScroll = () => {
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 300;
      if (heroBottom < 120) {
        bar.style.transform = 'translateY(0)';
      } else {
        bar.style.transform = 'translateY(115%)';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  checkUrlForModals() {
    const hash = window.location.hash;
    if (hash === '#enquire') {
      this.openEnquiryModal();
    } else if (hash === '#site-visit') {
      this.openSiteVisitModal();
    }
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.floraApp = new FloraApp();
});
