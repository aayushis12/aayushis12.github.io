/*
(function($) {
  var $window = $(window);
  $window.on('scroll', function(){
    var  targetScrollHeight = $('#section3').offset().top
    var scrollTop = $window.scrollTop();
    if (scrollTop >= targetScrollHeight - 500) {
      $(".projects-list").addClass("abc");
    }
  });

})(jQuery);*/

(function($){
  var $window=$(window);
  $window.on('scroll',function(){
    var targetScrollHeight=$('#projects').offset().top
    var scrollTop=$window.scrollTop();
    if(scrollTop+500>=targetScrollHeight){
      $(".projects-list").addClass("slidein");
    }
  })
  
  $window.on('load',function(){
    var list=document.getElementsByClassName('list');
    Array.from(list).forEach(element=>{
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      element.style.border='0.1em solid'+color;
    })
  })
})(jQuery);









// document.addEventListener('DOMContentLoaded', function(event) {
//   event.preventDefault();
//   var arr_circle = [];
//   var arr_text = [];
//   arr_circle = document.getElementsByClassName('skill-circle');
//   Array.from(arr_circle).forEach(element =>
//     element.addEventListener('mouseover', function(event) {
//       var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//       var child_div = element.childNodes[0];
//       child_div.className += ' rotate';
//       child_div.style.color = color;
//       element.style.border = '2em solid ' + color;
//       //child_div.style.border='2em solid '+color;
//       //child_div.style.borderRadius='100%';
//     }),
//   );

//   Array.from(arr_circle).forEach(element =>
//     element.addEventListener('mouseout', function(event) {
//       var child_div = element.childNodes[0];
//       child_div.classList.remove('rotate');
//     }),
//   );
// 



function goto(id){
   $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
}
