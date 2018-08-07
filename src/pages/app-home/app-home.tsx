import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  members: any[];

  render() {
    return (
      <div class="home">
        {/* header - hero */}
        <app-hero-home>
          <span slot="header">
            <app-translate key="home.hero.header" />
          </span>
          <span slot="body">
            <app-translate key="home.hero.body" />
          </span>
          <span slot="link">
            <app-translate key="home.hero.link" />
          </span>
        </app-hero-home>

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
              <div class="card">
                <div class="card--image">
                  <app-img
                    class="card--image"
                    src="assets/graphic-home-development-card.png"
                    alt="app-development-image"
                  />
                </div>
                <div class="card--text">
                  <h3>
                    <app-translate key="home.services.what.appDevelopment" />
                  </h3>
                  <p>
                    <app-translate key="home.services.what.appDevelopmentText" />
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card--image">
                  <app-img
                    class="card--image"
                    src="assets/graphic-home-design-card.png"
                    alt="ui-ux-design-image"
                  />
                </div>
                <div class="card--text">
                  <h3>
                    <app-translate key="home.services.what.uxUiDesign" />
                  </h3>
                  <p>
                    <app-translate key="home.services.what.uxUiDesignText" />
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card--image">
                  <app-img
                    class="card--image"
                    src="assets/graphic-home-consulting-card.png"
                    alt="consulting-image"
                  />
                </div>
                <div class="card--text">
                  <h3>
                    <app-translate key="home.services.what.consulting" />
                  </h3>
                  <p>
                    <app-translate key="home.services.what.consultingText" />
                  </p>
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
        <section id="learn-about">
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

            <content-graphic-lg img-url="assets/graphic-home-discovery.png">
              <h3 slot="header">
                <app-translate key="home.process.discovery" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.discoveryBody" />
              </p>
            </content-graphic-lg>

            <content-graphic-lg
              img-url="assets/graphic-home-consulting.png"
              reverse={true}
            >
              <h3 slot="header">
                <app-translate key="home.process.designUserExperience" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.designUserExperienceBody" />
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-development.png">
              <h3 slot="header">
                <app-translate key="home.process.development" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.developmentBody" />
              </p>
            </content-graphic-lg>

            <content-graphic-lg
              img-url="assets/graphic-home-deployment.png"
              reverse={true}
            >
              <h3 slot="header">
                <app-translate key="home.process.deployment" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.deploymentBody" />
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-feedback.png">
              <h3 slot="header">
                <app-translate key="home.process.userFeedback" />
              </h3>
              <p slot="body">
                <app-translate key="home.process.userFeedbackBody" />
              </p>
            </content-graphic-lg>
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
