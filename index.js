function removeRequiredFields(formId) {
    let form = document.querySelector(`#${formId}`);
    form.querySelectorAll("input").forEach((input) => {
        if (input.required) input.removeAttribute("required");
    });
}

removeRequiredFields("booking-form");
