$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        "loop": "true",
        "dots": "true",
        "nav": "true",
        "navText": "<>",
        "lazyLoad": "true",
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});


function fade_dishcontainer() {
    $(".menu-item").fadeIn("slow");
}


function add_margin_description() {
    $(".menu-description").each(function() {
        console.log($(this).height());
        if ($(this).height() <= 20) {
            $(this).css({
                "margin-bottom": '20px'
            });
        }


    });
}