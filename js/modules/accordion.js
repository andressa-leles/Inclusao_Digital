export default function initAccordion() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            
             document.querySelectorAll('.accordion-item').forEach(el => {
             if(el !== item) el.classList.remove('active');
             });

            item.classList.toggle('active');
        });
    });
}