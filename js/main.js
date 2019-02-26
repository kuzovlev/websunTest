$(document).ready(function () {
    $("html, body").animate({
        scrollTop: $(document).height()
    }, 3000);
    $("#start-button").click(function () {
        $(".main").hide();
        $(".questions-page").show();
        $("body").addClass('grey-bg');
    });
    $('.btn').click(function () {
        $(this).closest('.toggleQuestion').hide().next('.toggleQuestion').fadeIn();
    });
});