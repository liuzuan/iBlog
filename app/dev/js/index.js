$(document).ready(() => {
    let $body = $('body');
    $(document).delegate('.menu_icon', 'click', () => {
        $body.toggleClass('open');
    });
    $(window).resize(() => {
        if ($(window).innerWidth() < 900) {
            $body.removeClass('open');
        }
    });
});
