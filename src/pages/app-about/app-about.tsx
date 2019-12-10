import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  componentDidLoad() {
    // Change meta tags dynamically
    document.querySelector("meta[property='og:title']").setAttribute('content', 'Philadelphia’s Top Mobile Technology and Design Experts | OpenForge');
    document.querySelector("meta[property='og:description']").setAttribute('content', 'We are Technology and Design Experts who specialize in Mobile Application Development in Philadelphia');
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/about/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/bg-hero-icons.jpg');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Technology, Design, Philadelphia, Mobile App, Development, Jedidiah Weller');
  }

  scrollToForm() {
    const form = document.getElementById('team-photo');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="about">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-8 col-sm-10 text-container">
                <h1>
                  <app-translate keyword="about.header.title" />
                </h1>
                <p>
                  <app-translate keyword="about.header.text" />
                </p>
                <button onClick={this.scrollToForm.bind(this)} class="btn btn-primary">
                  <app-translate keyword="about.header.action" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* section - team */}
        <section id="team-photo" class="team-photo {this.className}">
          <div class="container">
            <div class="row align-items-end text-center">
              <div class="col-12">
                <app-img src="/assets/svg/about-graphic-ribbon.svg" alt="Our Mission - Our mission is to forge a bond between people and technology through digital experiences." />
              </div>
            </div>
          </div>
        </section>

        {/* section - mission statement */}
        <section id="mission-statement" class="mission-statement">
          <div class="mission-statement d-flex text-center">
            <p class="text-white align-self-center">
              <app-translate keyword="about.mission.statement" />
            </p>
          </div>
        </section>

        {/* section - values */}
        <section id="values" class="values">
          <div class="container text-center">
            <div class="row header">
              <div class="col-12">
                <h2>
                  <app-translate keyword="about.values.title" />
                </h2>
                <p>
                  <app-translate keyword="about.values.text" />
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                <div class="integrity" />
                <app-translate class="value-text" key="about.values.value2" />
              </div>
              <div class="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                <div class="honesty" />
                <app-translate class="value-text" key="about.values.value1" />
              </div>
              <div class="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                <div class="transparency" />
                <app-translate class="value-text" key="about.values.value3" />
              </div>
            </div>
          </div>
        </section>

        {/* section - members */}
        <section id="members" class="members">
          <div class="container text-center">
            <div class="header">
              <h2>
                <app-translate keyword="about.team.title" />
              </h2>
              <p>
                <app-translate keyword="about.team.text" />
              </p>
            </div>
            <app-members-section />
          </div>
        </section>

        {/* aside - cta */}
        <app-cta />

        <app-footer />
      </div>
    );
  }
}
