$(window).ready(function(){ 
    
    // Center Heading and Search Box
    $("#body").css('left', $(window).width()/2-$("#body").width()/2+"px");
    $("#body").css('top', $(window).height()/2-$("#body").height()/1.1+"px");

    // Center List Text
    setTimeout(function(){
        $(".txt").each(function(){
            $(this).css("padding-top",75-$(this).height()/2+"px");
        });
    },100);

    // Form Re-Submission Handling
    $("#form").submit(function(event){
        event.preventDefault();
        $("body").addClass("visible");
        $("#panels").css("top",$("#body").height()+10+"px");
        $("#search").blur();
        setTimeout(function(){
            $("body").height(100);
        },800);
    });

    // Form Submission Handling
    $("#search").click(function(){
        $("body").removeClass("visible");
        $("#panels").css("top","100%");
    });
    
    // List Item Click Handling
    var urlString = "";
    $("#panels li").click(function(){
        switch($(this).attr("id")) {
            case "CNN":
                urlString = "http://edition.cnn.com/search/?text="+$("#search").val().replace(" ","+");
                break;
            case "BBC":
                urlString = "http://www.bbc.co.uk/search?q="+$("#search").val();
                break;
            case "Wikipedia":
                urlString = "https://en.wikipedia.org/w/index.php?search="+$("#search").val();
                break;
            case "TheEconomist":
                urlString = "http://www.economist.com/search/gcs?ss="+$("#search").val();
                break;
            default:
                urlString = "https://google.com/";
                break;
        }
        window.open(urlString,"_blank");
    });
});

$(window).resize(function(){
    $("#body").css('left', $(window).width()/2-$("#body").width()/2+"px");
    $("#body").css('top', $(window).height()/2-$("#body").height()/1.1+"px");
});