const selectElement = (element) => document.querySelector(element);

const openNav = selectElement(".open-nav");
const closeNav = selectElement(".close");
const menu = selectElement(".menu-mobile");
// check icon menu in a page
if (openNav) {
  openNav.onclick = () => {
    menu.classList.add("open-menu")
    menu.classList.remove("hide-menu")
  };
  closeNav.onclick = () => {
    menu.classList.remove("open-menu")
    menu.classList.add("hide-menu")
  };
}

//  sliders
var delicious = new Swiper(".delicious-Foods", {
  slidesPerView: 1,
  slidePerColumn: 3,
  slidePerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".delicious-Foods__button--next",
    prevEl: ".delicious-Foods__button--prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
      grid: {
        rows: 2,
        fill: {
          column: 'column'
        }
      },
    },
  },

});

var customersSay = new Swiper(".customers-say", {
  grabCursor: true,
  slidesPerView: 1,
  slidePerGroup: 1,
  loop: true,
  navigation: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});


//  according
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;
    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
      header.querySelector(".min").classList.remove("hidden");
      header.querySelector(".plus").classList.add("hidden");
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector(".min").classList.add("hidden");
      header.querySelector(".plus").classList.remove("hidden");
    }
  });
});
