document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('cambiar-fondo');
    boton.addEventListener('click', function() {
      const cuerpo = document.body;
      cuerpo.classList.toggle('fondo-negro');
    });
  });
