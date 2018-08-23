$(function() {
    var distance = 200;
    $('.dir_item').click(function() {
        distance = 100;
        var $targrt = $(this).attr('data-id');
        var $domTop = $(`#${$targrt}`).offset().top;
        $('html,body').animate({ scrollTop: $domTop - 50 }, 300);
    });

    var _lastTime = '';
    function autoDir() {
        var _nowTime = +new Date();
        if (_nowTime - _lastTime > 20 || !_lastTime) {
            $('.h_title').each(function() {
                var scrollTop = $('body').scrollTop() || $('html').scrollTop();
                if ($(this).offset().top - scrollTop < distance) {
                    $('.dir_item').removeClass('dir_active');
                    $(`[data-id=${$(this).attr('id')}]`).addClass('dir_active');
                }
            });
            _lastTime = _nowTime;
        }
    }

    scrollHandle();

    function scrollHandle() {
        if ($(window).width() > 1023) {
            autoDir();
            $(window).scroll(autoDir);
        } else {
            $(window).unbind('scroll', autoDir);
        }
    }

    $(window).resize(scrollHandle);
});
