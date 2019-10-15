var dd = '';

function singleMovie(id, sub_profile_id){ 
 var data = 
`
<h2 class="genre">${id} <a href="browse_list.html?category=${id}&id=${sub_profile_id}" class="btn btn-view-all btn-sm">VIEW ALL</a> </h2>
                <div class="slide-wrapper row" data-offset="0">
                  <div id="${id}" class="carousel slide" data-interval="false">
                    <div class="carousel-inner show-left-arrow">
                      <div class="item active">
                        <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                            <a href="detail.html" alt="watch Pocketman and Cargoboy online" >
                              <img class="cover_img" alt="Pocketman and Cargoboy" 
                                  src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/FlixFling_POCKETMAN-AND-CARGOBOY_500x706.jpg"   role="button" data-toggle="popover" data-trigger="hover" tabindex ="0" data-placement="right"
                                  data-title="<span class='movie-title'>Pocketman and Cargoboy</span>
                                              <div class='movie-info-row'>
                                                  <span class='movie-mpaa-rating'>PG-13</span>
                                                  <span class='movie-year'></span>
                                                  <span class='movie-runtime'>86</span>
                                                  <span class='movie-stars'></span>
                                              </div>"
                                  data-content="<div class='movie-description'>
                                                    <p>Teenage secret agents must travel to the past and stop an evil doctor from creating a virus that wipes out all life in the future.</p>
                                                </div>"
                                  data-container="body"  
                                  data-html="true">
                            </a>
                            <div class="movie_title">
                                  <img alt="Premium Title" src="img/movie-premium.png" align="right"/>
                                  <a href="/movie/26697/watch-Pocketman-and-Cargoboy" alt="watch Pocketman and Cargoboy online" style=" white-space: nowrap;" >
                                    Pocketman and Cargob
                                  </a>
                            </div>
                      </div>
                      <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                        <a href="/movie/26752/watch-Luke-Sanders-vs-Darrick-Minner" alt="watch Luke Sanders vs. Darrick Minner online" >
                          <img class="cover_img" alt="Luke Sanders vs. Darrick Minner" 
                              src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/RFA17_Sanders_Minner.jpg"               
                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="1" data-placement="right"
                              data-title="
                                                        <span class='movie-title'>Luke Sanders vs. Darrick Minner</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>R</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>17</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>Undefeated Luke Sanders looks to continue his knockout streak against Darrick Minner.</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Premium Title" src="img/movie-premium.png" align="right"/>
                                                
                                                <a href="/movie/26752/watch-Luke-Sanders-vs-Darrick-Minner" alt="watch Luke Sanders vs. Darrick Minner online" style=" white-space: nowrap;" >
                                                    Luke Sanders vs. Dar
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26564/watch-Mock-and-Roll" alt="watch Mock and Roll online" >
                                                <img class="cover_img" alt="Mock and Roll" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/FlixFling%20500x706_MOCK--ROLL.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="2"
                                                    data-placement="right"
                                                                                                    data-title="
                                                        <span class='movie-title'>Mock and Roll</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>PG-13</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>84</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>Featuring the music of Foghat and Black Owls... Ohio parody band Liberty Mean is tapped out, clueless and struggling to raise the needed money to get to the South by Southwest Music Festival where their dreams can become reality. Unfortunately, bad decisions and absurd circumstances lead the band...</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Included in Subscription" src="img/movie-subscribe.png"  align="right"/>
                                                
                                                <a href="/movie/26564/watch-Mock-and-Roll" alt="watch Mock and Roll online" style=" white-space: nowrap;" >
                                                    Mock and Roll
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26567/watch-Ryde-Or-Die" alt="watch Ryde Or Die online" >
                                                <img class="cover_img" alt="Ryde Or Die" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/FlixFling%20500x706_RYDE-OR-DIE.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="3"
                                                    data-placement="left"
                                                                                                    data-title="
                                                        <span class='movie-title'>Ryde Or Die</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>R</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>47</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>An Uber driver experiences a night of terror after picking up a sadistic killer who forces him to participate in a series of violent and twisted road games.</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Included in Subscription" src="img/movie-subscribe.png"  align="right"/>
                                                
                                                <a href="/movie/26567/watch-Ryde-Or-Die" alt="watch Ryde Or Die online" style=" white-space: nowrap;" >
                                                    Ryde Or Die
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26490/watch-Jack-Hunters-Paranoia-Tapes-4-Kennel-House" alt="watch Jack Hunter&#039;s Paranoia Tapes 4: Kennel House online" >
                                                <img class="cover_img" alt="Jack Hunter&#039;s Paranoia Tapes 4: Kennel House" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/JACK-HUNTERS-PARANOIA-TAPES-4-KENNEL-HOUSE.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="4"
                                                    data-placement="left"
                                                                                                    data-title="
                                                        <span class='movie-title'>Jack Hunter&#039;s Paranoia Tapes 4: Kennel House</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>Unrated</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>78</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>Following the Paranoia tradition, join two friends on a suspenseful journey into a town legend of an abandoned house called Kennel House. While trying to make a documentary they soon realize that making a movie has a certain price... Stop recording and run!</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Included in Subscription" src="img/movie-subscribe.png"  align="right"/>
                                                
                                                <a href="/movie/26490/watch-Jack-Hunters-Paranoia-Tapes-4-Kennel-House" alt="watch Jack Hunter&#039;s Paranoia Tapes 4: Kennel House online" style=" white-space: nowrap;" >
                                                    Jack Hunter&#039;s Parano
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26488/watch-Jack-Hunters-Paranoia-Tapes-2-Press-Play" alt="watch Jack Hunter&#039;s Paranoia Tapes 2: Press Play online" >
                                                <img class="cover_img" alt="Jack Hunter&#039;s Paranoia Tapes 2: Press Play" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/JACK-HUNTERS-PARANOIA-TAPES-2-PRESS-PLAY.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="5"
                                                    data-placement="left"
                                                                                                    data-title="
                                                        <span class='movie-title'>Jack Hunter&#039;s Paranoia Tapes 2: Press Play</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>Unrated</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>99</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>In this sequel we join Chase to find the missing pieces of what went wrong in the first film. Chase, who is another personality of Henry&#039;s, decides to look at other Tapes that were hidden within Henry&#039;s house. He desperately searches for answers and clues to find out who he is and if in fact, Chase...</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Included in Subscription" src="img/movie-subscribe.png"  align="right"/>
                                                
                                                <a href="/movie/26488/watch-Jack-Hunters-Paranoia-Tapes-2-Press-Play" alt="watch Jack Hunter&#039;s Paranoia Tapes 2: Press Play online" style=" white-space: nowrap;" >
                                                    Jack Hunter&#039;s Parano
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26489/watch-Jack-Hunters-Paranoia-Tapes-3-Siren" alt="watch Jack Hunter&#039;s Paranoia Tapes 3: Siren online" >
                                                <img class="cover_img" alt="Jack Hunter&#039;s Paranoia Tapes 3: Siren" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/JACK-HUNTERS-PARANOIA-TAPES-3-SIREN.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="6"
                                                    data-placement="right"
                                                                                                    data-title="
                                                        <span class='movie-title'>Jack Hunter&#039;s Paranoia Tapes 3: Siren</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>Unrated</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>84</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>Join Jack Schudy and his friends in search of a local legend. As future filmmakers, they decide to make a school project based on their town&#039;s history of horror. As they dive into the legend, things start to become more and more realistic and horrifying than they ever realized. Is this urban legend...</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Included in Subscription" src="img/movie-subscribe.png"  align="right"/>
                                                
                                                <a href="/movie/26489/watch-Jack-Hunters-Paranoia-Tapes-3-Siren" alt="watch Jack Hunter&#039;s Paranoia Tapes 3: Siren online" style=" white-space: nowrap;" >
                                                    Jack Hunter&#039;s Parano
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26344/watch-Hail-Mary" alt="watch Hail Mary! online" >
                                                <img class="cover_img" alt="Hail Mary!" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/HailMary%21_FF.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="7"
                                                    data-placement="right"
                                                                                                    data-title="
                                                        <span class='movie-title'>Hail Mary!</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>Unrated</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>90</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>There has never been a football team like the Maine Lobsters! There will never be again! In an act of desperation, the coach of The Maine Lobsters, a pro football team that has lost 32 games in a row, travels to Japan to buy a school of sumo wrestlers. His intention&#039; To bring the humongous...</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Premium Title" src="img/movie-premium.png" align="right"/>
                                                
                                                <a href="/movie/26344/watch-Hail-Mary" alt="watch Hail Mary! online" style=" white-space: nowrap;" >
                                                    Hail Mary!
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26468/watch-Mud-Flap" alt="watch Mud Flap online" >
                                                <img class="cover_img" alt="Mud Flap" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/DRR514.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="8"
                                                    data-placement="right"
                                                                                                    data-title="
                                                        <span class='movie-title'>Mud Flap</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>PG-13</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>54</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>The Louisiana coastline is quickly disappearing because of man-made levees. Plus the remarkable story of a young survivor left for dead in Haiti.</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Premium Title" src="img/movie-premium.png" align="right"/>
                                                
                                                <a href="/movie/26468/watch-Mud-Flap" alt="watch Mud Flap online" style=" white-space: nowrap;" >
                                                    Mud Flap
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26568/watch-Safe-Haven-Wild-Animals-Tame-Surroundings" alt="watch Safe Haven: Wild Animals, Tame Surroundings online" >
                                                <img class="cover_img" alt="Safe Haven: Wild Animals, Tame Surroundings" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/WR1010.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="9"
                                                    data-placement="left"
                                                                                                    data-title="
                                                        <span class='movie-title'>Safe Haven: Wild Animals, Tame Surroundings</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>PG-13</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>51</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>Soldiers who served in Afghanistan believe smoke that came from enormous trash fires is making them ill.</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Premium Title" src="img/movie-premium.png" align="right"/>
                                                
                                                <a href="/movie/26568/watch-Safe-Haven-Wild-Animals-Tame-Surroundings" alt="watch Safe Haven: Wild Animals, Tame Surroundings online" style=" white-space: nowrap;" >
                                                    Safe Haven: Wild Ani
                                                </a>
                                            </div>
                                        </div>
                                                                                                                                                    <div class="movie_item col-md-2 col-sm-2 col-xs-4">
                                            <a href="/movie/26469/watch-Where-Theres-Smoke" alt="watch Where There&#039;s Smoke online" >
                                                <img class="cover_img" alt="Where There&#039;s Smoke" src="https://admin.flixfling.com/sites/default/files/imagecache/flixfling_desktop/DRR515.jpg"                                                                                              role="button" data-toggle="popover" data-trigger="hover" tabindex ="10"
                                                    data-placement="left"
                                                                                                    data-title="
                                                        <span class='movie-title'>Where There&#039;s Smoke</span>
                                                        <div class='movie-info-row'>
                                                            <span class='movie-mpaa-rating'>PG-13</span>
                                                            <span class='movie-year'></span>
                                                            <span class='movie-runtime'>55</span>
                                                            <span class='movie-stars'></span>
                                                        </div>"
                                                                    data-content="
                                                        <div class='movie-description'>
                                                            <p>Soldiers who served in Afghanistan believe smoke that came from enormous trash fires is making them ill.</p>
                                                        </div>"
                                                                                                    data-container="body"  data-html="true">
                                            </a>

                                            <div class="movie_title">
                                                                                            <img alt="Premium Title" src="img/movie-premium.png" align="right"/>
                                                
                                                <a href="/movie/26469/watch-Where-Theres-Smoke" alt="watch Where There&#039;s Smoke online" style=" white-space: nowrap;" >
                                                    Where There&#039;s Smoke
                                                </a>
                                            </div>
                                        </div>
                                                            
                            </div>
                        </div> <!-- /carousel-inner -->
                        <a class="left carousel-control" href="#${id}" role="button" data-slide="prev">
                        </a>
                        <a class="right carousel-control" href="#${id}" role="button" data-slide="next">
                        </a>
                    </div>
                </div>
`;
return data;};
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
	$.post( "https://admin.flashington.com/guestApi/browse", {'key': "8", 'sub_profile_id': 3})
  	.done(function( data ) {
		   console.log(data);
		   var movies = data.sub_category;
		   $('#explore-genres-dropdown').html('');
		   movies&&Object.keys(movies).map((value, index)=> {
				$('#explore-genres-dropdown').append('<ul id="'+value+'"></ul>');
				Object.keys(movies[value]).map((index)=> {
					$('ul#'+value).append('<li><a href="./browse_list.html?category='+index+'&id='+movies[value][index]+'">'+index+'</a></li>');
				})
		   })
		   $('#movies_list').html('');
		   Object.keys(data.data).map((value)=> {console.log(data.data[value])
				$('#movies_list').append(singleMovie(value, data.data[value].id));
				var videos = data.data;
				$('#'+value+' .item').html('');
				if(Object.keys(videos[value]).length!=0) {
					var videoData = videos[value].videos;
					videoData.map(index=>{
						
						$('#'+value+' .item').append(` <div class="movie_item col-md-2 col-sm-2 col-xs-4">
							<a href="detail.html?id=${index.admin_video_id}" alt="watch Pocketman and Cargoboy online" >
							<img class="cover_img" alt="Pocketman and Cargoboy" 
								src="${index.default_image}"   role="button" data-toggle="popover" data-trigger="hover" tabindex ="0" data-placement="right"
								data-title="<span class='movie-title'>${index.title}</span>
											<div class='movie-info-row'>
												<span class='movie-mpaa-rating'>PG-13</span>
												<span class='movie-year'></span>
												<span class='movie-runtime'>86</span>
												<span class='movie-stars'></span>
											</div>"
								data-content="<div class='movie-description'><p></p></div>"
								data-container="body"  
								data-html="true"/>
							</a>
							<div class="movie_title">
								<img alt="Premium Title" src="img/movie-premium.png" align="right"/>
								<a href="/movie/26697/watch-Pocketman-and-Cargoboy" alt="watch Pocketman and Cargoboy online" style=" white-space: nowrap;" >
									${index.title}
								</a>
							</div>
				 		 </div>`)
					})
				} else {
					$('#'+value+' .item').append('There is no content available')
				}

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
		
  	});	
})
