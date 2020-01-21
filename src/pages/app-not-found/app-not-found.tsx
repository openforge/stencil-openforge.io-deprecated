import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-not-found',
  styleUrl: 'app-not-found.scss',
})
export class AppNotFound {
  changeMetadata() {
    // Change meta tags dynamically
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

  render() {
    return (
      <div id="contentStart" class="not-found">
        <section class="main">
          <app-img class="robot robot-body" src="/assets/svg/not-found-robot-body.svg" alt="robot body" />
          <app-img class="robot robot-arms" src="/assets/svg/not-found-robot-arms.svg" alt="robot arms" />
          <div class="rectangle">
            <div class="title">404</div>
            <div class="text">
              <app-translate keyword="notFound.text" />
            </div>

            <stencil-route-link url="/" class="align-self-center">
              <button class="btn button">
                <app-translate keyword="notFound.buttonText" />
              </button>
            </stencil-route-link>
          </div>
        </section>
      </div>
    );
  }
}
