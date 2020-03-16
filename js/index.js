const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//addding text to nav a 
const nav = document.getElementById('nav');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');

a1.textContent = 'Services';
a2.textContent = 'Product';
a3.textContent = 'Vision';
a4.textContent = 'Features';
a5.textContent = 'About';
a6.textContent = 'Contact';

nav.appendChild(a1);
nav.appendChild(a2);
nav.appendChild(a3);
nav.appendChild(a4);
nav.appendChild(a5);
nav.appendChild(a6);

//adding text and image to header section
const divText = document.getElementById('cta-text');
const h1 = document.getElementById('h1');
const bnt = document.getElementById('btn');
const ctaImg = document.getElementById('cta-img');

h1.innerHTML = '<h1>DOM <br> IS<br> AWESOME</h1>';
bnt.textContent = 'Get Started';
ctaImg.src = '../img/header-img.png';

divText.appendChild(h1);
divText.appendChild(bnt);

//main content

const topOne = document.getElementById('top-one');
const h4 = document.getElementById('features');
const p1 = document.getElementById('featuresPar');
const topTwo = document.getElementById('top-two');
const h41 = document.getElementById('about');
const p11 = document.getElementById('aboutPar');
const topContent = document.getElementById('top-content');



h4.textContent = 'FEATURES';
p1.textContent = 'Features content elementum mango eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornaer nisil. Nullan convallis augue justo, at imperdiet metus scielerisque quis.';
h41.textContent = 'ABOUT';
p11.textContent = 'About content elementum mango eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornaer nisil. Nullan convallis augue justo, at imperdiet metus scielerisque quis.';
topContent.style.display = 'flex';

topOne.appendChild(h4);
topOne.appendChild(p1);
topTwo.appendChild(h41);
topTwo.appendChild(p11);


//middle image

const middleImg = document.getElementById('middle-img');
middleImg.src = "../img/mid-page-accent.jpg";

//bottom content
const bottomContent = document.getElementById('bottom-content');
const mainContent = document.getElementById('main-content');

const textContent = document.getElementById('text-content');
const contentOne = document.getElementById('contentOne');
const contentPOne = document.getElementById('contentPOne');

const textContent2 = document.getElementById('text-content2');
const contentTwo = document.getElementById('contentTwo');
const contentPTwo = document.getElementById('contentPTwo');

const textContent3 = document.getElementById('text-content3');
const contentThree = document.getElementById('contentThree');
const contentPThree = document.getElementById('contentPThree');


contentOne.textContent = 'SERVICES';
contentPOne.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu orname nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

contentTwo.textContent = 'PRODUCT';
contentPTwo.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu orname nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

contentThree.textContent = 'VISION';
contentPThree.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu orname nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

bottomContent.style.display = 'flex';

textContent.appendChild(contentOne);
textContent.appendChild(contentPOne);

textContent2.appendChild(contentTwo);
textContent2.appendChild(contentPTwo);

textContent3.appendChild(contentThree);
textContent3.appendChild(contentPThree);

bottomContent.appendChild(textContent);
bottomContent.appendChild(textContent2);
bottomContent.appendChild(textContent3);

// contact

const contact = document.querySelector('.contact');
const contactH4 = document.querySelector('.contact h4');
const contactP1 = document.querySelector('#p1');
const contactP2 = document.querySelector('#p2');
const contactP3 = document.querySelector('#p3');

contactH4.textContent = 'CONTACT';
contactP1.innerHTML = '<p>123 Way 456 Street <br> Somewhere, USA</p>';
contactP2.textContent = '1(888) 888-8888';
contactP3.textContent = 'sales@greatidea.io';

//footer
const footerP = document.querySelector('#footerP');

footerP.textContent = 'Copyright Great Idea 2018';