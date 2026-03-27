const nextBtn = document.getElementById("next-page-btn");
const backBtn = document.getElementById("back-btn");

const mainPage = document.getElementById("main-page");
const secretPage = document.getElementById("secret-page");

nextBtn.addEventListener("click", () => {
    mainPage.classList.add("hidden");
    secretPage.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
    secretPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
});