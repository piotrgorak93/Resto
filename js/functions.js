$(document).ready(function () {
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