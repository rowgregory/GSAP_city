console.log('pinged');

(function($) {
    'use strict';

    $.ajax({
        url: "images/city.svg",
        dataType: 'html',
        type: 'GET',
        success: function(data) {       
            console.log(data);  
            $('.container').prepend(data)

    // declare actors here

    let $bg_x5F_buildings = $('#bg_x5F_buildings'),
        $clouds = $('#Clouds'),
        $Buildinds_x5F_ = $('[id^=Building]'),
        $sun = $('.Sun'),
        $rays = $('[id^=ray]'),
        $balloon = $('#Balloon'),
        $Road_1_ = $('#Road_1_'),
        $Car2 = $('#Car2'),
        $Car1 = $('#Car1'),
        $Trees = $('#Trees'),
        $bg_color = $('#bg_color'),
        $mountains = $('#mountains'),
        $rotation_ring = $('#Rotation_x5F_ring'),
        $cardContainer = $('.card.container');

    $('#Building_1').click(function() {
        alert('You Clicked Here');
    })

    // clear stage
    const clearStage = () => {

    const clearTL = new TimelineMax();

    clearTL
        .set($bg_x5F_buildings, {autoAlpha:0})
        .set($sun, {y:'-300'})
        .set($balloon, {autoAlpha:0})
        .set($Road_1_, {y:'500'})
        .set($Car2, {autoAlpha:0})
        .set($Car1, {x:'-1000'})
        .set($Trees, {y:'1000'})
        .set($mountains, {autoAlpha:0})
        .set($bg_color, {x:'-2000'})
        .set($clouds, {x:'-1610'})
        // .set($rotation_ring, {autoAlpha:0})
        .set($Buildinds_x5F_, {y:'-850', onComplete: showContainer})


        function showContainer ()  {
			$cardContainer.css('display', 'block')
        }

        return clearTL;
    }   

    const enterBuildings = () => {

        var apartmentsTL = new TimelineMax();

        apartmentsTL
            .staggerTo($Buildinds_x5F_, 1, {y:0, ease: Power4.easeOut}, 0.01)
            
            .fromTo($mountains, 0.9, {scaleY:0.2, autoAlpha:0, transformOrigin:'center bottom'}, 
                {scaleY:1, autoAlpha:1, transformOrigin:'center bottom', ease:Back.easeInOut}, '-0.01')
            .fromTo($mountains, 0.9, {scaleX:0.2, autoAlpha:0, transformOrigin:'center bottom'}, 
                {scaleX:1, autoAlpha:1, transformOrigin:'center bottom', ease:Back.easeInOut}, '-=0.9')

            .fromTo($bg_x5F_buildings, 0.9, {scaleY:0.2, autoAlpha:0, transformOrigin:'center bottom'}, 
                {scaleY:1, autoAlpha:1, transformOrigin:'center bottom', ease:Back.easeInOut}, '0.5')

        return apartmentsTL;
    }

    const enterBackground = () => {



        var _bg = new TimelineMax();

       

        _bg
            // .fromTo($Trees, 0.9, {scaleY:0.2, autoAlpha:0, transformOrigin:'center bottom'}, 
            // {scaleY:1, autoAlpha:1, transformOrigin:'center bottom', ease:Back.easeInOut}, '0.7')
            .staggerTo($Trees, 1.5, {y:0, ease: Power4.easeOut}, 0.01, '0.5')
            .staggerTo($bg_color, 3, {x:0, ease: Power4.easeOut}, 0.01, '1')
            .staggerTo($Road_1_, 1, {y:0, ease: Power4.easeOut}, 0.01, '-0.1')
            .staggerTo($sun, 1, {y:0, ease: Power4.easeOut}, 0.01, '1.2')
            .fromTo($rays, 0.9, {scale:0.2, autoAlpha:0, transformOrigin:'center center'}, 
                {scale:1, autoAlpha:1, transformOrigin:'center center', ease:Back.easeInOut}, '1.3')
            .staggerTo($clouds, 2, {x:0, autoAlpha:0.8, ease: Power4.easeOut}, 0.01, '0.5')
            
            
            
            
        return _bg;

    }

    const go = () => {
        
        let masterTL = new TimelineMax();

        masterTL
            .add(clearStage(), 'scene-clear-stage')
            .add(enterBuildings(), 'scene-apartment-buildings')
            .add(enterBackground(), 'scene-background')
    }

    go();
}
})


})(jQuery);