$(document).ready(function() {
    $('.tran').click(function(){
        $('.tran').map(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    })

    $('.nav-but-one').click(function(){
        $('.nav-but-one').map(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    })
    $('.nav-but-two').click(function(){
        $('.nav-but-two').map(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    })

    console.log($('.tran'))
});