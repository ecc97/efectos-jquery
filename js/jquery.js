$(document).ready(function(){
    $('#a').click(function (){
        $('.lista-a').fadeToggle(1000, function(){
            $('.lista-a').css('display:block');
        });
    })
    $('#b').click(function(){
        $('.lista-b').show(1000);
    })
    $('#bo').click(function(){
        $('.lista-b').hide(1000);
    })
    $('#c').click(function(){
        $('.lista-c').slideToggle(1000, function(){
            $('.lista-c').css('display:block');
        });
    })
    $('#btn').click(function(){
        $('h1').text('Películas recientes');
        $('#btn').hide();
    })
});