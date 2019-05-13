import { Component, Prop, State, Listen, Watch } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

// import { translate } from '../../services/translation.service';

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
      }
    },
    'app-designer': {
      header: '/assets/svg/home-graphic-process-design.svg',
      services: {
        first: '/assets/svg/services-graphic-design1.svg',
        second: '/assets/svg/services-graphic-design2.svg',
        third: '/assets/svg/services-graphic-design3.svg',
      }
    },
    'startup-consulting': {
      header: '/assets/svg/home-graphic-process-discovery.svg',
      services: {
        first: '/assets/svg/services-graphic-consulting1.svg',
        second: '/assets/svg/services-graphic-consulting2.svg',
        third: '/assets/svg/services-graphic-consulting3.svg',
      }
    },
    'training': {
      header: '/assets/svg/home-graphic-process-discovery.svg',
      services: {
        first: '/assets/svg/services-graphic-consulting1.svg',
        second: '/assets/svg/services-graphic-consulting2.svg',
        third: '/assets/svg/services-graphic-consulting3.svg',
      }
    }
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
          <div class="container">
            <div class="row header">
              <div class="col-12">
                <h2>Our Services</h2>
              </div>
            </div>
            <div class="row text-sm-center text-md-left">
              <div class="col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                <object data={this.imgs[this.match.params.service].services.first} height="200" width="200" />
              </div>
              <div class="col-md-9 col-sm-12">
                <h3>
                  <app-translate key={`services.${this.match.params.service}.first.title`} />
                </h3>
                <p>
                  <app-translate key={`services.${this.match.params.service}.first.text`} />
                </p>
              </div>
            </div>
            <div class="row text-sm-center text-md-right">
              <div class="col-md-3 col-sm-12 d-flex order-md-2 justify-content-center align-items-center">
                <object data={this.imgs[this.match.params.service].services.second} height="200" width="200" />
              </div>
              <div class="col-md-9 col-sm-12 order-md-1">
                <h3>
                  <app-translate key={`services.${this.match.params.service}.second.title`} />
                </h3>
                <p>
                  <app-translate key={`services.${this.match.params.service}.second.text`} />
                </p>
              </div>
            </div>
            <div class="row text-sm-center text-md-left">
              <div class="col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                <object data={this.imgs[this.match.params.service].services.third} height="200" width="200" />
              </div>
              <div class="col-md-9 col-sm-12">
                <h3>
                  <app-translate key={`services.${this.match.params.service}.third.title`} />
                </h3>
                <p>
                  <app-translate key={`services.${this.match.params.service}.third.text`} />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="our-work" class="our-work">
          <div class="container">
            <div class="row header">
              <div class="col-12">
                <h2 class="line-title">Our Work</h2>
              </div>
            </div>
          {/* Work Example */}
            <div class="row">
              <div class="col-md-4 col-sm-12 example">
                <div class="row screenshots">
                  <img src="/assets/apps/voyage/graphic-example-1.png" class="behind-left" alt="voyage app screenshot" />
                  <img src="/assets/apps/voyage/graphic-example-2.png" class="front-center" alt="voyage app screenshot" />
                </div>
                <div class="store-buttons">
                  <a href="https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8" target="_blank" rel="noopener">
                    <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile" target="_blank" rel="noopener">
                    <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                  </a>
                </div>
                <div class="information">
                  <h3>The Voyage</h3>
                  <ul>
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                  </ul>
                  <a class="active">View Case Study</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 example">
                <div class="row screenshots">
                  <img src="/assets/apps/vanlife/graphic-example-1.png" class="behind-left" alt="vanlife app screenshot" />
                  <img src="/assets/apps/vanlife/graphic-example-2.png" class="front-center" alt="vanlife app screenshot" />
                </div>
                <div class="store-buttons">
                  <a href="https://itunes.apple.com/us/app/the-vanlife-app/id1447689037?mt=8" target="_blank" rel="noopener">
                    <img src="/assets/graphic-apple-appstore.png" alt="Download link on Apple App Store" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.thevanlifeapp.vanlifeapp&hl=en" target="_blank" rel="noopener">
                    <img src="/assets/graphic-google-googleplaystore.png" alt="Download link on Google Play Store" />
                  </a>
                </div>
                <div class="information">
                  <h3>The Vanlife App</h3>
                  <ul>
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                  </ul>
                  <a>Case Study Coming Soon!</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 example">
                <div class="row screenshots">
                  <img src="/assets/apps/startupwars/graphic-example-1.png" class="behind-left" alt="startup wars app screenshot" />
                  <img src="/assets/apps/startupwars/graphic-example-2.png" class="front-center" alt="startup wars app screenshot" />
                </div>
                <div class="store-buttons">
                  <a href="https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8" target="_blank" rel="noopener">
                    <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile" target="_blank" rel="noopener">
                    <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                  </a>
                </div>
                <div class="information">
                  <h3>Startup Wars</h3>
                  <ul>
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                  </ul>
                  <a>Case Study Coming Soon!</a>
                </div>
              </div>
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
