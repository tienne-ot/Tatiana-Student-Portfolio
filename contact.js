// Get the form elements
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get the user's information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (name === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Check phone number
    const phonePattern = /^[0-9]+$/;

    if (!phonePattern.test(phone)) {
        formMessage.textContent = "Phone number must contain digits only.";
        return;
    }

    // Display success message
    formMessage.textContent = "Your message has been submitted successfully!";

    contactForm.reset();
});