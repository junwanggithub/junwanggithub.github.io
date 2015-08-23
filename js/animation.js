$('.portfolio li')
    .mouseenter(function(e){
        $(this).find('.arrow-r').hoverFlow(e.type, {opacity:1, right:5}, 500);
        $(this).stop().animate({'opacity':'1'}, 300).siblings().stop().animate({'opacity':'0.4'}, 500);
    }).mouseleave(function(e){
        $(this).find('.arrow-r').hoverFlow(e.type, {opacity:0, right:0}, 500);
});

$('.portfolio').mouseleave(function(e){
    $('.portfolio li').stop().animate({'opacity':'1'}, 500);

});
