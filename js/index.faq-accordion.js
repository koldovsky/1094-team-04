const faqButtons = document.querySelectorAll('.faq-button');
const faqAnswers = document.querySelectorAll('.faq-answer');
const faqLineVertical = document.querySelectorAll('.faq-button__vline');

for (let i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener("click", function () {
        for (let j = 0; j < faqButtons.length; j++) {
            if (j !== i) {
                faqLineVertical[j].classList.remove("active");
                faqAnswers[j].classList.remove("active");
            }
        }
        faqLineVertical[i].classList.toggle("active");
        faqAnswers[i].classList.toggle("active");
    });
}