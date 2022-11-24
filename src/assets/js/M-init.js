 //Para que se abra la navbar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  //Para que se abra la ventana modal primero debo inicializarla
document.addEventListener('DOMContentLoaded', function(){
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});
