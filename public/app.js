
const homeTemplate = `
<!-- Hero Section -->
<section class="relative min-h-[870px] flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover" data-alt="lush organic greenhouse background with rows of vibrant green leafy plants and soft diffused natural daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC576GAwGyH9Z9oglFEXhdNgYWsBAU9pgoRd0VSaKYONRIQkJtfZBfrBa5yXI8JABf2DxVCrwYNThs0-5uGLp9eP7onCqXWGiBAYsmW2DpfSCNN8IqhNx4dVTvMjs3tQinwj7u0s4juCmS_tixtL_2H9ziKpV6rlPiGTvowAJtkloMgytt7ruQcdbXYIXAjXVtfugvanPdNbrOG3fC7OVsP8pLxgQqLQnMl3j6FiCFwW7WzL58FWR9tJXamp1TfZibwuRLKTjaKXRQ"/>
<div class="absolute inset-0 bg-gradient-to-r from-[#faf9f5] via-[#faf9f5]/40 to-transparent"></div>
</div>
<div class="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
<div class="max-w-2xl space-y-6">
<span class="font-label text-sm uppercase tracking-[0.2em] text-secondary font-bold">Natural Aloe Vera</span>
<h1 class="font-headline text-7xl md:text-8xl text-primary font-black leading-[0.9] tracking-tighter">
                        Pure Organics,<br/><span class="italic font-light text-secondary">Special Offers.</span>
</h1>
<p class="font-body text-lg text-on-surface-variant max-w-lg leading-relaxed">
                        Sustainably harvested and cold-pressed to maintain ultimate purity. Discover the therapeutic power of nature's most resilient plants.
                    </p>
<div class="pt-4 flex gap-4">
<button class="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-bold editorial-shadow hover:scale-105 transition-transform">
                            Shop Now
                        </button>
<button class="bg-transparent border border-outline-variant/15 text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                            Learn More
                        </button>
</div>
</div>
</div>
<!-- Floating Organic Element -->
<div class="absolute right-[5%] bottom-[10%] w-1/3 max-w-md hidden lg:block">
<img class="rounded-3xl rotate-3 editorial-shadow border-[12px] border-white" data-alt="close up of organic aloe vera leaves on a clean linen background with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALgpzMj2B6sGSackXd4FPm69K5HlMi0AR5Y5cW1IMeEw390Ijy4-HFmkESmzsVoj5aidtTHtHkLd2LPy3EPYMdtWWnzgTu6bnDdAfxyP5pTxD6RHOAhu6SpUAUw0ANC8uxP6PwJvfrLJTZjYbZwppHCjrAhH7jmOmu79tiumQx0vLMJc3xzQl_IM3TDjSk0lCpToPv1p9JMiQynJjBgalw1-mlj_d8QSKzsmBc844CZCehVDFEOLpM8PqOsYqXMLbV-40oIiLzmlA"/>
</div>
</section>
<!-- Promotional Banners -->
<section class="max-w-screen-2xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-12">
<div class="relative h-96 group overflow-hidden rounded-[2rem] bg-surface-container-low">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="top down view of fresh citrus fruits and green vegetables beautifully arranged on a wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAymRuIs0A4ZQhxzzgZqwykRBo31TIDEGy6D1S4lyetmkNNELfUJymMST9AUzh6ofignneDsIkMtweLu8v8wClGAOHN9MpPqVADpnCvsIPmuPbjzr83O1DjvtSZdFArEgnZk2FSg_884ad72pzzulwObal06KfDM95Pzf44yF3eoRzHSZQUA9THg0f6q1Jjugm2RQtnJVxkBADxUA0tc8MkMAaZVqhio47emg1YBc2ujP34SwUOU1fWS68m671VfSpjb0CaQZi-brc"/>
<div class="absolute inset-0 bg-black/10"></div>
<div class="absolute bottom-12 left-12 text-white">
<span class="font-label uppercase tracking-widest text-xs font-bold mb-2 block">Weekly Deal</span>
<h2 class="font-headline text-4xl font-bold mb-4">Up to 70% Discount</h2>
<button class="text-white border-b-2 border-white/50 pb-1 font-bold hover:border-white transition-all">Shop Collection</button>
</div>
</div>
<div class="relative h-96 group overflow-hidden rounded-[2rem] bg-surface-container-low">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="handcrafted ceramic bottles of organic oils surrounded by dried lavender and sage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAclmTz3Q2xWqbOg5SEbA7OExeqnFXf13MzcH_q0QfzHkonS7I3LVR-mjQJ14dX2y8mz8ZeVHuXQdLu9skS3ViJdip1gwVZ8E_zlyWm-sN2bJ-rGYNfp1dqYauxBy7ZS7RNGoBNIuLJbmi9oMStoyuEI4UZuMl_wYzosQfIIHCklhALApuyO1tWp_LaUzwE5SBrBWBObB2hs1n3zuTnku69PcbLchZ0M3YuoiN88DGn1ezcd4p4G6jtCuZFlk39lCMGonuPiIeVDvg"/>
<div class="absolute inset-0 bg-black/10"></div>
<div class="absolute bottom-12 left-12 text-white">
<span class="font-label uppercase tracking-widest text-xs font-bold mb-2 block">New Arrivals</span>
<h2 class="font-headline text-4xl font-bold mb-4">Artisan Oils</h2>
<button class="text-white border-b-2 border-white/50 pb-1 font-bold hover:border-white transition-all">Explore Boutique</button>
</div>
</div>
</section>
<!-- Featured Products -->
<section class="bg-surface-container-low py-32">
<div class="max-w-screen-2xl mx-auto px-8">
<div class="flex justify-between items-end mb-16">
<div>
<span class="font-label text-sm uppercase tracking-widest text-secondary font-bold">Curated for you</span>
<h2 class="font-headline text-5xl font-black text-primary mt-2">Featured Products</h2>
</div>
<div class="flex gap-4">
<button class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-white transition-colors">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-white transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<!-- Products will be loaded from the backend here -->
</div>
</div>
</section>
<!-- Testimonials -->
<section class="py-32 overflow-hidden">
<div class="max-w-screen-xl mx-auto px-8 relative">
<div class="text-center max-w-3xl mx-auto mb-20">
<span class="material-symbols-outlined text-6xl text-primary-fixed block mb-6">format_quote</span>
<h2 class="font-headline text-4xl font-bold text-primary leading-relaxed">
                        "The quality of these organic extracts is unparalleled. Since switching to Modern Agrarian, my daily ritual feels more connected to nature than ever before."
                    </h2>
<div class="mt-8 flex items-center justify-center gap-4">
<img class="w-16 h-16 rounded-full object-cover border-4 border-white editorial-shadow" data-alt="portrait of a woman smiling outdoors in soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU2Df7EotbSISku0jkDCcqKcSc159YgdJ0jpR_sVgyN308PWVNzvj-brEHbw2M_8mlRYxXbaVZw7AkNCQOoNLJjLITF55G4Swz8q_YRs0PzTKzihr2Z26IdNqSdcOniQGm4RiDWO_IJzmdzb5OOqklEPbMUO6XBe2ZXQq0ai1Bj4kwO58z5ncyNdR87Ilza3rQ7eiIQhQn2JIIRwTWzB79mqdB8OrOmTvmB6ofcRVeMJby8XjZJEJeGcT0GHggtbKwdZz76oYw6wo"/>
<div class="text-left">
<p class="font-bold text-primary">Helena West</p>
<p class="text-sm text-secondary">Aesthetic Consultant</p>
</div>
</div>
</div>
</div>
</section>
<!-- Recent Posts -->
<section class="max-w-screen-2xl mx-auto px-8 py-32 border-t border-outline-variant/15">
<div class="flex justify-between items-center mb-16">
<h2 class="font-headline text-5xl font-black text-primary">Recent Posts</h2>
<a class="font-bold text-primary border-b-2 border-primary/20 hover:border-primary transition-all" href="#">Read Journal</a>
</div>
<div class="grid md:grid-cols-3 gap-12">
<article class="group cursor-pointer">
<div class="aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="misty morning in an organic apple orchard with dew on the leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBSJ9_EKK4aS26Z2gYy-lUlZqadH4H0Xu_foJwojFwpZprne9xJPISh6S8kW0vkYrB37TPsHpQIKvb5dpguVaKZAUoj2U4Dtit9qm1zvQpBwHdUdcnRVgkFZ1UAtGeFKPagql-Ztxt7SV-ozh6UHmyZAXDD4Y1S9vWSgj8iCJ1tQCETM9FTLyNBIhTjtFK70VjvjjpLwBzuVRNaBxYO2hR5Z9gMNK2Wc1D8Na6aqIfIuvibUqnJpS1YAXoKB0OdTId273QnmfiVG4"/>
</div>
<span class="font-label text-xs uppercase tracking-widest text-secondary font-bold">April 12, 2024</span>
<h3 class="font-headline text-2xl font-bold text-primary mt-4 group-hover:text-tertiary transition-colors">The Art of Slow Harvesting</h3>
<p class="text-on-surface-variant mt-4 leading-relaxed line-clamp-2">Why timing is everything when it comes to preserving the nutrients in our cold-pressed oils.</p>
</article>
<article class="group cursor-pointer">
<div class="aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="overhead shot of fresh vegetables and culinary herbs on a wooden cutting board" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3f2DfVsFlWgJBH5OXg3jv43b_7OISo788-9mvPGCJgAxRZGnMJpDTdQkU2I2eTGpdPyvNUd2UNaTdluPOsJ5kqkGtFd7OMykAm7blEgnWy1k2iJ5-NgtT-Na85tnzUKX-LJyU_3hYi7f6GrEImDO_Mw8QCG84kGLGXsYoU9twWhlGjch7nCbQW7l6EuoKAxopBn0xfBI6aibLPLfM0oZQl6_YKmQnQc85GlXEo0ofmr7ALEaffC0vJg3rAB-bByEJXGeQ7MxxIKY"/>
</div>
<span class="font-label text-xs uppercase tracking-widest text-secondary font-bold">April 08, 2024</span>
<h3 class="font-headline text-2xl font-bold text-primary mt-4 group-hover:text-tertiary transition-colors">Spring Recipe: Wild Herb Salad</h3>
<p class="text-on-surface-variant mt-4 leading-relaxed line-clamp-2">A refreshing blend of dandelion, arugula, and citrus with our signature balsamic reduction.</p>
</article>
<article class="group cursor-pointer">
<div class="aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="close up of high quality essential oil being dropped into a bowl of flower petals" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgdRwTwE2ycOMoBKfsOATsjRr7uqt0hTLloKRLI9KePn5SR4TMQmQ8G59Tq2qXJ8Y7LQCKhTvQzBajAeRzOIVfzrO1hhLRHaI5XonafTAjghydk6eEaf4XZb8j3KhuTW-0dzC8H3X4cGK0EsCJxFT96V5WK8jlKFjcccaP71e8PreyowwIlij15saLbbsqvDC5uBQqprvS_UWi8Sx6lEVuZKiQZj9t99d0am319QWPoeHRsrmBo291LJCT15pkq6gpn7YPZtMzMA"/>
</div>
<span class="font-label text-xs uppercase tracking-widest text-secondary font-bold">April 01, 2024</span>
<h3 class="font-headline text-2xl font-bold text-primary mt-4 group-hover:text-tertiary transition-colors">Essential Oils for Deep Rest</h3>
<p class="text-on-surface-variant mt-4 leading-relaxed line-clamp-2">How to incorporate lavender and sandalwood into your evening wind-down routine.</p>
</article>
</div>
</section>
<!-- Newsletter Signup -->
<section class="relative py-40 overflow-hidden mx-8 rounded-[3rem] editorial-shadow mb-32">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover" data-alt="vibrant market stall with crates of fresh citrus, tomatoes, and greens in golden sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD414VndwTZkmGk7kcdytB0xeDB7qC4HePjuDY5XwOEKaXXrM8xNVcqCflt2soDdryO7JD5jyIXCDDF40oaw543Qzdi0lkpSGOIi3yrVrIbD-En_MRRQzULT1UTeG4cZy65cKHRkahEH_pEjAo3Vhbj2pn3cHXn3uo4Is7-fD62HkEJ0CWvLAlnPPekZmmS3bbN8i5mAJHNeW_24M9BPhV4lsqPyVJmPUjoJLBcrn4tBIE04cWLogHRkh11J8pBRMEP6-_dJX0mnaA"/>
<div class="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
</div>
<div class="relative z-10 max-w-xl mx-auto text-center text-white px-8">
<h2 class="font-headline text-5xl font-bold mb-6">Join Our Table</h2>
<p class="mb-10 text-white/80 font-body text-lg">Receive seasonal recipes, farm updates, and exclusive access to limited-run harvests directly in your inbox.</p>
<form id="newsletter-form" class="flex flex-col sm:flex-row gap-4 relative">
<input id="newsletter-email" class="flex-1 bg-white/20 border border-white/30 rounded-full px-8 py-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md" placeholder="Your email address" type="email" required/>
<button class="bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform editorial-shadow" type="submit">Subscribe</button>
<div id="newsletter-message" class="absolute top-full mt-2 w-full text-center text-sm font-bold opacity-0 transition-opacity"></div>
</form>
<p class="mt-6 text-xs text-white/60 font-label tracking-widest">We respect your privacy. Unsubscribe at any time.</p>
</div>
</section>
`;

const templates = {
    home: homeTemplate,
    shop: `
        <section class="max-w-screen-2xl mx-auto px-8 py-32">
            <h2 class="font-headline text-5xl font-black text-primary mb-16">Shop Collection</h2>
            <div id="shop-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"></div>
        </section>
    `,
    farms: `
        <section class="max-w-screen-2xl mx-auto px-8 py-32 text-center min-h-[60vh] flex flex-col justify-center">
            <h2 class="font-headline text-6xl font-black text-primary mb-8">Our Partner Farms</h2>
            <p class="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">We partner with ethical, organic farms across the Napa Valley to bring you the purest botanical extracts. The Modern Agrarian standard ensures regenerative agriculture is used at every step.</p>
        </section>
    `,
    story: `
        <section class="max-w-screen-2xl mx-auto px-8 py-32 min-h-[60vh] flex flex-col justify-center">
            <h2 class="font-headline text-6xl font-black text-primary mb-8 text-center">Cultivating Quality</h2>
            <p class="text-xl text-secondary max-w-3xl mx-auto leading-relaxed text-center">Dedicated to the art of sustainable cultivation since 1992. It started with a simple belief: nature provides the best remedies.</p>
        </section>
    `,
    recipes: `
        <section class="max-w-screen-2xl mx-auto px-8 py-32 min-h-[60vh] flex flex-col justify-center">
            <h2 class="font-headline text-6xl font-black text-primary mb-8 text-center">Journal & Recipes</h2>
            <p class="text-xl text-secondary max-w-3xl mx-auto leading-relaxed text-center">Explore seasonal recipes, farm updates, and exclusive access to limited-run harvests.</p>
        </section>
    `
};

// Simple pseudo-selector polyfill for :contains
function findButtonContaining(root, text) {
    return Array.from(root.querySelectorAll('button')).find(btn => btn.textContent.trim() === text);
}

const app = {
    cart: [],
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.loadCart();
        this.router();
        window.addEventListener('hashchange', () => this.router());
    },
    cacheDOM() {
        this.appRoot = document.getElementById('app-root');
        this.cartDrawer = document.getElementById('cart-drawer');
        this.cartOverlay = document.getElementById('cart-overlay');
        
        // Find cart button (the one with shopping_cart material icon)
        const cartIcon = Array.from(document.querySelectorAll('span.material-symbols-outlined')).find(span => span.textContent === 'shopping_cart');
        this.cartBtn = cartIcon ? cartIcon.closest('button') : null;
        
        this.closeCartBtn = document.getElementById('close-cart');
        this.cartItems = document.getElementById('cart-items');
        this.cartTotal = document.getElementById('cart-total');
        this.checkoutBtn = document.getElementById('checkout-btn');
        this.cartBadge = document.querySelector('header span.bg-tertiary');
        
        // Navigation links (Top NavBar)
        const navLinks = document.querySelectorAll('header nav a');
        if(navLinks.length >= 4) {
            navLinks[0].href = '#shop';
            navLinks[1].href = '#farms';
            navLinks[2].href = '#story';
            navLinks[3].href = '#recipes';
        }
        
        // Logo link
        const logo = document.querySelector('header .text-2xl');
        if(logo) {
            logo.style.cursor = 'pointer';
            logo.addEventListener('click', () => window.location.hash = '#home');
        }
    },
    bindEvents() {
        if(this.cartBtn) this.cartBtn.addEventListener('click', () => this.toggleCart());
        if(this.closeCartBtn) this.closeCartBtn.addEventListener('click', () => this.toggleCart());
        if(this.cartOverlay) this.cartOverlay.addEventListener('click', () => this.toggleCart());
        if(this.checkoutBtn) this.checkoutBtn.addEventListener('click', () => this.checkout());
    },
    router() {
        const hash = window.location.hash.substring(1) || 'home';
        const template = templates[hash] || templates.home;
        this.appRoot.innerHTML = template;
        
        if (hash === 'home') {
            this.initHome();
        } else if (hash === 'shop') {
            this.initShop();
        }
        window.scrollTo(0, 0);
    },
    async initHome() {
        // Wiring up Hero and Banner buttons
        const shopNowBtn = findButtonContaining(this.appRoot, 'Shop Now');
        if(shopNowBtn) shopNowBtn.addEventListener('click', () => window.location.hash = '#shop');
        
        const learnMoreBtn = findButtonContaining(this.appRoot, 'Learn More');
        if(learnMoreBtn) learnMoreBtn.addEventListener('click', () => window.location.hash = '#story');

        const shopCollectionBtn = findButtonContaining(this.appRoot, 'Shop Collection');
        if(shopCollectionBtn) shopCollectionBtn.addEventListener('click', () => window.location.hash = '#shop');
        
        const exploreBoutiqueBtn = findButtonContaining(this.appRoot, 'Explore Boutique');
        if(exploreBoutiqueBtn) exploreBoutiqueBtn.addEventListener('click', () => window.location.hash = '#shop');

        // Wiring Carousel Arrows
        const leftArrow = findButtonContaining(this.appRoot, 'chevron_left') || Array.from(this.appRoot.querySelectorAll('button')).find(b => b.innerHTML.includes('chevron_left'));
        const rightArrow = findButtonContaining(this.appRoot, 'chevron_right') || Array.from(this.appRoot.querySelectorAll('button')).find(b => b.innerHTML.includes('chevron_right'));
        
        if (leftArrow) {
            leftArrow.addEventListener('click', () => {
                const grid = document.getElementById('product-grid');
                if(grid) grid.scrollBy({left: -300, behavior: 'smooth'});
            });
        }
        if (rightArrow) {
            rightArrow.addEventListener('click', () => {
                const grid = document.getElementById('product-grid');
                if(grid) grid.scrollBy({left: 300, behavior: 'smooth'});
            });
        }
        
        // Newsletter
        const newsletterForm = document.getElementById('newsletter-form');
        if(newsletterForm) {
            newsletterForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const email = document.getElementById('newsletter-email').value;
                const messageEl = document.getElementById('newsletter-message');
                try {
                    const res = await fetch('/api/subscribe', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email })
                    });
                    const data = await res.json();
                    messageEl.textContent = data.message || data.error;
                    messageEl.className = `absolute top-full mt-2 w-full text-center text-sm font-bold opacity-100 ${res.ok ? 'text-white' : 'text-[#ff947c]'}`;
                    if (res.ok) document.getElementById('newsletter-email').value = '';
                    setTimeout(() => {
                        messageEl.classList.remove('opacity-100');
                        messageEl.classList.add('opacity-0');
                    }, 3000);
                } catch (err) {
                    console.error(err);
                }
            });
        }
        
        // Make product grid horizontally scrollable for carousel effect
        const grid = document.getElementById('product-grid');
        if(grid) {
            grid.className = "flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 no-scrollbar scroll-smooth";
        }
        
        this.loadProducts(true, 'product-grid', true);
    },
    async initShop() {
        this.loadProducts(false, 'shop-grid', false);
    },
    async loadProducts(featuredOnly, gridId, isCarousel) {
        try {
            const response = await fetch(`/api/products${featuredOnly ? '?featured=true' : ''}`);
            const products = await response.json();
            const grid = document.getElementById(gridId);
            if(!grid) return;
            grid.innerHTML = '';
            
            products.forEach(product => {
                let tagHtml = '';
                if (product.tag) {
                    const bgClass = product.tagColor === 'tertiary' ? 'bg-tertiary text-white' : 
                                  (product.tagColor === 'primary' ? 'bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-[10px]' : 
                                  'bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs');
                    
                    const posClass = product.tagPosition === 'right' ? 'top-4 right-4' : 'top-4 left-4';
                    tagHtml = `<div class="absolute ${posClass} ${bgClass} font-bold">${product.tag}</div>`;
                }

                let ratingHtml = '';
                for (let i = 0; i < 5; i++) {
                    ratingHtml += `<span class="material-symbols-outlined text-sm" ${i < product.rating ? 'style="font-variation-settings: \'FILL\' 1;"' : ''}>star</span>`;
                }

                let priceHtml = product.originalPrice ? 
                    `<div class="flex gap-2"><span class="text-secondary font-bold">$${product.price.toFixed(2)}</span><span class="text-outline line-through text-sm">$${product.originalPrice.toFixed(2)}</span></div>` : 
                    `<span class="text-secondary font-bold">$${product.price.toFixed(2)}</span>`;

                const wrapperClass = isCarousel ? "group min-w-[280px] snap-start" : "group";

                const cardHtml = `
                <div class="${wrapperClass}">
                    <div class="relative aspect-square mb-6 overflow-hidden rounded-[1.5rem] bg-white editorial-shadow">
                        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="${product.imageAlt}" src="${product.image}"/>
                        ${tagHtml}
                        <div class="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/80 glass-nav">
                            <button onclick="app.addToCart(${product.id}, '${product.name.replace(/'/g, "\'")}', ${product.price}, '${product.image}')" class="w-full bg-primary text-white py-3 rounded-full font-bold text-sm hover:bg-tertiary transition-colors">Add to Cart</button>
                        </div>
                    </div>
                    <h3 class="font-headline text-xl font-bold text-primary">${product.name}</h3>
                    <div class="flex justify-between items-center mt-2">
                        ${priceHtml}
                        <div class="flex gap-1 text-tertiary">
                            ${ratingHtml}
                        </div>
                    </div>
                </div>
                `;
                grid.innerHTML += cardHtml;
            });
        } catch(e) {
            console.error("Failed to load products: ", e);
        }
    },
    addToCart(id, name, price, image) {
        const existing = this.cart.find(i => i.id === id);
        if(existing) {
            existing.qty++;
        } else {
            this.cart.push({ id, name, price, image, qty: 1 });
        }
        this.saveCart();
        this.updateCartUI();
        this.toggleCart(true); // Open cart Drawer
    },
    removeFromCart(id) {
        this.cart = this.cart.filter(i => i.id !== id);
        this.saveCart();
        this.updateCartUI();
    },
    updateQty(id, delta) {
        const item = this.cart.find(i => i.id === id);
        if(item) {
            item.qty += delta;
            if(item.qty <= 0) this.removeFromCart(id);
            else {
                this.saveCart();
                this.updateCartUI();
            }
        }
    },
    saveCart() {
        localStorage.setItem('ma_cart', JSON.stringify(this.cart));
    },
    loadCart() {
        const saved = localStorage.getItem('ma_cart');
        if(saved) this.cart = JSON.parse(saved);
        this.updateCartUI();
    },
    updateCartUI() {
        // Update Badge
        const count = this.cart.reduce((sum, item) => sum + item.qty, 0);
        if(this.cartBadge) {
            this.cartBadge.textContent = count;
            this.cartBadge.style.display = count > 0 ? 'inline-flex' : 'none';
        }
        
        // Update Drawer Items
        if(!this.cartItems) return;
        this.cartItems.innerHTML = '';
        let total = 0;
        
        if(this.cart.length === 0) {
            this.cartItems.innerHTML = '<p class="text-secondary text-center mt-10">Your cart is empty.</p>';
        } else {
            this.cart.forEach(item => {
                total += item.price * item.qty;
                this.cartItems.innerHTML += `
                    <div class="flex gap-4 items-center border-b border-outline-variant/15 pb-4">
                        <img src="${item.image}" class="w-16 h-16 object-cover rounded-lg" />
                        <div class="flex-1">
                            <h4 class="font-bold text-sm text-primary">${item.name}</h4>
                            <p class="text-secondary text-sm">$${item.price.toFixed(2)}</p>
                            <div class="flex items-center gap-3 mt-2">
                                <button onclick="app.updateQty(${item.id}, -1)" class="w-6 h-6 rounded-full border border-outline-variant flex items-center justify-center text-xs hover:bg-surface-variant">-</button>
                                <span class="text-sm font-bold">${item.qty}</span>
                                <button onclick="app.updateQty(${item.id}, 1)" class="w-6 h-6 rounded-full border border-outline-variant flex items-center justify-center text-xs hover:bg-surface-variant">+</button>
                            </div>
                        </div>
                        <button onclick="app.removeFromCart(${item.id})" class="text-secondary hover:text-error">
                            <span class="material-symbols-outlined text-sm">delete</span>
                        </button>
                    </div>
                `;
            });
        }
        
        if(this.cartTotal) this.cartTotal.textContent = `$${total.toFixed(2)}`;
    },
    toggleCart(forceOpen = false) {
        if(forceOpen || this.cartDrawer.classList.contains('translate-x-full')) {
            this.cartDrawer.classList.remove('translate-x-full');
            this.cartOverlay.classList.remove('hidden');
            setTimeout(() => this.cartOverlay.classList.remove('opacity-0'), 10);
        } else {
            this.cartDrawer.classList.add('translate-x-full');
            this.cartOverlay.classList.add('opacity-0');
            setTimeout(() => this.cartOverlay.classList.add('hidden'), 300);
        }
    },
    checkout() {
        if(this.cart.length === 0) return;
        alert('Thank you for your simulated order at Modern Agrarian! Order total: ' + this.cartTotal.textContent);
        this.cart = [];
        this.saveCart();
        this.updateCartUI();
        this.toggleCart();
    }
};

window.app = app;
document.addEventListener('DOMContentLoaded', () => app.init());
        