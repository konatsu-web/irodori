// ============================
// ハンバーガーメニュー
// ============================
const hamburger = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-nav");
const body = document.body;

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("is-open");
    nav.classList.toggle("is-open");
    body.classList.toggle("is-open");
    document.documentElement.classList.toggle("is-open");

});

/* メニュークリックで閉じる */

const navLinks = document.querySelectorAll(".header__menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        hamburger.classList.remove("is-open");
        nav.classList.remove("is-open");
        body.classList.remove("is-open");
        document.documentElement.classList.remove("is-open");

        setTimeout(() => {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }, 600); // CSSのtransition時間に合わせる
    });
});

// ============================
// TOPに戻るボタン
// ============================
const toTopBtn = document.getElementById("toTop");
if (toTopBtn) {
    window.addEventListener("scroll", () => {
        toTopBtn.classList.toggle("is-show", window.scrollY > 300);
    });
    toTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ============================
// 背景画像だけを切り替えるスライダー
// ============================
const slides = document.querySelectorAll('.fv__slide');

let current = 0;

setInterval(() => {
    slides[current].classList.remove('active');

    current = (current + 1) % slides.length;

    slides[current].classList.add('active');
}, 5000);