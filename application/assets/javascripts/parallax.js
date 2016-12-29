
function initParallax() {

  // init controller
  var controller = new ScrollMagic.Controller();

  //Header Timeline with 2 Tweens
  var headerTimeline = new TimelineMax()
      .to(".sun", 4, {top: '10%',ease: Power4.easeOut}, 0)
      .to(".sun", 2, {border: '10px solid #ffa322',ease: Power4.easeOut}, 2)
      .to(".sun", 4, {left: '75%',ease: Linear.none}, 0)
      .to(".sky2", 4, {opacity: 1,  ease: Linear.none}, 0 )
      .to(".sun", 1, {transform: 'scale(0.8, 0.8)',ease: Power4.easeOut}, 4)
      .to("#world", 0.5, { opacity: 1, ease: Power4.easeOut}, 4)
      .to("#world", 4, {transform: 'scale(1, 1)', ease: Elastic.easeOut.config(1, 0.3) }, 4)
      //.to("#world", 3, {transform: 'scale(1.01, 1.01)', ease: Power4.easeOut}, 5)
    ;

  // create a scene
  new ScrollMagic.Scene({
    triggerElement: "#scene1",
    duration: 5000,    // the scene should last for a scroll distance of 500px
    offset: 400        // start this scene after scrolling for 200px
  })
    .setPin("#scene1", {pushFollowers: true}) //set header_title as a Pinned Element
    .setTween(headerTimeline) // set the Tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller); // assign the scene to the controller

}

