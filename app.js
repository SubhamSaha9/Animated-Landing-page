function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init();

let cursor = document.querySelector("#cursor");
let main = document.querySelector(".main");
let video = document.querySelectorAll("video");
document.addEventListener("mousemove", function (desc) {
    cursor.style.left = desc.x + 5 + "px";
    cursor.style.top = desc.y + 5 + "px";
})
video.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.innerHTML = `<p>Sound on</p>`
        cursor.classList.add("sound");
        cursor.classList.remove("cursor");
    })
    elem.addEventListener("mouseleave", function () {
        cursor.innerText = "";
        cursor.classList.add("cursor");
        cursor.classList.remove("sound");
    })
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")

tl.to(".page1 h2", {
    x: 100
}, "anim")

tl.to(".page1 video", {
    width: "90%"
}, "anim")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top -116%",
        end: "top -130%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#ffffff"
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})
tl3.to(".main", {
    backgroundColor: "#0F0D0D"
})

let boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        let src = elem.getAttribute("data-image");
        cursor.style.width = "470px";
        cursor.style.height = "280px";
        cursor.style.borderRadius = "0";
        cursor.style.zIndex = "30";
        cursor.style.backgroundImage = `url(${src})`;
    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.borderRadius = "50%";
        cursor.style.backgroundImage = `none`;
    })
})
let h4 = document.querySelectorAll("#nav h4");
let purple = document.querySelector("#purple");
let mid = document.querySelector(".effect");
h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", () => {
        console.log(elem.innerText);
        purple.style.display = "block";
        purple.style.opacity = "1";
        mid.innerHTML = `<marquee scrollamount="25"><h1 style="color:#111;font-family: PP mori;">${elem.innerText}  ${elem.innerText}  ${elem.innerText}  ${elem.innerText}  ${elem.innerText}  ${elem.innerText}  ${elem.innerText} </h1></marquee>`;


    })
    elem.addEventListener("mouseleave", () => {
        purple.style.display = "none";
        purple.style.opacity = "0";

    })
})