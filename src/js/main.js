/* Setup variables */
var tomato = $("#tomato"),
  bracketRight = $(".bracketRight"),
  bracketLeft = $(".bracketLeft"),
  tomatoLeft = $(".tomatoLeft"),
  tomatoRight = $(".tomatoRight"),
  tomatoLeaves = $(".tomatoLeaves"),
  letters = $("#ihtText path"),
  $btnPlay = $("#btnPlay"),
  $btnSlowMo = $("#btnSlowMo"),
  $btnReverse = $("#btnReverse"),
  tl;

/* Create a timeline */
tl = new TimelineMax();

/* Whole tomato - move left side and leaves together */
tl.set([tomatoLeft], {xPercent: 23.6});
tl.set([tomatoLeaves], {xPercent: 41});
tl.set([tomato], {xPercent: 2, rotation: 13, transformOrigin:"center center"});

/* Clear the stage */
tl.set(tomato, {yPercent: -200});
tl.set(bracketRight, {xPercent: 200});
tl.set(bracketLeft, {xPercent: -200});

/* Animation sequence */
tl.to([bracketRight,bracketLeft], 0.3, {xPercent: 0, ease:Power4.easeOut}, 0.5)
  .to(tomato, 0.5, {yPercent: 0, ease:Bounce.easeOut})
  .to(tomato, 0.2, {rotation: 0, xPercent: -4})
  .to([tomatoLeft, tomatoLeaves], 0.2, {xPercent: 0},"split")
  .to(tomato, 0.2, {rotation: 0, xPercent: 0},"split")
  .to(tomatoRight, 0.2, {xPercent: 2},"split")
  .staggerFrom(letters, 0.01, {autoAlpha: 0}, 0.03)
  .add("end");

$btnPlay.click(
  function(){
    tl.timeScale(1).seek(0);
  }
);

$btnSlowMo.click(
  function(){
    tl.timeScale(0.2).seek(0.5);
  }
);

$btnReverse.click(
  function(){
    tl.timeScale(1).seek("end").reverse();
  }
);
