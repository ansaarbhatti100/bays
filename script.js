// Language Dictionary
const translations = {
    en: {
        site_title: "Beqo Sports Clone - Premium Sportswear",
        logo_text: "BEQO SPORTS",
        nav_home: "Home",
        nav_sports: "Sports Wear",
        nav_active: "Active Wear",
        nav_about: "About Us",
        nav_contact: "Contact Us",
        btn_quote: "Get Quote",
        hero_heading: "Premium Sportswear and Apparel Manufacturer",
        hero_subheading: "Custom designs, private labels, and high-quality gear for professionals.",
        btn_explore: "Explore Products",
        btn_learn: "Learn More",
        form_title: "Request a Quote",
        form_name: "Full Name",
        form_email: "Email Address",
        form_product: "Product Name",
        form_qty: "Quantity",
        form_msg: "Message / Specific Requirements",
        btn_submit: "Submit Request",
        section_products: "Our Core Categories",
        section_products_desc: "Explore our wide range of custom sportswear and accessories.",
        cat_sports: "Sports Wear",
        cat_sports_desc: "Soccer, Basketball, American Football Uniforms",
        cat_active: "Active Wear",
        cat_active_desc: "Hoodies, T-Shirts, Tracksuits for peak performance",
        cat_combat: "Combat Sports",
        cat_combat_desc: "MMA Gear, Boxing Gloves, and fight wear",
        cat_equip: "Sports Equipment",
        cat_equip_desc: "Bags, Gloves, Protective Gear",
        btn_view: "View Series",
        footer_about: "About Beqo",
        footer_about_desc: "We are a premium manufacturing company dedicated to providing high-quality custom apparel for teams and brands globally.",
        footer_links: "Quick Links",
        footer_contact: "Contact Info",
        footer_address: "Sialkot, Punjab, Pakistan",
        footer_copyright: "© 2026 Beqo Sports Clone. All Rights Reserved."
    },
    ur: {
        site_title: "بیکو سپورٹس کلون - پریمیم سپورٹس ویئر",
        logo_text: "بیکو سپورٹس",
        nav_home: "ہوم",
        nav_sports: "سپورٹس ویئر",
        nav_active: "ایکٹیو ویئر",
        nav_about: "ہمارے بارے میں",
        nav_contact: "رابطہ کریں",
        btn_quote: "کوٹیشن حاصل کریں",
        hero_heading: "پریمیم سپورٹس ویئر اور ملبوسات بنانے والی کمپنی",
        hero_subheading: "حسب ضرورت ڈیزائن، پرائیویٹ لیبلز، اور پیشہ ور افراد کے لیے اعلیٰ معیار کا سامان۔",
        btn_explore: "مصنوعات دریافت کریں",
        btn_learn: "مزید جانیں",
        form_title: "کوٹیشن کی درخواست",
        form_name: "پورا نام",
        form_email: "ای میل ایڈریس",
        form_product: "پروڈکٹ کا نام",
        form_qty: "مقدار",
        form_msg: "پیغام / مخصوص ضروریات",
        btn_submit: "درخواست جمع کروائیں",
        section_products: "ہماری بنیادی کیٹیگریز",
        section_products_desc: "ہمارے کسٹم سپورٹس ویئر اور لوازمات کی وسیع رینج دیکھیں۔",
        cat_sports: "سپورٹس ویئر",
        cat_sports_desc: "ساکر، باسکٹ بال، امریکن فٹ بال یونیفارمز",
        cat_active: "ایکٹیو ویئر",
        cat_active_desc: "ہڈیز، ٹی شرٹس، ٹریک سوٹس۔ بہترین کارکردگی کیلئے۔",
        cat_combat: "کامبیٹ سپورٹس",
        cat_combat_desc: "ایم ایم اے گیئر، باکسنگ گلووز اور فائٹ ویئر",
        cat_equip: "کھیلوں کا سامان",
        cat_equip_desc: "بیگز، گلووز، حفاظتی سامان",
        btn_view: "سیریز دیکھیں",
        footer_about: "بیکو کے بارے میں",
        footer_about_desc: "ہم ایک پریمیم مینوفیکچرنگ کمپنی ہیں جو عالمی سطح پر ٹیموں اور برانڈز کے لیے اعلیٰ معیار کے ملبوسات فراہم کرنے کے لیے وقف ہے۔",
        footer_links: "فوری لنکس",
        footer_contact: "رابطہ کی معلومات",
        footer_address: "سیالکوٹ، پنجاب، پاکستان",
        footer_copyright: "© 2026 بیکو سپورٹس کلون۔ جملہ حقوق محفوظ ہیں۔"
    },
    ar: {
        site_title: "بيكو سبورتس - ملابس رياضية فاخرة",
        logo_text: "بيكو سبورتس",
        nav_home: "الرئيسية",
        nav_sports: "ملابس رياضية",
        nav_active: "ملابس نشطة",
        nav_about: "معلومات عنا",
        nav_contact: "اتصل بنا",
        btn_quote: "احصل على تسعير",
        hero_heading: "الشركة المصنعة للملابس الرياضية الفاخرة",
        hero_subheading: "تصميمات مخصصة، علامات تجارية خاصة، ومعدات عالية الجودة للمحترفين.",
        btn_explore: "استكشف المنتجات",
        btn_learn: "اعرف المزيد",
        form_title: "طلب عرض أسعار",
        form_name: "الاسم الكامل",
        form_email: "عنوان البريد الإلكتروني",
        form_product: "اسم المنتج",
        form_qty: "الكمية",
        form_msg: "الرسالة / متطلبات محددة",
        btn_submit: "إرسال الطلب",
        section_products: "فئاتنا الأساسية",
        section_products_desc: "استكشف مجموعتنا الواسعة من الملابس الرياضية والإكسسوارات المخصصة.",
        cat_sports: "ملابس رياضية",
        cat_sports_desc: "زي كرة القدم، كرة السلة، وكرة القدم الأمريكية",
        cat_active: "ملابس نشطة",
        cat_active_desc: "هوديس، قمصان، بدل رياضية لأعلى أداء",
        cat_combat: "الرياضات القتالية",
        cat_combat_desc: "معدات فنون القتال المختلطة وقفازات الملاكمة",
        cat_equip: "معدات رياضية",
        cat_equip_desc: "حقائب، قفازات، معدات واقية",
        btn_view: "عرض السلسلة",
        footer_about: "عن بيكو",
        footer_about_desc: "نحن شركة تصنيع متميزة مكرسة لتوفير ملابس مخصصة عالية الجودة للفرق والعلامات التجارية عالمياً.",
        footer_links: "روابط سريعة",
        footer_contact: "معلومات الاتصال",
        footer_address: "سيالكوت، البنجاب، باكستان",
        footer_copyright: "© 2026 نسخة بيكو للرياضة. كل الحقوق محفوظة."
    },
    es: {
        site_title: "Clon de Beqo Sports - Ropa Deportiva Premium",
        logo_text: "BEQO SPORTS",
        nav_home: "Inicio",
        nav_sports: "Ropa Deportiva",
        nav_active: "Ropa Activa",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        btn_quote: "Cotizar",
        hero_heading: "Fabricante Premium de Ropa Deportiva",
        hero_subheading: "Diseños personalizados, marcas privadas y equipamiento de alta calidad para profesionales.",
        btn_explore: "Explorar Productos",
        btn_learn: "Saber Más",
        form_title: "Solicitar Cotización",
        form_name: "Nombre Completo",
        form_email: "Correo Electrónico",
        form_product: "Nombre del Producto",
        form_qty: "Cantidad",
        form_msg: "Mensaje / Requisitos Específicos",
        btn_submit: "Enviar Solicitud",
        section_products: "Nuestras Categorías Principales",
        section_products_desc: "Explore nuestra amplia gama de ropa y accesorios deportivos personalizados.",
        cat_sports: "Ropa Deportiva",
        cat_sports_desc: "Uniformes de Fútbol, Baloncesto, Fútbol Americano",
        cat_active: "Ropa Activa",
        cat_active_desc: "Sudaderas, Camisetas, Chándales para máximo rendimiento",
        cat_combat: "Deportes de Combate",
        cat_combat_desc: "Equipamiento MMA, Guantes de Boxeo y ropa de lucha",
        cat_equip: "Accesorios Deportivos",
        cat_equip_desc: "Bolsas, Guantes, Equipo de Protección",
        btn_view: "Ver Serie",
        footer_about: "Sobre Beqo",
        footer_about_desc: "Somos una empresa de fabricación premium dedicada a proporcionar ropa personalizada de alta calidad para equipos y marcas a nivel mundial.",
        footer_links: "Enlaces Rápidos",
        footer_contact: "Información de Contacto",
        footer_address: "Sialkot, Punjab, Pakistán",
        footer_copyright: "© 2026 Clon de Beqo Sports. Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('lang-switch');

    // Function to apply translation
    const setLanguage = (lang) => {
        // Set document direction for RTL languages (Urdu, Arabic)
        if (lang === 'ur' || lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
        }

        // Update meta language
        document.documentElement.lang = lang;

        // Apply text translation
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if(element.tagName === "TITLE") {
                    document.title = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                    // Retain the arrow icon for 'View Series' buttons
                    if (element.classList.contains('view-more')) {
                        element.innerHTML += ' <i class="fas fa-arrow-right"></i>';
                    }
                }
            }
        });

        // Apply placeholder translation
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Save preference to localStorage
        localStorage.setItem('preferredLang', lang);
    };

    // Listen for language change
    langSwitch.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Check localStorage for saved language or default to English
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    langSwitch.value = savedLang;
    setLanguage(savedLang);
});
