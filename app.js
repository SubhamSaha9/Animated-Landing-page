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
let video = document.querySelector("video");
main.addEventListener("mousemove", function (desc) {
    cursor.style.left = desc.x + "px";
    cursor.style.top = desc.y + "px";
})
video.addEventListener("mouseenter", function () {
    cursor.innerHTML = `<p>Sound on</p>`
    cursor.classList.add("sound");
    cursor.classList.remove("cursor");
})
video.addEventListener("mouseleave", function () {
    cursor.innerText = "";
    cursor.classList.add("cursor");
    cursor.classList.remove("sound");
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
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
        markers: true,
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
        markers: true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})
tl3.to(".main", {
    backgroundColor: "#0F0D0D"
})