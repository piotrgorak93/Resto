/**
 * Created by user on 08.11.15.
 */
(function ($) {
    /**
     * Selectors
     * @type {*|HTMLElement}
     */
    var arrowLeftSelector = $(".arrow-left");
    var arrowRightSelector = $(".arrow-right");
    var featuredItemSelector;
    var numberOfElements;
    var previousShift = 0;


    $.fn.sliderResto = function () {
        featuredItemSelector = $(".featured-item");
        numberOfElements = featuredItemSelector.length;
        prepareSlider();
    };

    var prepareSlider = function () {
        var allItemsWidthSum = 0;
        featuredItemSelector.each(function (index, value) {
            allItemsWidthSum += $(value).width() + 28;
        });

        //$(".featured-gallery-wrapper").width((featuredItemSelector.width() + 10) * 3);
        $(".featured-gallery").width(allItemsWidthSum);
        createArrows();
    };

    var createArrows = function () {
        createLeftArrow();
        createRightArrow();
    };

    var trackLeftArrow = function () {
        if (previousShift == 0) {
            arrowLeftSelector.addClass("disabled-arrow");
        }

    };

    var createLeftArrow = function () {
        bindLeftArrowEvent();
    };

    var trackRightArrow = function () {
        if (previousShift == (numberOfElements - 3) * 333 * -1) {
            arrowRightSelector.addClass("disabled-arrow");
        }
    };

    var createRightArrow = function () {
        if ($(".featured-gallery").width() < $(".featured-gallery-wrapper").width()) {
            arrowRightSelector.addClass("disabled-arrow");
        }
        bindRightArrowEvent();
    };

    var bindRightArrowEvent = function () {

        arrowRightSelector.click(function () {
            arrowLeftSelector.removeClass("disabled-arrow");
            var featuredItemSelector = $(".featured-item");
            if (!arrowRightSelector.hasClass("disabled-arrow")){
                featuredItemSelector.css("left", previousShift = previousShift - 333);
            }
            trackRightArrow();
        });
    };

    var bindLeftArrowEvent = function () {
        arrowLeftSelector.click(function () {
            arrowRightSelector.removeClass("disabled-arrow");
            if (!arrowLeftSelector.hasClass("disabled-arrow")) {
                featuredItemSelector.css("left", previousShift = previousShift + 333);
            }
            trackLeftArrow();
        });
    }
}(jQuery));
