// jquery for display things 

/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/

$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>'

var sara = $(this).parents('.dropdown').find('input').val()
  if (sara ==="Whatsapp"){
  msg = `<input   placeholder="00962xxxxx" required></input>` ;
  }else{
  	 msg = `<input  type ="email" placeholder="xx@gmail.com" required></input>` ;
  } 
  $('.msg').html(msg + input + '</span>');
}); 


// max char22
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
  ",  select  "+   document.getElementById("select1").value 
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


  