
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

  function carregar() {
    var url = 'https://news.google.com/rss?hl=pt‐PT&gl=PT&ceid=PT:pt‐150';
    $.ajax({
        url:
"https://api.rss2json.com/v1/api.json?rss_url=" + url,
        type: 'GET',
        success: function (data) {
            objeto_json = eval(data);
            // ler o conteúdo
            var frase = "";
            for (i = 0; i < objeto_json.items.length; i++)
{
                frase = frase + "Título: <b>" +
objeto_json.items[i].title + "</b><br/>";
                frase = frase +
objeto_json.items[i].description + "<br/>";
            }
            $("#caixa02").html(frase);
          },
          error: function (xhr, status) {
              alert('Ocorreu um erro.');
          }
      });
  }

//validar campo do telemovel 

function validarTelemovel(){



//validar telemvel como número

var telemovel = document.getElementById('telemovel').value;
if (isNaN(telemovel)){
        alert('O número inserido não está correto.');
        return false;
}


//validar os 9 algarismos

if(!telemovel.startswith(9)){
    alert('Este campo tem de começar com o número 9.');
    return false;
}
}
// Orcamento e alterações de Preços

function atualiza(){
    let preco = 0;
    preco = document.getElementById('drpProduto').value;

  var drpProduto = document.querySelector("drpProduto");
  drpProduto.addEventListener("valor-orcamento", function() {
    alert("mensagem")
  
  });

const checkboxGroup = document.getElementById('checkbox-group')
const checkboxes = checkboxGroup.querySelectorAll('input[type=checkbox]');

for (let i=0; i< checkboxes.length; i++){

    if (checkboxes[i].checked == true){
        preco += checkboxes[i].value; 
    }
}


// desconto de 5% por cada mês de prazo

const prazo = document.getElementById('prazo').value;
preco = preco-(preco*prazo)/100;

document.getElementById('valor-orcamento').value = preco;

console.log(preco);
}