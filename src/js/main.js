$(document).ready(function(){
    function moveUp(thisObject){
        thisObject.appendTo(thisObject.parents('.map-full>g'));
    }

    $('.map-full g').hover(function() {
        moveUp($(this));
    });

    $('.start .btn').click(function()  {
        anime({
            targets: '.overlay',
            opacity: 0,
            duration: 600,
            easing: 'easeInOutCubic',
        });

        anime({
            targets: '.map-full',
            width: 100,
            duration: 600,
            easing: 'easeInOutCubic',
        });

        anime({
            targets: '.start',
            opacity: 0,
            duration: 600,            
            easing: 'easeInOutCubic',
            complete: function () {
                $('.start').remove();
            }
        });

        $('.map-full').addClass('show');

        // var tl = anime.timeline();
        // tl.add({
        //     targets: '.map-full',
        //     opacity: 1,
        //     width: '72%',
        //     duration: 600,
        //     easing: 'easeInOutCubic',            
        // })
    });
});
