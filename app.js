
var Submit = document.querySelector('.button2');
Submit.addEventListener('click' , function(){
  console.log("username   "+ document.getElementById("usrname").value +
  ",  email  "+  document.getElementById("email").value +
  ",  password  "+  document.getElementById("psw").value +
  ",  select  "+   document.getElementById("select-box").value 
  )
});

window.addEventListener('mouseup', function(event){
  var box = document.getElementsByClassName('modal-outside');
  if (event.target != box && event.target.classList != box){
      // modalOutside.classList.remove('active');
       box.style.display = 'none';
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


  