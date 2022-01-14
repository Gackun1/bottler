const path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x:0, y: 0},
        {x:300, y: 10},
        {x:500, y: 100},
        {x:750, y: -10},
        {x:350, y: -50},
        {x:600, y: 100},
        {x:800, y: 0},
        {x: window.innerWidth, y: -250},

    ]
}

const tween1 = new TimelineLite();
tween1.add(
    TweenLite.to('.unko', 1, {
        bezier: path,
        ease: Power1.easeInOut,
        
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".aaa",
  duration: 1000,
  triggerHook: 0,
})
  .setTween(tween1)
  .addIndicators()
  .setPin(".aaa")
  .addTo(controller);