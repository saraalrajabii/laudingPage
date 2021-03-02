// jquery for display things 
$(document).ready (function(){
  console.log("hii");
  $(document ).on("change" , ".menu" , function(){
    console.log("hirrrrrrrrr");
    var target =$(this).data("target");
    
    if ($(this).val() == $(this).data("check")){
      $(target).css("display" , "block"); 
    }else{
      $(target).css("display" , "none"); 
    }
  })
})




$("#usrname").keypress(function() {
  if($(this).val().length > 22) {
     console.log(error)
 }

});

// console.log for value
var Submit = document.querySelector('.button2');
Submit.addEventListener('click' , function(){
  console.log("username   "+ document.getElementById("usrname").value +
  ",  email  "+  document.getElementById("email").value +
  ",  password  "+  document.getElementById("psw").value +
  ",  select  "+   document.getElementById("select-box").value 
  )
});


// on click close 

window.onclick = function(event) {
  if (event.target == modalOutside) {
    modalOutside.style.display = "none";
  }
}


// pop up 
  var modalBotton = document.querySelector('.button');
  var modalOutside =document.querySelector ('.modal-outside');
  var modalClose =document.querySelector('.modal-close');

  modalBotton.addEventListener('click' , function(){
    modalOutside.classList.add('active');
  });
  modalClose.addEventListener('click' , function(){
    modalOutside.classList.remove('active');
  });


  