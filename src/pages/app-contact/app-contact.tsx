import { Component, State, Listen, Prop } from '@stencil/core';
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

  @State() isDisabled = true;

  @Prop()
  errorIconStyles = {
    display: 'inline',
    marginBottom: '.2rem',
    paddingRight: '5px',
  };

  radioChoices: any;

  constructor() {
    this.radioChoices = {
      desiredService: [
        translate('contact.form.appDevelopment'),
        translate('contact.form.webDevelopment'),
        translate('contact.form.uiDesign'),
        translate('contact.form.graphicDesign'),
        translate('contact.form.consulting'),
        translate('contact.form.ctoAsService'),
        translate('contact.form.unsure'),
      ],
      budget: [
        translate('contact.form.unsure'),
        translate('contact.form.budgetThreshold.one'),
        translate('contact.form.budgetThreshold.two'),
        translate('contact.form.budgetThreshold.three'),
        translate('contact.form.budgetThreshold.four'),
        translate('contact.form.budgetThreshold.five'),
        translate('contact.form.budgetThreshold.six'),
        translate('contact.form.budgetThreshold.seven'),
        translate('contact.form.budgetThreshold.unsure'),
      ],
    };
  }

  componentDidLoad() {
    this.resetFormValues();
    let element;
    element = document.querySelector('.contact .hero');
    element.style.backgroundImage = `url('assets/bg-hero-handshake-desk.jpg')`;
  }

  @Listen('check')
  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value, target } = event.detail;

    this.formValues[field] = value;

    this.validateField(target);
  }

  validateField(e) {
    console.log('validating e? ', e);
    switch (e.name) {
      case 'name':
        this.formValues.nameValid = e.checkValidity();
        this.nameError = this.formValues.nameValid
          ? ''
          : (this.nameError = e.validationMessage);
        break;

      case 'company':
        this.formValues.companyValid = e.checkValidity();
        this.companyError = this.formValues.companyValid
          ? ''
          : (this.companyError = e.validationMessage);
        break;

      case 'email':
        this.formValues.emailValid = e.checkValidity();
        this.emailError = this.formValues.emailValid
          ? ''
          : (this.emailError = e.validationMessage);
        break;

      case 'phone':
        this.formValues.phoneValid = e.checkValidity();
        this.phoneError = this.formValues.phoneValid
          ? ''
          : (this.phoneError = e.validationMessage);
        break;

      case 'message':
        this.formValues.messageValid = e.checkValidity();
        this.messageError = this.formValues.messageValid
          ? ''
          : (this.messageError = e.validationMessage);
        break;

      case 'desiredService':
        this.formValues.serviceValid = e.checked;
        this.serviceError = this.formValues.serviceValid
          ? ''
          : e.validationMessage;
        break;

      case 'budget':
        this.formValues.budgetValid = e.checked;
        this.budgetError = this.formValues.budgetValid
          ? ''
          : (this.budgetError = e.validationMessage);
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

      const form = document.getElementById('second-content');
      form.scrollIntoView({ block: 'start', behavior: 'smooth' });
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

  scrollToForm() {
    const form = document.getElementById('second-content');

    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="contact">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <h2>
                  <app-translate key="contact.hero.title" />
                </h2>
                <p>
                  <app-translate key="contact.hero.request" />
                </p>
                <button
                  onClick={this.scrollToForm.bind(this)}
                  class="btn btn-primary"
                >
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
                <form
                  id="contact-form"
                  onSubmit={this.handleSubmit.bind(this)}
                  novalidate={true}
                >
                  <app-input
                    name="name"
                    label={translate('contact.form.fullName')}
                    type="text"
                    id="name"
                    required={true}
                  />
                  <p class="error">
                    <span
                      style={
                        !this.nameError
                          ? { display: 'none' }
                          : this.errorIconStyles
                      }
                    >
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.nameError}
                  </p>

                  <app-input
                    name="company"
                    label={translate('contact.form.company')}
                    type="text"
                    required={true}
                  />
                  <p class="error">
                    <span
                      style={
                        !this.companyError
                          ? { display: 'none' }
                          : this.errorIconStyles
                      }
                    >
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.companyError}
                  </p>

                  <app-input
                    name="email"
                    label={translate('contact.form.email')}
                    type="email"
                    id="email"
                    required={true}
                  />
                  <p class="error">
                    <span
                      style={
                        !this.emailError
                          ? { display: 'none' }
                          : this.errorIconStyles
                      }
                    >
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.emailError}
                  </p>

                  <app-input
                    name="phone"
                    label={translate('contact.form.phone')}
                    id="phone"
                    type="number"
                    required={true}
                  />
                  <p class="error">
                    <span
                      style={
                        !this.phoneError
                          ? { display: 'none' }
                          : this.errorIconStyles
                      }
                    >
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.phoneError}
                  </p>

                  <app-input
                    name="message"
                    label={translate('contact.form.whereDidYouHear')}
                    type="text"
                    required={true}
                  />
                  <p class="error">
                    <span
                      style={
                        !this.messageError
                          ? { display: 'none' }
                          : this.errorIconStyles
                      }
                    >
                      <i class="fa fa-exclamation-circle" aria-hidden="true" />
                    </span>
                    {this.messageError}
                  </p>

                  <fieldset>
                    <legend class="lead">
                      <app-translate key="contact.form.legend.help" />
                    </legend>
                    <div class="row ml-2">
                      {this.renderRadioColumns(
                        'desiredService',
                        this.radioChoices.desiredService
                      )}
                    </div>
                  </fieldset>

                  <p class="font-weight-bold">{this.serviceError}</p>

                  <fieldset>
                    <legend class="lead">
                      <app-translate key="contact.form.legend.budget" />
                    </legend>
                    <div class="row ml-2">
                      {this.renderRadioColumns(
                        'budget',
                        this.radioChoices.budget
                      )}
                    </div>
                  </fieldset>

                  <button
                    name="submit"
                    type="submit"
                    class="btn btn-primary"
                    disabled={this.isDisabled}
                  >
                    <app-translate key="contact.form.button.send" />
                  </button>
                </form>
              </div>
            ) : null}

            {this.formSubmitted ? (
              <div class="container">
                <content-graphic-lg img-url="assets/rocket.png">
                  <h3 slot="header">
                    <app-translate key="contact.form.thanx" />
                  </h3>
                  <p slot="body">
                    <app-translate key="contact.form.thanxText" />
                  </p>
                </content-graphic-lg>
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
