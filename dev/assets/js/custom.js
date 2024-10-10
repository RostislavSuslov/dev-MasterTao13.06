const swiperbanner = new Swiper('#banner-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        spaceBetween: 20,
        clickable: true,
    },

    navigation: {
        enabled: false,
    },

    breakpoints: {
        // when window width is >= 992px
        992: {
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }
});

const advantageSlide = document.querySelectorAll('#advantages .swiper-slide')

const swiperAdvantages = new Swiper('#advantages', {
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 0,
            loop: false,
            slidesPerGroup: advantageSlide,
            simulateTouch: false,
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            }
        }
    }
});

const typeFile = document.querySelectorAll('.custom-file')

typeFile.forEach(item => {
    item.addEventListener('change', () => {
        const fileName = item.closest('.input-box').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})


// const swiperDelivery = new Swiper('#delivery', {
//     speed: 400,
//     loop: true,
//     slidesPerView: 1,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         enabled: true,
//     },
//     navigation: {
//         enabled: false,
//         nextEl: '.swiper-button-next-unique',
//         prevEl: '.swiper-button-prev-unique'
//     },

//     breakpoints: {
//         767: {
//             slidesPerView: 1,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-unique',
//                 prevEl: '.swiper-button-prev-unique'
//             },
         
//         },
//         861: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-unique',
//                 prevEl: '.swiper-button-prev-unique'
//             },
//             pagination: {
//                 enabled: false,
//             },
//         },

//         1252: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-unique',
//                 prevEl: '.swiper-button-prev-unique'
//             },
//             pagination: {
//                 enabled: false,
//             },
//         }
//     }
// });


// const swiperServices = new Swiper('#services', {
//     speed: 400,
//     loop: true,
//     slidesPerView: 1,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         enabled: true,
//     },
//     navigation: {
//         enabled: false,
//         nextEl: '.swiper-button-next-services',
//         prevEl: '.swiper-button-prev-services'
//     },

//     breakpoints: {
//         767: {
//             slidesPerView: 1,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-services',
//                 prevEl: '.swiper-button-prev-services'
//             },
         
//         },
//         861: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-services',
//                 prevEl: '.swiper-button-prev-services'
//             },
//             pagination: {
//                 enabled: false,
//             },
//         },

//         1252: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-services',
//                 prevEl: '.swiper-button-prev-services'
//             },
//             pagination: {
//                 enabled: false,
//             },
//         }
//     }
// });



const swiperTemplate = document.querySelectorAll('.slider-template')
const sliderTemplatePrevArrow = document.querySelectorAll('.swiper-button-prev-unique')
const sliderTemplateNextArrow = document.querySelectorAll('.swiper-button-next-unique')



sliderTemplatePrevArrow.forEach((arrow, index) => {
    arrow.classList.add('swiper-button-prev-unique-' + index)
})

sliderTemplateNextArrow.forEach((arrow, index) => {
    arrow.classList.add('swiper-button-prev-unique-' + index)
})

swiperTemplate.forEach((item, index) => {
    
  new Swiper(item, {
    speed: 400,
    loop: true,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    navigation: {
        enabled: false,
        nextEl: '.swiper-button-next-unique-' + index,
        prevEl: '.swiper-button-prev-unique-' + index,
    },

    breakpoints: {
        767: {
            slidesPerView: 1,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next-unique-' + index,
                prevEl: '.swiper-button-prev-unique-' + index,
            },
         
        },
        861: {
            slidesPerView: 2,
            spaceBetween: 30,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next-unique-' + index,
                prevEl: '.swiper-button-prev-unique-' + index,
            },
            pagination: {
                enabled: false,
            },
        },

        1252: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next-unique-' + index,
                prevEl: '.swiper-button-prev-unique-' + index,
            },
            pagination: {
                enabled: false,
            },
        }
    }
});
})
