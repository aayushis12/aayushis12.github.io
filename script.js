

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
        $('.middle').addClass('zoomin');
        $('footer').show();
    }else{
      $('footer').hide();
      $('.middle').removeClass('zoomin');
    }
  })
  
  $window.on('load',function(){
    var list=document.getElementsByClassName('list');
    Array.from(list).forEach(element=>{
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      element.style.border='0.2xem solid'+color;
    })
    //var targetScrollTop=$window.scrollTop();
   // $('#projects').append("<div class='line'></div>");
   /*var addanimation=$("#about").offset().top;
   if (scrollTop>=addanimation) {
    $('#projects').addClass('zoomin');
   }*/
  })

  $('footer').hide();

})(jQuery);
   function showanimation(){
    $('.middle').addClass('zoomin');
   }

function goto(id){
   $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
}
