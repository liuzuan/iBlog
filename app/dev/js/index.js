$(function() {
    const $body = $('body');
    const $search_input = $('.search_input');
    const $reset = $('.reset_search_btn');
    const $menu_icon = $('.menu_icon');
    const $sidebar = $('.sidebar');
    var tap = '';

    browserType();

    function browserType() {
        var t0 = new Date();
        var os = (function() {
            var ua = navigator.userAgent,
                isWindowsPhone = /(?:Windows Phone)/.test(ua),
                isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
                isAndroid = /(?:Android)/.test(ua),
                isFireFox = /(?:Firefox)/.test(ua),
                isChrome = /(?:Chrome|CriOS)/.test(ua),
                isTablet =
                    /(?:iPad|PlayBook)/.test(ua) ||
                    (isAndroid && !/(?:Mobile)/.test(ua)) ||
                    (isFireFox && /(?:Tablet)/.test(ua)),
                isPhone = /(?:iPhone)/.test(ua) && !isTablet,
                isPc = !isPhone && !isAndroid && !isSymbian;
            return {
                isTablet: isTablet,
                isPhone: isPhone,
                isAndroid: isAndroid,
                isPc: isPc
            };
        })();
        if (os.isAndroid || os.isPhone || os.isTablet) {
            tap = 'touchstart';
        } else {
            tap = 'click';
        }
    }
    $menu_icon.on(tap, function() {
        $sidebar.css('transition', 'background 0.35s linear, height 0.35s ease-in');
        $body.toggleClass('open');
    });

    $search_input.on('input change', function() {
        if ($(this).val() === '') {
            $reset.fadeOut(300);
        } else {
            $reset.fadeIn(300);
        }
    });

    $reset.on(tap, function() {
        $search_input.val('');
        $reset.fadeOut(300);
    });

    $(window).resize(() => {
        if ($(window).innerWidth() > 767) {
            $sidebar.css('transition', 'none');
            $body.removeClass('open');
        }
        browserType();
    });
});
