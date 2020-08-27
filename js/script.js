$(document).ready(function () {
    $('#buy-button').on('click', function (e) {
        $('#buy-button').hide();
        $('#buy-div').html('<div class="buy-text">Товар уже в корзине</div>');
    });
});
