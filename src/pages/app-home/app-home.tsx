import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

declare var fbq;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  @Prop() history: RouterHistory;
  @Prop({ context: 'isServer' })
  private isServer: boolean;

  members: any[];
  isMobile = navigator.userAgent.match(
    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
  );

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }
  }

  scrollToForm() {
    const form = document.getElementById('services');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="home">
        {/* header - hero */}
        <header class="hero">
          <div class="overlay" />
          <div class="container">
            <div class="row align-items-center">
              <div class="hero-content col-sm-12">
                <h2>Talented Thinkers, Makers and Doers</h2>
                <p>
                  Work with our team of highly skilled designers, developers and
                  consultants to develop solutions and processes that fit your
                  business requirements.
                </p>
                <button
                  class="btn btn-primary"
                  onClick={this.scrollToForm.bind(this)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* section - services */}
        <section id="services" class="bg-gray">
          <div class="services">
            <div class="services--header">
              <h2>
                <app-translate key="home.services.what.title" />
              </h2>
              <p>
                <app-translate key="home.services.what.fromStartupToEnterprise" />
              </p>
            </div>
            <div class="card-container">
              <div class="card-service">
                <h1>
                  <app-translate key="home.services.app-developer.headline" />
                </h1>
                <div class="hvrbox card">
                  <stencil-route-link
                    url={
                      this.isMobile === null ? '/services/app-developer' : ''
                    }
                  >
                    <div class="hvrbox-layer-bottom card--image">
                      <app-img
                        class="card--image"
                        src="/assets/graphic-home-development-card.png"
                        alt="app-development-image"
                      />
                    </div>
                    <div class="hvrbox-layer-top card--text">
                      <p>
                        <app-translate key="home.services.app-developer.meta" />
                      </p>
                    </div>
                  </stencil-route-link>
                </div>
              </div>
              <div class="card-service">
                <h1>
                  <app-translate key="home.services.app-designer.headline" />
                </h1>
                <div class="hvrbox card">
                  <stencil-route-link
                    url={this.isMobile === null ? '/services/app-designer' : ''}
                  >
                    <div class="hvrbox-layer-bottom card--image">
                      <app-img
                        class="card--image"
                        src="/assets/graphic-home-design-card.png"
                        alt="ui-ux-design-image"
                      />
                    </div>
                    <div class="hvrbox-layer-top card--text">
                      <p>
                        <app-translate key="home.services.app-designer.meta" />
                      </p>
                    </div>
                  </stencil-route-link>
                </div>
              </div>
              <div class="card-service">
                <h1>
                  <app-translate key="home.services.tech-consulting.headline" />
                </h1>
                <div class=" hvrbox card">
                  <stencil-route-link
                    url={
                      this.isMobile === null ? '/services/tech-consulting' : ''
                    }
                  >
                    <div class="hvrbox-layer-bottom card--image">
                      <app-img
                        class="card--image"
                        src="/assets/graphic-home-consulting-card.png"
                        alt="consulting-image"
                      />
                    </div>
                    <div class="hvrbox-layer-top card--text">
                      <p>
                        <app-translate key="home.services.tech-consulting.meta" />
                      </p>
                    </div>
                  </stencil-route-link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section - our work */}
        <section id="our-work" class="bg-white">
          <div class="container our-work">
            <div class="our-work--header">
              <h2>
                <app-translate key="home.services.what.ourWork" />
              </h2>
            </div>
            <div class="content">
              <div class="work">
                <h3>LoudCloud</h3>
                <app-img
                  class=""
                  src="assets/graphic-home-loudcloud.png"
                  alt="loudcloud-app-image"
                />
                <div class="icons">
                  <app-img
                    class=""
                    src="assets/graphic-apple-appstore.png"
                    alt="apple-app-store-icon"
                  />
                  <app-img
                    class=""
                    src="assets/graphic-google-googleplaystore.png"
                    alt="google-play-store-icon"
                  />
                </div>
              </div>

              <div class="work">
                <h3>The Voyage</h3>
                <app-img
                  class=""
                  src="assets/graphic-home-voyage.png"
                  alt="voyage-app-image"
                />
                <div class="icons">
                  <app-img
                    class=""
                    src="assets/graphic-apple-appstore.png"
                    alt="apple-app-store-icon"
                  />
                  <app-img
                    class=""
                    src="assets/graphic-google-googleplaystore.png"
                    alt="google-play-store-icon"
                  />
                </div>
              </div>

              <div class="work">
                <h3>DigiThermo</h3>
                <app-img
                  class=""
                  src="assets/graphic-home-digithermo.png"
                  alt="digithermo-app-image"
                />
                <div class="icons">
                  <app-img
                    class=""
                    src="assets/graphic-apple-appstore.png"
                    alt="apple-app-store-icon"
                  />
                  <app-img
                    class=""
                    src="assets/graphic-google-googleplaystore.png"
                    alt="google-play-store-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <section id="learn-about" class="learn-about">
          <app-cta link-url="/about">
            <span slot="header">
              <app-translate key="home.learnAbout.header" />
            </span>
            <span slot="link">
              <app-translate key="home.learnAbout.link" />
            </span>
          </app-cta>
        </section>

        {/* section - process */}
        <section id="process" class="bg-gray">
          <div class="container process">
            <h2>
              <app-translate key="home.process.title" />
            </h2>

            <content-graphic img-url="assets/graphic-home-discovery.png">
              <h3 slot="header">
                <app-translate key="home.process.discovery" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.discoveryBody" />
              </p>
            </content-graphic>

            <content-graphic
              img-url="assets/graphic-home-consulting.png"
              reverse={true}
            >
              <h3 slot="header">
                <app-translate key="home.process.designUserExperience" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.designUserExperienceBody" />
              </p>
            </content-graphic>

            <content-graphic img-url="assets/graphic-home-development.png">
              <h3 slot="header">
                <app-translate key="home.process.development" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.developmentBody" />
              </p>
            </content-graphic>

            <content-graphic
              img-url="assets/graphic-home-deployment.png"
              reverse={true}
            >
              <h3 slot="header">
                <app-translate key="home.process.deployment" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.deploymentBody" />
              </p>
            </content-graphic>

            <content-graphic img-url="assets/graphic-home-feedback.png">
              <h3 slot="header">
                <app-translate key="home.process.userFeedback" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.userFeedbackBody" />
              </p>
            </content-graphic>
          </div>
        </section>

        {/* section - partners */}
        <section>
          <div class="container partners">
            <h2>
              <app-translate key="home.partners.title" />
            </h2>
            <p>
              <app-translate key="home.partners.text" />
            </p>

            <div class="partners--trusted">
              <app-img
                class="img-fluid"
                src="assets/logo-ionic-trusted-black.png"
                alt="Ionic Trusted Partner"
              />
            </div>

            <div class="partners--logos">
              <app-img
                class="img-fluid"
                src="assets/logo-angular-black.png"
                alt="Angular"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-capacitor-black.png"
                alt="Capacitor"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-stencil-black.png"
                alt="Stencil"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-eli-lu-entertainment-black.png"
                alt="Eli and Lu Entertainment"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-mysql-black.png"
                alt="Mysql"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-mongodb-black.png"
                alt="MongoDB"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-nodejs-black.png"
                alt="Node JS"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-aws-black.png"
                alt="AWS"
              />
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact">
          <span slot="header">
            <app-translate key="home.contact.title" />
          </span>
          <span slot="link">
            <app-translate key="home.contact.link" />
          </span>
        </app-cta>
        <app-footer />
      </div>
    );
  }
}
