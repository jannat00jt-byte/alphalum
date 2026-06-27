/* ============================================
   AlphaLum - Main JavaScript
   Products, Blog, Interactivity
   ============================================ */

// --- Placeholder Image Generator ---
const catColors = {
    chargeurs: ["#2563eb", "#1d4ed8"],
    coques: ["#7c3aed", "#5b21b6"],
    ecouteurs: ["#059669", "#047857"],
    protection: ["#d97706", "#b45309"],
    support: ["#dc2626", "#b91c1c"],
    stockage: ["#0891b2", "#0e7490"]
};
const blogCatColors = {
    "Chargeurs": ["#2563eb", "#1d4ed8"],
    "Protection": ["#d97706", "#b45309"],
    "Écouteurs": ["#059669", "#047857"],
    "Coques": ["#7c3aed", "#5b21b6"],
    "Conseils": ["#0891b2", "#0e7490"],
    "Supports": ["#dc2626", "#b91c1c"],
    "Stockage": ["#0f766e", "#115e59"],
    "Accessoires": ["#9333ea", "#7e22ce"],
    "Tendances": ["#e11d48", "#be123c"]
};

function svgPlaceholder(icon, label, color1, color2) {
    const safe = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1}"/>
          <stop offset="100%" style="stop-color:${color2}"/>
        </linearGradient>
        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.1)"/>
        </pattern>
      </defs>
      <rect width="800" height="500" fill="url(#g)"/>
      <rect width="800" height="500" fill="url(#dots)"/>
      <text x="400" y="220" text-anchor="middle" font-size="100">${icon}</text>
      <text x="400" y="290" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700" font-size="24" fill="rgba(255,255,255,0.95)">${safe(label)}</text>
      <text x="400" y="320" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" fill="rgba(255,255,255,0.6)">AlphaLum</text>
    </svg>`;
    const enc = encodeURIComponent(svg);
    return 'data:image/svg+xml,' + enc;
}

function productImg(product) {
    const c = catColors[product.category] || ["#6366f1", "#4338ca"];
    return svgPlaceholder(product.icon, product.name, c[0], c[1]);
}

function blogImg(post) {
    const c = blogCatColors[post.category] || ["#6366f1", "#4338ca"];
    return svgPlaceholder(post.icon, post.title, c[0], c[1]);
}
}

// --- Product Data ---
const products = [
    { id: 1, name: "Chargeur Rapide USB-C 65W GaN", category: "chargeurs", price: 199, oldPrice: 299, icon: "⚡", badge: "-33%", rating: 4.9, reviews: 234, desc: "Chargeur compact GaN 65W pour laptop et téléphone" },
    { id: 2, name: "Câble USB-C vers USB-C 1.5m", category: "chargeurs", price: 49, oldPrice: 79, icon: "🔌", badge: "-38%", rating: 4.8, reviews: 189, desc: "Câble tressé nylon, charge rapide 100W" },
    { id: 3, name: "Chargeur Sans Fil MagSafe 15W", category: "chargeurs", price: 179, oldPrice: 249, icon: "🔋", badge: "-28%", rating: 4.7, reviews: 156, desc: "Recharge sans fil compatible iPhone 12+" },
    { id: 4, name: "Pack 3 Câbles Lightning/USB-C/Micro", category: "chargeurs", price: 89, oldPrice: 149, icon: "🔗", badge: "-40%", rating: 4.6, reviews: 312, desc: "3 câbles pour tous vos appareils" },
    { id: 5, name: "Coque Silicone Ultra-Mince iPhone 15", category: "coques", price: 79, oldPrice: 129, icon: "📱", badge: "-39%", rating: 4.8, reviews: 278, desc: "Protection fine et élégante, toutes couleurs" },
    { id: 6, name: "Coque Transparente Galaxy S24", category: "coques", price: 69, oldPrice: 99, icon: "📲", badge: "-30%", rating: 4.7, reviews: 198, desc: "Coque cristal transparente ant Jaune" },
    { id: 7, name: "Coque Wallet Cuir Huawei P60", category: "coques", price: 129, oldPrice: 189, icon: "👝", badge: "-32%", rating: 4.5, reviews: 145, desc: "Étui portefeuille en cuir véritable" },
    { id: 8, name: "Housse Coque Robust Pro iPhone 15", category: "coques", price: 149, oldPrice: 219, icon: "🛡️", badge: "-32%", rating: 4.9, reviews: 267, desc: "Protection militaire certifiée MIL-STD" },
    { id: 9, name: "Écouteur Bluetooth Pro Max ANC", category: "ecouteurs", price: 249, oldPrice: 349, icon: "🎧", badge: "-29%", rating: 4.9, reviews: 423, desc: "Réduction de bruit active, autonomie 30h" },
    { id: 10, name: "Écouteur Sport IPX5 Fil", category: "ecouteurs", price: 89, oldPrice: 149, icon: "🎵", badge: "-40%", rating: 4.6, reviews: 187, desc: "Écouteur sport avec crochets, résistant à l'eau" },
    { id: 11, name: "Earbuds Compact ANC Gen 2", category: "ecouteurs", price: 199, oldPrice: 279, icon: "🎶", badge: "-29%", rating: 4.8, reviews: 334, desc: "Compact et léger, son Hi-Fi" },
    { id: 12, name: "Écouteur Gaming Faible Latence", category: "ecouteurs", price: 159, oldPrice: 229, icon: "🎮", badge: "-31%", rating: 4.7, reviews: 156, desc: "Latence ultra-faible 45ms pour le gaming" },
    { id: 13, name: "Verre Trempé 9H Privacy iPhone 15", category: "protection", price: 59, oldPrice: 99, icon: "🔒", badge: "-40%", rating: 4.8, reviews: 445, desc: "Protection vie privée, angle de vision 28°" },
    { id: 14, name: "Film Hydrogel Galaxy S24 Ultra", category: "protection", price: 49, oldPrice: 79, icon: "🛡️", badge: "-38%", rating: 4.7, reviews: 234, desc: "Film flexible résistant aux rayures" },
    { id: 15, name: "Kit Protection Complet 3-en-1", category: "protection", price: 89, oldPrice: 149, icon: "📦", badge: "-40%", rating: 4.9, reviews: 367, desc: "Verre trempé + film + lingette" },
    { id: 16, name: "Verre Trempé Caméra iPhone", category: "protection", price: 39, oldPrice: 59, icon: "📷", badge: "-34%", rating: 4.6, reviews: 198, desc: "Protection caméra en verre trempé" },
    { id: 17, name: "Support Auto Magnétique Voiture", category: "support", price: 129, oldPrice: 199, icon: "🚗", badge: "-35%", rating: 4.8, reviews: 289, desc: "Support magnétique ventouse, rotation 360°" },
    { id: 18, name: "Bracelet Téléphone Cordless", category: "support", price: 39, oldPrice: 59, icon: "⌚", badge: "-34%", rating: 4.5, reviews: 134, desc: "Bracelet anti-chute pour téléphone" },
    { id: 19, name: "Support Bureau Adjustable Aluminium", category: "support", price: 169, oldPrice: 249, icon: "🖥️", badge: "-32%", rating: 4.9, reviews: 212, desc: "Support pliable en aluminium premium" },
    { id: 20, name: "Mini Trépied Flexible 30cm", category: "support", price: 59, oldPrice: 89, icon: "📸", badge: "-34%", rating: 4.7, reviews: 178, desc: "Trépied flexible pour téléphone et GoPro" },
    { id: 21, name: "Carte Micro SD 128GB V30", category: "stockage", price: 99, oldPrice: 149, icon: "💾", badge: "-34%", rating: 4.8, reviews: 345, desc: "Vitesse lecture 170Mo/s, classe A2" },
    { id: 22, name: "Clé USB 3.0 64GB Métal", category: "stockage", price: 79, oldPrice: 119, icon: "🔑", badge: "-34%", rating: 4.7, reviews: 223, desc: "Clé USB étanche en aluminium" },
    { id: 23, name: "Carte Micro SD 256GB Ultra", category: "stockage", price: 179, oldPrice: 259, icon: "💿", badge: "-31%", rating: 4.9, reviews: 189, desc: "256GB, lecture 200Mo/s, V30 A2" },
    { id: 24, name: "SSD Externe 512GB USB-C", category: "stockage", price: 349, oldPrice: 499, icon: "📦", badge: "-30%", rating: 4.9, reviews: 156, desc: "Disque SSD portable, vitesse 1050Mo/s" },
];

// --- Blog Data (20 SEO-Optimized Posts in French) ---
const blogPosts = [
    {
        id: 1,
        slug: "meilleur-chargeur-rapide-2026",
        title: "Top 10 des Meilleurs Chargeurs Rapides en 2026",
        category: "Chargeurs",
        date: "25 Juin 2026",
        readTime: "7 min",
        icon: "⚡",
        color: "#dbeafe",
        excerpt: "Découvrez les meilleurs chargeurs rapides pour votre téléphone en 2026. Comparatif GaN, USB-C et sans fil.",
        author: "AlphaLum",
        content: `
            <p>Le marché des chargeurs rapides a énormément évolué en 2026. Avec l'arrivée de la technologie GaN (Gallium Nitride), les chargeurs sont devenus plus compacts et plus puissants que jamais. Dans ce guide, nous avons sélectionné les <strong>10 meilleurs chargeurs rapides</strong> pour vous aider à faire le bon choix.</p>

            <h2>Pourquoi Choisir un Chargeur Rapide ?</h2>
            <p>Un chargeur rapide peut recharger votre smartphone de 0 à 50% en seulement 30 minutes. C'est un gain de temps considérable pour les personnes actives qui n'ont pas le temps d'attendre.</p>

            <h3>Avantages des chargeurs GaN :</h3>
            <ul>
                <li>Taille réduite de 40% par rapport aux chargeurs classiques</li>
                <li>Moins de chaleur lors de la charge</li>
                <li>Compatible avec plusieurs appareils simultanément</li>
                <li>Plus respectueux de la batterie</li>
            </ul>

            <h2>Nos Sélections Top 10</h2>
            <p>Nous avons testé plus de 30 chargeurs pour vous proposer cette sélection des meilleurs rapports qualité-prix du marché marocain.</p>

            <div class="tip-box">
                <strong>💡 Conseil AlphaLum :</strong>
                Pour préserver la durée de vie de votre batterie, évitez de charger votre téléphone au-delà de 80% en permanence et ne le laissez pas descendre en dessous de 20%.
            </div>

            <h2>Comment Bien Choisir Son Chargeur ?</h2>
            <p>Avant d'acheter un chargeur rapide, vérifiez la compatibilité avec votre appareil. La plupart des smartphones récents supportent la charge rapide USB-C Power Delivery (PD) ou Qualcomm Quick Charge.</p>

            <p>Visitez notre boutique pour découvrir toute notre gamme de chargeurs à prix compétitifs avec livraison rapide partout au Maroc.</p>
        `
    },
    {
        id: 2,
        slug: "proteger-ecran-telephone-guide",
        title: "Comment Protéger l'Écran de Votre Téléphone : Guide Complet",
        category: "Protection",
        date: "23 Juin 2026",
        readTime: "6 min",
        icon: "🛡️",
        color: "#dcfce7",
        excerpt: "Verre trempé ou film hydrogel ? Apprenez comment protéger efficacement l'écran de votre smartphone.",
        author: "AlphaLum",
        content: `
            <p>L'écran est la partie la plus fragile de votre smartphone. Un écran fissuré coûte cher à réparer, souvent entre 500 et 2000 MAD selon le modèle. Investir dans une bonne protection est donc essentiel.</p>

            <h2>Verre Trempé vs Film Hydrogel</h2>
            <p><strong>Le verre trempé</strong> offre une protection supérieure contre les chocs et les rayures. Avec une dureté de 9H, il résiste aux clés et aux objets tranchants.</p>

            <p><strong>Le film hydrogel</strong> est plus fin et s'adapte parfaitement aux écrans courbes. Il est idéal pour ceux qui préfèrent un look naturel tout en étant protégé contre les rayures légères.</p>

            <h3>Notre recommandation :</h3>
            <ol>
                <li>Pour une protection maximale : Verre trempé 9H</li>
                <li>Pour les écrans courbes : Film hydrogel</li>
                <li>Pour la vie privée : Verre trempé Privacy</li>
                <li>Pour la caméra : Protection dédiée caméra</li>
            </ol>

            <div class="tip-box">
                <strong>💡 Astuce :</strong>
                Appliquez votre protection d'écran dans un environnement propre et sans poussière pour éviter les bulles d'air.
            </div>

            <p>Retrouvez tous nos kits de protection d'écran sur AlphaLum avec des réductions allant jusqu'à -40%.</p>
        `
    },
    {
        id: 3,
        slug: "ecouteur-bluetooth-choisir",
        title: "Écouteur Bluetooth : Comment Faire le Bon Choix en 2026",
        category: "Écouteurs",
        date: "21 Juin 2026",
        readTime: "8 min",
        icon: "🎧",
        color: "#f3e8ff",
        excerpt: "Comparatif des meilleurs écouteurs Bluetooth : ANC, autonomie, qualité son. Trouvez l'écouteur idéal.",
        author: "AlphaLum",
        content: `
            <p>Les écouteurs Bluetooth sont devenus indispensables. Que vous soyez passionné de musique, gamer ou sportif, il existe un écouteur adapté à chaque besoin.</p>

            <h2>Les Critères Importants</h2>
            <ul>
                <li><strong>Réduction de bruit active (ANC)</strong> : Essentielle pour les trajets et le travail</li>
                <li><strong>Autonomie</strong> : Minimum 20h avec l'étui de charge</li>
                <li><strong>Résistance à l'eau</strong> : IPX4 minimum pour le sport</li>
                <li><strong>Qualité sonore</strong> : Bluetooth 5.3 pour un son stable</li>
            </ul>

            <h2>Nos Recommandations par Usage</h2>
            <p><strong>Pour le quotidien :</strong> Les Earbuds compact ANC offrent le meilleur compromis taille/qualité/autonomie.</p>

            <p><strong>Pour le sport :</strong> Optez pour un modèle avec crochets et certification IPX5 minimum.</p>

            <p><strong>Pour le gaming :</strong> Un écouteur gaming avec latence ultra-faible (45ms) vous donnera un avantage compétitif.</p>

            <div class="tip-box">
                <strong>💡 Conseil :</strong>
                Pour une autonomie optimale, réduisez le volume à 60-70% et désactivez l'ANC quand vous n'en avez pas besoin.
            </div>

            <p>Découvrez notre sélection complète d'écouteurs Bluetooth à prix imbattables sur AlphaLum.</p>
        `
    },
    {
        id: 4,
        slug: "coque-telephone-protection",
        title: "Les Différents Types de Coques de Téléphone : Le Guide",
        category: "Coques",
        date: "19 Juin 2026",
        readTime: "5 min",
        icon: "📱",
        color: "#fef3c7",
        excerpt: "Silicone, cuir, plastique rigide... Découvrez les avantages de chaque type de coque pour votre téléphone.",
        author: "AlphaLum",
        content: `
            <p>Choisir la bonne coque pour votre téléphone n'est pas simple. Chaque matériau a ses avantages et inconvénients.</p>

            <h2>Les Différents Matériaux</h2>
            <h3>1. Silicone / TPU</h3>
            <p>Le matériau le plus populaire. Flexible, léger et offrant une bonne absorption des chocs. Idéal au quotidien.</p>

            <h3>2. Plastique rigide (Polycarbonate)</h3>
            <p>Protection solide avec un design fin. Parfait pour ceux qui veulent un look épuré sans ajouter de volume.</p>

            <h3>3. Cuir véritable</h3>
            <p>Le choix premium pour un style élégant. Les coques en cuir vieillissent bien et développent une patine unique.</p>

            <h3>4. Hybride (combiné)</h3>
            <p>Combinant silicone et plastique rigide, les coques hybrides offrent la meilleure protection globale.</p>

            <h2>Quelle Coque Choisir ?</h2>
            <ul>
                <li>Usage normal : Silicone ou TPU</li>
                <li>Sport/plein air : Hybride renforcé</li>
                <li>Bureau/pro : Cuir ou wallet</li>
                <li>Maximum protection : Coque militaire certifiée MIL-STD</li>
            </ul>

            <p>Trouvez la coque parfaite pour votre modèle dans notre catalogue AlphaLum.</p>
        `
    },
    {
        id: 5,
        slug: "chargeur-sans-fil-avantages",
        title: "Chargeur Sans Fil : Tout Ce Que Vous Devez Savoir",
        category: "Chargeurs",
        date: "17 Juin 2026",
        readTime: "6 min",
        icon: "🔋",
        color: "#dbeafe",
        excerpt: "Le guide complet sur la recharge sans fil : compatible, vitesse, avantages et inconvénients.",
        author: "AlphaLum",
        content: `
            <p>La recharge sans fil est de plus en plus populaire. Fini les câbles encombrants, il suffit de poser votre téléphone sur le support.</p>

            <h2>Comment Fonctionne la Recharge Sans Fil ?</h2>
            <p>La technologie Qi utilise des champs électromagnétiques pour transférer l'énergie entre le pad de charge et votre téléphone. C'est simple, pratique et sans usure des connecteurs.</p>

            <h2>Avantages et Inconvénients</h2>
            <h3>Avantages :</h3>
            <ul>
                <li>Praticité absolue : posez et c'est parti</li>
                <li>Pas d'usure du connecteur USB</li>
                <li>Charge multiple avec un seul pad</li>
                <li>Design élégant pour votre espace de travail</li>
            </ul>

            <h3>Inconvénients :</h3>
            <ul>
                <li>Vitesse de charge légèrement inférieure au filaire</li>
                <li>Ne fonctionne pas avec toutes les coques (épaisseur max 5mm)</li>
                <li>Production de chaleur plus importante</li>
            </ul>

            <div class="tip-box">
                <strong>💡 Astuce :</strong>
                Utilisez un pad de charge sans fil avec ventilation intégrée pour éviter la surchauffe lors des longues sessions de charge.
            </div>

            <p>Découvrez nos chargeurs sans fil à partir de 179 MAD sur AlphaLum.</p>
        `
    },
    {
        id: 6,
        slug: "optimiser-batterie-telephone",
        title: "10 Astuces pour Optimiser la Batterie de Votre Téléphone",
        category: "Conseils",
        date: "15 Juin 2026",
        readTime: "9 min",
        icon: "🔋",
        color: "#dcfce7",
        excerpt: "Prolongez la durée de vie de votre batterie avec ces 10 astuces simples et efficaces.",
        author: "AlphaLum",
        content: `
            <p>La batterie est l'élément le plus sensible de votre smartphone. Voici comment optimiser son autonomie et sa durée de vie.</p>

            <h2>Les 10 Astuces Essentielles</h2>
            <ol>
                <li><strong>Évitez les charges à 100%</strong> : Arrêtez la charge à 80% pour préserver la batterie</li>
                <li><strong>Ne laissez pas descendre en dessous de 20%</strong> : Les décharges profondes dégradent la batterie</li>
                <li><strong>Utilisez un chargeur de qualité</strong> : Un mauvais chargeur peut endommager la batterie</li>
                <li><strong>Désactivez le Bluetooth et le WiFi</strong> quand vous ne les utilisez pas</li>
                <li><strong>Réduisez la luminosité de l'écran</strong> : C'est le plus gros consommateur d'énergie</li>
                <li><strong>Activez le mode économiseur</strong> en cas de faible batterie</li>
                <li><strong>Fermez les applications en arrière-plan</strong> qui consomment de l'énergie</li>
                <li><strong>Évitez les températures extrêmes</strong> : Le froid et la chaleur dégradent la batterie</li>
                <li><strong>Mettez à jour votre système</strong> : Les mises à jour optimisent la gestion d'énergie</li>
                <li><strong>Utilisez un fond d'écran sombre</strong> sur écran AMOLED</li>
            </ol>

            <div class="tip-box">
                <strong>💡 Conseil expert :</strong>
                Si vous ne chargez pas votre téléphone pendant la nuit, utilisez une minuterie智能 pour arrêter la charge automatiquement à 80%.
            </div>

            <p>Pour des accessoires qui protagent votre batterie, visitez AlphaLum.</p>
        `
    },
    {
        id: 7,
        slug: "verre-trempe-installation",
        title: "Guide d'Installation du Verre Trempé Sans Bulles",
        category: "Protection",
        date: "13 Juin 2026",
        readTime: "5 min",
        icon: "🔒",
        color: "#e0e7ff",
        excerpt: "Apprenez à installer votre verre trempé parfaitement, sans bulles ni poussière.",
        author: "AlphaLum",
        content: `
            <p>L'installation d'un verre trempé peut sembler intimidante, mais avec les bonnes étapes, c'est un jeu d'enfant.</p>

            <h2>Matériel Nécessaire</h2>
            <ul>
                <li>Verre trempé neuf</li>
                <li>Lingette alcoolisée (inclus dans le kit)</li>
                <li>Chiffon microfibre</li>
                <li>Carton à cartouche (optionnel)</li>
            </ul>

            <h2>Étapes d'Installation</h2>
            <ol>
                <li><strong>Nettoyez l'écran</strong> avec la lingette alcoolisée</li>
                <li><strong>Essuyez</strong> avec le chiffon microfibre pour enlever les résidus</li>
                <li><strong>Alignez</strong> le verre trempé avec les bords de l'écran</li>
                <li><strong>Appuyez au centre</strong> et laissez la colle se répartir naturellement</li>
                <li><strong>Poussez les bulles</strong> vers les bords avec le carton</li>
            </ol>

            <div class="tip-box">
                <strong>💡 Astuce :</strong>
                Installez votre verre trempé dans une salle de bain après une douche. La vapeur d'eau retient les particules de poussière dans l'air.
            </div>

            <p>Tous nos kits de protection incluent un guide d'installation et le matériel nécessaire.</p>
        `
    },
    {
        id: 8,
        slug: "accessoires-telephone-voyage",
        title: "Les Accessoires Indispensables pour Voyager avec Votre Téléphone",
        category: "Accessoires",
        date: "11 Juin 2026",
        readTime: "7 min",
        icon: "✈️",
        color: "#fef3c7",
        excerpt: "Partez l'esprit tranquille avec les bons accessoires pour votre téléphone lors de vos voyages.",
        author: "AlphaLum",
        content: `
            <p>Voyager avec son téléphone nécessite quelques accessoires essentiels pour rester connecté en toute sécurité.</p>

            <h2>Les Incontournables</h2>
            <ul>
                <li><strong>Chargeur universel multi-USB</strong> : Un seul chargeur pour tous vos appareils</li>
                <li><strong>Batterie externe 10000mAh+</strong> : Pour les longs trajets sans prise</li>
                <li><strong>Câble retractable</strong> : Gain de place et toujours pratique</li>
                <li><strong>Support de voiture</strong> : Indispensable pour la navigation</li>
                <li><strong>Étui étanche</strong> : Pour les plages et activités nautiques</li>
            </ul>

            <h2>Conseils pour l'Étranger</h2>
            <p>Avant de partir, vérifiez la compatibilité de vos chargeurs avec le voltage local. Un adaptateur universel est toujours utile.</p>

            <div class="tip-box">
                <strong>💡 Astuce voyage :</strong>
                Emportez toujours un kit de protection d'écran de rechange. En voyage, les chocs sont plus fréquents.
            </div>

            <p>Trouvez tout votre équipement de voyage pour téléphone sur AlphaLum.</p>
        `
    },
    {
        id: 9,
        slug: "support-auto-telephone-guide",
        title: "Comment Choisir le Bon Support Auto pour Votre Téléphone",
        category: "Supports",
        date: "9 Juin 2026",
        readTime: "6 min",
        icon: "🚗",
        color: "#dcfce7",
        excerpt: "Ventouse, grille d'aération, magnétique... Découvrez quel support auto est fait pour vous.",
        author: "AlphaLum",
        content: `
            <p>Un bon support auto est essentiel pour utiliser votre téléphone en toute sécurité lors de vos déplacements.</p>

            <h2>Les Types de Supports</h2>
            <h3>Support à ventouse</h3>
            <p>Le plus classique. Fixé sur le pare-brise ou le tableau de bord. Idéal pour une utilisation simple.</p>

            <h3>Support grille d'aération</h3>
            <p>Se fixe sur les ailettes de la ventilation. Compact et discret, il ne gêne pas la visibilité.</p>

            <h3>Support magnétique</h3>
            <p>Le plus pratique. Une simple plaque magnétique suffit pour fixer et retirer le téléphone d'une main.</p>

            <h3>Support avec charge intégrée</h3>
            <p>Combinaison parfaite entre support et chargeur sans fil. Votre téléphone se charge pendant que vous roulez.</p>

            <div class="tip-box">
                <strong>💡 Sécurité :</strong>
                Utilisez toujours votre téléphone avec un support auto lors de l'utilisation de GPS. C'est la loi et c'est essentiel pour votre sécurité.
            </div>

            <p>Découvrez nos supports auto à partir de 129 MAD avec livraison rapide.</p>
        `
    },
    {
        id: 10,
        slug: "carte-memoire-telephone",
        title: "Carte Mémoire : Comment Choisir la Bonne Capacité",
        category: "Stockage",
        date: "7 Juin 2026",
        readTime: "5 min",
        icon: "💾",
        color: "#f3e8ff",
        excerpt: "32GB, 64GB, 128GB, 256GB... Quelle carte mémoire choisir pour votre téléphone ?",
        author: "AlphaLum",
        content: `
            <p>Avec la multiplication des photos et vidéos en haute résolution, le stockage de votre téléphone peut rapidement devenir insuffisant.</p>

            <h2>Quelle Capacité Choisir ?</h2>
            <ul>
                <li><strong>32GB</strong> : Suffisant pour un usage basique (photos, quelques apps)</li>
                <li><strong>64GB</strong> : Idéal pour un usage modéré avec quelques vidéos</li>
                <li><strong>128GB</strong> : Le bon compromis pour la plupart des utilisateurs</li>
                <li><strong>256GB+</strong> : Pour les passionnés de photo/vidéo et les gamers</li>
            </ul>

            <h2>Classes de Vitesse</h2>
            <p>La vitesse de lecture/écriture est aussi importante que la capacité :</p>
            <ul>
                <li><strong>Classe 10 / U1</strong> : Minimum pour la vidéo Full HD</li>
                <li><strong>V30 / U3</strong> : Recommandé pour la vidéo 4K</li>
                <li><strong>A2</strong> : Idéal pour installer des applications sur la carte</li>
            </ul>

            <div class="tip-box">
                <strong>💡 Conseil :</strong>
                Pour un smartphone moderne, nous recommandons au minimum 128GB pour éviter les problèmes de stockage.
            </div>

            <p>Retrouvez nos cartes mémoire et SSD externes sur AlphaLum.</p>
        `
    },
    {
        id: 11,
        slug: "nettoyer-telephone-correctement",
        title: "Comment Nettoyer Votre Téléphone Correctement et en Sécurité",
        category: "Conseils",
        date: "5 Juin 2026",
        readTime: "4 min",
        icon: "🧹",
        color: "#e0e7ff",
        excerpt: "Gel hydroalcoolique ou chiffon microfibre ? Apprenez la bonne méthode pour nettoyer votre smartphone.",
        author: "AlphaLum",
        content: `
            <p>Votre smartphone est rempli de bactéries. Un nettoyage régulier est essentiel pour votre hygiène.</p>

            <h2>Ce qu'il ne faut JAMAIS faire</h2>
            <ul>
                <li>❌ Utiliser du papier essuie-tout (rayures)</li>
                <li>❌ Vaporiser directement du produit sur l'écran</li>
                <li>❌ Utiliser de l'eau du robinet directement</li>
                <li>❌ Utiliser de l'alcool à 90° (endommage l'oleophobic coating)</li>
            </ul>

            <h2>La Bonne Méthode</h2>
            <ol>
                <li>Éteignez votre téléphone</li>
                <li>Humidifiez légèrement un chiffon microfibre avec un mélange eau/distillée + alcool isopropylique 70%</li>
                <li>Essuyez délicatement l'écran en mouvements circulaires</li>
                <li>Nettoyez le dos et les bords avec le même chiffon</li>
                <li>Laissez sécher quelques minutes avant de rallumer</li>
            </ol>

            <div class="tip-box">
                <strong>💡 Hygiène :</strong>
                Nettoyez votre téléphone au moins une fois par jour, surtout après vos déplacements en transport en commun.
            </div>

            <p>Nous proposons des lingettes nettoyantes spéciales smartphones sur AlphaLum.</p>
        `
    },
    {
        id: 12,
        slug: "protection-camera-telephone",
        title: "Protéger la Caméra de Votre Téléphone : Guide Essentiel",
        category: "Protection",
        date: "3 Juin 2026",
        readTime: "5 min",
        icon: "📷",
        color: "#fef3c7",
        excerpt: "La caméra est devenue l'élément le plus fragile des smartphones modernes. Voici comment la protéger.",
        author: "AlphaLum",
        content: `
            <p>Avec des modules caméra de plus en plus proéminents, la protection de vos objectifs est devenue cruciale.</p>

            <h2>Pourquoi Protéger la Caméra ?</h2>
            <p>Les lentilles en verre sont vulnérables aux rayures et aux chocs. Une rayure sur la caméra peut considérablement dégrader la qualité de vos photos.</p>

            <h2>Options de Protection</h2>
            <ul>
                <li><strong>Verre trempé caméra</strong> : Protection transparente et résistante aux rayures</li>
                <li><strong>Housse de protection</strong> : Certaines coques intègrent une protection caméra surélevée</li>
                <li><strong>Pellicule protectrice</strong> : Alternative légère et invisible</li>
            </ul>

            <div class="tip-box">
                <strong>💡 Important :</strong>
                Changez votre protection caméra dès qu'elle montre des signes d'usure. Une protection rayée peut dégrader la qualité de vos photos.
            </div>

            <p>Protégez votre caméra avec nos verres trempés dédiés à partir de 39 MAD.</p>
        `
    },
    {
        id: 13,
        slug: "audio-bluetooth-latence-zero",
        title: "Audio Bluetooth : Comment Réduire la Latence à Zéro",
        category: "Écouteurs",
        date: "1 Juin 2026",
        readTime: "7 min",
        icon: "🎵",
        color: "#dcfce7",
        excerpt: "Latence audio un problème ? Découvrez comment choisir des écouteurs Bluetooth à latence minimale.",
        author: "AlphaLum",
        content: `
            <p>La latence audio est le délai entre le son émis et ce que vous entendez. Pour le gaming et le streaming, une faible latence est essentielle.</p>

            <h2>Comprendre la Latence</h2>
            <ul>
                <li><strong>> 200ms</strong> : Latence perceptible, gênante pour le gaming</li>
                <li><strong>100-200ms</strong> : Acceptable pour la musique</li>
                <li><strong>60-100ms</strong> : Bon pour le streaming vidéo</li>
                <li><strong>< 60ms</strong> : Idéal pour le gaming compétitif</li>
            </ul>

            <h2>Technologies qui Réduisent la Latence</h2>
            <p>Chaque fabricant a sa propre technologie :</p>
            <ul>
                <li>Bluetooth 5.3 avec codec aptX Low Latency</li>
                <li>Mode gaming dédié (certains modèles)</li>
                <li>Connexion dual-channel</li>
            </ul>

            <div class="tip-box">
                <strong>💡 Pour les gamers :</strong>
                Notre écouteur Gaming Faible Latence offre une latence de seulement 45ms, parfait pour les jeux compétitifs.
            </div>

            <p>Découvrez nos écouteurs gaming à latence ultra-faible sur AlphaLum.</p>
        `
    },
    {
        id: 14,
        slug: "chargeur-gan-technologie",
        title: "La Technologie GaN : Révolution des Chargeurs",
        category: "Chargeurs",
        date: "29 Mai 2026",
        readTime: "6 min",
        icon: "⚡",
        color: "#dbeafe",
        excerpt: "Le GaN révolutionne les chargeurs. Découvrez pourquoi ces chargeurs sont plus performants et compacts.",
        author: "AlphaLum",
        content: `
            <p>Le GaN (Nitrure de Gallium) est le matériau qui révolutionne l'industrie des chargeurs. Plus efficace que le silicium traditionnel.</p>

            <h2>Qu'est-ce que le GaN ?</h2>
            <p>Le Nitrure de Gallium est un semi-conducteur qui permet aux chargeurs d'être plus compacts, plus efficaces et de générer moins de chaleur.</p>

            <h2>Avantages du GaN</h2>
            <ul>
                <li><strong>40% plus compact</strong> qu'un chargeur classique de même puissance</li>
                <li><strong>90% d'efficacité</strong> vs 85% pour le silicium</li>
                <li><strong>Moins de chaleur</strong> = meilleure durée de vie</li>
                <li><strong>Compatible PD 3.0</strong> pour une charge rapide optimale</li>
            </ul>

            <h2>Le GaN en Chiffres</h2>
            <p>Un chargeur GaN 65W peut charger un laptop ET un téléphone simultanément, dans un boîtier compact tenu dans la paume de la main.</p>

            <div class="tip-box">
                <strong>💡 Innovation :</strong>
                En 2026, la quasi-totalité des chargeurs premium utilisent la technologie GaN. C'est l'avenir de la recharge.
            </div>

            <p>Passez au GaN avec nos chargeurs à partir de 199 MAD sur AlphaLum.</p>
        `
    },
    {
        id: 15,
        slug: "coque-cuir-vs-silicone",
        title: "Coque Cuir vs Silicone : Le Grand Comparatif",
        category: "Coques",
        date: "27 Mai 2026",
        readTime: "5 min",
        icon: "👝",
        color: "#fef3c7",
        excerpt: "Cuir ou silicone ? Comparaison détaillée pour vous aider à choisir la coque idéale.",
        author: "AlphaLum",
        content: `
            <p>Le choix entre une coque en cuir et une coque en silicone dépend de vos priorités : style, protection ou praticité.</p>

            <h2>Comparatif Détaillé</h2>
            <h3>Coque en Cuir</h3>
            <ul>
                <li>✅ Style élégant et professionnel</li>
                <li>✅ Vieillit bien, développe une patine</li>
                <li>✅ Bonne protection contre les rayures</li>
                <li>❌ Plus cher</li>
                <li>❌ Plus lourde</li>
            </ul>

            <h3>Coque en Silicone</h3>
            <ul>
                <li>✅ Légère et flexible</li>
                <li>Bonne absorption des chocs</li>
                <li>✅ Large choix de couleurs</li>
                <li>❌ Attire la poussière</li>
                <li>❌ Peut jaunir avec le temps</li>
            </ul>

            <h2>Notre Recommandation</h2>
            <p>Pour un usage professionnel, optez pour le cuir. Pour le quotidien et le sport, le silicone reste le meilleur choix.</p>

            <p>Découvrez les deux options dans notre catalogue de coques AlphaLum.</p>
        `
    },
    {
        id: 16,
        slug: "stockage-externe-necessaire",
        title: "Ai-je Besoin d'un Stockage Externe pour Mon Téléphone ?",
        category: "Stockage",
        date: "25 Mai 2026",
        readTime: "5 min",
        icon: "📦",
        color: "#f3e8ff",
        excerpt: "Le stockage interne suffit-il ? Découvrez quand investir dans un stockage externe.",
        author: "AlphaLum",
        content: `
            <p>Avec des fichiers de plus en plus volumineux, la question du stockage externe se pose de plus en plus souvent.</p>

            <h2>Signes que Vous Avez Besoin de Plus de Stockage</h2>
            <ul>
                <li>Vous recevez constamment des notifications "stockage insuffisant"</li>
                <li>Vous hésitez à prendre des photos par manque de place</li>
                <li>Votre téléphone ralentit à cause du stockage plein</li>
                <li>Vous ne pouvez plus mettre à jour vos applications</li>
            </ul>

            <h2>Options de Stockage Externe</h2>
            <ul>
                <li><strong>Carte Micro SD</strong> : Solution simple pour les téléphones compatibles</li>
                <li><strong>SSD externe USB-C</strong> : Pour les gros volumes et la rapidité</li>
                <li><strong>Clé USB</strong> : Pratique pour le transfert rapide</li>
            </ul>

            <div class="tip-box">
                <strong>💡 Règle d'or :</strong>
                Prévoyez au minimum 256GB de stockage total (interne + externe) pour un confort d'utilisation optimal en 2026.
            </div>

            <p>Explorez nos solutions de stockage externe sur AlphaLum.</p>
        `
    },
    {
        id: 17,
        slug: "accessoires-jeux-video-mobile",
        title: "Les Meilleurs Accessoires pour le Gaming Mobile en 2026",
        category: "Accessoires",
        date: "23 Mai 2026",
        readTime: "8 min",
        icon: "🎮",
        color: "#e0e7ff",
        excerpt: "Écouteur gaming, manette, support... Tous les accessoires pour dominer vos jeux mobiles.",
        author: "AlphaLum",
        content: `
            <p>Le gaming mobile a explosé en 2026. Avec les bons accessoires, transformez votre smartphone en console portable.</p>

            <h2>Essentiels du Gaming Mobile</h2>
            <ul>
                <li><strong>Écouteur gaming à faible latence</strong> : Pour entendre chaque détail</li>
                <li><strong>Manette Bluetooth</strong> : Pour les jeux de action et aventure</li>
                <li><strong>Support gaming pliable</strong> : Pour les sessions longues</li>
                <li><strong>Cooling fan</strong> : Pour éviter la surchauffe</li>
                <li><strong>Chargeur rapide</strong> : Pour recharger entre les parties</li>
            </ul>

            <h2>Configuration Idéale</h2>
            <p>Pour une expérience de gaming optimale, combinez un écouteur gaming avec un support ergonomique et un chargeur rapide pour ne jamais être à court de batterie.</p>

            <div class="tip-box">
                <strong>💡 Setup gaming :</strong>
                Notre écouteur Gaming avec latence de 45ms est spécialement conçu pour les jeux compétitifs mobiles.
            </div>

            <p>Équipez-vous comme un pro avec nos accessoires gaming sur AlphaLum.</p>
        `
    },
    {
        id: 18,
        slug: "batterie-externe-guide",
        title: "Guide Complet : Choisir la Bonne Batterie Externe",
        category: "Chargeurs",
        date: "21 Mai 2026",
        readTime: "7 min",
        icon: "🔋",
        color: "#dcfce7",
        excerpt: "10000mAh, 20000mAh, charge rapide... Tout ce qu'il faut savoir avant d'acheter une batterie externe.",
        author: "AlphaLum",
        content: `
            <p>Une batterie externe est un compagnon indispensable pour les personnes actives. Mais comment choisir parmi les centaines de modèles disponibles ?</p>

            <h2>Quelle Capacité Choisir ?</h2>
            <ul>
                <li><strong>5000mAh</strong> : Compact, pour une charge d'urgence</li>
                <li><strong>10000mAh</strong> : Le bon équilibre taille/autonomie</li>
                <li><strong>20000mAh</strong> : Pour les longs voyages et charges multiples</li>
                <li><strong>30000mAh+</strong> : Pour les professionnels et les aventuriers</li>
            </ul>

            <h2>Fonctionnalités Importantes</h2>
            <ul>
                <li>Charge rapide PD (Power Delivery)</li>
                <li>Sorties multiples pour charger plusieurs appareils</li>
                <li>Indicateur de charge LED</li>
                <li>Charge solaire pour les户外</li>
            </ul>

            <div class="tip-box">
                <strong>💡 Astuce :</strong>
                La capacité réelle d'une batterie est inférieure à celle annoncée (environ 60-70% en raison des pertes). Une batterie 10000mAh fournit environ 6000-7000mAh utiles.
            </div>

            <p>Retrouvez nos batteries externes et chargeurs portables sur AlphaLum.</p>
        `
    },
    {
        id: 19,
        slug: "telephone-etanche-protection",
        title: "Téléphone Étanche : Faut-il une Protection Supplémentaire ?",
        category: "Protection",
        date: "19 Mai 2026",
        readTime: "6 min",
        icon: "💧",
        color: "#dbeafe",
        excerpt: "IP67, IP68... Comprendre les certifications d'étanchéité et protéger efficacement votre téléphone.",
        author: "AlphaLum",
        content: `
            <p>De plus en plus de smartphones sont certifiés étanches. Mais cette protection est-elle suffisante ?</p>

            <h2>Comprendre les Certifications IP</h2>
            <ul>
                <li><strong>IP67</strong> : Résiste à l'immersion dans 1m d'eau pendant 30 min</li>
                <li><strong>IP68</strong> : Résiste à l'immersion dans 1.5-6m d'eau selon le fabricant</li>
                <li><strong>IP69</strong> : Résiste aux jets d'eau à haute pression</li>
            </ul>

            <h2>Faut-il une Protection Supplémentaire ?</h2>
            <p>Même certifié étanche, votre téléphone peut être endommagé par :</p>
            <ul>
                <li>L'eau de mer ou de piscine (corrosive)</li>
                <li>Le sable (rayures et blocage des ports)</li>
                <li>Les chocs sous l'eau</li>
            </ul>

            <div class="tip-box">
                <strong>💡 Recommandation :</strong>
                Pour les activités nautiques, utilisez un étui étanche dédié même avec un téléphone certifié IP68. La garantie fabricant ne couvre généralement pas les dommages liquides.
            </div>

            <p>Découvrez nos étuis étanchés et protections pour téléphone sur AlphaLum.</p>
        `
    },
    {
        id: 20,
        slug: "tendances-accessoires-2026",
        title: "Les Tendances Accessoires Téléphone de 2026",
        category: "Tendances",
        date: "17 Mai 2026",
        readTime: "8 min",
        icon: "🔮",
        color: "#f3e8ff",
        excerpt: "Chargeur solaire, accessoires éco-responsables, IA embarquée... Découvrez les tendances 2026.",
        author: "AlphaLum",
        content: `
            <p>L'année 2026 apporte son lot d'innovations dans le monde des accessoires téléphoniques. Voici les tendances à surveiller.</p>

            <h2>1. Chargeur Solaire Intégré</h2>
            <p>Les chargeurs solaires deviennent plus efficaces et compacts. Idéal pour les outdoor enthusiasts et l'écologie.</p>

            <h2>2. Accessoires Éco-responsables</h2>
            <p>Les matériaux recyclés et biodégradables gagnent du terrain. Coques en plastique océanique, chargeurs en bambou...</p>

            <h2>3. IA Embarquée</h2>
            <p>Certains accessoires intègrent de l'IA pour optimiser la charge, adapter le son ou améliorer la protection.</p>

            <h2>4. Modularité</h2>
            <p>Des systèmes modulaires qui s'adaptent à tous les appareils et tous les besoins.</p>

            <h2>5. Connexion Sans Fil Universelle</h2>
            <p>Le Qi2 standardise la recharge sans fil pour tous les appareils, quelle que soit la marque.</p>

            <div class="tip-box">
                <strong>💡 Tendance :</strong>
                En 2026, la durabilité et l'innovation technologique sont les mots-clés. Optez pour des accessoires de qualité qui durent dans le temps.
            </div>

            <p>AlphaLum suit les dernières tendances pour vous proposer les accessoires les plus innovants du marché marocain.</p>
        `
    }
];

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initSearch();
    initFilters();
    renderProducts();
    renderBlogPreview();
    initLoadMore();
    initBackToTop();
    initMobileNav();

    // If on blog page
    if (document.getElementById('blogGrid')) {
        renderBlogPosts();
        initBlogFilters();
    }

    // If on article page
    if (document.getElementById('articleContent')) {
        loadArticle();
    }
});

// --- Header Scroll Effect ---
function initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });
}

// --- Search ---
function initSearch() {
    const toggle = document.getElementById('searchToggle');
    const bar = document.getElementById('searchBar');
    const close = document.getElementById('searchClose');
    const input = document.getElementById('searchInput');

    if (toggle) toggle.addEventListener('click', () => bar.classList.toggle('active'));
    if (close) close.addEventListener('click', () => bar.classList.remove('active'));
    if (input) input.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        document.querySelectorAll('.product-card').forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = name.includes(q) ? '' : 'none';
        });
    });
}

// --- Mobile Nav ---
function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => nav.classList.toggle('active'));
    }
}

// --- Product Filters ---
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.product-card').forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// --- Render Products ---
let visibleProducts = 8;

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = products.slice(0, visibleProducts).map(p => `
        <div class="product-card" data-category="${p.category}">
            <div class="product-image" style="background-image:url('${productImg(p)}');background-size:cover;background-position:center;">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${p.category}</span>
                <h3>${p.name}</h3>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span>
                    <span>${p.rating} (${p.reviews})</span>
                </div>
                <p style="font-size:0.8rem;color:#64748b;margin-bottom:12px;">${p.desc}</p>
                <div class="product-price">
                    <span class="current-price">${p.price} MAD</span>
                    ${p.oldPrice ? `<span class="old-price">${p.oldPrice} MAD</span>` : ''}
                </div>
                <div class="product-btns">
                    <a href="https://wa.me/212600000000?text=Bonjour, je veux commander : ${encodeURIComponent(p.name)} à ${p.price} MAD" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener">
                        Commander
                    </a>
                    <a href="https://wa.me/212600000000?text=Bonjour, j'ai une question sur : ${encodeURIComponent(p.name)}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">
                        Info
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = visibleProducts >= products.length ? 'none' : '';
    }
}

// --- Load More ---
function initLoadMore() {
    const btn = document.getElementById('loadMore');
    if (btn) {
        btn.addEventListener('click', () => {
            visibleProducts += 4;
            renderProducts();
        });
    }
}

// --- Blog Preview on Home ---
function renderBlogPreview() {
    const grid = document.getElementById('blogPreviewGrid');
    if (!grid) return;
    grid.innerHTML = blogPosts.slice(0, 3).map(post => `
        <div class="blog-preview-card">
            <div class="blog-thumb" style="background-image: url('${blogImg(post)}'); background-size: cover; background-position: center;">
            </div>
            <div class="blog-content">
                <span class="blog-date">${post.date} · ${post.readTime} de lecture</span>
                <h3><a href="article.html?id=${post.id}">${post.title}</a></h3>
                <p>${post.excerpt}</p>
                <a href="article.html?id=${post.id}" class="blog-read-more">Lire l'article →</a>
            </div>
        </div>
    `).join('');
}

// --- Blog Page ---
function renderBlogPosts(filter = 'all') {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    const filtered = filter === 'all' ? blogPosts : blogPosts.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(post => `
        <article class="blog-card">
            <div class="blog-card-image" style="background-image: url('${blogImg(post)}'); background-size: cover; background-position: center;">
                ${post.icon}
                <span class="blog-cat-badge">${post.category}</span>
            </div>
            <div class="blog-card-body">
                <div class="blog-card-meta">
                    <span>📅 ${post.date}</span>
                    <span>⏱️ ${post.readTime}</span>
                </div>
                <h3><a href="article.html?id=${post.id}">${post.title}</a></h3>
                <p>${post.excerpt}</p>
                <div class="blog-card-footer">
                    <div class="blog-card-author">
                        <div class="avatar">A</div>
                        <span>${post.author}</span>
                    </div>
                    <a href="article.html?id=${post.id}" class="blog-read-link">Lire →</a>
                </div>
            </div>
        </article>
    `).join('');
}

function initBlogFilters() {
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBlogPosts(btn.dataset.filter);
        });
    });
}

// --- Article Page ---
function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const post = blogPosts.find(p => p.id === id);
    if (!post) return;

    document.title = `${post.title} | AlphaLum Blog`;
    document.getElementById('articleCategory').textContent = post.category;
    document.getElementById('articleTitle').textContent = post.title;
    document.getElementById('articleDate').textContent = post.date;
    document.getElementById('articleReadTime').textContent = post.readTime;
    document.getElementById('articleContent').innerHTML = `
        <img src="${blogImg(post)}" alt="${post.title}" style="width:100%;border-radius:12px;margin-bottom:32px;object-fit:cover;max-height:400px;">
        ${post.content}
    `;

    // Related articles
    const related = blogPosts.filter(p => p.id !== id).slice(0, 3);
    const relatedGrid = document.getElementById('relatedGrid');
    if (relatedGrid) {
        relatedGrid.innerHTML = related.map(p => `
            <a href="article.html?id=${p.id}" class="related-card">
                <div style="height:100px;border-radius:8px;margin-bottom:10px;background-image:url('${blogImg(p)}');background-size:cover;background-position:center;"></div>
                <h4>${p.title}</h4>
                <p>${p.excerpt.substring(0, 80)}...</p>
            </a>
        `).join('');
    }
}

// --- Back to Top ---
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
