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
	var $coin = $('#Coin'),
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
        mainTl = new TimelineMax();
    
    
    
    
    
    
    
    
    function clearStage() {
        var clearTl = new TimelineMax();
        
        clearTl
            .set($coin, {x: '-90px', y:'120px', scale: 0.5, transformOrigin: 'center center'})
            .set($MainBulb, {fill: '#ffffff'})
            .set($Liquids, {stroke: '#ffffff'})
            .set($LiquidInsideMask01, {attr: {y: 492}})
            .set($LiquidInsideMask02, {attr: {y: 494}})
            .set($LiquidInsideMask03, {attr: {y: 491}})
            .set($LiquidInsideMask04, {attr: {y: 656}})
			.set($LiquidInsideMask05, {attr: {y: 654}})
			.set($LiquidInsideMask06, {attr: {y: 651}})
			.set($LiquidInsideMask07, {attr: {y: 651}}); /* y value = y + height */
        return clearTl;
    }

    function init() {
        mainTl.add(clearStage());
    } 
    init();
})(jQuery);