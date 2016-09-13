(function($) {

//portfolio filter nav click event
    var WJ = WJ || {};
    WJ.$portfolioContainer = $('.portfolio');
    WJ.$portfolioItems = WJ.$portfolioContainer.find('li');

    $('.categories a').click(function (e) {
        e.preventDefault();
        var $cloneItems = WJ.$portfolioItems.clone();
        var $this = $(e.target);
        var filterName = $this.data('type');
        var $target = $cloneItems.filter(function (item) {
            return filterName === 'all' ? true : $(this).data('type') === filterName;
        });

        $('.categories a').removeClass('current');
        $this.addClass('current');

        WJ.$portfolioContainer.quicksand($target, {
            adjustHeight: false,
            adjustWidth: false,
            duration: 450
        });
    });

    //portfolio mouse hover
    $('.portfolio').on('mouseenter', 'li', function(e){
        $(this).find('.arrow-r').hoverFlow(e.type, {opacity: 1, right: 5}, 500);
        $(this).stop().animate({'opacity': '1'}, 300).siblings().stop().animate({'opacity': '0.4'}, 500);
    });
    $('.portfolio').on('mouseleave', 'li', function(e){
        $(this).find('.arrow-r').hoverFlow(e.type, {opacity: 0, right: 0}, 500);
    });
        //.mouseenter(function (e) {
        //    $(this).find('.arrow-r').hoverFlow(e.type, {opacity: 1, right: 5}, 500);
        //    $(this).stop().animate({'opacity': '1'}, 300).siblings().stop().animate({'opacity': '0.4'}, 500);
        //}).mouseleave(function (e) {
        //    $(this).find('.arrow-r').hoverFlow(e.type, {opacity: 0, right: 0}, 500);
        //});

    $('.portfolio').mouseleave(function (e) {
        $('.portfolio li').stop().animate({'opacity': '1'}, 500);

    });

    //scrollable
    window.sr = ScrollReveal();
    if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
    }
    var fooReveal = {
        duration: 2000,
        //delay: 50,
        distance : '90px',
        easing   : 'ease-in-out',
        //rotate   : { z: 10 },
        scale    : 1.1
        //useDelay : 'once',
        //container : '.skills'
        //reset: true,
        //viewOffset: { top: 64 }
    };
    sr.reveal('.skills li', fooReveal);
})($);

