import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'app-services',
  styleUrl: 'app-services.scss',
})
export class AppServices {
  @State() formSubmitted = false;
  @State() formSubmitting = false;
  @State()
  formValues: {
    name: '';
    email: '';
    message: '';

    nameValid: false;
    emailValid: false;
    messageValid: false;
  };
  @State() nameError: string;
  @State() emailError: string;
  @State() messageError: string;
  @State() isDisabled = true;

  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value, target } = event.detail;

    this.formValues[field] = value;

    this.validateField(target);
  }

  componentDidLoad() {
    this.resetFormValues();
  }

  validateField(e) {
    switch (e.name) {
      case 'name':
        this.formValues.nameValid = e.checkValidity();
        this.nameError = this.formValues.nameValid
          ? ''
          : (this.nameError = e.validationMessage);
        break;

      case 'email':
        this.formValues.emailValid = e.checkValidity();
        this.emailError = this.formValues.emailValid
          ? ''
          : (this.emailError = e.validationMessage);
        break;

      case 'message':
        this.formValues.messageValid = e.checkValidity();
        this.messageError = this.formValues.messageValid
          ? ''
          : (this.messageError = e.validationMessage);
        break;
    }

    this.formValues.nameValid &&
    this.formValues.emailValid &&
    this.formValues.messageValid
      ? (this.isDisabled = false)
      : (this.isDisabled = true);
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      this.formSubmitting = true;
      this.isDisabled = true;

      await fetch(
        'https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeContactUs',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: JSON.stringify(this.formValues),
        }
      );

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

  render() {
    return (
      <section class="services">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <h2>What We Provide</h2>
                <p>
                  At OpenForge we provide a full range of app development
                  services to help your business grow and improve engagement
                  with your customers.
                </p>
              </div>
            </div>
          </div>
        </header>
        <div class="container">
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-development-header.jpg"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>
                <app-translate key={`services.general.development.title`} />
              </h2>
              <p>
                <app-translate key={`services.general.development.text`} />
              </p>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>
                <app-translate key={`services.general.design.title`} />
              </h2>
              <p>
                <app-translate key={`services.general.design.text`} />
              </p>
            </div>
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-design-header.jpg"
              alt=""
            />
          </section>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-consulting-header.jpg"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>
                <app-translate key={`services.general.consulting.title`} />
              </h2>
              <p>
                <app-translate key={`services.general.consulting.text`} />
              </p>
            </div>
          </section>
        </div>
        <section class="contact-us">
          <div class="container">
            <div class="jumbotron">
              <h2>Contact Us</h2>

              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                novalidate={true}
              >
                <app-input
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
                  required={true}
                />

                <app-input
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  required={true}
                />

                <app-textarea
                  name="message"
                  label="Message"
                  rows={5}
                  required={true}
                />
                <button
                  name="submit"
                  type="submit"
                  class="btn btn-primary"
                  disabled={this.isDisabled}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <app-footer />
      </section>
    );
  }

  private resetFormValues() {
    this.formValues = {
      name: '',
      email: '',
      message: '',
      nameValid: false,
      emailValid: false,
      messageValid: false,
    };
  }
}
