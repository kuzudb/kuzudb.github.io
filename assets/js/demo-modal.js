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
    loadDemoInfo();
};

const closeDemoModal = () => {
    $.modal.close();
};

const loadDemoInfo = () => {
    const name = window.localStorage.getItem('demoName');
    const email = window.localStorage.getItem('demoEmail');
    const retrieved = {};
    if (name) {
        retrieved.name = name;
        demoNameInput.val(name);
    }
    if (email) {
        retrieved.email = email;
        demoEmailInput.val(email);
    }
    return retrieved;
};

demoModalOpenButtons.on('click', e => {
    e.preventDefault();
    const retrieved = loadDemoInfo();
    if (retrieved.name && retrieved.email) {
        window.open('//demo.kuzudb.com', '_blank');
        return;
    }
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
        window.localStorage.removeItem('demoName');
    } else {
        window.localStorage.setItem('demoName', name);
    }
    if (email === '' || !window.validateEmail(email)) {
        demoErrorEmail.show();
        valid = false;
        window.localStorage.removeItem('demoEmail');
    } else {
        window.localStorage.setItem('demoEmail', email);
    }
    if (!valid) {
        return;
    }
    $.ajax({
        url: 'https://track.kuzudb.com',
        type: 'POST',
        data: JSON.stringify({
            name,
            email,
            origin: 'TRY_KUZU',
        }),
        contentType: 'application/json',
        success: () => {
            console.log('Demo request sent');
        },
        error: function (error) {
            console.log(error);
        },
    });
    window.open('//demo.kuzudb.com', '_blank');
    closeDemoModal();
});
