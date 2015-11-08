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
            allItemsWidthSum += $(value).width() + 10;
        });

        $(".featured-gallery-wrapper").width((featuredItemSelector.width() + 10) * 3);
        $(".featured-gallery").width(allItemsWidthSum);
        createArrows();
    };

    var createArrows = function () {
        createLeftArrow();
        createRightArrow();
    };

    var trackLeftArrow = function () {
        if (previousShift == 0) {
            arrowLeftSelector.hide();
        }

    };

    var createLeftArrow = function () {
        bindLeftArrowEvent();
    };

    var trackRightArrow = function () {
        if (previousShift == (numberOfElements - 3) * 315 * -1) {

            arrowRightSelector.hide();
        }
    };

    var createRightArrow = function () {
        if ($(".featured-gallery").width() > $(".featured-gallery-wrapper").width()) {
            arrowRightSelector.show();
        }
        bindRightArrowEvent();
    };

    var bindRightArrowEvent = function () {

        arrowRightSelector.click(function () {
            arrowLeftSelector.show();
            var featuredItemSelector = $(".featured-item");
            featuredItemSelector.css("left", previousShift = previousShift - 315);
            trackRightArrow();
        });
    };

    var bindLeftArrowEvent = function () {
        arrowLeftSelector.click(function () {
            arrowRightSelector.show();
            arrowLeftSelector.show();
            featuredItemSelector.css("left", previousShift = previousShift + 315);
            trackLeftArrow();
        });
    }
}(jQuery));
