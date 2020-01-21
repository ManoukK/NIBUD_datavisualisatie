//verder door de form heen 
$('.verderNaarStap2').on('click',function() {
    $('.stap1').addClass('hide');
    $('.stap2').removeClass('hide');
});

$('.verderNaarStap3').on('click',function() {
    $('.stap2').addClass('hide');
    $('.stap3').removeClass('hide');
});

//eventueel hier code voor verder naar datavis

//teurg door de form heen (beginnen bij stap 3)
$('.terugStap2').on('click',function() {
    $('.stap2').removeClass('hide');
    $('.stap3').addClass('hide');
});

$('.terugStap1').on('click',function() {
    $('#formSituatie').removeClass('scale-up-center');
    $('.stap1').removeClass('hide');
    $('.stap2').addClass('hide');
});


if ($('.back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.sback-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}