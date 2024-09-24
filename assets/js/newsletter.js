const submitButton = $('#newsletter-submit');
const emailInput = $('#newsletter-email');
const newsletterError = $('#newsletter-error');
const newsletterSuccess = $('#newsletter-success');

submitButton.on('click', (e) => {
  e.preventDefault();
  const email = emailInput.val();
  if (email === '' || !window.validateEmail(email)) {
    newsletterError.show();
    newsletterSuccess.hide();
    return;
  }
  newsletterError.hide();
  newsletterSuccess.show();

  $.ajax({
    url: 'https://track.kuzudb.com',
    type: 'POST',
    data: JSON.stringify({
      email,
      origin: 'NEWSLETTER',
    }),
    contentType: 'application/json',
    success: () => {
      console.log('Subscribed to newsletter');
    },
    error: function (error) {
      console.log(error);
    },
  });
});
