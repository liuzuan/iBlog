$(document).ready(() => {
    $(document).delegate('.sidebar_btn', 'click', () => {
        $('.sidebar').addClass('open');
    });
    $('.sidebar').click(() => {
        event.stopPropagation();
    });
    
    $('body').click(() => {
        if ($(window).innerWidth() < 900) {
            $('.sidebar').removeClass('open');
        }
    });
    $(window).resize(()=> {
        if ($(window).innerWidth() < 900) {
            $('.sidebar').removeClass('open');
        }
    })
});
