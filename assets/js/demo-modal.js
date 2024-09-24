const demoModal = $('#demo-modal');
const demoModalOpenButtons = $('.demo-modal-open');
const demoModalCloseButton = $('.demo-modal-close');
const demoModalSubmitButton = $('#demo-modal-submit');
const demoErrorName = $('#demo-modal-error-name');
const demoErrorEmail = $('#demo-modal-error-email');
const demoFirstNameInput = $('#demo-first-name');
const demoEmailInput = $('#demo-email');

const resetDemoModal = () => {
    demoErrorName.hide();
    demoErrorEmail.hide();
    demoFirstNameInput.val('');
    demoEmailInput.val('');
    loadInfo();
};

const closeDemoModal = () => {
    $.modal.close();
}

const saveInfo = (firstName, email) => {
    window.localStorage.setItem('demoFirstName', firstName);
    window.localStorage.setItem('demoEmail', email);
}

const loadInfo = () => {
    const firstName = window.localStorage.getItem('demoFirstName');
    const email = window.localStorage.getItem('demoEmail');
    if (firstName) {
        demoFirstNameInput.val(firstName);
    }
    if (email) {
        demoEmailInput.val(email);
    }
}

demoModalOpenButtons.on('click', e => {
    e.preventDefault();
    resetDemoModal();
    demoModal.modal();
});

demoModalCloseButton.on('click', e => {
    e.preventDefault();
    closeDemoModal();
});

demoModalSubmitButton.on('click', e => {
    e.preventDefault();
    const name = demoFirstNameInput.val();
    const email = demoEmailInput.val();
    let valid = true;
    if (name === '') {
        demoErrorName.show();
        valid = false;
    }
    if (email === '' || !window.validateEmail(email)) {
        demoErrorEmail.show();
        valid = false;
    }
    if (!valid) {
        return;
    }
    window.open('//demo.kuzudb.com', '_blank');
    saveInfo(name, email);
    closeDemoModal();
    // TODO: Send email to server
});
