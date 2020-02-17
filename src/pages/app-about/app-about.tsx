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
    const form = document.getElementById('members');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div id="about" class="about">
        <div class="container-fluid">
          <div class="row align-items-center hero">
            <div class="col-12 col-md-11 offset-md-1">
              <h1 data-cy="title-hero">
                <app-translate class="d-none d-md-block" keyword="about.header.title" />
                <app-translate class="d-block d-md-none" keyword="about.header.titleSmall" />
              </h1>
              <p class="about-text">
                <app-translate keyword="about.header.text" />
              </p>
              <app-img data-cy="head-button" class="d-block d-md-none" src="../../assets/svg/about-graphic-header.svg" />
              <button onClick={this.scrollToForm.bind(this)} class="btn btn-secondary d-none d-md-block">
                <app-translate keyword="about.header.action" />
              </button>
            </div>
          </div>

          <div class="row justify-content-center d-none d-md-block values">
            <div class="col-12">
              <h2 class="aside-lines">
                <span>
                  <app-translate keyword="about.values.title" />
                </span>
              </h2>
              <p class="about-text">
                <app-translate keyword="about.values.text" />
              </p>
            </div>
          </div>

          <div class="d-none d-md-block value-badges">
            <div class="row justify-content-center">
              <div class="col-md-4 col-lg-3 d-flex flex-column align-items-center">
                <div class="honesty" />
                <h3>
                  <app-translate keyword="about.values.value1" />
                </h3>
              </div>
              <div class="col-md-4 col-lg-3 d-flex flex-column align-items-center">
                <div class="integrity" />
                <h3>
                  <app-translate keyword="about.values.value2" />
                </h3>
              </div>
              <div class="col-md-4 col-lg-3 d-flex flex-column align-items-center">
                <div class="transparency" />
                <h3>
                  <app-translate keyword="about.values.value3" />
                </h3>
              </div>
            </div>
          </div>

          <div id="members" class="row justify-content-center members">
            <div class="col-10 col-lg-10">
              <h2>
                <app-translate keyword="about.landing.cta.title" />
              </h2>
              <app-members-section />
            </div>
          </div>
        </div>

        {/* section - team */}
        {/* <section id="team-photo" class="team-photo {this.className}">
          <div class="container">
            <div class="row align-items-end text-center">
              <div class="col-12">
                <app-img src="/assets/svg/about-graphic-ribbon.svg" alt="Our Mission - Our mission is to forge a bond between people and technology through digital experiences." />
              </div>
            </div>
          </div>
        </section> */}
        {/* aside - cta */}
        <app-cta />

        <app-footer />
      </div>
    );
  }
}
