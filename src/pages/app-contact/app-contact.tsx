import { Component, State, Listen } from '@stencil/core';
import { TranslationService } from '../../services/translation.service';

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

  ts: TranslationService;
  radioChoices: any;

  constructor() {
    this.ts = new TranslationService();
    this.radioChoices = {
      desiredService: [
        this.ts.translate('contact.form.appDevelopment'),
        this.ts.translate('contact.form.webDevelopment'),
        this.ts.translate('contact.form.uiDesign'),
        this.ts.translate('contact.form.graphicDesign'),
        this.ts.translate('contact.form.consulting'),
        this.ts.translate('contact.form.ctoAsService'),
        this.ts.translate('contact.form.unsure'),
      ],
      budget: [
        '5K-10K',
        '10K-25K',
        '25K-50K',
        '50K-75K',
        '75K-100K',
        '100K-200K',
        '200K',
        this.ts.translate('contact.form.unsure'),
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
                <h2 class="text-nowrap">
                  <app-translate key="contact.hero.title" />
                </h2>
                <p>
                  <app-translate key="contact.hero.request" />
                </p>
                <a
                  onClick={this.scrollToForm.bind(this)}
                  class="btn btn-primary"
                >
                  <app-translate key="contact.hero.requestNow" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <section id="second-content" class="contact-form">
          <div class="container">
            <div class="jumbotron">
              <h2 class="display-5 font-weight-bold">
                <app-translate key="contact.form.title" />
              </h2>
              <p class="lead">
                <app-translate key="contact.form.text" />
              </p>

              <form onSubmit={this.handleSubmit.bind(this)}>
                <app-input
                  name="name"
                  label={this.ts.translate('contact.form.fullName')}
                  type="text"
                  required={true}
                />
                <app-input
                  name="company"
                  label={this.ts.translate('contact.form.company')}
                  type="text"
                  required={true}
                />
                <app-input
                  name="email"
                  label={this.ts.translate('contact.form.email')}
                  type="email"
                  required={true}
                />
                <app-input
                  name="phone"
                  label={this.ts.translate('contact.form.phone')}
                  type="tel"
                  required={true}
                />
                <app-input
                  name="message"
                  label={this.ts.translate('contact.form.whereDidYouHear')}
                  type="text"
                  required={true}
                />

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
                  disabled={this.formSubmitting}
                >
                  <app-translate key="contact.form.button.send" />
                </button>
              </form>
            </div>

            {!this.formSubmitted ? null : (
              <div class="alert alert-success" role="alert">
                <app-translate key="contact.form.alert.text" />
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
