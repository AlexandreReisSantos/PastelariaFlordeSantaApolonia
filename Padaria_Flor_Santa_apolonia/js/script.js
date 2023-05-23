
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

function clickMenu() {
  if (itens.style.display == 'block') {
      itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}



const grid = document.querySelector('.grid');

const products = [
    'broa2',
    'mistura-padinha2',
    'pao-avo2',
    'pao-bico2',
    'pao-cementes-cesamo2',
    'pao-centeio2',
    'pao-cereais2',
    'pao-girassol2',
    'pao-integral2',
    'pao-mistura2',
    'pao-mistura-bola2',
    'pao-mistura-grande2',
    'Coimbra',
];

const createProductCard = (productName) => {
    const card = createElement('div', 'card');
    const productImage = createElement('div', 'product-image');
    const productNameElement = createElement('div', 'product-name');

    productImage.style.backgroundImage = `url('../Pictures/${productName}.png')`;
    productNameElement.textContent = productName;

    card.appendChild(productImage);
    card.appendChild(productNameElement);

    return card;
};

const loadProducts = () => {
    products.forEach((productName) => {
        const card = createProductCard(productName);
        grid.appendChild(card);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});
