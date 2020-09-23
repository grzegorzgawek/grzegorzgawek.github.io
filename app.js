//----------------------------------------------------------------------------------Scrolling effect
let $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

//----------------------------------------------------------------------------------Nav color change
function callbackFunc(entries, observer) {
    entries.forEach(entry => {

        if (entry.target.id == "landing" && entry.isIntersecting == true) {
            $('a[href^="#landing"]').css("color", "#00BFFF");
            $('a[href^="#about"]').css("color", "#787878");
        }

        if (entry.target.id == "about" && entry.isIntersecting == true) {
            $('a[href^="#about"]').css("color", "#00BFFF");
            $('a[href^="#landing"]').css("color", "#787878");
            $('a[href^="#skill"]').css("color", "#787878");
        }

        if (entry.target.id == "skill" && entry.isIntersecting == true) {
            $('a[href^="#skill"]').css("color", "#00BFFF");
            $('a[href^="#about"]').css("color", "#787878");
            $('a[href^="#contact"]').css("color", "#787878");
        }

        if (entry.target.id == "contact" && entry.isIntersecting == true) {
            $('a[href^="#contact"]').css("color", "#00BFFF");
            $('a[href^="#skill"]').css("color", "#787878");
            $('a[href^="#portfolio"]').css("color", "#787878");
        }

        if (entry.target.id == "portfolio" && entry.isIntersecting == true) {
            $('a[href^="#portfolio"]').css("color", "#00BFFF");
            $('a[href^="#contact"]').css("color", "#787878");
        }

    });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

let observer = new IntersectionObserver(callbackFunc, options);
const media = window.matchMedia("(min-width: 1024px)");

if (media.matches) {
    observer.observe(document.getElementById('landing'));
    observer.observe(document.getElementById('about'));
    observer.observe(document.getElementById('skill'));
    observer.observe(document.getElementById('contact'));
    observer.observe(document.getElementById('portfolio'));
}

//----------------------------------------------------------------------------------Portfolio options
$('#opt2').on('click', function (e) {
    $("#foto").fadeOut(500, function () {
        $("#foto").css({
            display: 'none'
        });
        $("#web").fadeIn(500, function () {
            $("#web").css({
                display: 'flex'
            });
        });
    });
    document.querySelector("#opt1").classList.remove("active");
    document.querySelector("#opt2").classList.add("active");
});

$('#opt1').on('click', function (e) {
    $("#web").fadeOut(500, function () {
        $("#web").css({
            display: 'none'
        });
        $("#foto").fadeIn(500, function () {
            $("#foto").css({
                display: 'flex'
            });
        });
    });
    document.querySelector("#opt2").classList.remove("active");
    document.querySelector("#opt1").classList.add("active");
});

//----------------------------------------------------------------------------------Portfolio img pop-up
const img = document.querySelectorAll("div>.effect img");
const popup = document.querySelector(".full-img");
const preview = document.querySelector(".full-img img")

img.forEach((prev) => {
    prev.addEventListener("click", () => {
        popup.classList.add("show");
        preview.classList.add("show");

        const orgSrc = prev.getAttribute("data-original");
        preview.src = orgSrc;
    })
})

popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("full-img")) {
        popup.classList.remove("show");
        preview.classList.remove("show");
    }
})

//-----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------NAV ANIMATION
const hamburger = document.querySelector("header .hamburger");
const hr = document.querySelectorAll("header .hamburger hr");
const nav = document.querySelector("nav");
const a = document.querySelectorAll("nav div ul li a");
const hr1 = hr[0];
const hr2 = hr[1];
const tl = new TimelineMax()
    .to(hr1, 0.6, {
        rotation: 45,
        transformOrigin: "center",
        border: '3px solid #fff',
        y: '7.65px'
    })
    .to(hr2, 0.6, {
        rotation: -45,
        transformOrigin: "center",
        border: '3px solid #fff',
        y: '-7.65px'
    }, 0)
    .to(document.querySelector(".mobile"), 0.6, {
        backgroundColor: "#00BFFF"
    }, 0)
    .to(document.querySelector(".mobile figure h2"), 0.6, {
        color: "#fff"
    }, 0)
    .set(document.querySelector(".mobile figure img"), {
        attr: {
            src: "img/logo-white.png"
        }
    }, 0.25)
    .reverse();

hamburger.addEventListener('click', () => {
    tl.reversed(!tl.reversed());

    const contact = document.querySelector(".contact");
    const h = document.querySelectorAll("nav h5");
    const h1 = h[0];
    const h2 = h[1];

    nav.classList.toggle("open");
});

a.forEach(link => {
    link.addEventListener('click', () => {
        tl.reversed(!tl.reversed());

        nav.classList.toggle("open");
    });
})

//----------------------------------------------------------------------------------LANDING ANIMATION
window.addEventListener('load', () => {
    const img = document.querySelector(".landing figure img");
    const main = document.querySelector("main");
    const side = document.querySelector(".side");
    const media = window.matchMedia("(min-width: 1771px)");

    if (media.matches) {
        const tl = new TimelineMax()
            .fromTo(img,
                1, {
                    height: "0%",
                }, {
                    height: "100%",
                    opacity: "0.75",
                    ease: Power2.easeInOut
                }
            ).fromTo(main,
                1.2, {
                    width: "100%",
                }, {
                    width: "80%",
                    ease: Power2.easeInOut
                }
            ).fromTo(side,
                1.2, {
                    x: "-100%",
                    opacity: 0
                }, {
                    x: "0%",
                    opacity: 1,
                    ease: Power2.easeInOut
                }, "-=1.2"
            )
    }

})