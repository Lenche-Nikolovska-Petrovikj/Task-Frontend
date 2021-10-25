const sendEmailDefault = () => {
  let email = "mk.contact@valtech.com";
  const subject = "Test Email";
  const msgBody =
    "Thank you for contacting us, we will get back to you in 24 hours!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
};
sendEmailDefault();

const step = (timestamp) => {
  if (!start) start = timestamp;
  const progres = timestamp - start;
  window.scrollTo(0, linear(progres, startPosition, distance, duration));
  if (progres < duration) window.requestAnimationFrame(step);
};

const linear = (t, b, c, d) => {
  return (c * t) / d + b;
};

const navBar = () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector(".navbar ul");

  if (navbarToggler) {
    navbarToggler.addEventListener("click", () => {
      navbarMenu.classList.toggle("nav-open");
    });
  }
};
navBar();
