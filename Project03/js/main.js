(function($) {
    /* 
		Colors before reset
		orange - #F8AD43
		red - #F8876E
		green - #73C996
	
		Meter bcg - #c6d7df to #5AB783
		Meter stroke - #7c99a2 to #448962
        
        
        SVG Lab – Clear Stage Exercise – 23:09
	*/
    //Potential SVG drawing with ScrollMagic
    var controller = new ScrollMagic.Controller();
    
    
	var $body = $('body'),
        $coin = $('#Coin'),
        $Petr = $('#Petr'),
        $Smile = $('#smile'),
        $h1 = $('h1'),
        $Stage = $('#stage'),
        $MainMask = $('#MainMask'),
        $MainBulb = $('#MainBulb'),
        $Liquids = $('.liquid'),
        $Liquid01 = $('#Liquid1'),
        $Liquid02 = $('#Liquid2'),
        $Liquid03 = $('#Liquid3'),
        $Liquid04 = $('#Liquid4'),
        $Liquid05 = $('#Liquid5'),
        $Liquid06 = $('#Liquid6'),
        $Liquid07 = $('#Liquid7'),
        $Liquid08 = $('#Liquid8'),
        $Liquid09 = $('#Liquid9'),
        $LiquidInsideMask01 = $('#LiquidInside1Mask'),
        $LiquidInsideMask02 = $('#LiquidInside2Mask'),
        $LiquidInsideMask03 = $('#LiquidInside3Mask'),
        $LiquidInsideMask04 = $('#LiquidInside4Mask'),
        $LiquidInsideMask05 = $('#LiquidInside5Mask'),
        $LiquidInsideMask06 = $('#LiquidInside6Mask'),
        $LiquidInsideMask07 = $('#LiquidInside7Mask'),
        $bulb1 = $('#Bulb1 .bulb'),
        $bulb2 = $('#Bulb2 .bulb'),
        $bulb3 = $('#Bulb3 .bulb'),
        $meterBcg = $('#meterBcg'),
        $meterStroke = $('#meterStroke'),
        $part2light = $('#Part2 .light'),
        $part2lightLeft = $('#Part2 .light-left'),
        $part2lightMid = $('#Part2 .light-mid'),
        $part2lightRight = $('#Part2 .light-right'),
        $PrinterLightsTop = $('#PrinterLIghtTop, #PrinterLIghtTop_1_'),
        $PrinterLightsBottom = $('#PrinterLIghtBottom, #PrinterLIghtBottom_1_'),
        $mainLight = $('#MainLight'),
        $paper = $('#Paper'),
        $slider = $('#Slider'),
        mainTl = new TimelineMax();
    
    
    
    
    
    
    
    
    function clearStage() {
        var clearTl = new TimelineMax();
        
        clearTl
            .set($coin, {x: '-90px', y:'120px', scale: 0.5, transformOrigin: 'center center'})
            .set($MainBulb, {fill: '#ffffff'})
            .set($Liquids, {stroke: '#ffffff'})
            .set($Petr, {autoAlpha: 1, x: '1400%' ,scale: 2.5, transformOrigin: 'bottom center'})
            .set($Stage, {autoAlpha: 0.6})
            .set($MainMask, {attr: {x: 932}})
            .set($LiquidInsideMask01, {attr: {y: 492}})
            .set($LiquidInsideMask02, {attr: {y: 494}})
            .set($LiquidInsideMask03, {attr: {y: 491}})
            .set($LiquidInsideMask04, {attr: {y: 656}})
			.set($LiquidInsideMask05, {attr: {y: 654}})
			.set($LiquidInsideMask06, {attr: {y: 651}})
			.set($LiquidInsideMask07, {attr: {y: 651}})
            .set($paper, {y: '+=55'}); 
            
        return clearTl;
    }


    function getIntroTl() {
        var introTl = new TimelineMax();
        
        introTl.set($h1, {y: '-=40px'})
            .set($h1, {y: '-=40px'})
            .fromTo($Petr, 0.8, {x: '1400%', autoAlpha: 0}, {x: '1000%', autoAlpha: 1, ease:Power4.easeInOut})
			.fromTo($h1, 0.5, {x: '-46%', autoAlpha: 0}, {x: '-50%', autoAlpha: 1}, '-=0.4')
            .fromTo($Smile, 0.4, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1, ease:Power4.easeInOut}, '+=1.2')
            .add('zoom-out')
            .to($Petr, 1, {x: '0%', scale: 1, ease:Power4.easeInOut}, 'zoom-out+=1')
            .to($h1, 0.5, {autoAlpha: 0}, 'zoom-out+=1')
            .to($MainMask, 1, {attr: {x: 131}, ease:Power4.easeInOut}, 'zoom-out+=1')
//            .to($Stage, 1, {autoAlpha: 1}, '-=0.5') 
            .set($body, {className: '+=is-active'}, 'zoom-out+=1');
        return introTl;
    }
    
    function init() {
        mainTl.add(clearStage());
        mainTl.add(getIntroTl(), 'scene-intro');
    } 
    init();
})(jQuery);