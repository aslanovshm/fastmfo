let faqLink = document.querySelectorAll('.faq__link');
let faqItem = document.querySelectorAll('.faq__item');

for (let i = 0; i < faqItem.length; i++) {
  let link = faqLink[i];
  let item = faqItem[i];
  
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    item.classList.toggle('faq__item--active');
    link.classList.toggle('faq__link--grey');
    if (link.classList.contains('faq__link--grey')) {
      link.textContent = 'свернуть текст';
    } else {
      link.textContent = 'читать далее';
    }
  });
}