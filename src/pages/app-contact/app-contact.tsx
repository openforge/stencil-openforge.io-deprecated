import { Component, State, Listen, Prop, h } from '@stencil/core';
import { translate } from '../../services/translation.service';

declare var fbq;

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

  @Prop({ context: 'isServer' })
  private isServer: boolean;
  @Prop()
  errorIconStyles = {
    display: 'inline',
    marginBottom: '.2rem',
    paddingRight: '5px',
  };

  radioChoices: any;

  constructor() {}

  @Listen('check')
  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value, target } = event.detail;

    this.formValues[field] = value;

    this.validateField(target);
  }

  private className;
  componentWillLoad() {
    this.className = !this.isServer ? (localStorage.getItem('allowWebp') === 'false' ? 'webp' : 'hero') : 'webp';
  }

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
      fbq('track', 'Lead');
    }
    this.resetFormValues();
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

    this.formValues.nameValid && this.formValues.emailValid && this.formValues.phoneValid && this.formValues.messageValid ? (this.isDisabled = false) : (this.isDisabled = true);
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

      // isServer is false when running in the browser
      // and true when being prerendered
      if (!this.isServer) {
        fbq('track', 'CompleteRegistration');
      }

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
        {/* header - hero */}
        <header class={this.className}>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <h2>
                  <app-translate key="contact.hero.title" />
                </h2>
                <p>
                  <app-translate key="contact.hero.request" />
                </p>
                <button onClick={this.scrollToForm.bind(this)} class="btn btn-primary">
                  <app-translate key="contact.hero.requestNow" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <section id="second-content" class="contact-form">
          <div class="container">
            {!this.formSubmitted ? (
              <div class="jumbotron">
                <h2 class="display-5 font-weight-bold">
                  <app-translate key="contact.form.title" />
                </h2>
                <p class="lead">
                  <app-translate key="contact.form.text" />
                </p>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} novalidate={true}>
                  <app-input name="name" label={translate('contact.form.fullName')} type="text" id="name" placeholder="" required={true} />
                  <p class="error">
                    <span style={!this.nameError ? { display: 'none' } : this.errorIconStyles}>
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.nameError}
                  </p>

                  <app-input name="email" label={translate('contact.form.email')} type="email" id="email" placeholder="" required={true} />
                  <p class="error">
                    <span style={!this.emailError ? { display: 'none' } : this.errorIconStyles}>
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.emailError}
                  </p>

                  <app-input name="phone" label={translate('contact.form.phone')} id="phone" type="tel" placeholder="" required={true} />
                  <p class="error">
                    <span style={!this.phoneError ? { display: 'none' } : this.errorIconStyles}>
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.phoneError}
                  </p>

                  <app-input name="message" label={translate('contact.form.whereDidYouHear')} type="text" placeholder="" required={true} />
                  <p class="error">
                    <span style={!this.messageError ? { display: 'none' } : this.errorIconStyles}>
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.messageError}
                  </p>

                  <button name="submit" type="submit" class="btn btn-primary" disabled={this.isDisabled}>
                    <app-translate key="contact.form.button.send" />
                  </button>
                </form>
              </div>
            ) : null}

            {this.formSubmitted ? (
              <div class="container">
                <content-graphic img-url="/assets/rocket.png">
                  <h3 slot="header">
                    <app-translate key="contact.form.thanx" />
                  </h3>
                  <p slot="body">
                    <app-translate key="contact.form.thanxText" />
                  </p>
                </content-graphic>
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
