$(document).ready(function () {
    // Прокрутка меню
    $('nav a[href^="#"]').click(function () {
        let target = $(this).attr('href');      // помещаем в переменную все элементы с href
        $('html, body').animate({               // добавляем анимацию
            scrollTop: $(target).offset().top   
        }, 500);                                
        $('nav a[href^="#"]').parent().removeClass('active');   // удаляем у родительского класса active с href="#"
        $(this).parent().addClass('active')                     // добавляем класс active объект класса (nav a[href^="#"])
        $('.menu__mobile .menu').toggle(500);                   // скрывает со скорость 500
        $('.menu__burger').toggleClass('close');                // заменяте класс на close
        return false;
    });

    // Мобильное меню
    $('.menu__burger').click(function () {      // при клике на бургер срабатывает функция 
        $('.menu__mobile .menu').toggle(500);   // скрывает со скорость 500
        $(this).toggleClass('close');           // заменят объект класса на close
    });
});