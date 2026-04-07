const express = require('express');
const cors = require('cors');
const path = require('path');
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBZ1X1wOi96JrVtZbt2RV3hoGuIwtACIwg",
  authDomain: "modern-agrarian.firebaseapp.com",
  projectId: "modern-agrarian",
  storageBucket: "modern-agrarian.firebasestorage.app",
  messagingSenderId: "999542154868",
  appId: "1:999542154868:web:d912622fe4542d063f5321",
  measurementId: "G-ZJ7JM1N7KM"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock data based on the current frontend
const products = [
    {
        id: 1,
        name: "Nourishing Face Oil",
        price: 42.00,
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc-vYZxYm5KgYSoma8hh9WHZ2A3Hk0fUJnxPZ_fg4ZZR5y31eDpoiQ_EBbfEA9LygX9758ThZvO9RvoqLWVwixXRVv72uB9heUDYgaLzz8odoi88B365o23gUr4TYNaY4y68UEK7uThLwZneWerS1A1BB3rGUVUA-GMFqcBoZZYg_1UQwxqBKoK1wRHtN8737tlpC4eh1uzU9LXx-wxJaKHtj_y7JaE5GkzAEfBaL3_MrwsloIuS7PeccjbwC870PyNyIGmlHKCjY",
        imageAlt: "organic bottle of facial oil on white background with botanical accents",
        tag: "Organic",
        rating: 5,
        featured: true
    },
    {
        id: 2,
        name: "Green Tea Extract",
        price: 28.00,
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyHluvZgr5uRu_3whK2JtCrIDblZyHgqTLcRKAfJ3L5-TDf6baYX4f8fR78miHOtFOQYgAvnZaAwJQcgW-nKVXxDcFeH0eqjtfGEjTXV7rYoL8yRedtEHGnNuVjLsbDf5Np6r1TDI_mhSQ_Vvr-OZEmIQ-ISd8SfZ5veI2pS3-eTITF3XuigBxggss6MigJXntx0ttSiJoCu0SL0VxxE1RcL2xh1h0ZweSbWBj3d7XovgBewGMxbgHlbU9tsIzsD-OqfHjim5OJPY",
        imageAlt: "bottle of organic green tea extract with tea leaves scattered around",
        tag: "New",
        tagColor: "tertiary",
        rating: 4,
        featured: true
    },
    {
        id: 3,
        name: "Herbal Balm",
        price: 32.00,
        originalPrice: 40.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKliuvlMfONY4ZNTNVcTxiMMeGLskAyyDN0XgSMRTViW_Ee5VvdUxinrTC9jdKDeY8lNXN0pCpzwZAxgtcfSnKO4AhiHeWtB2gI_3h-Koovw4CdARHuyj8cMxLy7AyxLyR9ekJuRKV7Fr3l1_KWneprySjvzYiNQ4uGmsKfM7sMAd2PvqJOIDgISa6ODgaW3goJFpE5Er9-58ZQ2YP4hwMBmTywfnh-cZqClwz0nfzlinzO7CzLIzP2ltDLuELRC-GAyNMpXTT7kA",
        imageAlt: "luxury glass jar of herbal body cream on a limestone surface",
        tag: "-20%",
        tagColor: "primary",
        tagPosition: "right",
        rating: 5,
        featured: true
    },
    {
        id: 4,
        name: "Botanical Soap Bar",
        price: 12.00,
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy2gGJC4cZ-O7naV7x8NR1G-LO8JrIbbpNW4RxkXzNzfc61f6eZEpnOKHutKDSAOD-T3takQ5x50YFwSGStdzNkGQxbDwLa6DJDrLCSP5xHuBY-ps46a_m7VAo1syGk-uwpOoqUvjCHFMsqpmTuZccueAZ_zoNc1IJEfwPmM4JFztGLjKYTSco8ZfxwoMQ3xdf1FKO_NNbsvGBpuTn4gMUrvjlCGAyW542Yp-o4zmfiIluFbK6isJqzpTBKt3LZzGejNu7GVdKo1M",
        imageAlt: "handcrafted bar of botanical soap with dried flower inclusions",
        tag: null,
        rating: 4,
        featured: true
    },
    {
        id: 5,
        name: "Lavender Essential Oil",
        price: 24.00,
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgdRwTwE2ycOMoBKfsOATsjRr7uqt0hTLloKRLI9KePn5SR4TMQmQ8G59Tq2qXJ8Y7LQCKhTvQzBajAeRzOIVfzrO1hhLRHaI5XonafTAjghydk6eEaf4XZb8j3KhuTW-0dzC8H3X4cGK0EsCJxFT96V5WK8jlKFjcccaP71e8PreyowwIlij15saLbbsqvDC5uBQqprvS_UWi8Sx6lEVuZKiQZj9t99d0am319QWPoeHRsrmBo291LJCT15pkq6gpn7YPZtMzMA",
        imageAlt: "lavender oil",
        tag: "Best Seller",
        tagColor: "tertiary",
        rating: 5,
        featured: false
    },
    {
        id: 6,
        name: "Rosemary Infusion",
        price: 18.00,
        originalPrice: 22.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3f2DfVsFlWgJBH5OXg3jv43b_7OISo788-9mvPGCJgAxRZGnMJpDTdQkU2I2eTGpdPyvNUd2UNaTdluPOsJ5kqkGtFd7OMykAm7blEgnWy1k2iJ5-NgtT-Na85tnzUKX-LJyU_3hYi7f6GrEImDO_Mw8QCG84kGLGXsYoU9twWhlGjch7nCbQW7l6EuoKAxopBn0xfBI6aibLPLfM0oZQl6_YKmQnQc85GlXEo0ofmr7ALEaffC0vJg3rAB-bByEJXGeQ7MxxIKY",
        imageAlt: "rosemary infusion",
        tag: "-15%",
        rating: 4,
        featured: false
    },
    {
        id: 7,
        name: "Organic Citrus Zest",
        price: 15.00,
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAymRuIs0A4ZQhxzzgZqwykRBo31TIDEGy6D1S4lyetmkNNELfUJymMST9AUzh6ofignneDsIkMtweLu8v8wClGAOHN9MpPqVADpnCvsIPmuPbjzr83O1DjvtSZdFArEgnZk2FSg_884ad72pzzulwObal06KfDM95Pzf44yF3eoRzHSZQUA9THg0f6q1Jjugm2RQtnJVxkBADxUA0tc8MkMAaZVqhio47emg1YBc2ujP34SwUOU1fWS68m671VfSpjb0CaQZi-brc",
        imageAlt: "organic citrus zest",
        tag: "Organic",
        rating: 5,
        featured: false
    },
    {
        id: 8,
        name: "Artisan Bath Salt",
        price: 26.00,
        originalPrice: null,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgdRwTwE2ycOMoBKfsOATsjRr7uqt0hTLloKRLI9KePn5SR4TMQmQ8G59Tq2qXJ8Y7LQCKhTvQzBajAeRzOIVfzrO1hhLRHaI5XonafTAjghydk6eEaf4XZb8j3KhuTW-0dzC8H3X4cGK0EsCJxFT96V5WK8jlKFjcccaP71e8PreyowwIlij15saLbbsqvDC5uBQqprvS_UWi8Sx6lEVuZKiQZj9t99d0am319QWPoeHRsrmBo291LJCT15pkq6gpn7YPZtMzMA",
        imageAlt: "artisan bath salt",
        tag: "New",
        tagColor: "tertiary",
        rating: 4,
        featured: false
    }
];

// API endpoint to retrieve products
app.get('/api/products', (req, res) => {
    if (req.query.featured === 'true') {
        res.json(products.filter(p => p.featured));
    } else {
        res.json(products);
    }
});

// API endpoint to capture newsletter signups
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
    }
    
    try {
        await addDoc(collection(db, "subscribers"), {
            email: email,
            timestamp: new Date()
        });
        console.log(`[Newsletter] New subscriber saved to Firebase: ${email}`);
        res.json({ message: 'Successfully subscribed to the newsletter!' });
    } catch (e) {
        console.error("Error adding to Firebase: ", e);
        res.status(500).json({ error: 'Failed to subscribe. Please try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
