const nextBtn = document.getElementById("next-page-btn");
const backBtn = document.getElementById("back-btn");

const mainPage = document.getElementById("main-page");
const secretPage = document.getElementById("secret-page");

const musica = document.getElementById("musica");

nextBtn.addEventListener("click", () => {
    mainPage.classList.add("hidden");
    secretPage.classList.remove("hidden");

    musica.play(); // ▶️ começa a música
});

backBtn.addEventListener("click", () => {
    secretPage.classList.add("hidden");
    mainPage.classList.remove("hidden");

    musica.pause(); // ⏸️ pausa a música (opcional)
    musica.currentTime = 0; // volta pro começo (opcional)
});