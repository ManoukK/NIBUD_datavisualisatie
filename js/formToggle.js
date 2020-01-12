//verder door de form heen 
$('.verderNaarStap2').on('click',function() {
    $('.stap1').toggleClass('hide');
    $('.stap2').toggleClass('hide');
});

$('.verderNaarStap3').on('click',function() {
    $('.stap2').toggleClass('hide');
    $('.stap3').toggleClass('hide');
});

//eventueel hier code voor verder naar datavis

//teurg door de form heen (beginnen bij stap 3)
$('.terugStap2').on('click',function() {
    $('.stap2').toggleClass('hide');
    $('.stap3').toggleClass('hide');
});

$('.terugStap1').on('click',function() {
    $('.stap1').toggleClass('hide');
    $('.stap2').toggleClass('hide');
});


