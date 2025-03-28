// Definindo os breakpoints como constantes
const breakpoints = {
    mobile: 767,  // Para telas de smartphones
    tablet: 1024, // Para tablets
    desktop: 1200, // Para desktops
  };
  
  // Função para ajustar o layout com base no tamanho da janela
  function adjustLayout() {
    const width = window.innerWidth;
  
    if (width <= breakpoints.mobile) {
      document.body.style.backgroundColor = 'lightblue';  // Cor de fundo para dispositivos móveis
      console.log("Tela móvel");
    } else if (width > breakpoints.mobile && width <= breakpoints.tablet) {
      document.body.style.backgroundColor = 'lightgreen';  // Cor de fundo para tablets
      console.log("Tela tablet");
    } else if (width > breakpoints.tablet && width <= breakpoints.desktop) {
      document.body.style.backgroundColor = 'lightyellow';  // Cor de fundo para desktop
      console.log("Tela desktop");
    } else {
      document.body.style.backgroundColor = 'lightcoral';  // Cor de fundo para telas grandes
      console.log("Tela extra grande");
    }
  }
  
  // Chama a função sempre que a janela é redimensionada
  window.addEventListener('resize', adjustLayout);
  
  // Chama a função ao carregar a página para definir o layout inicial
  adjustLayout();
  