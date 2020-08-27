$(document).ready(function () {
    $('.buy-icon').on('click', function (e) {
        $(this).hide();
        $(this).next().show();
    });
});
