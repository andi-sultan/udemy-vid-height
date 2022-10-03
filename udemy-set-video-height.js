(() => {
  // To make sure the script below is executed after the element loaded
  for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
      document
        .querySelectorAll(".curriculum-item-view--scaled-height-limiter--1j3Pp")
        .forEach(function (a) {
          a.setAttribute("style", "max-height:calc(100vh);");
        });
    }, 1000 * i);
  }
})();
