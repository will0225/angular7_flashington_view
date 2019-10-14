function channelHtml(image, title) {
        var singleChannel = `<div class="movie_item col-md-2 col-sm-2 col-xs-4 singleChannelCover non-carousel-movie_item">
        <a href="/movie/15360/watch-Bruce-Lee-The-Lost-Interview" alt="watch Bruce Lee: The Lost Interview online" > 
            <img class="cover_img" alt="Bruce Lee: The Lost Interview" src="${image}" width="100%"
                role="button" data-toggle="popover" data-trigger="hover" data-animation="true" tabindex ="0"
                data-placement="right"

                                                data-title="
                        <span class='movie-title'>Bruce Lee: The Lost Interview</span>
                        <div class='movie-info-row'>
                            <span class='movie-mpaa-rating'>Unrated</span>
                            <span class='movie-year'></span>
                            <span class='movie-runtime'>30</span>
                            <span class='movie-stars'></span>
                        </div>"
                data-content="
                        <div class='movie-description'>
                            <p>Martial arts expert Bruce Lee became world-renowned for his performances in such Kung-fu classics as Enter The Dragon. Now his only interview in English is available. Just after the release of his first film The Big Boss, he spoke in 1971 in Hong Kong with Canada&#039;s premier journalist Pierre Berton....</p>
                        </div>"
                    
                data-container="body"  data-html="true">
        </a>
        <div class="movie_title">
            <a href="/movie/15360/watch-Bruce-Lee-The-Lost-Interview" alt="watch Bruce Lee: The Lost Interview online" style=" white-space: nowrap;" >
                ${title}
            </a>
        </div>
        </div>`;
        return singleChannel;
}

$(document).ready(function() {
    var pathName = window.location.href;
    var idpath = pathName.split('?');
    var idpath_list = idpath[1].split('=');
    var id = idpath_list[1];

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
    
    $.post( "https://admin.flashington.com/guestApi/single_channel", {cid:id})
    .done(function( data ) {
      var picture = data.channel.picture;
      $('#channel_picture').attr('src', picture);
      var channel_videos = data.channel.videos;
      $('#single_channel').html('');
      channel_videos[0].map(video=>{console.log(video);
        $('#single_channel').append(channelHtml(video.default_image, video.title));
      })

      
      $("#explore-btn, #explore-genres-dropdown").hover(function(){
        var dropdown = $("#explore-genres-dropdown");
        dropdown.css("display", "inline-block").addClass("open");
    }, function(){
        var dropdown = $("#explore-genres-dropdown");
        setTimeout(function(){
            if(!($("#explore-btn").is(":hover") || $("#explore-genres-dropdown").is(":hover"))){
                dropdown.css("display", "none").removeClass("open");
            }
        }, 50);
    });

    //  hide/show dropdown in mobile
    $("#explore-btn").click(function(){
        if(!$("#explore-genres-dropdown").hasClass("open")){
            $("#explore-genres-dropdown").css("display", "inline-block").addClass("open");
        }else{
            $("#explore-genres-dropdown").css("display", "none").removeClass("open");
        }
    });


    //  initial formatting of carousels based on screen width
    var currentSlidesPerPage = 0;
    function startNewPage(afterThisElement){
        //  adds "<div class='item'></div>" after last "div.item" (which is a page)
        $(afterThisElement).after("<div class='item'></div>");
        //  return reference to new "div.item"
        return $(afterThisElement).next();
    }
    if($(".carousel-inner:not(.slideshow)").length > 0){
        var slidesPerPage = 6;
        var maxSlidesPerPage = 6;
        var width = $(window).width();

        //If we are on a musicchoice page, we only want 5 slides per page max
        if($(".carousel-inner.mc-carousel").length > 0){
            maxSlidesPerPage = 5;
        }
        //  determine slidesPerPage based on screen width
        switch(true){
            case (width >= 768):
                slidesPerPage = maxSlidesPerPage;
                break;
            case (width > 639):
                slidesPerPage = 4;
                break;
            case (width > 359):
                slidesPerPage = 3;
                break;
            default:
                slidesPerPage = 2;
                break;
        }
        currentSlidesPerPage = slidesPerPage;
        //  iterate over each carousel
        $.each($(".carousel-inner:not(.slideshow)"), function(index, value){
            var carouselInner = $(value);
            //  skip this process for any carousels where 'slidesPerPage' >= number of slides
            var slideCount = carouselInner.children(".item").children(".movie_item").length;
            if(slideCount <= slidesPerPage){
                carouselInner.siblings(".carousel-control").remove();
                return true;
            }
            //  get first Page (".item.active") -- only "page" so far -- initially holds ALL slides
            var firstPage = carouselInner.children(".item.active");
            //  total count of slides in this carousel
            var itemCount = slideCount;
            //  create new page ("div.item") HTML object
            var nextPage = startNewPage(firstPage);
            for(var i = slidesPerPage + 1; i <= itemCount; i++){
                if(!((i - 1) % slidesPerPage) && i > (slidesPerPage + 1)){
                    nextPage = startNewPage(nextPage);
                }
                nextPage.append($(firstPage.children(".movie_item:nth-child("+(slidesPerPage + 1)+")")));
            }
        });

        if(width > 768){
            $(".movie_item:not(.mc_item) > a").hover(function(){
                $(this).css("opacity", 0.4);
            }, function(){ return; });
            $('.movie_item > a').on('hidden.bs.popover', function () {
                if(!$(this).is(":hover") ){
                    $(".movie_item > a").css("opacity", 1);
                }
            });
        }
        var formatting = false;
        function reformatSlides(){
            var slidesPerPage = 6;
            var maxSlidesPerPage = 6;
            var width = $(window).width();

            //If we are on a musicchoice page, we only want 5 slides per page max
            if($(".carousel-inner.mc-carousel").length > 0){
                maxSlidesPerPage = 5;
            }
            //  determine slidesPerPage based on screen width
            switch(true){
                case (width >= 768):
                    slidesPerPage = maxSlidesPerPage;
                    break;
                case (width > 639):
                    slidesPerPage = 4;
                    break;
                case (width > 359):
                    slidesPerPage = 3;
                    break;
                default:
                    slidesPerPage = 2;
                    break;
            }
            if(slidesPerPage == currentSlidesPerPage){
                formatting = false;
                return;
            }
            currentSlidesPerPage = slidesPerPage;
            $.each($(".carousel-inner:not(.slideshow)"), function(index, value) {
                var carouselInner = $(value);
                // get the index of the last movie currently showing on the carousel
                var lastMovie = carouselInner.find(".item.active").find(".movie_item").first();
                var lastMovieIndex = carouselInner.find(".movie_item").index(lastMovie);

                carouselInner.find(".item.active").removeClass("active").end().find(".item:first-child").addClass("active");
                $(carouselInner.children(".item:not(.active)").children(".movie_item")).appendTo(carouselInner.children(".item.active"));
                $(carouselInner.children(".item:not(.active)").remove());
                //  get first Page (".item.active") -- only "page" so far -- initially holds ALL slides
                var firstPage = carouselInner.children(".item.active");
                //  total count of slides in this carousel
                var itemCount = firstPage.children(".movie_item").length;
                //  create new page ("div.item") HTML object
                var nextPage = startNewPage(firstPage);
                for(var i = slidesPerPage + 1; i <= itemCount; i++){
                    if(!((i - 1) % slidesPerPage) && i > (slidesPerPage + 1)){
                        nextPage = startNewPage(nextPage);
                    }
                    nextPage.append($(firstPage.children(".movie_item:nth-child("+(slidesPerPage + 1)+")")));
                }

                //find div.item that contains the starting movie, and set it to be the active item
                var startingMovieLocation = carouselInner.find(".movie_item").eq(lastMovieIndex);
                var parentItem = startingMovieLocation.parent();
                carouselInner.find(".item.active").removeClass("active");
                parentItem.addClass("active");

                //Prevent previous arrow from displaying when it shouldn't
                if(lastMovieIndex < 6 && !carouselInner.hasClass("show-left-arrow")){
                    var arrowSelector = "#btnPrev_" + carouselInner.parent().attr("data-tid");
                    $(arrowSelector).hide();
                }
            });

            if(width > 768){
                $('[data-toggle="popover"]').popover("enable");
                $(".movie_item:not(.mc_item) > a").unbind("mouseenter mouseleave").hover(function(){
                    $(this).css("opacity", 0.4);
                }, function(){ return; });
                $('.movie_item > a').on('hidden.bs.popover', function () {
                    if(!$(this).is(":hover") ){
                        $(".movie_item > a").css("opacity", 1);
                    }
                });
            }else{
                $('[data-toggle="popover"]').popover("disable");
                $(".movie_item > a").unbind("mouseenter mouseleave");
                $('.movie_item > a').on('hidden.bs.popover');
            }
            formatting = false;
        }

        $(window).resize(function(){
            if(!formatting){
                formatting = true;
                reformatSlides();
            }
        });
    }
    $(".navbar.navbar-default.navbar-fixed-top").attr("data-js-width", $(window).width());
  })
})