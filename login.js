document.querySelector("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    // Placeholder validation (extend this as needed)
    if (email && password) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid credentials! Please try again.");
    }
});