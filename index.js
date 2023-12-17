
$(document).ready(function(){
    function checkWidth() {
        if ($(window).width() < 768) {
            $('.prise_container, .work_gallery-container, .clients_block').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            });
        } else {
            if ($('.prise_container').hasClass('slick-initialized')) {
                $('.prise_container, .work_gallery-container, .clients_block').slick('unslick');
            }
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
});

$('.work_gallery_button-left').on('click', function() {
    $('.work_gallery-container').slick('slickPrev');
});

$('.work_gallery_button-right').on('click', function() {
    $('.work_gallery-container').slick('slickNext');
});

$('.prise_mobil_img-one').on('click', function() {
    $('.prise_container').slick('slickPrev');
});

$('.prise_mobil_img-two').on('click', function() {
    $('.prise_container').slick('slickNext');
});

$('.clients_mobil_img-one').on('click', function() {
    $('.clients_block').slick('slickPrev');
});

$('.clients_mobil_img-two').on('click', function() {
    $('.clients_block').slick('slickNext');
});


function checkWindowSize() {
    var win = $(window);
    if (win.width() <= 768) { 
        $('img[alt="yandex"]').attr('src', '/img/2gis.svg');
        $('img[alt="avito"]').attr('src', '/img/yandex.svg');
        $('img[alt="2gis"]').attr('src', '/img/f.svg');
        $('img[alt="google"]').attr('src', '/img/avito.svg');
        $('img[alt="lamp"]').attr('src', '/img/Google.svg');
    } else {
        $('img[alt="yandex"]').attr('src', '/img/sities-1.svg');
        $('img[alt="avito"]').attr('src', '/img/sities-2.svg');
        $('img[alt="2gis"]').attr('src', '/img/sities-3.svg');
        $('img[alt="google"]').attr('src', '/img/sities-4.svg');
        $('img[alt="lamp"]').attr('src', '/img/sities-5.svg');
    }
}
$(document).ready(checkWindowSize);
$(window).on('resize', checkWindowSize);


$('.questions_click').on('click', function() {
    var card = $(this).closest('.questions_card');
    var img = card.find('img'); // Находим изображение внутри карточки
    var cardBlock = card.find('.questions_card-block');
    var questionText = card.find('.question_text');

    if (card.find('.additional-text').length === 0) {
        card.append('<div class="additional-text-container"><p class="additional-text">Можем. Доплата за каждый куб +1 000 рублей, время выполнения заказа может увеличиться на 1-3 дня. Под ваш заказ будет выделен отдельный человек, который вручную напилит и наколит дрова.</p></div>');
        $('.additional-text-container').hide().slideDown();
        img.attr('src', '/img/question-active.svg');
        cardBlock.addClass('active').css({
            'border-bottom': '2px solid #44A603', 
        });
        questionText.css({
            'color': '#44A603',
            'font-weight': '700'   
        });
    } else {
        card.find('.additional-text-container').slideUp(function() { $(this).remove(); });
        img.attr('src', '/img/question.svg');
        cardBlock.removeClass('active').css({
            'border-bottom': '2px solid rgba(0, 0, 0, 0.17)',
        });
        questionText.css({
            'color': '#000', 
            'font-weight': '400'
        });
    }
});

$(window).resize(function() {
    if ($(window).width() <= 600) {
        $('.districts_card-button-custom').text('Велижанский тракт');
        $('.work_title-contacts').text('Контакты');
    } else {
        $('.districts_card-button').text('Велижанский тракт 17 км');
        $('.work_title-contacts').text('Контактная информация');
    }
}).resize();


