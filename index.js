// Typing text
const typed = new Typed("#typing-text", {
  strings: [
    "Web Developer",
    "Front-end Developer",
    "UI Designer",
    "Freelancer",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Form submit
const form = document.querySelector(".cta-form");

const sendMail = function (e) {
  e.preventDefault();

  (function () {
    emailjs.init("i9eK17qrpcEKQS913");
  })();

  function fireSweetAlert() {
    Swal.fire("Thank you!", "Your message sent successfully.", "success");
  }

  const params = {
    name: document.getElementById("full-name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_62lbp66";
  const templateId = "template_q34hawi";

  emailjs
    .send(serviceId, templateId, params)
    .then(() => {
      fireSweetAlert();
      document.getElementById("full-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => console.error(err));
};

form.addEventListener("submit", sendMail);

// Responsive navbar
const toggleMenu = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector(".nav--links");
const contactBtn = document.querySelector(".btn--contact");
const navLink = document.querySelector("nav-link");

toggleMenu.addEventListener("click", function () {
  nav.classList.add("nav--responsive");
  contactBtn.classList.add("nav-link");
  contactBtn.parentElement.classList.remove("btn");
  toggleMenu.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  nav.classList.remove("nav--responsive");
  toggleMenu.style.display = "block";
  closeIcon.style.display = "none";
});
