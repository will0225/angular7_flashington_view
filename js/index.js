$(document).ready(function() {
		$.ajax({
	    type: "GET",
	    url: "https://admin.flashington.com/guestApi/site_settings",
	    //data: JSON.stringify(formData),
	    contentType: "application/json charset=utf-8",
	    success: function(data) {
	    	var background = $.grep(data, function (e) { return e.key == 'home_page_bg_image'; });
	    	$('.imageContainer img').attr('src', background[0].value);
	    	var site_logo = $.grep(data, function (e) { return e.key == 'site_logo'; });
	    	$('#site_logo').attr('src', site_logo[0].value);
	    },
	    dataType: "json"
	});
})