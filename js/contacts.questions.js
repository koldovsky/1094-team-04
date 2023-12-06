const accordionHeaders = document.querySelectorAll('.questions .accordion-header');


accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.questions .accordion-content');

        accordionContent.classList.toggle('active');

        header.classList.toggle('active');

        const allAccordionItems = document.querySelectorAll('.questions .accordion-item');
        allAccordionItems.forEach(item => {
            if (item !== accordionItem) {
                item.querySelector('.questions .accordion-content').classList.remove('active');
                item.querySelector('.questions .accordion-header').classList.remove('active');
            }
        });
    });
});