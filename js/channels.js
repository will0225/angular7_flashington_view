
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
    
    $.post( "https://admin.flashington.com/guestApi/all_channels")
  	.done(function( data ) {
        var channels = data.channels;
        $('#channel_list').html('');
        channels.map(channel=>{
            $('#channel_list').append(all_channels(channel.id, channel.picture, channel.description));
        })
    })
})