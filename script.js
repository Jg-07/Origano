'use strict';
let navbar = document.querySelector('.navbar');
let togDisp = document.querySelector('.togContents');
let navCancel = document.querySelector('.navCancel')
let navTog = document.querySelector('.navTog');
navTog.addEventListener('click', function () {
    togDisp.classList.remove('closeTog');
    togDisp.classList.add('openTog');
    navTog.classList.add('hidden');
    navCancel.classList.add('appear');
    navCancel.classList.remove('hidden');
    togDisp.classList.remove('hidden');
})
navCancel.addEventListener('click', function () {
    togDisp.classList.remove('openTog');
    togDisp.classList.add('closeTog');
    navTog.classList.add('appear');
    navTog.classList.remove('hidden');
    navCancel.classList.add('hidden');
    togDisp.classList.add('hidden');
})
window.addEventListener('click', function (event) {
    let box = document.querySelector('.togContents');
    if (event.target != box && event.target != navCancel && event.target != navTog && event.target != togDisp) {
        navTog.classList.remove('hidden');
        navCancel.classList.add('hidden');
        togDisp.classList.add('hidden');
    }
})
product.addEventListener('click', function () {
    window.scrollTo({
        top: 650,
        behavior: "smooth",
    });
});
product1.addEventListener('click', function () {
    window.scrollTo({
        top: 730,
        behavior: "smooth",
    });
});
feature.addEventListener('click', function () {
    window.scrollTo({
        top: 1600,
        behavior: "smooth",
    })
})
feature1.addEventListener('click', function () {
    window.scrollTo({
        top: 1600,
        behavior: "smooth",
    })
})
window.onscroll = function () {
    if (window.scrollY >= 620) {
        navbar.classList.add('navcolor');
    }
    else {
        navbar.classList.remove('navcolor');
    }
}