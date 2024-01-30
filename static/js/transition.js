

// function pageTransition() {

//   var tl = gsap.timeline();

//   tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
//   tl.to('ul.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
// }

function swipe() {
  let sideLay = gsap.timeline()
.to(".swipe", {width:"100%", duration:.5, ease:"power4.out"})
.to(".swipe", {width:"0%", duration: 1.5, ease:"power4.out"})
}

function contentAnimation() {

  var tl = gsap.timeline();
  tl.from('.wrapper', {duration: 1, translate: 50, opacity: 0})
  // tl.to('.wrapper', { clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}, "-=1.1" )

}




  function delay(n) {
      n = n || 2000;
      return new Promise(done => {
          setTimeout(() => {
              done();
          }, n);
      });
  }


barba.init({
  
  sync: true,

  transitions: [{

      enter(data) {

          // const done = this.async();          
          delay(1500);
          swipe();
          // done();
      },

      // async enter(data) {
      //     // swipe();
      // },

      once(data) {
          contentAnimation();
      }

  }]  
})