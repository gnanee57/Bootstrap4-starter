$(document).ready(function(){
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});
$(document).ready(function(){ 
    $(".close").click(function(){
        $("#loginModal").modal('hide');
    });
    $("#cancel").click(function(){
        $("#loginModal").modal('hide');
    });
    $(".close").click(function(){
        $("#reserveModal").modal('hide');
    });
    $("#close").click(function(){
        $("#reserveModal").modal('hide');
    });
    $("#login").click(function(){
        $('#loginModal').modal('toggle');
    });
    $("#reserve").click(function(){
        $("#reserveModal").modal('toggle');
    });
});
    