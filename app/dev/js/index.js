$(document).ready(() => {
    const $body = $('body');
    const $search_input = $('.search_input');
    const $reset = $(".reset_search_btn");
    const $menu_icon = $(".menu_icon");

    $menu_icon.click(function(){
        $body.toggleClass('open');
    })

    $search_input.on('input change',function(){
        if ($(this).val() === '') {
            $reset.fadeOut(300);
        } else {
            $reset.fadeIn(300);
        }
    })

    $reset.on('click',function(){
        $search_input.val('');
        $reset.fadeOut(300);
    })

    $(window).resize(() => {
        if ($(window).innerWidth() < 900) {
            $body.removeClass('open');
        }
    });
});
