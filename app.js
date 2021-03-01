window.addEventListener('mouseup', function(event){
  var box = document.getElementsByClassName('modal-outside');
  if (event.target != box && event.target.parentNode != box){
      modalOutside.classList.remove('active');
    }
}); 

  var modalBotton = document.querySelector('.button');
  var modalOutside =document.querySelector ('.modal-outside');
  var modalClose =document.querySelector('.modal-close');

  modalBotton.addEventListener('click' , function(){
    modalOutside.classList.add('active');
  });
  modalClose.addEventListener('click' , function(){
    modalOutside.classList.remove('active');
  });


  