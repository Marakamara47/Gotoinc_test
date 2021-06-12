// eslint-disable-next-line no-undef
new Swiper('.my_slider',{
    slidesPerView: 3,//сколько показывать одновременно
    spaceBetween: 30,//пробел между слайдами
    pagination: {
        el: ".swiper-pagination",//блок пагинации
        clickable: true,//возможность перехода используя пагинацию
    },//настройки пагинации
    loop: true,//переключатель цикличности
    breakpoints: {
        375: {
            slidesPerView: 1
        },
        970: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});//настройки слайдера и инициализация

function burgerToggle() {
    const burger = document.querySelector('.hb_burger_menu');
    const menu = document.querySelector('.hb_menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    })//событие для работы по кнопке
    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
    })//событие для скрытия бургера при переходе
}//событие для работы меню бургер
burgerToggle();