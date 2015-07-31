
/* openstreet map*/
// tiles.openseamap.org does not set CORS headers, so we have to disable
// crossOrigin and we cannot use WebGL.
var duration = 400;

// Create interactions array
var interactions = [                
	new ol.interaction.DoubleClickZoom({
		duration: duration
	}),
	new ol.interaction.KeyboardPan({
		pixelDelta: 256
	}),
	new ol.interaction.KeyboardZoom({
		duration: duration
	}),
	/*new ol.interaction.MouseWheelZoom({
		duration: duration
	}),*/
	new ol.interaction.PinchRotate(),
	new ol.interaction.PinchZoom({
		duration: duration
	}),
	new ol.interaction.DragPan({
		kinetic: new ol.Kinetic(-0.01, 0.1, 200)
	}),
	new ol.interaction.DragZoom(),
	new ol.interaction.DragRotate(),
];
            
 var map = new ol.Map({
        target: 'stadtgruppenMap',
        layers: [
         new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'osm'})
          })
        ],
        view: new ol.View({
          center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
          zoom: 4
        }),
		interactions: interactions
      });
      
      


// jQuery
$(document).ready(function(){
	// dropdown menu position
	w = $('nav ul li ul').width()
	breite = $(window).width();	
	if(breite > 800){		
		wpx = -w  + 120 + "px"
		$('nav ul li ul').css('margin-left', wpx)
	}
	
	
	// localscroll
	$("nav").localScroll();
	
	// fix menu bar on scroll
	var nav = $('header');
    $(window).scroll(function () {
    	// only fix menu for monitors, not mobile
    	breite = $(window).width();
        if ($(this).scrollTop() > 1 & breite > 800) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
    
    
    // mobile menu
    $('#mobile-menu').click(function(){
    	$('nav').toggle();
    });

});


// scrolling of background images, fancy
$(window).enllax();













