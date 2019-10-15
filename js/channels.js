
function all_channels(id, image, description) {
    var channelsHtml = `<div class="col-xs-12 col-sm-6 col-lg-4 channels_window">
        <div class="channel_image">
        <a href="single_channel.html?id=${id}">
            <img src="${image}"/>
        </a>
        </div>
        <div class="channel_movies row">
        <div class="channel_movie col-md-4 col-xs-4 col-sm-4">
            <a href="/movie/23505/watch-Truth-or-Dare" alt="watch Truth or Dare online" >
                <img class="cover_img" alt="Truth or Dare" src="https://admin.flixfling.com/sites/default/files/imagecache/product/truth-or-dare-flixfling-500x706.jpg" width="90%">
            </a>
        </div>
        <div class="channel_movie col-md-4 col-xs-4 col-sm-4">
            <a href="/movie/19977/watch-Last-Shop-Standing-The-Rise-Fall-and-Rebirth-of-the-Independent-Record-Shop" alt="watch Last Shop Standing: The Rise, Fall and Rebirth of the Independent Record Shop online" >
                <img class="cover_img" alt="Last Shop Standing: The Rise, Fall and Rebirth of the Independent Record Shop" src="https://admin.flixfling.com/sites/default/files/imagecache/product/CVX903106.jpg" width="90%">
            </a>
        </div>
        <div class="channel_movie col-md-4 col-xs-4 col-sm-4">
            <a href="/movie/26362/watch-Among-Wolves" alt="watch Among Wolves online" >
                <img class="cover_img" alt="Among Wolves" src="https://admin.flixfling.com/sites/default/files/imagecache/product/AmongWolves_FF.jpg" width="90%">
            </a>
        </div>
        </div>
        <h3 class="channelName">FlixFling  <small>$7.99 / month</small></h3>
        <div class="row channel_body">
            <p class="col-md-12">
               ${description}
            </p>
        </div>
        <a class="btn btn-hollow" href="single_channel.html?id=${id}" style="display: block; margin-bottom: 10px;" role="button">View details</a>
        <a class="btn btn-hollow blueButton" href="/subscribe/flixfling?redirect=/channels/176" style="display: block;" role="button">
            Subscribe for $7.99 / month
        </a>
        <div class="clearfix"></div>
    </div>`;
    return channelsHtml;
}
$(document).ready(function() {
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
    $.post( "https://admin.flashington.com/guestApi/all_channels")
  	.done(function( data ) {
        var channels = data.channels;
        $('#channel_list').html('');
        channels.map(channel=>{
            $('#channel_list').append(all_channels(channel.id, channel.picture, channel.description));
        })
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