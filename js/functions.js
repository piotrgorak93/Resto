$(document).ready(function () {
    gallery_dish_hover();
    hamburgerMenu();
    registerMenu();
});

function add_margin_description() {
    $(".menu-description").each(function () {
        if ($(this).height() <= 20) {
            $(this).css({
                "margin-bottom": '20px'
            });
        }
    });
}

function gallery_dish_hover() {
    $(".gallery-container").children().each(function (index, val) {
        $(val).on({
            mouseenter: function () {
                $(val).find("div").slideDown();
                $(val).find("div").addClass("gallery-dish-force-flex");
            },
            mouseleave: function () {
                $(val).find("div").slideUp();
                $(val).find("div").removeClass("gallery-dish-force-flex");
            }
        });
    });
}
function hamburgerMenu() {
    var mobileMenuSelector = $(".mobile-menu");
    $(".fa-bars").click(function () {
        if (mobileMenuSelector.is(":visible")) {
            mobileMenuSelector.slideUp();
        } else {
            mobileMenuSelector.slideDown();
        }
    })
}
function registerMenu() {
    $("nav").find("li").each(function (index, val) {
        switch (index) {
            case 0:
            case 4:
                $(val).click(function () {
                    $('html, body').animate({
                        scrollTop: $(".menu").offset().top
                    }, 1000);
                });
                break;
            case 1:
            case 5:
                $(val).click(function () {
                    $('html, body').animate({
                        scrollTop: $(".featured").offset().top
                    }, 1000);
                });
                break;
            case 2:
            case 6:
                $(val).click(function () {
                    $('html, body').animate({
                        scrollTop: $(".gallery").offset().top
                    }, 1000);
                });
                break;
            case 3:
            case 7:
                $(val).click(function () {
                    $('html, body').animate({
                        scrollTop: $("footer").offset().top
                    }, 1000);
                });
                break;
        }
    });
}