const loginPage = document.getElementById("login-page");
const productsPage = document.getElementById("products-page");
const loginBtn = document.getElementById("login-btn");
const errorMsg = document.getElementById("error-msg");

const correctUsername = "aaa";
const correctPassword = "123";

loginBtn.addEventListener("click", () => {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        loginPage.classList.add("hidden");
        productsPage.classList.remove("hidden");
    } else {
        errorMsg.classList.remove("hidden");
        setTimeout(() => errorMsg.classList.add("hidden"), 2000);
    }
});
