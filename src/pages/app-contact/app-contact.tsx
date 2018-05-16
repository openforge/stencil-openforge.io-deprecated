import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss',
})
export class AppContact {
  @State() formSubmitted = false;

  @State() formSubmitting = false;

  formValues: {
    name: string;
    email: string;
    company?: string;
    phone: string;
    message: string;
    desiredService: string;
    budget: string;
  };

  componentDidLoad() {
    this.resetFormValues();
  }

  @Listen('check')
  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value } = event.detail;
    this.formValues[field] = value;
  }

  async handleSubmit(e) {
    e.preventDefault();

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

      e.target.reset();
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
      <div>
        {/* header - hero */}
        <app-hero
          link-url="mailto:hello@openforge.io"
          background-url="assets/bg-hero-handshake-desk.jpg"
          text-no-wrap={true}
        >
          <span slot="header">Let's Work Together</span>
          <span slot="body">Request a Discovery Session Today!</span>
          <span slot="link">Request Now</span>
        </app-hero>

        <section id="contact-form">
          <div class="container">
            <div class="jumbotron">
              <h2 class="display-5 font-weight-bold">Get in Touch</h2>
              <p class="lead">
                Tell us a little bit about what you're working on. We'll be in
                touch to tell you about the next steps toward accomplishing your
                goals!
              </p>

              <form onSubmit={this.handleSubmit.bind(this)}>
                <app-input
                  name="name"
                  label="Full Name"
                  type="text"
                  required={true}
                />
                <app-input name="company" label="Company" type="text" />
                <app-input
                  name="email"
                  label="E-mail"
                  type="email"
                  required={true}
                />
                <app-input
                  name="phone"
                  label="Phone"
                  type="tel"
                  required={true}
                />
                <app-input
                  name="message"
                  type="text"
                  label="How did you hear about OpenForge?"
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
                <button
                  type="submit"
                  class="btn btn-primary"
                  disabled={this.formSubmitting}
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
