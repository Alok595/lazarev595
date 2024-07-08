function navanimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to(".nav-bottom", {
      height: "23vh",
    });
    tl.to(".nav2 h5", {
      display: "block",
    });
    tl.to(".nav2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let t2 = gsap.timeline();

    t2.to(".nav2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    })
      .to(".nav2 h5", {
        display: "none",
      })
      .to(".nav-bottom", {
        height: 0,
      });
  });
}
navanimation()