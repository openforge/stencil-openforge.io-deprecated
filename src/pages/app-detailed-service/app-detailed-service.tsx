import { Component, Prop, State, Watch, h } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

// import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-detailed-service',
  styleUrl: 'app-detailed-service.scss',
})
export class AppDetailedService {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State()
  imgs = {
    'app-developer': {
      header: '/assets/services/app-developer/header.png',
      services: {
        first: '/assets/services/app-developer/graphic-1.png',
        second: '/assets/services/app-developer/graphic-2.png',
        third: '/assets/services/app-developer/graphic-3.png',
      },
    },
    'app-designer': {
      header: '/assets/services/app-designer/header.png',
      services: {
        first: '/assets/services/app-designer/graphic-1.png',
        second: '/assets/services/app-designer/graphic-2.png',
        third: '/assets/services/app-designer/graphic-3.png',
      },
    },
    'startup-consulting': {
      header: '/assets/services/startup-consulting/header.png',
      services: {
        first: '/assets/services/startup-consulting/graphic-1.png',
        second: '/assets/services/startup-consulting/graphic-2.png',
        third: '/assets/services/startup-consulting/graphic-3.png',
      },
    },
    training: {
      header: '/assets/services/training/header.png',
      services: {
        first: '/assets/services/training/graphic-1.png',
        second: '/assets/services/training/graphic-2.png',
        third: '/assets/services/training/graphic-3.png',
      },
      work: {
        ourwork: '/assets/services/training/work-photo.png',
      },
    },
  };

  @Watch('match')
  matchHandler() {
    this.changeMetadata();
    this.loadSections();
  }

  componentWillLoad() {
    if (!this.imgs[this.match.params.service]) {
      this.history.push(`/`, {});
    }
  }

  componentDidLoad() {
    this.changeMetadata();
    this.loadSections();
  }

  loadSections() {
    const work = document.getElementById('our-work');
    const seminars = document.getElementById('our-seminars');

    const digiThermo = document.getElementById('digithermo');
    const juntoscope = document.getElementById('juntoscope');
    const voyage = document.getElementById('voyage');
    const suw = document.getElementById('suw');

    if (this.match.params.service === 'training') {
      work.style.setProperty('display', 'none');
      seminars.style.setProperty('display', 'initial');
    } else if (this.match.params.service === 'app-designer') {
      work.style.setProperty('display', 'initial');
      seminars.style.setProperty('display', 'none');

      voyage.style.setProperty('display', 'initial');
      suw.style.setProperty('display', 'initial');
      digiThermo.style.setProperty('display', 'none');
      juntoscope.style.setProperty('display', 'none');
    } else if (this.match.params.service === 'app-developer') {
      work.style.setProperty('display', 'initial');
      seminars.style.setProperty('display', 'none');

      voyage.style.setProperty('display', 'none');
      suw.style.setProperty('display', 'none');
      digiThermo.style.setProperty('display', 'initial');
      juntoscope.style.setProperty('display', 'initial');
    } else if (this.match.params.service === 'startup-consulting') {
      work.style.setProperty('display', 'initial');
      seminars.style.setProperty('display', 'none');

      voyage.style.setProperty('display', 'none');
      suw.style.setProperty('display', 'none');
      digiThermo.style.setProperty('display', 'initial');
      juntoscope.style.setProperty('display', 'initial');
    }
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
        <header id="contentStart" class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-5 order-md-2 d-flex justify-content-center">
                <img src={this.imgs[this.match.params.service].header} alt="Header Graphic" />
              </div>
              <div class="col-sm-12 col-md-7 order-md-1">
                <h1>
                  <app-translate keyword={`services.${this.match.params.service}.hero.title`} />
                </h1>
                <p>
                  <app-translate keyword={`services.${this.match.params.service}.hero.text`} />
                </p>
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
              <div class="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                <img class="img-services" src={this.imgs[this.match.params.service].services.first} />
              </div>
              <div class="col-md-8 col-sm-12 d-flex flex-column align-self-center">
                <h3>
                  <app-translate keyword={`services.${this.match.params.service}.first.title`} />
                </h3>
                <p>
                  <app-translate keyword={`services.${this.match.params.service}.first.text`} />
                </p>
              </div>
            </div>
            <div class="row text-sm-center text-md-right">
              <div class="col-md-4 col-sm-12 d-flex order-md-2 justify-content-center align-items-center">
                <img class="img-services" src={this.imgs[this.match.params.service].services.second} />
              </div>
              <div class="col-md-8 col-sm-12 order-md-1 d-flex flex-column align-self-center">
                <h3>
                  <app-translate keyword={`services.${this.match.params.service}.second.title`} />
                </h3>
                <p>
                  <app-translate keyword={`services.${this.match.params.service}.second.text`} />
                </p>
              </div>
            </div>
            <div class="row text-sm-center text-md-left">
              <div class="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                <img class="img-services" src={this.imgs[this.match.params.service].services.third} />
              </div>
              <div class="col-md-8 col-sm-12 d-flex flex-column align-self-center">
                <h3>
                  <app-translate keyword={`services.${this.match.params.service}.third.title`} />
                </h3>
                <p>
                  <app-translate keyword={`services.${this.match.params.service}.third.text`} />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="our-work" id="our-work">
          <div class="container">
            <div class="row header">
              <div class="col-12">
                <h2 class="line-title">Our Work</h2>
              </div>
            </div>
            {/* Work Example */}
            <div class="row">
              <div class="col-md-4 col-sm-12 flex-fill example" id="juntoscope">
                <div class="row screenshots">
                  <img src="/assets/apps/juntoscope/graphic-example-1.png" class="behind-left" alt="juntoscope app screenshot" />
                  <img src="/assets/apps/juntoscope/graphic-example-2.png" class="front-center" alt="juntoscope app screenshot" />
                </div>
                <div class="store-buttons">
                  <a href="https://apps.apple.com/us/app/juntoscope/id1421846154?mt=8" target="_blank" rel="noopener">
                    <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.openforge.juntoscope" target="_blank" rel="noopener">
                    <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                  </a>
                </div>
                <div class="information">
                  <h3>
                    <app-translate keyword="services.ourwork.juntoscope.title" />
                  </h3>
                  <p>
                    <app-translate keyword="services.ourwork.juntoscope.description" />
                  </p>
                  <stencil-route-link url="/juntoscope">
                    <a class="active">View Case Study</a>
                  </stencil-route-link>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 flex-fill example" id="voyage">
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
                  <h3>
                    <app-translate keyword="services.ourwork.voyage.title" />
                  </h3>
                  <p>
                    <app-translate keyword="services.ourwork.voyage.description" />
                  </p>
                  <a>Case Study Coming Soon!</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 flex-fill example" id="vanlife">
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
                  <h3>
                    <app-translate keyword="services.ourwork.vanlife.title" />
                  </h3>
                  <p>
                    <app-translate keyword="services.ourwork.vanlife.description" />
                  </p>
                  <a>Case Study Coming Soon!</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 flex-fill example" id="suw">
                <div class="row screenshots">
                  <img src="/assets/apps/startupwars/graphic-example-1.png" class="behind-left" alt="startup wars app screenshot" />
                  <img src="/assets/apps/startupwars/graphic-example-2.png" class="front-center" alt="startup wars app screenshot" />
                </div>
                <div class="store-buttons">
                  <div class="spacer" />
                </div>
                <div class="information">
                  <h3>
                    <app-translate keyword="services.ourwork.suw.title" />
                  </h3>
                  <p>
                    <app-translate keyword="services.ourwork.suw.description" />
                  </p>
                  <a>Case Study Coming Soon!</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 flex-fill example" id="digithermo">
                <div class="row screenshots">
                  <img src="/assets/apps/digithermo/graphic-example-1.png" class="behind-left" alt="digithermo app screenshot" />
                  <img src="/assets/apps/digithermo/graphic-example-2.png" class="front-center" alt="digithermo wars app screenshot" />
                </div>
                <div class="store-buttons">
                  <a href="https://apps.apple.com/app/digi-thermo/id1307130445" target="_blank" rel="noopener">
                    <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.webjuntollc.digithermoapp" target="_blank" rel="noopener">
                    <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                  </a>
                </div>
                <div class="information">
                  <h3>
                    <app-translate keyword="services.ourwork.digithermo.title" />
                  </h3>
                  <p>
                    <app-translate keyword="services.ourwork.digithermo.description" />
                  </p>
                  <a>Case Study Coming Soon!</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="our-seminars" id="our-seminars">
          <div class="container">
            <div class="row header">
              <div class="col-12">
                <h2 class="line-title">Learn About Our Seminars</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12 text-container">
                <p>
                  <app-translate keyword={`services.${this.match.params.service}.seminars`} />
                </p>
                <button onClick={() => window.open('https://openforge.us8.list-manage.com/subscribe/post?u=7e95d70b390d0adf7aaa31ad6&amp;id=78738bfcb4', '_blank')}>Join Our Mailing List</button>
              </div>
              <div class="col-md-6 col-sm-12 d-flex align-self-center">
                <img src="/assets/services/training/work-photo.png" alt="Group Training Workshop Photo" />
              </div>
            </div>
          </div>
        </section>

        <app-cta />
        <app-footer />
      </div>
    );
  }
}
