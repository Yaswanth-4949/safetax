document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting by default

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Regular expression for password validation (at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if username or password is empty
    if (username === "" || password === "") {
        alert("Please enter both username (email) and password.");
    }
    // Validate the username as an email address
    else if (!emailPattern.test(username)) {
        alert("Please enter a valid email address.");
    } 
    // Validate the password format
    else if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }
    else {
        // If both validations pass, proceed with form submission
        alert("Login successful!");
    }
});
