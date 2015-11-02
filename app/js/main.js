$(document).ready(function() {
	console.log('js Started!');
	console.log($);
	// Style select
	$("#sort").select2();

	// 2-Columns layout of important info block
	$(".important-text-wrapper").columnize({
		width: 535,
		height: 400
	});

	// Change view
	$(".list-view__img").on("click", function() {
		switch ( $(".list-view__img").index (this) ) {
			case 0:
				console.log('Press 1st');
				//$(this).addClass("list-view__img--preview-active");
				$(".list-view__img").eq(0).addClass("list-view__img--preview-active");
				$(".list-view__img").eq(1).removeClass("list-view__img--thumbnail-active");
				$(".list-view__img").eq(2).removeClass("list-view__img--list-active");
				$("#thumbs").slideDown(600);
				$("#mosaic").slideUp();
				$("#list").slideUp();
				break;
			case 1:
				console.log('Press 2nd');
				$(".list-view__img").eq(0).removeClass("list-view__img--preview-active");
				$(".list-view__img").eq(1).addClass("list-view__img--thumbnail-active");
				$(".list-view__img").eq(2).removeClass("list-view__img--list-active");
				$("#mosaic").slideDown(600);
				$("#thumbs").slideUp();
				$("#list").slideUp();
				break;
			case 2:
				console.log('Press 3rd!');
				$(".list-view__img").eq(0).removeClass("list-view__img--preview-active");
				$(".list-view__img").eq(1).removeClass("list-view__img--thumbnail-active");
				$(".list-view__img").eq(2).addClass("list-view__img--list-active");
				$("#list").slideDown(600);
				$("#mosaic").slideUp();
				$("#thumbs").slideUp();

				break;
		}
	});

	// Slideshow
	$('.catalog_item_icons li').click(function() {
	    $(this).addClass("catalog_item_icons__preview--current");
		$(this).next().removeClass("catalog_item_icons__preview--current");
		$(this).prev().removeClass("catalog_item_icons__preview--current");
		_src = $('img', this).attr('src');
	    console.log(_src);
	    _obj = $(this).parents('.catalog_item'); // for default-view
	    //_obj = $(this).parents('.catalog_item--default-view');
	    $('.catalog_item_icons__big-foto', _obj).attr('src', _src);
	});

	//Reset mobiles filter
	$("[name = reset-mobiles]").on('click', function(e) {
		e.preventDefault();
		//$("[name ^= check-mobile-]").eq(0).attr('checked',false)
		console.log("clear mobile filter");
		$("[name ^= check-mobile-]").each(function() {
			$(this).attr('checked', false);
		})
	});

	//Reset OS filter
	$("[name = reset-os]").on('click', function(e) {
		e.preventDefault();
		console.log("clear OS filter");
		$("[name ^= check-os-]").each(function() {
			$(this).attr('checked', false);
		})
	});

	//Price Slider
	$("#slider-range-price").slider({
		range: true,
		min: 0,
		max: 20000,
		values: [ 100, 13000 ],
		slide: function( event, ui ) {
			$( "#price-from" ).val(ui.values[ 0 ]);
			$( "#price-to" ).val(ui.values[ 1 ]);
		}
	});

	//Change from price
	$( "#price-from").on('change', function() {
		console.log("Val from: " + $(this).val());
		//console.log("Val To: " + $("#price-to").val());
		$("#slider-range-price").slider( "values", 0, $(this).val() );
	});

	//Change to price
	$( "#price-to").on('change', function() {
		console.log("Val from: " + $(this).val());
		//console.log("Val To: " + $("#price-from").val());
		$("#slider-range-price").slider( "values", 1, $(this).val() );
	});


	// Accordian filter
	$(".filter_header.filter--accordian").on('click', function() {
		// console.log('Accordian');
		// Add classes for filter header
		$(this).addClass("filter--closed");
		$(this).parent().addClass("filter--closed");
		$("ul.filter_options").each( function() {
			//console.log($(this));
			$(this).slideUp();
		});

		// Check of visibility by viewing the next element
		if(!$(this).next().is(":visible")) {
			//$(this).next().slideDown();
			$(this).removeClass("filter--closed");
			$(this).parent().removeClass("filter--closed");
			$("ul.filter_options").each( function() {
				//console.log($(this));
				$(this).slideDown();
			});
		};


	});


});