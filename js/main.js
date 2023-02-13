// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {

        //Переменная-ссылка на все div с классом card
        const cards = this.document.querySelectorAll(".card");

        //Используем цикл, для того, чтобы применять 
        //функцию на той карточке, на которую навели мышку
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i]; 
            card.addEventListener('mousemove', cardHover);
            card.addEventListener('mouseout', resetCardHover);   
        }
        

        //Функция, задающая повороты карточек
        function cardHover(event) {
            //Ключевое слово this указывает на карту, в которой осуществляется фукнция
            const cardItem = this.querySelector(".card__item");
            //Вычисляем половину высоты .cardItem, чтобы отнять от общей высоты карты
            const halfHeight = cardItem.offsetHeight / 2;
            //Вычисляем половину ширины .cardItem, чтобы отнять от общей ширины карты
            const halfWidth = cardItem.offsetWidth / 2;
            //Вычисляем координаты и меняем значение поворота по осиX и по осиY
            cardItem.style.transform = "rotateX("+ -(event.offsetY - halfHeight) / 10 + "deg) rotateY("+ (event.offsetX - halfWidth) / 10 + "deg)";
        }

        //Функция, сбрасывающая повоторы карточек
        function resetCardHover(event) {
            //Ключевое слово this указывает на карту, в которой осуществляется фукнция
            const cardItem = this.querySelector(".card__item");
            //Сбрасываем все повороты
            cardItem.style.transform = "rotate(0)";
        }

    });
});