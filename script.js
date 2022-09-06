$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    })




    // slide-up script 

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })


    // toggle menu / navbar script 

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing animation

    var typed = new Typed(".typing", {
        strings: ["Searching", "Recruiting", "Hiring", "Employing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Searching", "Recruiting", "Hiring", "Employing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["Searching", "Recruiting", "Hiring", "Employing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});





const modalViews = document.querySelectorAll('.service__modal'),
    modalBtns = document.querySelectorAll('.service__button'),
    modalCloses = document.querySelectorAll('.service__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i) 
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})




const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}


inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
});


