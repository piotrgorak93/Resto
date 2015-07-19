$(document).ready(function () {
    console.log('ready');
});
$(window).load(function () {
    add_margin_description();
    fade_dishcontainer();
    load_slider();

});

function fade_dishcontainer() {
    $(".menu-item").fadeIn("slow");
}
/**
 * Timeout is used to wait for angular to update the view, then jquery starts
 */
$("#load-more").click(function () {
    setTimeout(function () {
        add_margin_description();
    }, 1);

});

function add_margin_description() {
    $(".menu-description").each(function ($index) {
        console.log($index + " " + $(this).text());
        if ($(this).height() < 38)
            $(this).css("margin-bottom", "20px");
    });
}
function load_slider(){
    console.log("loading");
    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}