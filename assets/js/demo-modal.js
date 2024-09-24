const demoModal = $('#demo-modal');
const demoModalOpenButtons = $('.demo-modal-open');
const demoModalCloseButton = $('.demo-modal-close');
const demoModalSubmitButton = $('#demo-modal-submit');
const demoErrorName = $('#demo-modal-error-name');
const demoErrorEmail = $('#demo-modal-error-email');
const demoNameInput = $('#demo-name');
const demoEmailInput = $('#demo-email');

const resetErrors = () => {
    demoErrorName.hide();
    demoErrorEmail.hide();
};

const resetDemoModal = () => {
    resetErrors();
    demoNameInput.val('');
    demoEmailInput.val('');
    loadInfo();
};

const closeDemoModal = () => {
    $.modal.close();
};

const saveInfo = (name, email) => {
    window.localStorage.setItem('demoName', name);
    window.localStorage.setItem('demoEmail', email);
};

const loadInfo = () => {
    const name = window.localStorage.getItem('demoName');
    const email = window.localStorage.getItem('demoEmail');
    if (name) {
        demoNameInput.val(name);
    }
    if (email) {
        demoEmailInput.val(email);
    }
};

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
    resetErrors();
    const name = demoNameInput.val();
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
