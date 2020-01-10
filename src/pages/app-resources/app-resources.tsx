import { Component, State, Prop, Listen, h } from '@stencil/core';
import { translate } from '../../services/translation.service';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-resources',
  styleUrl: 'app-resources.scss',
})
export class AppResources {
  // private className = localStorage.getItem('allowWebp') === 'true' ? 'webp' : 'hero';

  @State() formSubmitted = false;
  @State() formSubmitting = false;

  @State()
  formValues: {
    name: '';
    email: '';
    industry: '';
    organization: '';

    nameValid: false;
    industryValid: false;
    emailValid: false;
    organizationValid: false;
  };

  @State() nameError: string;
  @State() industryError: string;
  @State() emailError: string;
  @State() organizationError: string;

  @State() isDisabled = true;

  @Prop()
  errorIconStyles = {
    display: 'inline',
    marginBottom: '.2rem',
    paddingRight: '5px',
  };
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @Listen('check')
  @Listen('valueChanged')
  valueChangedHandler(event) {
    const { field, value, target } = event.detail;

    this.formValues[field] = value;

    this.validateField(target);
  }

  componentWillLoad() {
    if (this.match.params.source !== 'pwa-white-paper') {
      this.history.push(`/`, {});
    }
  }

  componentDidLoad() {
    this.resetFormValues();

    // Change meta tags dynamically
    document.querySelector("meta[property='og:title']").setAttribute('content', 'Business Owner’s Guide to PWAs | OpenForge');
    document
      .querySelector("meta[property='og:description']")
      .setAttribute('content', 'Skip the technical jargon! This is a report written for business owners on what PWAs (Progressive Web Apps) are and how they can benefit your company.');
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/resources/pwa-white-paper/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/resources-header.jpg');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Progressive Web App, PWA, White Paper');
  }
  validateField(e) {
    switch (e.name) {
      case 'name':
        this.formValues.nameValid = e.checkValidity();
        this.nameError = this.formValues.nameValid ? '' : (this.nameError = e.validationMessage);
        break;

      case 'industry':
        this.formValues.industryValid = e.checkValidity();
        this.industryError = this.formValues.industryValid ? '' : (this.industryError = e.validationMessage);
        break;

      case 'email':
        this.formValues.emailValid = e.checkValidity();
        this.emailError = this.formValues.emailValid ? '' : (this.emailError = e.validationMessage);
        break;

      case 'organization':
        this.formValues.organizationValid = e.checkValidity();
        this.organizationError = this.formValues.organizationValid ? '' : (this.organizationError = e.validationMessage);
        break;
    }

    this.formValues.nameValid && this.formValues.industryValid && this.formValues.emailValid && this.formValues.organizationValid ? (this.isDisabled = false) : (this.isDisabled = true);
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

      const form = document.getElementById('top');
      form.scrollIntoView({ block: 'start', behavior: 'smooth' });

      //Ensure this downloads on firefox
      if (navigator.userAgent.indexOf('Firefox') > 0) {
        window.location.href = '/assets/PWA%20White%20Paper.pdf';
      }
      // Create an anchor element with the attribute download for the pdf
      const downloadLink: HTMLAnchorElement = document.createElement('a');
      downloadLink.href = '/assets/PWA%20White%20Paper.pdf';
      downloadLink.download = 'PWA White Paper.pdf';
      downloadLink.click();
    } catch (error) {
      console.log('Error', error);
    }
  }

  scrollToForm() {
    const form = document.getElementById('form-section');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div id="top" class="resources">
        {/* header - hero */}
        {!this.formSubmitted ? (
          <header class="hero">
            <div class="overlay">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-sm-12 col-md-8 col-lg-8">
                    <h2>
                      <app-translate keyword="resources.hero.title" />
                    </h2>
                    <p>
                      <app-translate keyword="resources.hero.text" />
                    </p>
                    <button onClick={this.scrollToForm.bind(this)} class="btn btn-primary">
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        ) : null}

        {this.formSubmitted ? (
          <header class="hero changed-bkg">
            <div class="overlay">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-sm-12 col-md-8 col-lg-8">
                    <h2>
                      <app-translate keyword="resources.hero.title1" />
                    </h2>
                    <p>
                      <app-translate keyword="resources.hero.text1" />
                    </p>
                    <stencil-route-link url="/services/app-developer">
                      <button class="btn btn-primary">Check it out</button>
                    </stencil-route-link>
                  </div>
                </div>
              </div>
            </div>
          </header>
        ) : null}

        {this.nameError || this.emailError || this.industryError || this.organizationError ? (
          <div class="container-error">
            <section id="error-section" class="error-robot">
              <div class="row align-items-center">
                <div class="col-sm-12 col-md-12 col-lg-12 center">
                  <p class="error-text">
                    {this.nameError ? (
                      <b>{translate('resources.form.error.fullName')} </b>
                    ) : this.emailError ? (
                      <b>{translate('resources.form.error.email')} </b>
                    ) : this.industryError ? (
                      <b>{translate('resources.form.error.industry')} </b>
                    ) : this.organizationError ? (
                      <b>{translate('resources.form.error.organization')} </b>
                    ) : null}
                    {translate('resources.form.error.endText')}
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : null}

        {/* section - form */}
        {!this.formSubmitted ? (
          <section id="form-section" class="pwa-form">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="colunm">
                  <app-img class="img-fluid d-none d-md-inline" src="/assets/pwa-white-paper-front-page.jpg" alt="PWA White Paper front page image" />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="container">
                  <div class="">
                    <form id="pwa-form" onSubmit={this.handleSubmit.bind(this)} novalidate={true}>
                      <app-input name="name" label={translate('resources.form.fullName')} type="text" id="name" required={true} />
                      <p class="error">
                        <span style={!this.nameError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.nameError}
                      </p>

                      <app-input name="email" label={translate('resources.form.email')} type="email" id="email" required={true} />
                      <p class="error">
                        <span style={!this.emailError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.emailError}
                      </p>

                      <app-input name="industry" label={translate('resources.form.industry')} type="text" required={true} />
                      <p class="error">
                        <span style={!this.industryError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.industryError}
                      </p>

                      <app-input name="organization" label={translate('resources.form.organization')} type="text" required={true} />
                      <p class="error">
                        <span style={!this.organizationError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.organizationError}
                      </p>

                      <div class="center">
                        <button name="submit" type="submit" class="btn btn-primary" disabled={this.isDisabled}>
                          <app-translate keyword="resources.form.button.send" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* section - downloadinfo */}
        {!this.formSubmitted ? (
          <div class="container">
            <section id="downloadinfo" class="downloadinfo">
              <div class="downloadinfo--header center">
                <h2>
                  <app-translate keyword="resources.downloadinfo.title" />
                </h2>
                <p>
                  <app-translate keyword="resources.downloadinfo.subtitle" />
                </p>
              </div>
            </section>
            <section class="text-img-container left-side">
              <app-img class="img-fluid d-none d-md-inline" src="/assets/resources-whitepaper.png" alt="Resources White paper image" />
              <div class="text-img-container-text">
                <ul>
                  <li>
                    <p>
                      <app-translate keyword="resources.downloadinfo.list.first" />
                    </p>
                  </li>
                  <li>
                    <p>
                      <app-translate keyword="resources.downloadinfo.list.second" />
                    </p>
                  </li>
                  <li>
                    <p>
                      <app-translate keyword="resources.downloadinfo.list.third" />
                    </p>
                  </li>
                  <li>
                    <p>
                      <app-translate keyword="resources.downloadinfo.list.fourth" />
                    </p>
                  </li>
                </ul>
                <p>
                  <app-translate keyword="resources.downloadinfo.footer" />
                </p>
              </div>
            </section>
          </div>
        ) : null}

        {this.formSubmitted ? (
          <div class="container">
            <section id="thankyou" class="text-img-container left-side">
              <app-img class="img-fluid d-none d-md-inline" src="/assets/resources-robot.gif" alt="Robot Gif" />
              <div class="text-img-container-text">
                <h2>
                  <app-translate keyword="resources.enjoy" />
                </h2>
                <h3>
                  <app-translate keyword="resources.enjoysub" />
                </h3>
                <p>
                  <app-translate keyword="resources.thanks" />
                </p>
                <a class="btn btn-primary" href="https://github.com/openforge" title={translate('nav.links.github')} target="_blank" rel="noopener">
                  <div class="fab fa-github" />
                  &nbsp;GitHub
                </a>
              </div>
            </section>
          </div>
        ) : null}

        <app-footer />
      </div>
    );
  }

  private resetFormValues() {
    this.formValues = {
      name: '',
      industry: '',
      email: '',
      organization: '',
      nameValid: false,
      industryValid: false,
      emailValid: false,
      organizationValid: false,
    };
  }
}
