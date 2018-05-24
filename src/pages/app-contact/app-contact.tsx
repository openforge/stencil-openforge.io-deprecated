import { Component, State, Listen } from '@stencil/core';

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
    company: '';
    phone: '';
    message: '';
    desiredService: '';
    budget: '';

    nameValid: false;
    companyValid: false;
    emailValid: false;
    phoneValid: false;
    messageValid: false;
    serviceValid: false;
    budgetValid: false;
  };

  @State() nameError: string;
  @State() companyError: string;
  @State() emailError: string;
  @State() phoneError: string;
  @State() messageError: string;
  @State() serviceError: string;
  @State() budgetError: string;

  isDisabled: boolean = true;

  componentDidLoad() {
    let hrefArray;
    this.resetFormValues();
    try {
      hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
      hrefArray.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
          });
        });
      });
    } catch (e) {
      console.error('caught error componentDidLoad app-contact', e);
    }
  }

  @Listen('check')
  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value, isValid, validationMessage, checked } = event.detail;

    this.formValues[field] = value;

    switch (field) {
      case 'name':
        this.formValues.nameValid = isValid;
        this.nameError = this.formValues.nameValid
          ? ''
          : (this.nameError = validationMessage);
        break;

      case 'company':
        this.formValues.companyValid = isValid;
        this.companyError = this.formValues.companyValid
          ? ''
          : (this.companyError = validationMessage);
        break;

      case 'email':
        this.formValues.emailValid = isValid;
        this.emailError = this.formValues.emailValid
          ? ''
          : (this.emailError = validationMessage);
        break;

      case 'phone':
        this.formValues.phoneValid = isValid;
        this.phoneError = this.formValues.phoneValid
          ? ''
          : (this.phoneError = validationMessage);
        break;

      case 'message':
        this.formValues.messageValid = isValid;
        this.messageError = this.formValues.messageValid
          ? ''
          : (this.messageError = validationMessage);
        break;

      case 'desiredService':
        this.formValues.serviceValid = checked;
        this.serviceError = this.formValues.serviceValid
          ? ''
          : validationMessage;
        break;

      case 'budget':
        this.formValues.budgetValid = checked;
        this.budgetError = this.formValues.budgetValid
          ? ''
          : (this.budgetError = validationMessage);
        break;
    }

    this.formValues.nameValid &&
    this.formValues.companyValid &&
    this.formValues.emailValid &&
    this.formValues.phoneValid &&
    this.formValues.messageValid &&
    this.formValues.serviceValid &&
    this.formValues.budgetValid
      ? (this.isDisabled = false)
      : (this.isDisabled = true);
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      this.formSubmitting = true;
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

      this.formSubmitting = false;
      this.formSubmitted = true;
    } catch (error) {
      console.log('Error', error);
    }
  }

  renderRadioColumns(name: string, choices: string[]) {
    const columns = [];
    let columnItems = [];

    choices.forEach(choice => {
      const item = (
        <app-radio name={name} value={choice} label={choice} required={true} />
      );

      columnItems.push(item);

      if (columnItems.length >= 4) {
        const column = <div class="col-sm-6">{columnItems}</div>;
        columns.push(column);

        columnItems = [];
      }
    });

    const column = <div class="col-sm-6">{columnItems}</div>;
    columns.push(column);

    return columns;
  }

  render() {
    return (
      <div class="contact">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <h2 class="text-nowrap">Let's Work Together</h2>
                <p>Request a Discovery Session Today!</p>
                <a href="#second-content" class="btn btn-primary">
                  Request Now
                </a>
              </div>
            </div>
          </div>
        </header>

        <section id="second-content" class="contact-form">
          <div class="container">
            <div class="jumbotron">
              <h2 class="display-5 font-weight-bold">Get in Touch</h2>
              <p class="lead">
                Tell us a little bit about what you're working on. We'll be in
                touch to tell you about the next steps toward accomplishing your
                goals!
              </p>

              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                novalidate={true}
              >
                <app-input
                  name="name"
                  label="Full Name"
                  type="text"
                  id="name"
                  maxlength="75"
                  required={true}
                />
                <div class="text-center">{this.nameError}</div>

                <app-input
                  name="company"
                  label="Company"
                  type="text"
                  required={true}
                />
                <div class="text-center">{this.companyError}</div>

                <app-input
                  name="email"
                  label="E-mail"
                  type="email"
                  id="email"
                  required={true}
                />
                <div class="text-center">{this.emailError}</div>

                <app-input
                  name="phone"
                  label="Phone"
                  id="phone"
                  type="tel"
                  required={true}
                />
                <div class="text-center">{this.phoneError}</div>

                <app-input
                  name="message"
                  type="text"
                  id="message"
                  label="How did you hear about OpenForge?"
                  required={true}
                />
                <div class="text-center">{this.messageError}</div>

                <fieldset>
                  <legend class="lead">How can we help you?</legend>
                  <div class="row ml-2">
                    {this.renderRadioColumns(
                      'desiredService',
                      radioChoices.desiredService
                    )}
                  </div>
                </fieldset>

                <fieldset>
                  <legend class="lead">Do you have a budget?</legend>
                  <div class="row ml-2">
                    {this.renderRadioColumns('budget', radioChoices.budget)}
                  </div>
                </fieldset>
                <button
                  type="submit"
                  class="btn btn-primary"
                  disabled={this.isDisabled}
                >
                  Send
                </button>
              </form>
            </div>

            {!this.formSubmitted ? null : (
              <div class="alert alert-success" role="alert">
                Thank you for reaching out! we'll get back to you within 24
                hours!
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  private resetFormValues() {
    this.formValues = {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      desiredService: '',
      budget: '',
      nameValid: false,
      companyValid: false,
      emailValid: false,
      phoneValid: false,
      messageValid: false,
      serviceValid: false,
      budgetValid: false,
    };
  }
}

const radioChoices = {
  desiredService: [
    'App Development',
    'Web Development',
    'UI/UX Design',
    'Graphic Design',
    'Consulting',
    'CTO as a service',
    'Unsure',
  ],
  budget: [
    '5K-10K',
    '10K-25K',
    '25K-50K',
    '50K-75K',
    '75K-100K',
    '100K-200K',
    '200K',
    'Unsure',
  ],
};
