/**
 * Created by ivanmorandi on 26/02/16.
 */

var main = function () {
    $('.nav-bar li').click(function(){
        var current_page = $('.current').text();
        switch ($(this).text()){
            case "Home":
                if(current_page != "Home")
                    window.location="index.html";
                break;
            case "Explore":
                if(current_page!="Explore")
                    window.location="explore.html";
                break;
            case "About":
                if(current_page!="About")
                    window.location="about.html";
                break;
            default: break;
        }
    });

    $('.new-photos img').click(function()
    {
        $('.popup').show();
        var src = $(this).attr('src');
        $('.popup img').attr('src',src );
    });

    $('.popup img').click(function () {
        $('.popup').hide();
        $('.popup img').attr('src','#');
    })
};

$(document).ready(main);