const submitButton = $('#newsletter-submit');
const newsletterModal = $('#newsletter-modal');

submitButton.on('click', (e) => {
  console.log('newsletter submit button clicked');
  e.preventDefault();
  newsletterModal.modal();
});
