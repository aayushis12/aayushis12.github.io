

(function($){
  var $window=$(window);
  $window.on('scroll',function(){
    var targetScrollHeight=$('#projects').offset().top
    var scrollTop=$window.scrollTop();
    if(scrollTop+900>=targetScrollHeight){
      $(".projects-list").addClass("slidein");
    }
    var addBackground=$("#about").offset().top;
    if(scrollTop>=addBackground){
      //console.log("hey");
      //$('.navbar').style.border='0.1em solid white';
    }
  })
  
  $window.on('load',function(){
    var list=document.getElementsByClassName('list');
    Array.from(list).forEach(element=>{
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      element.style.border='0.2em solid'+color;
    })
  })


})(jQuery);



function goto(id){
   $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
}
