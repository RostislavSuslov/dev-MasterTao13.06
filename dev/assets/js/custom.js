const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
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


const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length

const swiperAdvantages = new Swiper('#advantages', {
    spaceBetween: 12,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    breakpoints: {
        1025: {
            spaceBetween: 0,
            loop: false,
            slidesPerGroup: advantagesSlideLength,
            simulateTouch: false,
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            }
        }
    }
});

const cat = {
    name: "Murka",
    old: 7,
    color: 'red'
}

console.log(cat.name);


const typeFile = document.querySelectorAll('.custom-file')

typeFile.forEach(item => {
    item.addEventListener('change', () => {
        const fileName = item.closest('.input-box').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})