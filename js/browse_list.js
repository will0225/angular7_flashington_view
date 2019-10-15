
$(document).ready(function() {
    var pathName = window.location.href;
    var params = pathName.split('?');
    var param = params[1].split('&');
    var category = param[0].split('=');
    var id = param[1].split('=');

    $.ajax({
	    type: "GET",
	    url: "https://admin.flashington.com/guestApi/site_settings",
	    //data: JSON.stringify(formData),
	    contentType: "application/json charset=utf-8",
	    success: function(data) {
	    	var site_logo = $.grep(data, function (e) { return e.key == 'site_logo'; });
	    	$('#site_logo').attr('src', site_logo[0].value);
	    },
	    dataType: "json"
    });

    $.post( "https://admin.flashington.com/guestApi/details", { key:category[1], cate_id: id[1] })
    .done(function( data ) {
        
    })
})