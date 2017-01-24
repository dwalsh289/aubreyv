$(document).ready(function() {

    // initializes the fullpage.js framework

    $('#fullpage').fullpage();

    // compression effect for cymk elements

    $( ".workDisplay" )
        .mouseenter(function() {
            $(this).children().animate({
                top: [".5em", "swing"],
                left: ["25%", "swing"]
            }, 450, "linear", function () {
                // $(this).children(".original").fadeIn("fast");
            });
            $(this).children(".original").fadeIn("fast");
            $(this).children("h4").fadeIn("slow");
            $(this).children("h5").fadeIn("slow");
        })

        .mouseleave(function() {
            $(this).children(".cyan").animate({
                top: ["1em", "swing"],
                left: ["20%", "swing"]
            }, 450, "linear", function () {
                // $(this).children(".original").addClass("show");
            });
            $(this).children(".yellow").animate({
                top: [".5em", "swing"],
                left: ["40%", "swing"]
            }, 450, "linear", function () {
                // $(this).children(".original").addClass("show");
            });
            $(this).children(".magenta").animate({
                top: [".15em", "swing"],
                left: ["0%", "swing"],
                right: ["20%", "swing"]
            }, 450, "linear", function () {
                // $(this).children(".original").addClass("show");
            });
            $(this).children(".hide").fadeOut('fast');
        });

    // handles the creation of indiv. galleries for each selection

    $(".img-thumbnail")
        .click(function(){
            var $src = $(this).attr('src');
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
        });
    $("#art1")
        .click(function() {
            var $src = "img/americanProphet/americanprophet.png";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art1').removeClass('invisible').fadeIn();
        });
    $("#art2")
        .click(function() {
            var $src = "img/stellar-spire-eagle-nebula-1400x900.jpg";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art2').removeClass('invisible').fadeIn();
        });
    $("#art3")
        .click(function() {
            var $src = "img/Aubrey-Vollrath-true-patriot.jpg";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art3').removeClass('invisible').fadeIn();
        });
    $("#art4")
        .click(function() {
            var $src = "img/stellar-spire-eagle-nebula-1400x900.jpg";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art4').removeClass('invisible').fadeIn();
        });
    $("#art5")
        .click(function() {
            var $src = "img/aubrey-vollrath-tires.jpg";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art5').removeClass('invisible').fadeIn();
        });
    $("#art6")
        .click(function() {
            var $src = "img/americanProphet/americanprophet.png";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art6').removeClass('invisible').fadeIn();
        });
    $("#art7")
        .click(function() {
            var $src = "img/americanProphet/americanprophet.png";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art7').removeClass('invisible').fadeIn();
        });
    $("#art8")
        .click(function() {
            var $src = "img/aubrey-vollrath-church.JPG";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art8').removeClass('invisible').fadeIn();
        });
    $("#art9")
        .click(function() {
            var $src = "img/aubrey-vollrath-granny.jpg";
            $('#mainImage').fadeOut(function () {
                $('#mainImage').attr('src', $src).fadeIn();
            });
            $('.thumbnailRow').children().addClass('invisible').fadeOut();
            $('.thumbnailRow').children('.art9').removeClass('invisible').fadeIn();
        });

    // to show and hide the menu overlay
    $('.footer')
        .click(function() {
            $('#menu').fadeIn("slow");
        });

    $(".exitButton").on("click", function(){
        $('#menu').fadeOut("slow");
    });
    
});


    // $( ".workDisplay" ).hover(
    //     function () {
    //         $(this).children().animate({
    //         top: [ "toggle", "swing" ],
    //         left: [ "toggle", "swing" ]
    //     }, 5000, "linear", function() {
    //         $( this ).after( "<div>Animation complete.</div>" );
    //     });