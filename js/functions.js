$(document).ready(function () {
    fade_dishcontainer();
});


function fade_dishcontainer() {
    $(".menu-item").fadeIn("slow");
}
$("#load-more").click(function () {
    fade_dishcontainer();
});