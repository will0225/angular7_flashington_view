$(document).ready(function(){

    //Account page Parental Control PIN input auto-advance
   $('input[type="number"]').keyup(function(e){
       if(e.which < 48 || e.which > 57){
           e.preventDefault();
       }
       else {
           if ($(this).val().length > 1) {
               $(this).val("");
           }
           $(this).next('input[type="number"]').focus();
       }
   }).keydown(function(e){
       if(e.keyCode == 8) {
           e.preventDefault();
           $(this).val("").prev('input[type="number"]').focus();
       }
   });

    //Keep gray background on search box if text has been entered (even if user mouses away)
    $("#terms").hover(function(){
        $(this).parents("form").css("backgroundColor", "rgba(77, 77, 77, 0.85)");
    }, function(){
        if(!$(this).val()){
            $(this).parents("form").css("backgroundColor", "transparent");
        }
    }).keyup(function(){
        if(!$(this).val()){
            $(this).parents("form").css("backgroundColor", "transparent");
        }else{
            $(this).parents("form").css("backgroundColor", "rgba(77, 77, 77, 0.85)");
        }
    });

    //Browse page Pop-up bubble
    //    $(".cover_img").popover({ trigger: "manual" , html: true, animation:true})
    //        .on("mouseenter", function () {
    //            var _this = this;
    //            $(this).popover("show");
    //            $(".popover").on("mouseleave", function () {
    //                $(_this).popover('hide');
    //            });
    //        }).on("mouseleave", function () {
    //            var _this = this;
    //            setTimeout(function () {
    //                if (!$(".popover:hover").length) {
    //                    $(_this).popover("hide");
    //                }
    //            }, 100);
    //        });
});