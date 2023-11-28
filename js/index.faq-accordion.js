const faqButton = document.querySelector('.faq-button');
const faqAnswer = document.querySelector('.faq-answer')
const faqLineVertical = document.querySelector('.faq-button__vline');
const faqLiveHorizontal = document.querySelector('.faq-button__hline');

faqButton.addEventListener("click", function () {
    faqAnswer.style.display = "block"
    const panel = faqAnswer.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
});