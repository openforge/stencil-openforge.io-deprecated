import { Component, State, Listen } from '@stencil/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  @State() isDisabled: boolean = true;
  @State() canRequestInterview: boolean;
  @State() formSubmitting: boolean = false;
  @State() formSubmitted: boolean = false;

  formValues: {
    angular: number;
    node: number;
    ionic: number;
    html: number;
    css: number;
    message: string;
    name: string;
    email: string;
    phone: string;
    github: string;
  };

  formData = new FormData();
  ts: TranslationService;
  radioChoices: any;

  constructor() {
    this.ts = new TranslationService();
  }

  componentDidLoad() {
    this.resetFormValues();
    let element;
    element = document.querySelector('.opportunities .hero');
    element.style.backgroundImage = `url('assets/bg-hero-mountain.jpg')`;
  }

  componentDidUpdate() {
    if (!this.isDisabled) {
      if (document.getElementById('requestInterview')) {
        document.getElementById('requestInterview').focus();
      } else {
        document.getElementById('apply').scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    }
  }

  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value } = event.detail;
    this.formValues[field] = value;

    if (
      this.formValues.angular > 90 &&
      this.formValues.node > 90 &&
      this.formValues.ionic > 90 &&
      this.formValues.html > 90 &&
      this.formValues.css > 90
    ) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  handleSliders(e) {
    e.preventDefault();
    this.canRequestInterview = true;
  }

  handleFile(e) {
    const files = e.target.files;
    this.formData.append('files', files[0]);
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.formValues['message'] = e.target.message.value;

    for (const value in this.formValues) {
      this.formData.append(value, this.formValues[value]);
    }

    try {
      this.formSubmitting = true;
      await fetch(
        'https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeOpportunities',
        {
          method: 'POST',
          mode: 'no-cors',
          body: this.formData,
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

  render() {
    return (
      <div class="opportunities">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <h2>
                  <app-translate key="opportunities.hero.title" />
                </h2>
                <p>
                  <app-translate key="opportunities.hero.text" />
                </p>
                <p>
                  <app-translate key="opportunities.hero.text2" />
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* section - intro */}
        <section id="intro" class="intro">
          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-suck.jpg"
              reverse={true}
            >
              <h3 slot="header">
                <app-translate key="opportunities.intro.title" />
              </h3>
              <p slot="body">
                <app-translate key="opportunities.intro.text" />
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-codemaster.jpg">
              <h3 slot="header">
                <app-translate key="opportunities.intro.codeMaster.title" />
              </h3>
              <p slot="body">
                <app-translate key="opportunities.intro.codeMaster.body" />
              </p>
            </content-graphic-lg>
          </div>

          <div class="challenge">
            <div class="container">
              <div class="intro text-center">
                <h2>
                  <app-translate key="opportunities.challenge.title" />
                </h2>
                <p>
                  <app-translate key="opportunities.challenge.showUs" />
                </p>
              </div>
              <div class="row">
                <div class="image-column col-sm-12 col-md-4">
                  <h3>Angular</h3>
                  <app-img
                    class="img-fluid d-none d-md-inline"
                    src="assets/graphic-opportunities-phone1.png"
                    alt=""
                  />
                </div>
                <div class="image-column col-sm-12 col-md-4">
                  <h3>Redux</h3>
                  <app-img
                    class="img-fluid d-none d-md-inline"
                    src="assets/graphic-opportunities-phone2.png"
                    alt=""
                  />
                </div>
                <div class="image-column col-sm-12 col-md-4">
                  <h3>API Integration</h3>
                  <app-img
                    class="img-fluid d-none d-md-inline"
                    src="assets/graphic-opportunities-phone3.png"
                    alt=""
                  />
                  <app-img
                    class="img-fluid d-xs-inline d-md-none"
                    src="assets/graphic-opportunities-phone4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-ionic.jpg"
              reverse={true}
            >
              <h3 slot="header">
                <app-translate key="opportunities.reputation.title" />
              </h3>
              <p slot="body">
                <app-translate key="opportunities.reputation.text" />
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-sword.png">
              <h3 slot="header">
                <app-translate key="opportunities.prepared.title" />
              </h3>
              <p slot="body">
                <app-translate key="opportunities.prepared.body" />
              </p>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - apply */}
        <section id="apply" class="apply">
          {!this.formSubmitted ? (
            <div class="container">
              {!this.canRequestInterview ? (
                <form class="apply-1" onSubmit={this.handleSliders.bind(this)}>
                  <h2>
                    <app-translate key="opportunities.skills.title" />
                  </h2>
                  <p>
                    <app-translate key="opportunities.skills.text" />
                  </p>

                  <div class="slider-labels">
                    <p>
                      <app-translate key="opportunities.skills.noob" />
                    </p>
                    <p>
                      <app-translate key="opportunities.skills.expert" />
                    </p>
                  </div>

                  <app-slider name="angular" label="Angular" />
                  <app-slider name="node" label="Node" />
                  <app-slider name="ionic" label="Ionic" />
                  <app-slider name="html" label="HTML" />
                  <app-slider name="css" label="CSS" />

                  {!this.isDisabled ? (
                    <p>
                      <app-translate key="opportunities.form.allset" />
                    </p>
                  ) : (
                    <p>
                      <app-translate key="opportunities.form.almost" />
                    </p>
                  )}

                  <button
                    class="btn btn-primary"
                    type="submit"
                    disabled={this.isDisabled}
                    id="requestInterview"
                  >
                    <app-translate key="opportunities.form.request" />
                  </button>
                </form>
              ) : (
                <form
                  class="apply-2"
                  id="myLittleAnchor"
                  onSubmit={this.handleSubmit.bind(this)}
                >
                  <h2>
                    <app-translate key="opportunities.form.midLevelTitle" />
                  </h2>
                  <ul>
                    <li>Philadelphia</li>
                    <li>
                      <app-translate key="opportunities.form.technology" />
                    </li>
                    <li>
                      <app-translate key="opportunities.form.fullTime" />
                    </li>
                  </ul>

                  <h3>
                    <app-translate key="opportunities.form.submitTitle" />
                  </h3>

                  <div class="form-group">
                    <label>
                      <app-translate key="opportunities.form.resume" />
                    </label>
                    <input
                      class="input-file"
                      type="file"
                      name="resume"
                      onInput={this.handleFile.bind(this)}
                      required={true}
                    />
                  </div>

                  <app-input
                    label={this.ts.translate('contact.form.fullName')}
                    name="name"
                    type="text"
                    // placeholder="Full Name"
                    required={true}
                  />
                  <app-input
                    label={this.ts.translate('contact.form.email')}
                    name="email"
                    type="email"
                    // placeholder="Email Address"
                    required={true}
                  />
                  <app-input
                    label={this.ts.translate('contact.form.phone')}
                    name="phone"
                    type="tel"
                    // placeholder="Phone Number"
                    required={true}
                  />
                  <app-input
                    label={this.ts.translate('contact.form.github')}
                    name="github"
                    type="text"
                    // placeholder="GitHub Link"
                    required={true}
                  />

                  <h3>
                    <app-translate key="opportunities.form.unique.title" />
                  </h3>

                  <div class="form-group input-textarea">
                    <label>
                      <app-translate key="opportunities.form.unique.text" />
                    </label>
                    <textarea
                      class="form-control"
                      // placeholder="Hello, I would like..."
                      name="message"
                      required={true}
                    />
                  </div>

                  <button class="btn btn-primary" type="submit">
                    <app-translate key="opportunities.form.submit" />
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div class="container apply-3">
              <h2>
                <app-translate key="opportunities.form.submitted" />
              </h2>

              <content-graphic-lg img-url="assets/graphic-opportunities-robot.png">
                <h3 slot="header">
                  <app-translate key="opportunities.form.thanks.title" />
                </h3>
                <p slot="body">
                  <app-translate key="opportunities.form.thanks.text" />
                </p>
              </content-graphic-lg>
            </div>
          )}
        </section>
      </div>
    );
  }

  private resetFormValues() {
    this.formValues = {
      angular: parseFloat(''),
      node: parseFloat(''),
      ionic: parseFloat(''),
      html: parseFloat(''),
      css: parseFloat(''),
      message: '',
      name: '',
      email: '',
      phone: '',
      github: '',
    };

    this.formData = new FormData();
  }
}
