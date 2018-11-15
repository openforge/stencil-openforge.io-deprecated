import { Component, Prop, State, Listen, Watch } from '@stencil/core';
import { MatchResults } from '@stencil/router';

declare var fbq;

@Component({
  tag: 'app-detailed-service',
  styleUrl: 'app-detailed-service.scss',
})
export class AppDetailedService {
  @Prop() match: MatchResults;
  @Prop({ context: 'isServer' })
  private isServer: boolean;

  @State()
  imgs = {
    'app-developer': {
      first: '/assets/services-development-box.png',
      second: '/assets/services-development-robot.png',
      third: '/assets/services-development-phone.png',
      toolbox: {
        first: '/assets/services-development-toolbox-first.png',
        second: '/assets/services-development-toolbox-second.png',
        third: '/assets/github-logo-white.png',
      },
      examples: {
        first: '/assets/work-example-juntoscope-mobile.png',
        second: '/assets/work-example-cap.png',
      },
    },
    'app-designer': {
      first: '/assets/services-design-bulb.png',
      second: '/assets/services-design-notebook.png',
      third: '/assets/services-design-pencil.png',
      toolbox: {
        first: '/assets/services-design-toolbox-first.png',
        second: '/assets/services-design-toolbox-second.png',
        third: '/assets/services-design-toolbox-third.png',
      },
      examples: {
        first: '/assets/work-example-voyage.png',
        second: '/assets/work-example-loudcloud-mobile.png',
      },
    },
    'startup-consulting': {
      first: '/assets/services-consulting-pc.png',
      second: '/assets/services-consulting-notepad.png',
      third: '/assets/services-consulting-arrow.png',
      toolbox: {
        first: '/assets/services-consulting-toolbox-first.png',
        second: '/assets/services-consulting-toolbox-second.png',
        third: '/assets/services-consulting-toolbox-third.png',
      },
    },
  };

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

  @Watch('match')
  matchHandler() {
    this.changeMetadata();
  }

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }
    this.resetFormValues();

    this.changeMetadata();
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

  scrollToForm() {
    const form = document.getElementById('second-content');

    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  changeMetadata() {
    // Change meta tags dynamically
    if (this.match.params.service === 'app-developer') {
      document
        .querySelector("meta[name='title']")
        .setAttribute('content', 'Mobile App Developer Experts | OpenForge');
      document
        .querySelector("meta[name='description']")
        .setAttribute(
          'content',
          'Trust Our Experts in Mobile Application Development and Design.  We are Philadelphia’s top Mobile Application Development Agency'
        );
      document
        .querySelector("meta[name='keywords']")
        .setAttribute(
          'content',
          'Mobile App Developer, Mobile App Development, Progressive Web App'
        );
    } else if (this.match.params.service === 'app-designer') {
      document
        .querySelector("meta[name='title']")
        .setAttribute('content', 'Mobile App Design Experts | OpenForge');
      document
        .querySelector("meta[name='description']")
        .setAttribute(
          'content',
          'Trust Our Experts in UI/UX and Mobile Application Design and Development.  Our Designers are Philadelphia’s top Mobile App Design Team for Design Consulting'
        );
      document
        .querySelector("meta[name='keywords']")
        .setAttribute(
          'content',
          'UI, UX, Design, Mobile App Design, User Experience Expert'
        );
    } else if (this.match.params.service === 'startup-consulting') {
      document
        .querySelector("meta[name='title']")
        .setAttribute(
          'content',
          'Startup Consulting Services in Philadelphia | OpenForge'
        );
      document
        .querySelector("meta[name='description']")
        .setAttribute(
          'content',
          'OpenForge is Philadelphia’s Top Startup Consulting Firm.  We Specialize in Startup Consulting, Application Development, and LEAN Canvas Methodologies.   Let Us Help You With Marketing and CTO As a Service.'
        );
      document
        .querySelector("meta[name='keywords']")
        .setAttribute(
          'content',
          'Philadelphia, Startup Consulting, App Development, CTO As a Service, Tech Consulting'
        );
    }
  }

  render() {
    return (
      <section class="services">
        {/* header - hero */}
        {this.match.params.service === 'app-developer' ? (
          <header class="hero development">
            <div class="overlay" />
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12 col-md-8 col-lg-8">
                  <h2>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.title`}
                    />
                  </h2>
                  <p>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.text`}
                    />
                  </p>
                  <button
                    onClick={this.scrollToForm.bind(this)}
                    class="btn btn-primary"
                  >
                    <app-translate key="opportunities.hero.text2" />
                  </button>
                </div>
              </div>
            </div>
          </header>
        ) : this.match.params.service === 'app-designer' ? (
          <header class="hero design">
            <div class="overlay" />
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12 col-md-8 col-lg-8">
                  <h2>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.title`}
                    />
                  </h2>
                  <p>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.text`}
                    />
                  </p>
                  <button
                    onClick={this.scrollToForm.bind(this)}
                    class="btn btn-primary"
                  >
                    <app-translate key="opportunities.hero.text2" />
                  </button>
                </div>
              </div>
            </div>
          </header>
        ) : (
          <header class="hero consulting">
            <div class="overlay" />
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12 col-md-8 col-lg-8">
                  <h2>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.title`}
                    />
                  </h2>
                  <p>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.text`}
                    />
                  </p>
                  <button
                    onClick={this.scrollToForm.bind(this)}
                    class="btn btn-primary"
                  >
                    <app-translate key="opportunities.hero.text2" />
                  </button>
                </div>
              </div>
            </div>
          </header>
        )}
        <div id="second-content" class="container">
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src={this.imgs[this.match.params.service].first}
              alt=""
            />
            <div class="text-img-container-text">
              <h2>
                <app-translate
                  key={`services.${this.match.params.service}.first.title`}
                />
              </h2>
              <p>
                <app-translate
                  key={`services.${this.match.params.service}.first.text`}
                />
              </p>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>
                <app-translate
                  key={`services.${this.match.params.service}.second.title`}
                />
              </h2>
              <p>
                <app-translate
                  key={`services.${this.match.params.service}.second.text`}
                />
              </p>
            </div>
            <app-img
              class="img-fluid d-none d-md-inline"
              src={this.imgs[this.match.params.service].second}
              alt=""
            />
          </section>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src={this.imgs[this.match.params.service].third}
              alt=""
            />
            <div class="text-img-container-text">
              <h2>
                <app-translate
                  key={`services.${this.match.params.service}.third.title`}
                />
              </h2>
              <p>
                <app-translate
                  key={`services.${this.match.params.service}.third.text`}
                />
              </p>
            </div>
          </section>
        </div>
        <section>
          <div class="our-toolbox">
            <h2>Our Toolbox</h2>
            <p>let us show you our skills in:</p>
            <div class="container">
              <div class="row">
                <div class="image-column col-sm-12 col-md-4">
                  <stencil-route-link url="/toolbox" exact={true}>
                    <app-img
                      class="img-fluid d-none d-md-inline"
                      src={this.imgs[this.match.params.service].toolbox.first}
                      alt=""
                    />
                  </stencil-route-link>
                </div>
                <div class="image-column col-sm-12 col-md-4">
                  <stencil-route-link url="/toolbox" exact={true}>
                    <app-img
                      class="img-fluid d-none d-md-inline"
                      src={this.imgs[this.match.params.service].toolbox.second}
                      alt=""
                    />
                  </stencil-route-link>
                </div>
                <div class="image-column col-sm-12 col-md-4">
                  <stencil-route-link url="/toolbox" exact={true}>
                    <app-img
                      class="img-fluid d-none d-md-inline"
                      src={this.imgs[this.match.params.service].toolbox.third}
                      alt=""
                    />
                  </stencil-route-link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {this.imgs[this.match.params.service].examples ? (
          <div class="container">
            <section class="work-examples">
              <h2>Work Examples</h2>
              <div class="text-img-container right-side">
                <app-img
                  class=""
                  src={this.imgs[this.match.params.service].examples.first}
                  alt="voyage-app-image"
                />
                <div class="text-img-container-text">
                  <h2>
                    <app-translate
                      key={`services.${
                        this.match.params.service
                      }.examples.first.name`}
                    />
                  </h2>
                  <p>
                    <app-translate
                      key={`services.${
                        this.match.params.service
                      }.examples.first.desc`}
                    />
                  </p>
                  <p class="check-link">
                    <a href="https://try.juntoscope.com" target="_blank">
                      Check it out
                    </a>
                  </p>
                </div>
              </div>
              <div class="text-img-container left-side">
                <div class="text-img-container-text">
                  <h2>
                    <app-translate
                      key={`services.${
                        this.match.params.service
                      }.examples.second.name`}
                    />
                  </h2>
                  <p>
                    <app-translate
                      key={`services.${
                        this.match.params.service
                      }.examples.second.desc`}
                    />
                  </p>
                  <p class="check-link">
                    <a
                      href="https://www.newoceanhealthsolutions.com/product-and-programs/"
                      target="_blank"
                    >
                      Check it out
                    </a>
                  </p>
                </div>
                <app-img
                  class=""
                  src={this.imgs[this.match.params.service].examples.second}
                  alt="voyage-app-image"
                />
              </div>
            </section>
          </div>
        ) : null}
        <app-cta link-url="/contact">
          <span slot="header">
            <app-translate key="services.aside.title" />
          </span>
          <span slot="link">
            <app-translate key="services.aside.link" />
          </span>
        </app-cta>
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
