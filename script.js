// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#sj-main'),
//   smooth: true
// });

var i = 0;
setInterval(function () {
  if (i == 100) {
    setTimeout(function () {
      document.querySelector("#cover h1").textContent = i;
    }, 1000);
    gsap.to("#cover", {
      y: "-100%",
      duration: 0.5,
      delay: 1.5,
    });
    return;
  } else document.querySelector("#cover h1").textContent = i;
  i++;
}, 20);

var images = [
  {
    pic: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    pic: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    pic: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
  },
  {
    pic: "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

var j = 0;
setInterval(function () {
  if (j == images.length) j = 0;
  else {
    document.querySelector("#main1").style.background = `url(${images[j].pic})`;
  }
  j++;
}, 5000);

gsap.to("#main6 #band", {
  scrollTrigger: {
    trigger: "#main6",
    start: "top 70%",
    end: "80% 20%",
    scrub: 3,
  },
  x: "-32%",
});

gsap.to("#space", {
  scrollTrigger: {
    trigger: "#space",
    start: "top 80%",
    end: "30% 40%",
    scrub: 3,
  },
  backgroundColor: "rgb(250, 235, 215)",
});

gsap.from("#leftband", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 80%",
    scrub: 3,
  },
  duration: 1,
  x: "-180px",
});
gsap.to("#leftband", {
  scrollTrigger: {
    trigger: "#space",
    start: "top 80%",
    end: "top 20%",
    scrub: 3,
  },
  duration: 1,
  opacity: 0,
});
