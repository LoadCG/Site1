document.addEventListener('DOMContentLoaded', function() {
    var btnTopo = document.querySelector('.btn-topo');
  window.addEventListener('scroll', function() {
      //O Botão só aparecerá depois que rolar o scroll 50 px pra baixo
    if (window.pageYOffset > 50) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });
});