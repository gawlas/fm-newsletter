function registerSubscribeButton() {
    const button = document.querySelector(".js-subscribe-button");
    button.addEventListener("click", onSubscribeClick);
}

function onSubscribeClick() {
    const result = validateSubscribeForm();

    if (result) {
        const email = document.querySelector(".js-email").value;
        document.querySelector(".js-form").reset();
        document.querySelector(".js-success-email").innerText = email;
        document.querySelector(".js-newsletter-main").classList.add("hidden");
        document.querySelector(".newsletter__success-popup").classList.remove("hidden");
    }
}

function validateSubscribeForm() {
    let valid = true;

    const email = document.querySelector(".js-email");

    if (email.value.indexOf('@') === -1) {
        valid = false;
        document.querySelector(".js-invalid-email").classList.remove("hidden");
        document.querySelector(".js-email").classList.add("newsletter__form-input--invalid");
    } else {
        document.querySelector(".js-invalid-email").classList.add("hidden");
        document.querySelector(".js-email").classList.remove("newsletter__form-input--invalid");
    }

    return valid;
}

function registerDismissButton() {
    const button = document.querySelector(".js-dismiss-button");
    button.addEventListener("click", onDismissClick);
}

function onDismissClick() {
    document.querySelector(".js-newsletter-main").classList.remove("hidden");
    document.querySelector(".js-newsletter-success-popup").classList.add("hidden");
}

registerSubscribeButton();
registerDismissButton();