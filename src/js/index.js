import Swiper from 'swiper'
import 'swiper/swiper.scss'
import { Pagination } from 'swiper/modules'
import 'swiper/modules/pagination.scss'

import '../scss/style.scss'

//Включение слайдеров при мобилке
if (window.innerWidth <= 670) {
  const swiperBrands = new Swiper('.brands__slider', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.brands-pagination',
      clickable: false
    }
  })
  const swiperPrice = new Swiper('.price__slider', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.price-pagination',
      clickable: false
    }
  })
  const swiperDevice = new Swiper('.device__slider', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.device-pagination',
      clickable: false
    }
  })
}

// Кнопка скрыть/показать на бренд слайдере brands

let items
let itemsCounter
const showAll = document.querySelector('.brands__show-all')
const allItems = document.querySelectorAll('.brands__item').length
let normalHeight = document.querySelector('.brands__wrapper').offsetHeight
let height

if (window.innerWidth <= 1023) {
  items = 6
  itemsCounter = 6
  height = 172
} else if (window.innerWidth > 1023 && window.innerWidth < 1440) {
  items = 8
  itemsCounter = 8
  height = 86
} else if (window.innerWidth >= 1440 && window.innerWidth <= 1712) {
  items = 8
  itemsCounter = 8
  height = 86
}

showAll.addEventListener('click', () => {
  const array = Array.from(document.querySelector('.brands__wrapper').children)
  let visibleItems = array.slice(0, items)

  //Проверка нужно ли показать или скрыть ячейки

  if (visibleItems.length < allItems) {
    items = allItems
    visibleItems = array.slice(0, items)
    visibleItems.forEach((el) => el.classList.add('is-visible'))
    showAll.textContent = 'Скрыть'
    //отображение товаров и иземенение текста

    document.querySelector('.brands__wrapper').style.height =
      normalHeight + height + 'px'
    document.querySelector('.brands__show-logo').style.transform =
      'rotate(180deg)'
    //изменение высоты блока
  } else {
    items = itemsCounter
    visibleItems = array.slice(items, allItems)
    visibleItems.forEach((el) => el.classList.remove('is-visible'))
    showAll.textContent = 'Показать все'
    //скрытие товаров и иземенение текста обратно

    document.querySelector('.brands__wrapper').style.height =
      normalHeight + 'px'
    document.querySelector('.brands__show-logo').style.transform =
      'rotate(0deg)'
    //возвращение высоты блока
  }
})

// Кнопка скрыть/показать на бренд слайдере Device

let itemsDevice
let itemsCounterDevice
const showAllDevice = document.querySelector('.device__show-all')
const allItemsDevice = document.querySelectorAll('.device__item').length
let normalHeightDevice = document.querySelector('.device__wrapper').offsetHeight
let heightDevice

if (window.innerWidth <= 1023) {
  itemsDevice = 3
  itemsCounterDevice = 3
  heightDevice = 184
} else if (window.innerWidth > 1023 && window.innerWidth < 1440) {
  itemsDevice = 4
  itemsCounterDevice = 4
  heightDevice = 184
} else if (window.innerWidth >= 1440 && window.innerWidth <= 1712) {
  itemsDevice = 4
  itemsCounterDevice = 4
  heightDevice = 184
} else {
  itemsDevice = 5
  itemsCounterDevice = 5
  heightDevice = 184
}

showAllDevice.addEventListener('click', () => {
  const arrayDevice = Array.from(
    document.querySelector('.device__wrapper').children
  )
  let visibleItemsDevice = arrayDevice.slice(0, itemsDevice)

  //Проверка нужно ли показать или скрыть ячейки

  if (visibleItemsDevice.length < allItemsDevice) {
    itemsDevice = allItemsDevice
    visibleItemsDevice = arrayDevice.slice(0, itemsDevice)
    visibleItemsDevice.forEach((el) => el.classList.add('is-visible'))
    showAllDevice.textContent = 'Скрыть'
    //отображение товаров и иземенение текста

    document.querySelector('.device__slider').style.height =
      normalHeightDevice + heightDevice + 'px'
    document.querySelector('.device__show-logo').style.transform =
      'rotate(180deg)'
    //изменение высоты блока
  } else {
    itemsDevice = itemsCounterDevice
    visibleItemsDevice = arrayDevice.slice(itemsDevice, allItemsDevice)
    visibleItemsDevice.forEach((el) => el.classList.remove('is-visible'))
    showAllDevice.textContent = 'Показать все'
    //скрытие товаров и иземенение текста обратно

    document.querySelector('.device__slider').style.height =
      normalHeightDevice + 'px'
    document.querySelector('.device__show-logo').style.transform =
      'rotate(0deg)'
    //возвращение высоты блока
  }
})

//Кнопка читать далее

let button = document.querySelector('.content__button')
const textAreasWithButton = Array.from(
  document.querySelector('.content__text').children
)

button.addEventListener('click', () => {
  if (
    document
      .querySelector('.content__text-fourth')
      .classList.contains('.is-visible') == true
  ) {
  } else {
    button.style.display = 'none'

    let textAreas = textAreasWithButton.slice(0, 4)
    textAreas.forEach((el) => el.classList.add('is-visible'))
  }
})

let burger = document.querySelector('.burger-menu-open')
let close = document.querySelector('.side-menu__close-button')
let sideMenu = document.querySelector('.side-menu')
let body = document.querySelector('body')
let background = document.querySelector('.blur-area')

// Открытие меню
burger.addEventListener('click', () => {
  sideMenu.style.display = 'flex'
  sideMenu.classList.remove('dissapear')
  sideMenu.classList.add('appear')
  //Блокировка прокрутки страницы
  body.style.overflow = 'hidden'
  //Появление блюра
  background.style.display = 'block'
  background.classList.add('blur')
  background.classList.remove('no-blur')
})

// Закрытие меню при нажатии на кнопку

close.addEventListener('click', () => {
  sideMenu.classList.remove('appear')
  sideMenu.classList.add('dissapear')
  //удаление блюра
  background.classList.remove('blur')
  background.classList.add('no-blur')
  setTimeout(() => {
    background.style.display = 'none'
  }, 500)

  //анфикс заднего фона
  body.style.overflow = ''
  //убирание меню
  setTimeout(() => {
    sideMenu.style.display = 'none'
  }, 500)
})

// Закрытие меню при нажатии на фон

background.addEventListener('click', () => {
  if (sideMenu.classList.contains('appear')) {
    sideMenu.classList.remove('appear')
    sideMenu.classList.add('dissapear')
    //Удаление блюра
    background.classList.remove('blur')
    background.classList.add('no-blur')
    setTimeout(() => {
      background.style.display = 'none'
    }, 500)
    //убирание меню
    setTimeout(() => {
      sideMenu.style.display = 'none'
    }, 300)
  }
})

//открытие модалки заказать звонок

let call = document.querySelector('.call-button')
let closeCall = document.querySelector('.call-request__close-button')
let callMenu = document.querySelector('.call-request')

// Открытие меню модалки
call.addEventListener('click', () => {
  callMenu.style.display = 'block'
  callMenu.classList.remove('dissapeared')
  callMenu.classList.add('appeared')
  //Блокировка прокрутки страницы
  body.style.overflow = 'hidden'
  //Появление блюра
  background.style.display = 'block'
  background.classList.add('blur')
  background.classList.remove('no-blur')
})

// Закрытие меню модалки при нажатии на кнопку

closeCall.addEventListener('click', () => {
  callMenu.classList.remove('appeared')
  callMenu.classList.add('dissapeared')
  //удаление блюра
  background.classList.remove('blur')
  background.classList.add('no-blur')
  setTimeout(() => {
    background.style.display = 'none'
  }, 500)

  //анфикс заднего фона
  body.style.overflow = ''
  //убирание меню модалки
  setTimeout(() => {
    callMenu.style.display = 'none'
  }, 500)
})

// Закрытие меню модалки при нажатии на фон

background.addEventListener('click', () => {
  if (callMenu.classList.contains('appeared')) {
    callMenu.classList.remove('appeared')
    callMenu.classList.add('dissapeared')
    //Удаление блюра
    background.classList.remove('blur')
    background.classList.add('no-blur')
    setTimeout(() => {
      background.style.display = 'none'
    }, 500)
    //анфикс заднего фона
    body.style.overflow = ''
    //убирание меню модалки
    setTimeout(() => {
      callMenu.style.display = 'none'
    }, 300)
  }
})

//открытие модалки обратной связи

let feedback = document.querySelector('.feedback-button')
let closeFeedback = document.querySelector('.feedback__close-button')
let feedbackMenu = document.querySelector('.feedback')

// Открытие меню модалки
feedback.addEventListener('click', () => {
  feedbackMenu.style.display = 'block'
  feedbackMenu.classList.remove('dissapeared')
  feedbackMenu.classList.add('appeared')
  //Блокировка прокрутки страницы
  body.style.overflow = 'hidden'
  //Появление блюра
  background.style.display = 'block'
  background.classList.add('blur')
  background.classList.remove('no-blur')
})

// Закрытие меню модалки при нажатии на кнопку

closeFeedback.addEventListener('click', () => {
  feedbackMenu.classList.remove('appeared')
  feedbackMenu.classList.add('dissapeared')
  //удаление блюра
  background.classList.remove('blur')
  background.classList.add('no-blur')
  setTimeout(() => {
    background.style.display = 'none'
  }, 500)

  //анфикс заднего фона
  body.style.overflow = ''
  //убирание меню модалки
  setTimeout(() => {
    feedbackMenu.style.display = 'none'
  }, 500)
})

// Закрытие меню модалки при нажатии на фон

background.addEventListener('click', () => {
  if (feedbackMenu.classList.contains('appeared')) {
    feedbackMenu.classList.remove('appeared')
    feedbackMenu.classList.add('dissapeared')
    //Удаление блюра
    background.classList.remove('blur')
    background.classList.add('no-blur')
    setTimeout(() => {
      background.style.display = 'none'
    }, 500)
    //анфикс заднего фона
    body.style.overflow = ''
    //убирание меню модалки
    setTimeout(() => {
      feedbackMenu.style.display = 'none'
    }, 300)
  }
})

//открытие модалки обратной связи из сайд меню

let feedbackSide = document.querySelector('.contacts__chat-button')

// Открытие меню модалки из сайд меню
feedbackSide.addEventListener('click', () => {
  feedbackMenu.style.display = 'block'
  feedbackMenu.classList.remove('dissapeared')
  feedbackMenu.classList.add('appeared')
  // закрытие сайда
  if (sideMenu.classList.contains('appear')) {
    sideMenu.classList.remove('appear')
    sideMenu.classList.add('dissapear')
    setTimeout(() => {
      sideMenu.style.display = 'none'
    }, 300)
  }

  //Блокировка прокрутки страницы
  body.style.overflow = 'hidden'
  //Появление блюра
  background.style.display = 'block'
  background.classList.add('blur')
  background.classList.remove('no-blur')
})

//открытие модалки заказать звонок

let callSide = document.querySelector('.contacts__call-button')

// Открытие меню модалки из сайда
callSide.addEventListener('click', () => {
  callMenu.style.display = 'block'
  callMenu.classList.remove('dissapeared')
  callMenu.classList.add('appeared')
  //закрытие сайда
  if (sideMenu.classList.contains('appear')) {
    sideMenu.classList.remove('appear')
    sideMenu.classList.add('dissapear')
    setTimeout(() => {
      sideMenu.style.display = 'none'
    }, 300)
  }
  //Блокировка прокрутки страницы
  body.style.overflow = 'hidden'
  //Появление блюра
  background.style.display = 'block'
  background.classList.add('blur')
  background.classList.remove('no-blur')
})

let services = document.querySelector('.content__scroll')
let servicesItem = document.querySelectorAll('.item')
const classChange = () => {
  servicesItem.forEach((a) => {
    a.classList.remove('item-active')
  })
  event.target.classList.add('item-active')
}

servicesItem.forEach((a) => {
  a.addEventListener('click', classChange)
})
