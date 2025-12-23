let lang = 'en';

const products = {
    scutched: {
        img: 'images/SCUTCHED FLAX FIBER.png',
        title: { en: 'Scutched Flax Fiber', ar: 'ألياف كتان مشطبة' },
        content: {
            en: `• Available in 1st & 2nd grade<br>• Spinning range: up to Nm 15<br>• Length: 75 – 95 cm<br>• Packing: 200 kg bales<br>• Container: 25 tons (40HC)<br><br><b>Uses:</b> Spinning – Plumbing – Decoration<br><b>Price:</b> 4900 USD / Ton<br><b>Shipping:</b> FOB`,
            ar: `• متوفر درجة أولى وثانية<br>• مدى الغزل: حتى Nm 15<br>• الطول: 75 – 95 سم<br>• التعبئة: بالات 200 كجم<br>• سعة الحاوية: 25 طن (40HC)<br><br><b>الاستخدامات:</b> الغزل – السباكة – الديكور<br><b>السعر:</b> 4900 دولار / طن<br><b>الشحن:</b> FOB`
        }
    },
    rescutched: {
        img: 'images/rescutched.jpg',
        title: { en: 'Rescutched Tow (Arrous)', ar: 'كتان قصير معاد تمشيطه' },
        content: {
            en: `• Shivs: 20% – 45%<br>• Spinning range: up to Nm 2<br><br><b>Uses:</b> Spinning – Non-woven – Automotive – Paper<br><b>Price:</b> 2200 USD / Ton<br><b>Shipping:</b> FOB`,
            ar: `• نسبة الشوائب: من 20% إلى 45%<br>• مدى الغزل: حتى Nm 2<br><br><b>الاستخدامات:</b> الغزل – المنسوجات غير المنسوجة – السيارات – الورق<br><b>السعر:</b> 2200 دولار / طن<br><b>الشحن:</b> FOB`
        }
    },
    hackled: {
        img: 'images/hackled.jpg',
        title: { en: 'Hackled Flax', ar: 'كتان ممشط' },
        content: {
            en: `• From hackling process<br>• Packed in 200 kg bales<br><br><b>Price:</b> 5200 USD / Ton<br><b>Shipping:</b> FOB`,
            ar: `• ناتج من عملية تمشيط الكتان<br>• معبأ في بالات 200 كجم<br><br><b>السعر:</b> 5200 دولار / طن<br><b>الشحن:</b> FOB`
        }
    }
};

// Get product id
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

function updateProduct() {
    if (!id || !products[id]) return;
    document.getElementById('productTitle').innerText = products[id].title[lang];
    document.getElementById('productContent').innerHTML = products[id].content[lang];
    document.getElementById('productImage').src = products[id].img;
}

// Language switch
function setLang(l) {
    lang = l;
    document.body.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en]').forEach(el => el.innerText = el.dataset[l]);
    const about = document.querySelector('.about-us');
    if (about) about.classList.add('show');
    if (window.location.href.includes('product.html')) updateProduct();
}

// Default language
setLang('en');

// Header Slider
const headerSlides = document.querySelectorAll('.header-slide');
let headerIndex = 0;
setInterval(() => {
    headerSlides[headerIndex].classList.remove('active');
    headerIndex = (headerIndex + 1) % headerSlides.length;
    headerSlides[headerIndex].classList.add('active');
}, 5000);

// Load product on page load
if (id && products[id]) updateProduct();
