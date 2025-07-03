function registerUser() {
    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    if (!username || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email]) {
        alert("User already exists.");
        return;
    }

    users[email] = { username, email, password };
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now login.");
    window.location.href = "login.html";
}

function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email] && users[email].password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(users[email]));
        alert(`Welcome back, ${users[email].username}!`);
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials.");
    }
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
