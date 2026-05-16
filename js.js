const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const subject = form.querySelectorAll("input[type='text']")[1].value;
    const message = form.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all required fields!");
        return;
    }

    alert("Message sent successfully!");

    form.reset();
});



