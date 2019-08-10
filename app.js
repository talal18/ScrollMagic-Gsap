const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -50 },
    { x: 300, y: 0 },
    { x: 500, y: 150 },
    { x: 750, y: -150 },
    { x: 350, y: -50 },
    { x: 600, y: 100 },
    { x: 800, y: 0 },
    { x: window.innerWidth, y: -250 }
  ]
};

// create timeline
const tween = new TimelineLite();

tween.add(
  TweenLite.to(".plane", 2, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);

//Scrollmagic
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 3000,
  triggerHook: 0 // when the animation starts --> 0: when the image hits the top of the page the anonatio starts
})
  .setTween(tween)
  //   .addIndicators()
  .setPin(".animation") // make sure the page won't scroll until the animation ends
  .addTo(controller);
