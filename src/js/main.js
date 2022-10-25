$(document).ready(function() {
    // modal sms
    $('.js-modal-sms-init').on('click', function (e) {
        $('body').toggleClass('is-modal-opened');
        $('#modal-sms').toggleClass('is-show');
        e.preventDefault();
    });

    $('.js-modal-close').on('click', function (e) {
        $('body').removeClass('is-modal-opened');
        $(this).parents('.modal').removeClass('is-show');
        e.preventDefault();
    });
});