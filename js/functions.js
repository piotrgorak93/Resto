$(document).ready(function () {

    prepareSlider();
});

function add_margin_description() {
    $(".menu-description").each(function () {
        console.log($(this).height());
        if ($(this).height() <= 20) {
            $(this).css({
                "margin-bottom": '20px'
            });
        }
    });
}

function prepareSlider() {
    var allItemsWidthSum = 0;
    var dishSelector = $(".dish-item");
    dishSelector.each(function (index, value) {
        allItemsWidthSum += $(value).outerWidth();
    });
    $(".featured-gallery-wrapper").width(dishSelector.width()*3);
    $(".featured-gallery").width(allItemsWidthSum);
}