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

const user = {
    name: "Bill",
    lastName: "Picls",
    old: 14,
    parents: {
        mather: {
            name: 'Monika',
            old: 33,
        },
        father: {
            name: 'Pit',
            old: 35,
        }
    }
}

console.log(user.parents.mather.name);
console.log(user.parents.father.old);

const dog = {
    name: "Spike",
    old: 5,
    color: 'white',
    parent: false,
}

const cat = {
    name: "Murka",
    old: 3,
    color: "red",
    parents: {
        mather: 'Basya',
        father: 'Arsen'
    }
}

console.log(cat.parents.mather);