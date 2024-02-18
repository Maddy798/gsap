const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 500);
});

gsap.ticker.lagSmoothing(0);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "7% 7%",
    end: "20% 20%",
    scrub: true,
    markers: false,
  },
});

tl.to(
  ".middle-text",
  {
    scale: 1,
    opacity: 1,
    rotate: -15,
  },
  "hehe"
);

tl.to(
  ".page2",
  {
    scale: 1.5,
    rotate: 15,
  },
  "hehe"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "20% 20%",
    end: "75% 75%",
    scrub: true,
    markers: false,
  },
});

tl2.to(".middle-text", {
  scale: 58,
  left: "19.5%",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "70% 70%",
    end: "100% 100%",
    scrub: true,
    markers: false,
  },
});

tl3.to(
  ".page1",
  {
    display: "none",
  },
  "hiding-pages"
);

tl3.to(
  ".page2",
  {
    display: "none",
  },
  "hiding-pages"
);

tl3.to(
  ".page3",
  {
    display: "flex",
  },
  "hiding-pages"
);
