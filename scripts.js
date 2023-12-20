// Se houver interatividade específica a ser adicionada, inclua aqui
// Por exemplo, adição de efeitos de rolagem suave para âncoras na página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animar a apresentação após o carregamento da página
window.addEventListener('load', function() {
    const presentationDiv = document.querySelector('.presentation');
    presentationDiv.style.animationPlayState = 'running';
  });
  
