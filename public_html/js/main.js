

$(document).ready(function(){
    
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();
    
    
    //team-slider
    if($('.team-member-slider').length>0){
       $(".team-member-slider").owlCarousel({
           
           loop:true,
           autoplay:true,
           autoplayTimeout:2000,
           
           dotsEach: 3 ,
           responsive:{
               0:{
                   
                   items:1,
                   margin:0
               },
               992:{
                   
                   items:2,
                   margin:30
               }
           }
       }); 
    }
    

    
    
    
    
});

