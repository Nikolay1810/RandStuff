$("#button").click(function () {
    var numb_first = document.getElementById("one");
    numb_first.textContent = (numb_1);
    var nub_second = document.getElementById("two");
    nub_second.textContent = (numb_2);

    $('#one').css({
        'bottom': '1000px'
    })
    $('#one').animate({
        'bottom': '-=1000px'
    }, 400).show(1);
    $('#two').css({
        'bottom': '1500px'
    })

    $('#two').animate({
        'bottom': '-=1500px'
    }, 500).show(4000);
    test = false;
});

$("#button").mousedown(function(){
    $("button").css({'background-position': '0px -84px'})
});
$("#button").mouseup(function(){
    $("button").css({'background-position': '0px 0px'})
});

 // Преобразование слова рядом с цифрой
    function wordCount($n, $words)
    {
        var $x = ($xx = $n%100)%10;
        return $words[((($xx > 10) && ($xx < 15)) || !$x || (($x > 4) && ($x < 10))) ? 2 : (($x == 1) ? 0 : 1)];
    }

 // Инициализация слайдера
    $('#slider').slider({
        min: $('#slider').data('min'),
        max: $('#slider').data('max'),
        value: $('#slider').data('val'),
        range: 'min',
        create: function(event, ui) {
            var words = $('#slider-val').data('words').split(',');
            $('#slider-val').text($('#slider').data('val') + ' ' + wordCount($('#slider').data('val'), words));
        },
        slide: function(event, ui) {
            var words = $('#slider-val').data('words').split(',');
            $('#slider-val').text(ui.value + ' ' + wordCount(ui.value, words));

            if (ui.value > 1) {
                $('#number-unique label').fadeIn(200);
            } else {
                $('#number-unique label').fadeOut(200);
            }
            $('#wkwin-count').val(ui.value);
        }
    });

