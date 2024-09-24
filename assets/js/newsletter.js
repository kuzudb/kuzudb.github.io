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
    // TODO: Send email to server
    newsletterError.hide();
    newsletterSuccess.show();
}
);
