$(document).ready(function(){
    var pathName = window.location.href;
    var id = pathName.split('?');
    var admin_video_id = id[1].split('=')[1];
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

    $.post( "https://admin.flashington.com/guestApi/showVideoDetails", { admin_video_id:admin_video_id, sub_profile_id: 3 })
    .done(function( data ) {
        console.log(data);
        $('#default_image').attr('src', data.data.default_image);
        $('#title').text(data.data.title);
        $('#description').text(data.data.description);
    })
    $.post( "https://admin.flashington.com/guestApi/browse", {'key': "8", 'sub_profile_id': 3})
  	.done(function( data ) {
		  
		   var movies = data.sub_category;
		   $('#explore-genres-dropdown').html('');
		   movies&&Object.keys(movies).map((value, index)=> {
				$('#explore-genres-dropdown').append('<ul id="'+value+'"></ul>');
				Object.keys(movies[value]).map((index)=> {
					$('ul#'+value).append('<li><a href="./browse_list.html?category='+index+'&id='+movies[value][index]+'">'+index+'</a></li>');
				})
           })
    })
})