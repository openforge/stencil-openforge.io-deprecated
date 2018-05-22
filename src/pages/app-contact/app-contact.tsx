import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss',
})
export class AppContact {
  @State() formSubmitted = false;
  @State() formSubmitting = false;

  contactForm;

  // private interface FormErrors {
  //   name: string;
  //   company: string;
  //   email: string;
  //   phone: number;
  //   message: string;
  //   desiredService: string;
  //   budget: string;
  // }

  @State()
  formValues: {
    name: '';
    email: '';
    company: '';
    phone: '';
    message: '';
    desiredService: '';
    budget: '';
    formErrors: {
      name: '';
      company: '';
      email: '';
      phone: '';
      message: '';
      desiredService: '';
      budget: '';
    };
    formValid: false;
  };

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
    console.log('valueChangeHandler');

    const { field, value } = event.detail;
    this.formValues[field] = value;

    this.contactForm = document.getElementById('contact-form');

    if (field === 'name' && !this.contactForm[field].checkValidity()) {
      this.formValues.formErrors.name = this.contactForm[
        field
      ].validationMessage;
    } else {
      this.formValues.formErrors.name = '';
    }
    if (field === 'company' && !this.contactForm[field].checkValidity()) {
      this.formValues.formErrors.company = this.contactForm[
        field
      ].validationMessage;
    } else {
      this.formValues.formErrors.company = '';
    }

    if (field === 'email' && !this.contactForm[field].checkValidity()) {
      this.formValues.formErrors.email = this.contactForm[
        field
      ].validationMessage;
    } else {
      this.formValues.formErrors.email = '';
    }

    if (field === 'phone' && !this.contactForm[field].checkValidity()) {
      this.formValues.formErrors.phone = this.contactForm[
        field
      ].validationMessage;
    } else {
      this.formValues.formErrors.phone = '';
    }

    if (field === 'message' && !this.contactForm[field].checkValidity()) {
      this.formValues.formErrors.message = this.contactForm[
        field
      ].validationMessage;
    } else {
      this.formValues.formErrors.message = '';
    }

    console.log(this.formValues.formErrors);
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
    console.log('render function triggered');
    let nameError;
    if (this.formValues) {
      console.log(this.formValues);
      nameError = this.formValues.formErrors.name ? (
        <div>{this.formValues.formErrors.name}</div>
      ) : null;

      console.log(nameError);
    }

    return (
      <div>
        {/* header - hero */}
        <app-hero
          background-url="assets/bg-hero-handshake-desk.jpg"
          text-no-wrap={true}
        >
          <span slot="header">Let's Work Together</span>
          <span slot="body">Request a Discovery Session Today!</span>
          <span slot="link">Request Now</span>
        </app-hero>

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
                {nameError ? nameError : null}
                <app-input
                  name="company"
                  label="Company"
                  type="text"
                  required={true}
                />
                <app-input
                  name="email"
                  label="E-mail"
                  type="email"
                  id="email"
                  required={true}
                />
                <app-input
                  name="phone"
                  label="Phone"
                  id="phone"
                  type="tel"
                  required={true}
                />
                <app-input
                  name="message"
                  type="text"
                  id="message"
                  label="How did you hear about OpenForge?"
                  required={true}
                />

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
                <button type="submit" class="btn btn-primary">
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
      formErrors: {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        desiredService: '',
        budget: '',
      },
      formValid: false,
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
