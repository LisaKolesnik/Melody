$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
  var counterUp = $(".counter-up"); // конпка увеличения этажа
  var counterDown = $(".counter-down"); // конпка уменьшения этажа
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счётчик справа
  });

  floorPath.on('click', toggleModal); // при клике на этаж, вызывает окно
  modalCloseButton.on('click', toggleModal); // клик на кнопку закрыть убирает окно
  viewFlatsButton.on('click', toggleModal);

  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    // проверяем значение этажа, оно должно быть не больше 18
    if (currentFloor < 18) {
      currentFloor++; // прибавляем один этаж 
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }); // форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  // отслеживаем клик по кнопке вниз
  counterDown.on("click", function () {
    // проверяем значение этажа, оно должно быть больше 2
    if (currentFloor > 2) {
      currentFloor--; // отнимаем один этаж 
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }); // форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  function toggleModal() {
    // функция открыть-закрыть окно
    modal.toggleClass('is-open');
  }
});
