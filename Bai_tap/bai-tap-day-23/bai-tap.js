class FormValiDate {
    constructor (form, fields) {
        this.form = form;
        this.fields = fields;
    }
        validate() {
            // validate khi submit
            this.validateOnSubmit();
            // validate khi blur
            this.validateOnBlur();
        }

        validateOnSubmit() {
            this.form.addEventListener("submit", (e) => {
               e.preventDefault();
              this.fields.forEach((field) => {
                const inputEL = this.form.querySelector(`#${field}`);
                this.validateField(inputEL);
              });
            });
        }

        validateOnBlur() {
            this.fields.forEach((field) => {
                const inputEL = this.form.querySelector(`#${field}`);
                inputEL.addEventListener(`input`,() => {
                    this.validateField(inputEL);
                })
            });
            }
        validateField(field) {
            if (!field.value.trim()) {
                this.setStatus(field,`${field.id} cannot be blank`, "error");
            } else {
                this.setStatus(field, null, "succes");
            }

            if  (field.type === "email") {
                if (!field.value.includes("@")) {
                    this.setStatus(field, "Please enter valid email address", "error");
                } else {
                    this.setStatus(field, null, "succes")
                }
            }
            if (field.id === "password_confirmation") {
                const passwordField = this.form.querySelector("#password");
                if (!field.value.trim()) {
                    this.setStatus(field, `${field.id} required`, "error");
                } else if (field.value !== passwordField.value) {
                    this.setStatus(field, "Password does not match", "error");
                } else {
                    this.setStatus(field, null, "succes");
                }
            }
        }

        setStatus(field, message, stastus) {
            message = message?.charAt(0).toUpperCase() + message?.slice(1);
            message = message.replaceAll?.("_", " ");

            const fieldId = field.id;
            const fieldGroupEl = this.form.querySelector(`.js-${fieldId}`);
            //chon vao icon succes
            const iconsuccesEl = fieldGroupEl.querySelector(`.js-icon-succes`);
            //chon vao icon error
            const iconerrorEl = fieldGroupEl.querySelector(`.js-icon-error`);           //chon vao icon error
           //error succes
            const errorMessageEl = fieldGroupEl.querySelector(`.js-error-message`);
            if (stastus === "succes") {
                iconerrorEl.classList.add("hidden");
                field.classList.remove("border-[red]");
                errorMessageEl.innerText = "";
                iconsuccesEl.classList.remove("hidden");
            }

            if (stastus === "error") {
                iconsuccesEl.classList.add("hidden");
                field.classList.add("border-[red]");
                iconerrorEl.classList.remove("hidden");
                errorMessageEl.innerText = message;
            }
        }
}
const formEl = document.querySelector(".js-form");
const fields = ["username", "email", "password", "password_confirmation"];

const validation = new FormValiDate(formEl, fields);
validation.validate(); //tu dong xu ly