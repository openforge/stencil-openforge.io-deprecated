import { Component, Prop, State, Listen, Watch } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

import { translate } from '../../services/translation.service';

/* tslint:disable-next-line */
import $ from 'jquery';

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
      header: '/assets/svg/services-graphic-development-header.svg',
      services: {
        first: '/assets/svg/services-graphic-development1.svg',
        second: '/assets/svg/services-graphic-development2.svg',
        third: '/assets/svg/services-graphic-development3.svg',
      },
      exampleGraphic: '/assets/shared-graphic-loudcloud.png',
      exampleBackground: '/assets/shared-graphic-loudcloud-pattern.png',
    },
    'app-designer': {
      header: '/assets/svg/home-graphic-process-design.svg',
      services: {
        first: '/assets/svg/services-graphic-design1.svg',
        second: '/assets/svg/services-graphic-design2.svg',
        third: '/assets/svg/services-graphic-design3.svg',
      },
      exampleGraphic: '/assets/shared-graphic-voyage.png',
      exampleBackground: '/assets/shared-graphic-voyage-pattern.png',
    },
    'startup-consulting': {
      header: '/assets/svg/home-graphic-process-discovery.svg',
      services: {
        first: '/assets/svg/services-graphic-consulting1.svg',
        second: '/assets/svg/services-graphic-consulting2.svg',
        third: '/assets/svg/services-graphic-consulting3.svg',
      },
      exampleGraphic: '/assets/shared-graphic-juntoscope.png',
      exampleBackground: '/assets/shared-graphic-juntoscope-pattern.png',
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

    /* tslint:disable-next-line */
    $(window).on('scroll resize', function() {
      if ($('#content-panel-inner-detail') && $('#content-panel-inner-detail').offset()) {
        const pos = $('#content-panel-inner-detail').offset().top + $('#content-panel-inner-detail').height();
        let done = false;
        $('.content-panel').each(function() {
          if (!done && pos <= Math.floor($(this).offset().top + $(this).height())) {
            const newDescr = $(this)
              .find('.description')
              .html();

            $('#content-panel-inner-detail').html(newDescr);

            done = true;
          }
        });

        if (
          $('#content-panel-inner-detail').offset().top ===
          $('.content-panel')
            .first()
            .offset().top
        ) {
          const newDescr = $('.content-panel')
            .first()
            .find('.description')
            .html();

          $('#content-panel-inner-detail').html(newDescr);
        }
      }
    });
  }

  validateField(e) {
    switch (e.name) {
      case 'name':
        this.formValues.nameValid = e.checkValidity();
        this.nameError = this.formValues.nameValid ? '' : (this.nameError = e.validationMessage);
        break;

      case 'email':
        this.formValues.emailValid = e.checkValidity();
        this.emailError = this.formValues.emailValid ? '' : (this.emailError = e.validationMessage);
        break;

      case 'message':
        this.formValues.messageValid = e.checkValidity();
        this.messageError = this.formValues.messageValid ? '' : (this.messageError = e.validationMessage);
        break;
    }

    this.formValues.nameValid && this.formValues.emailValid && this.formValues.messageValid ? (this.isDisabled = false) : (this.isDisabled = true);
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
      document.querySelector("meta[property='og:title']").setAttribute('content', 'Mobile App Developer Experts | OpenForge');
      document
        .querySelector("meta[property='og:description']")
        .setAttribute('content', 'Trust Our Experts in Mobile Application Development and Design.  We are Philadelphia’s top Mobile Application Development Agency');
      document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/services/app-developer/');
      document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/team-landing-header-development-team.jpg');
      document.querySelector("meta[name='keywords']").setAttribute('content', 'Mobile App Developer, Mobile App Development, Progressive Web App');
    } else if (this.match.params.service === 'app-designer') {
      document.querySelector("meta[property='og:title']").setAttribute('content', 'Mobile App Design Experts | OpenForge');
      document
        .querySelector("meta[property='og:description']")
        .setAttribute('content', 'Trust Our Experts in UI/UX and Mobile Application Design and Development.  Our Designers are Philadelphia’s top Mobile App Design Team for Design Consulting');
      document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/services/app-designer/');
      document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/team-landing-header-design-team.jpg');
      document.querySelector("meta[name='keywords']").setAttribute('content', 'UI, UX, Design, Mobile App Design, User Experience Expert');
    } else if (this.match.params.service === 'startup-consulting') {
      document.querySelector("meta[property='og:title']").setAttribute('content', 'Startup Consulting Services in Philadelphia | OpenForge');
      document
        .querySelector("meta[property='og:description']")
        .setAttribute(
          'content',
          'OpenForge is Philadelphia’s Top Startup Consulting Firm.  We Specialize in Startup Consulting, Application Development, and LEAN Canvas Methodologies.   Let Us Help You With Marketing and CTO As a Service.'
        );
      document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/services/startup-consulting/');
      document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/team-landing-header-management-team.jpeg');
      document.querySelector("meta[name='keywords']").setAttribute('content', 'Philadelphia, Startup Consulting, App Development, CTO As a Service, Tech Consulting');
    }
  }

  render() {
    return (
      <div class="services">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-6">
                <h1>
                  <app-translate key={`services.${this.match.params.service}.hero.title`} />
                </h1>
                <p>
                  <app-translate key={`services.${this.match.params.service}.hero.text`} />
                </p>
              </div>
              <div class="col-sm-12 col-md-6 align-self-center">
                <app-img src={this.imgs[this.match.params.service].header} alt="Animated Header Graphic" />
              </div>
            </div>
            <div class="line-break" />
          </div>
        </header>

        <section id="our-services" class="our-services">
          <div class="container text-center">
            <div class="row header">
              <div class="col-12">
                <h2>Our Services</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-12 d-flex justify-content-center">
                <div class="card flex-fill">
                  <object class="card-img-top" data={this.imgs[this.match.params.service].services.first} height="200" width="200" />
                  <div class="line-break" />
                  <div class="card-body">
                    <h3>
                      <app-translate key={`services.${this.match.params.service}.first.title`} />
                    </h3>
                    <p class="card-text">
                      <app-translate key={`services.${this.match.params.service}.first.text`} />
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 d-flex justify-content-center">
                <div class="card flex-fill">
                  <object class="card-img-top" data={this.imgs[this.match.params.service].services.second} height="200" width="200" />
                  <div class="line-break" />
                  <div class="card-body">
                    <h3>
                      <app-translate key={`services.${this.match.params.service}.second.title`} />
                    </h3>
                    <p class="card-text">
                      <app-translate key={`services.${this.match.params.service}.second.text`} />
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 d-flex justify-content-center">
                <div class="card flex-fill">
                  <object class="card-img-top left-adjust" data={this.imgs[this.match.params.service].services.third} height="200" width="200" />
                  <div class="line-break" />
                  <div class="card-body">
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

            <div class="row">
              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid" src="/assets/services-logo-newocean.png" alt="New Ocean Health logo" />
                <app-img class="img-fluid" src="/assets/services-logo-bb.png" alt="BB logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid" src="/assets/services-logo-kemin.png" alt="Kemin logo" />
                <app-img class="img-fluid" src="/assets/services-logo-loudcloud.png" alt="LoudCloud logo" />
                <app-img class="img-fluid" src="/assets/services-logo-livegistics.png" alt="Livegistics logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid" src="/assets/services-logo-yellowdig.png" alt="YellowDig logo" />
                <app-img class="img-fluid" src="/assets/services-logo-redqueen.jpg" alt="RedQueen logo" />
                <app-img class="img-fluid" src="/assets/services-logo-aeris.png" alt="Aeris logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid" src="/assets/services-logo-wharton.png" alt="Wharton logo" />
                <app-img class="img-fluid" src="/assets/services-logo-mobilemeasures.png" alt="Mobile Measures logo" />
              </div>
            </div>
          </div>
        </section>

        <section id="example" class="example">
          <div class="main-content">
            <div class="sidebar">
              <div class="sidebar__inner content-panel-inner" id="content-panel-inner-detail" />
            </div>
            <div class="content">
              <div
                class="content-panel"
                style={{
                  'background-image': `url(${this.imgs[this.match.params.service].exampleBackground})`,
                }}
              >
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h2>{translate(`services.${this.match.params.service}.example.title`)}</h2>
                    <p>{translate(`services.${this.match.params.service}.example.text`)}</p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>{translate(`services.${this.match.params.service}.example.name`)}</h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right">
                      <a href="https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8" target="_blank" rel="noopener">
                        <app-img src="/assets/graphic-apple-appstore.png" alt="Apple AppStore Logo" />
                      </a>
                    </div>
                    <div class="col-6 text-left">
                      <a href="https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile" target="_blank" rel="noopener">
                        <app-img src="/assets/graphic-google-googleplaystore.png" alt="Google Play Store logo" />
                      </a>
                    </div>
                  </div>
                  <app-img src={this.imgs[this.match.params.service].exampleGraphic} class="phone-image" />
                </div>
              </div>
              <div class="content-panel last-panel" />
            </div>
          </div>
        </section>

        <app-cta />
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
