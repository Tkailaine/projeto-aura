document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animated-element');

    // Função para verificar se o elemento está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            rect.left < window.innerWidth &&
            rect.right > 0
        );
    }

    // Função para ativar a animação quando o elemento está na tela
    function animateOnScroll() {
        elements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }

    // Verifica a posição ao rolar a página
    window.addEventListener('scroll', () => {
        // Usar um timeout para limitar a frequência das verificações
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(animateOnScroll, 100); // Verificar a cada 100ms
    });

    // Verifica a posição ao carregar a página
    animateOnScroll();
});
  
    // Menu lateral
    document.querySelectorAll('.menu-lateral a').forEach(link => {
      link.addEventListener('click', function() {
        document.querySelector('.menu-lateral').classList.remove('open');
        document.querySelector('.imenu').style.opacity = '1';
      });
    });
  
    document.querySelector('.imenu').addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.add('open');
      document.querySelector('.imenu').style.opacity = '1';
    });
  
    document.querySelector('.close-btn').addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.remove('open');
      document.querySelector('.imenu').style.opacity = '1';
    });
  
    // Slider atrações
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
  
    next.addEventListener('click', function(){
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    });
  
    prev.addEventListener('click', function(){
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    });
  
    // Galeria
    const lightboxLinks = document.querySelectorAll('a[href^="#unique-img"]');
    const lightboxes = document.querySelectorAll('.unique-lightbox');
  
    lightboxLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.style.display = 'block';
      });
    });
  
    lightboxes.forEach(lightbox => {
      const closeBtn = lightbox.querySelector('.unique-close');
      closeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        lightbox.style.display = 'none';
      });
    });
  
  