import { Component, Prop, State, Listen, Watch } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

declare var fbq;

@Component({
  tag: 'app-detailed-service',
  styleUrl: 'app-detailed-service.scss',
})
export class AppDetailedService {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;
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

  componentWillLoad() {
    if (!this.imgs[this.match.params.service]) {
      this.history.push(`/`, {});
    }
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
        .querySelector("meta[property='og:title']")
        .setAttribute(
          'content', 
          'Mobile App Developer Experts | OpenForge'
        );
      document
        .querySelector("meta[property='og:description']")
        .setAttribute(
          'content',
          'Trust Our Experts in Mobile Application Development and Design.  We are Philadelphia’s top Mobile Application Development Agency'
        );
      document
        .querySelector("meta[property='og:url']")
        .setAttribute(
          'content',
          'https://openforge.io/services/app-developer/'
        );
      document
        .querySelector("meta[property='og:image']")
        .setAttribute(
          'content',
          'https://openforge.io/assets/team-landing-header-development-team.jpg'
        );
      document
        .querySelector("meta[name='keywords']")
        .setAttribute(
          'content',
          'Mobile App Developer, Mobile App Development, Progressive Web App'
        );
    } else if (this.match.params.service === 'app-designer') {
      document
        .querySelector("meta[property='og:title']")
        .setAttribute(
          'content', 
          'Mobile App Design Experts | OpenForge'
        );
      document
        .querySelector("meta[property='og:description']")
        .setAttribute(
          'content',
          'Trust Our Experts in UI/UX and Mobile Application Design and Development.  Our Designers are Philadelphia’s top Mobile App Design Team for Design Consulting'
        );
      document
        .querySelector("meta[property='og:url']")
        .setAttribute(
          'content',
          'https://openforge.io/services/app-designer/'
        );
      document
        .querySelector("meta[property='og:image']")
        .setAttribute(
          'content',
          'https://openforge.io/assets/team-landing-header-design-team.jpg'
        );
      document
        .querySelector("meta[name='keywords']")
        .setAttribute(
          'content',
          'UI, UX, Design, Mobile App Design, User Experience Expert'
        );
    } else if (this.match.params.service === 'startup-consulting') {
      document
        .querySelector("meta[property='og:title']")
        .setAttribute(
          'content',
          'Startup Consulting Services in Philadelphia | OpenForge'
        );
      document
        .querySelector("meta[property='og:description']")
        .setAttribute(
          'content',
          'OpenForge is Philadelphia’s Top Startup Consulting Firm.  We Specialize in Startup Consulting, Application Development, and LEAN Canvas Methodologies.   Let Us Help You With Marketing and CTO As a Service.'
        );
      document
        .querySelector("meta[property='og:url']")
        .setAttribute(
          'content',
          'https://openforge.io/services/startup-consulting/'
        );
      document
        .querySelector("meta[property='og:image']")
        .setAttribute(
          'content',
          'https://openforge.io/assets/team-landing-header-management-team.jpeg'
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
      <div class="services">
        {/* header - hero */}
        {this.match.params.service === 'app-developer' ? (
          <header class="hero development">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12 col-md-6">
                  <h1>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.title`}
                    />
                  </h1>
                  <p>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.text`}
                    />
                  </p>
                </div>
                <div class="col-sm-12 col-md-6">
                  <img src="/assets/svg/process-development.svg" />
                </div>
              </div>
              <div class="line-break" />
            </div>
          </header>
        ) : this.match.params.service === 'app-designer' ? (
          <header class="hero development">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12 col-md-6">
                  <h1>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.title`}
                    />
                  </h1>
                  <p>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.text`}
                    />
                  </p>
                </div>
                <div class="col-sm-12 col-md-6">
                  <img src="/assets/svg/process-design.svg" />
                </div>
              </div>
              <div class="line-break" />
            </div>
          </header>
        ) : (
          <header class="hero development">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12 col-md-6">
                  <h1>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.title`}
                    />
                  </h1>
                  <p>
                    <app-translate
                      key={`services.${this.match.params.service}.hero.text`}
                    />
                  </p>
                </div>
                <div class="col-sm-12 col-md-6">
                  <img src="/assets/svg/discovery.svg" />
                </div>
              </div>
              <div class="line-break" />
            </div>
          </header>
        )}

        <section id="our-services" class="our-services">
          <div class="container text-center">
            <div class="row header">
              <div class="col-12">
                <h2>Our Services</h2>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 col-sm-12 d-flex">
                <div class="card flex-fill">
                  <img class="card-img-top" src="/assets/services-consulting-arrow.png"/>
                  {/* {this.imgs[this.match.params.service].first} */}
                  <div class="line-break" />
                  <div class="card-body text-left">
                    <h3>
                      <app-translate key={`services.${this.match.params.service}.first.title`} />
                    </h3>
                    <p class="card-text">
                      <app-translate key={`services.${this.match.params.service}.first.text`} />
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 d-flex">
                <div class="card flex-fill">
                  <img class="card-img-top" src="/assets/services-consulting-arrow.png"/>
                  <div class="line-break" />
                  <div class="card-body text-left">
                    <h3>
                      <app-translate key={`services.${this.match.params.service}.second.title`} />
                    </h3>
                    <p class="card-text">
                      <app-translate key={`services.${this.match.params.service}.second.text`} />
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 d-flex">
                <div class="card flex-fill">
                  <img class="card-img-top" src="/assets/services-consulting-arrow.png"/>
                  <div class="line-break" />
                  <div class="card-body text-left">
                    <h3>
                      <app-translate key={`services.${this.match.params.service}.third.title`} />
                    </h3>
                    <p class="card-text">
                      <app-translate key={`services.${this.match.params.service}.third.text`} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </section>

        <section id="worked-with" class="worked-with">
          <div class="container text-center">
            <div class="row header">
              <div class="col-12">
                <h2>Who We've Worked With</h2>
              </div>
            </div>
          </div>
        </section>

        {this.match.params.service === 'app-developer' ? (
          <section>
            <div class="header">Development</div>
          </section>
        ) : this.match.params.service === 'app-designer' ? (
          <section>
            <div class="header">Design</div>
          </section>
        ) : (
          <section>
            <div class="header">Consulting</div>
          </section>
        )}

        {/* <app-cta /> */}
        <app-footer />
      </div>
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
