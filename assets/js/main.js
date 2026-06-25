const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const yearTarget = document.querySelector("[data-year]");
const contactForm = document.querySelector("[data-contact-form]");
const statusTarget = document.querySelector("[data-form-status]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear().toString();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  siteNav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function getFormValue(formData, key) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (contactForm && statusTarget) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = getFormValue(formData, "name");
    const email = getFormValue(formData, "email");
    const phone = getFormValue(formData, "phone");
    const service = getFormValue(formData, "service");
    const zip = getFormValue(formData, "zip");
    const message = getFormValue(formData, "message");

    if (name.length < 2 || !isValidEmail(email) || !service || !zip || message.length < 15) {
      statusTarget.textContent = "Please complete the required fields before sending.";
      return;
    }

    const businessEmail = "replace-with-business-email@example.com";
    const subject = encodeURIComponent(`Handyman estimate request: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nCity/ZIP: ${zip}\nService: ${service}\n\nProject details:\n${message}`
    );

    statusTarget.textContent = "Opening your email app. Replace the website email address before publishing.";
    window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  });
}
