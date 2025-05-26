
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contacts-modal');
  const openButtons = document.querySelectorAll('.modal__btn');
  const closeBtn = modal.querySelector('.modal__close');
  const overlay = modal.querySelector('.modal__overlay');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('modal--active');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  overlay.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.faq-accordion');

  accordions.forEach(accordion => {
    const header = accordion.querySelector('.faq-accordion__header');
    const iconImg = accordion.querySelector('.faq-accordion__icon-img');

    header.addEventListener('click', () => {
      accordions.forEach(otherAccordion => {
        if (otherAccordion !== accordion) {
          otherAccordion.classList.remove('faq-accordion--active');
          const otherIcon = otherAccordion.querySelector('.faq-accordion__icon-img');
          if (otherIcon) {
            otherIcon.src = 'img/plus.png';
            otherIcon.alt = 'Раскрыть';
          }
        }
      });

      accordion.classList.toggle('faq-accordion--active');

      const isOpen = accordion.classList.contains('faq-accordion--active');
      iconImg.src = isOpen ? 'img/minus.png' : 'img/plus.png';
      iconImg.alt = isOpen ? 'Скрыть' : 'Раскрыть';
    });
  });
});

const slides = Array.from(document.querySelectorAll('.review-slider__container-slide'));
const prevButton = document.querySelector('.review-slider__container-arrow.left');
const nextButton = document.querySelector('.review-slider__container-arrow.right');

let currentIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
  });
}

// Только если кнопки существуют
if (prevButton && nextButton) {
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  updateSlider(); // тоже вызываем только если есть слайды
}

const alertButtons = document.querySelectorAll('.contacts__btn');

  alertButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Форма отправлена, спасибо, что выбрали нас');
    });
  });