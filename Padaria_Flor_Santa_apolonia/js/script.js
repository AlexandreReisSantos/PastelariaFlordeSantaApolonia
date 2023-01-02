
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

  let check = 400

  function select(seletor) {

    opt = newOption('Quem somos', 'Onde estamos');

    console.log(select);

  }
    