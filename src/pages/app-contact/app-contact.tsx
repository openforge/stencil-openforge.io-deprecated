import { Component, State, Listen, Prop, h, Build } from '@stencil/core';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss',
})
export class AppContact {
  @State() formSubmitted = false;
  @State() formSubmitting = false;

  @State()
  formValues: {
    name: '';
    email: '';
    phone: '';
    message: '';

    nameValid: false;
    emailValid: false;
    phoneValid: false;
    messageValid: false;
  };

  @State() nameError: string;
  @State() emailError: string;
  @State() phoneError: string;
  @State() messageError: string;

  @State() isDisabled = true;

  @Prop()
  errorIconStyles = {
    display: 'inline',
    marginBottom: '.2rem',
    paddingRight: '5px',
  };

  radioChoices: any;

  constructor() {}

  @Listen('check')
  @Listen('valueChanged')
  valueChangedHandler(event) {
    const { field, value, target } = event.detail;

    this.formValues[field] = value;

    this.validateField(target);
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      this.resetFormValues();
      window.scrollTo(0, 0);
    }
  }

  validateField(e) {
    switch (e.name) {
      case 'name':
        this.formValues.nameValid = e.checkValidity();
        this.nameError = this.formValues.nameValid ? '' : (this.nameError = e.validationMessage);
        break;

      case 'email':
        this.formValues.emailValid = e.checkValidity();
        this.emailError = this.formValues.emailValid ? '' : (this.emailError = e.validationMessage);
        break;

      case 'phone':
        this.formValues.phoneValid = e.value.match(/^[\+]?[(]?\d{1,3}[)]?([-\s\.]?\d{3}){1,2}[-\s\.]?\d{4,6}$/);
        this.phoneError = this.formValues.phoneValid ? '' : (this.phoneError = e.validationMessage || 'Phone number invalid. Please try a valid format.');
        break;

      case 'message':
        this.formValues.messageValid = e.checkValidity();
        this.messageError = this.formValues.messageValid ? '' : (this.messageError = e.validationMessage);
        break;
    }

    this.formValues.nameValid && this.formValues.emailValid && this.formValues.messageValid ? (this.isDisabled = false) : (this.isDisabled = true);
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      this.formSubmitting = true;
      this.isDisabled = true;

      await fetch('https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeContactUs', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: JSON.stringify(this.formValues),
      });

      event.target.reset();
      this.resetFormValues();

      this.isDisabled = false;
      this.formSubmitting = false;
      this.formSubmitted = true;

      const form = document.getElementById('second-content');
      form.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } catch (error) {
      console.log('Error', error);
    }
  }

  scrollToForm() {
    const form = document.getElementById('second-content');

    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="contact">
        <section id="second-content" class="contact-form">
          <div class="container">
            {!this.formSubmitted ? (
              <div class="row align-items-center">
                <div class="col-lg-6 col-sm-12 col-md-12">
                  <div class="letter-form">
                    <h2 class="display-5 font-weight-bold">
                      <app-translate keyword="contact.form.title" />
                    </h2>
                    <p class="lead">
                      <app-translate keyword="contact.form.text" />
                    </p>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} novalidate={true}>
                      <app-input name="name" label={translate('contact.form.fullName')} type="text" id="name" placeholder={translate('contact.form.placeholder.name')} required={true} />
                      <p class="error">
                        <span style={!this.nameError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.nameError}
                      </p>

                      <app-input name="email" label={translate('contact.form.email')} type="email" id="email" placeholder={translate('contact.form.placeholder.email')} required={true} />
                      <p class="error">
                        <span style={!this.emailError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.emailError}
                      </p>

                      <app-input name="phone" label={translate('contact.form.phone')} id="phone" type="tel" placeholder={translate('contact.form.placeholder.phone')} required={false} />
                      <p class="error">
                        <span style={!this.phoneError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.phoneError}
                      </p>

                      <app-input name="message" label={translate('contact.form.whatAreYouWorkingOn')} type="text" placeholder={translate('contact.form.placeholder.message')} required={true} />
                      <p class="error">
                        <span style={!this.messageError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.messageError}
                      </p>

                      <button name="submit" type="submit" class="btn btn-primary btn-submit" disabled={this.isDisabled}>
                        <app-translate keyword="contact.form.button.send" />
                      </button>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 d-none d-lg-flex form-image-content">
                  <app-img src="/assets/contact/mailbox-graphic.png" alt="Mail Box graphic" />
                </div>
              </div>
            ) : null}

            {this.formSubmitted ? (
              <div class="container submit-container">
                <app-img src="/assets/svg/contact-anim.svg" alt="Map page graphic" />
              </div>
            ) : null}
          </div>
        </section>
        <app-footer />
      </div>
    );
  }

  private resetFormValues() {
    this.formValues = {
      name: '',
      email: '',
      phone: '',
      message: '',
      nameValid: false,
      emailValid: false,
      phoneValid: false,
      messageValid: false,
    };
  }
}
