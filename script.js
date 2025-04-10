Splitting();

const messages = [
  "Hi",
  "Hola",
  "Bonjour",
  "Ciao",
  "Annyeong ",
  "Nǐ hǎo",
  "Namaste",
  "Konnichiwa",
  "Hi",
  "Hola",
  "Bonjour",
  "Ciao",
  "Annyeong ",
  "Nǐ hǎo",
  "Namaste",
  "Konnichiwa",
];
let index = 0;
const preloader = document.querySelector(".preloader");
const preloaderText = document.querySelector(".preloader-text");

function changeText() {
  if (index < messages.length) {
    preloaderText.textContent = messages[index];
    index++;
    setTimeout(changeText, 150);
  } else {
    preloader.classList.add("hide");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }
}
setTimeout(changeText, 300);

function navigation() {
  $("ul.main-menu li").click(function (e) {
    if ($(this).find("ul.submenu").length) {
      if ($(this).find("ul.submenu").is(":visible")) {
        $(this).find("ul.submenu").slideUp("normal");
        $(".media-nav, .contact-nav").stop().animate(
          {
            marginTop: "0px",
            opacity: 1,
          },
          300
        );
      } else {
        if ($(this).siblings("li").find("ul.submenu:visible").length) {
          $("ul.submenu").slideUp("normal");
        }

        $(this).find("ul.submenu").slideToggle("normal");
        $(".media-nav, .contact-nav").stop().animate(
          {
            marginTop: "300px",
            opacity: 0,
          },
          300
        );
      }
    }
  });

  var tl = new TimelineMax({ paused: true });

  tl.to(".menu", 0.3, {
    autoAlpha: 1,
  });

  tl.staggerFrom(
    ".main-menu li a:not(.submenu li a)",
    1,
    {
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut,
    },
    0.1
  );

  tl.from(".submenu", 0.3, {
    autoAlpha: 0,
  });

  tl.staggerFrom(
    ".media-nav ul li",
    1,
    {
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut,
    },
    0.1,
    "-=2"
  );

  tl.from(".call", 1, {
    delay: -2,
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut,
  });

  tl.from(".mail-nav", 1, {
    delay: -1.6,
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut,
  });

  tl.reverse();

  $(document).on("click", ".menu-btn", function () {
    tl.reversed(!tl.reversed());
    tl.timeScale(1);
  });

  $(document).on("click", ".close-menu", function () {
    tl.timeScale(4);
    tl.reversed(!tl.reversed());
  });
}

navigation();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pinText",
  start: "top top",
  endTrigger: ".exportProducts",
  end: "bottom bottom",
  pin: ".stickyText",
  scrub: true,
  markers: true,
});

ScrollTrigger.create({
  trigger: ".secondPin",
  start: "top top",
  endTrigger: ".importProducts",
  end: "bottom bottom",
  pin: ".secondStickyText",
  scrub: true,
});
