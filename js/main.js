(function($) {
    
    
    // Variables
    var $projects = $('.projects'), // projects container
    	$project = $('.project'), // individual projects
    	$projectImageBefore = CSSRulePlugin.getRule(".project-image:before"), //decoration
    	$projectImageAfter = CSSRulePlugin.getRule(".project-image:after"), //decoration
    	tlProjects, tlProject, tlProjectLoader, tlCircles;

        tlProject = new TimelineMax({repeat: -1, repeatDelay: 2});

        tlCircles = new TimelineMax({repeat: -1});
        tlCircles
            .to($projectImageBefore, 0.8, {cssRule:{top:'5px'}, ease:Linear.easeNone})
            .to($projectImageBefore, 0.8, {cssRule:{left:'5px'}, ease:Linear.easeNone})
            .to($projectImageBefore, 0.8, {cssRule:{top:'-5px'}, ease:Linear.easeNone})
            .to($projectImageBefore, 0.8, {cssRule:{left:'-5px'}, ease:Linear.easeNone})
            .to($projectImageAfter, 0.7, {cssRule:{bottom:'6px'}, ease:Linear.easeNone}, '0')
            .to($projectImageAfter, 0.7, {cssRule:{right:'6px'}, ease:Linear.easeNone}, '0.7')
            .to($projectImageAfter, 0.7, {cssRule:{bottom:'-6px'}, ease:Linear.easeNone}, '1.1')
            .to($projectImageAfter, 0.7, {cssRule:{right:'-6px'}, ease:Linear.easeNone}, '1.5')
            ;
        
        
        //Main Timeline 
        tlProjects = new TimelineMax();
        tlProjects.set($projects, {autoAlpha: 1});
        
        
          
    
        
        $project.each(function(index, element) {
        var projectClasses = $(this).attr('class').split(' '),
        projectClass = projectClasses[1],
        $pixel = $(this).find('.pixel'),
        $pixels = $(this).find('.project-pixels'),
        $projectTitle = $(this).find('.project-title'),
        $projectSubtitle = $(this).find('.project-subtitle'),
        $projectImage = $(this).find('.project-image');
    
        // ProjectCTA (Call to Action)
        var tlProjectsCTA = new TimelineMax();
    
        var $projectLink = $(this).find('.button-container'),
            $projectLinkButton = $(this).find('.button'),
            $projectLinkSpan = $(this).find('.bp'),
            $projectLinkText = $(this).find('.bp-text');
        
        // Call to Action button (View Project)    
        tlProjectsCTA
            .to($projectSubtitle, 0.3, {autoAlpha: 0, yPercent: 100, ease:Power4.easeInOut})
            .staggerFrom($projectLinkSpan, 0.3, {autoAlpha: 0, yPercent: -100, ease:Back.easeOut}, 0.1)
	    	.from($projectLinkText,  0.3, {autoAlpha: 0, x: '-100%', ease:Power4.easeInOut}, '-=0.1');
            
            
        // Loader
        tlProjectLoader = new TimelineMax({paused: true}),
        $loader = $(this).find('.loader');
    
        tlProjectLoader
	    	.to([$projectImageBefore, $projectImageAfter], 0.4, {cssRule:{opacity: '0'}})
<<<<<<< HEAD
	    	.fromTo($loader, 5, {strokeDasharray: 547, strokeDashoffset: 547}, {strokeDasharray: 547, strokeDashoffset: 0, ease: Power0.easeNone})
=======
	    	.fromTo($loader, 5, {strokeDasharray: 247, strokeDashoffset: 247}, {strokeDasharray: 247, strokeDashoffset: 0, ease: Power0.easeNone})
>>>>>>> 50c71e2d60f824c56dc0f55feac334fb85417e04
	    	.to($loader, 0.4, {autoAlpha: 0, onComplete: resumeProjects})
	    	.to([$projectImageBefore, $projectImageAfter], 0.4, {cssRule:{opacity: '1'}}, '-=0.4');
            
            
        // move image from the far left
        tlProject
            .set($(this), {zIndex: 1})
            .set([$projectTitle, $projectSubtitle, $pixel], {autoAlpha: 0})
            .fromTo($projectImage, 0.4, {autoAlpha: 0, xPercent: '-200'}, {autoAlpha: 1, xPercent: '-10', ease: Power4.easeInOut, onStart: updateClass, onStartParams: [projectClass]})
            .add('imageIn')
            .staggerFromTo($pixel, 0.3, {autoAlpha: 0, x: '-=10'}, {autoAlpha: 1, x: '0', ease:Power4.easeInOut}, 0.02, '-=0.2')
    	    .add('pixelsIn')
            .fromTo($projectTitle, 0.7, {autoAlpha: 0, xPercent: '-50'}, {autoAlpha: 1, xPercent: '-5', ease:Power4.easeInOut}, '-=0.4')
            .fromTo($projectSubtitle, 0.7, {autoAlpha: 0, xPercent: '-50'}, {autoAlpha: 1, xPercent: '-2', ease:Power4.easeInOut}, '-=0.5')
            .add('titleIn')
            .add(tlProjectsCTA, '+=2')
            .to($projectTitle, 4, {xPercent: '+=5', ease:Linear.easeNone}, 'titleIn-=0.1' )
            .to($projectSubtitle, 4, {xPercent: '+=2', ease:Linear.easeNone}, 'titleIn-=0.2')
            .add('titleOut')
            .to($projectImage, 5, {xPercent: '0', ease:Linear.easeNone, onComplete: pauseProjects, onCompleteParams: [projectClass, tlProjectLoader]}, 'imageIn')
            .add('imageOut')
            .to($pixels, 4.1, {xPercent: '-5', ease:Linear.easeNone}, 'pixelsIn')
            .to([$projectTitle, $projectSubtitle, $projectLink], 0.4, {autoAlpha: 0, xPercent: '+=10', ease:Power4.easeInOut}, 'titleOut')
            .to($projectImage, 0.5, {autoAlpha: 0, xPercent: '+=80', ease:Power4.easeInOut}, 'imageOut');
            tlProjects.add(tlProject);
        });
        
<<<<<<< HEAD
        function updateClass(projectClass){
		  $('body').attr('class', projectClass);
	    }
=======
        function updateClasses(projectClass) {
            $('body').attr('class', projectClass);
        }
>>>>>>> 50c71e2d60f824c56dc0f55feac334fb85417e04
    
        function pauseProjects(projectClass, tlProjectLoader) {
            tlProjects.pause();
            
            if(projectClass != 'project00') {
                tlProjectLoader.seek(0);
			    tlProjectLoader.play();
            }
        }
    
        $('.project00 .button').on('click', function(e) {
            if(e.preventDefault) {
			    e.preventDefault();
            } else {
                e.returnValue = false;
            }
            
            tlProjects.resume();
        });
    
        // resume projects
        function resumeProjects(){

            tlProjects.resume();
        }
            
    })(jQuery);






























