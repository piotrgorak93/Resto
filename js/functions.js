$(document).ready(function () {
    //fade_dishcontainer();
    //add_margin_description();
});
$(window).load(function () {
    add_margin_description();
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
