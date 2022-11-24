function GenerarVentanaModal(mensaje){
  document.querySelector('#txtMje').innerHTML=mensaje;
  var elem=document.querySelector('#ventanaModal');
  var instance=M.Modal.getInstance(elem);
  instance.open();
}

