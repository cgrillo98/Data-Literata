gsap.registerPlugin(ScrollTrigger);

const showDemo = () => {
  document.body.style.overflow = "auto";

  gsap.utils.toArray(".horizontal-text").forEach((el, index) => {
    const [x, xEnd] =
    index % 2 ?
    ["100%", (el.scrollWidth - el.offsetWidth) * -1] :
    [el.scrollWidth * -1, 0];
    gsap.fromTo(
    el,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: el,
        scrub: 0.5 } });



  });
};

showDemo();