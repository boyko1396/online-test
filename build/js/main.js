$(document).ready(function() {    
    // test pager
    $('.tasks-field-wrap').click(function (e) {
        var screenTest = $('.tab-pane.active');
        screenTestNext = screenTest.next();
        screenTestPrev = screenTest.prev();
        $('.tab-pane.active .tasks-field-wrap').removeClass('active-item');
        $(this).addClass('active-item');
        if (screenTest.find('.tasks-field-wrap').hasClass('active-item')) {
            screenTest.find('.main-form-b__footer-btn-next').removeClass('disabled');
            return false;
        }
    });

    $('.main-form-b__footer-btn-next').click(function (e) {
        var screenTest = $('.tab-pane.active');
        screenTestNext = screenTest.next();
        screenTestPrev = screenTest.prev();
        if (screenTest.find('.tasks-field-wrap').hasClass('active-item')) {
            screenTest.removeClass('active');
            screenTestNext.addClass('active');
        }
    });

    $('.main-form-b__footer-btn-prev').click(function (e) {
        var screenTest = $('.tab-pane.active');
        screenTestNext = screenTest.next();
        screenTestPrev = screenTest.prev();
        screenTest.removeClass('active');
        screenTestPrev.addClass('active');
    });

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