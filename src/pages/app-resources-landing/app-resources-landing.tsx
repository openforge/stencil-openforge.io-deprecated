import { Component, State, Prop, Listen } from '@stencil/core';
import { translate } from '../../services/translation.service';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-resources-landing',
  styleUrl: 'app-resources-landing.scss',
})
export class AppResourcesLanding {
  private className = localStorage.getItem('allowWebp') === 'true' ? 'webp' : 'hero';

  componentWillLoad() {}

  componentDidLoad() {
    // Change meta tags dynamically
    document.querySelector("meta[property='og:title']").setAttribute('content', 'Business Owner’s Guide to PWAs | OpenForge');
    document
      .querySelector("meta[property='og:description']")
      .setAttribute('content', 'Skip the technical jargon! This is a report written for business owners on what PWAs (Progressive Web Apps) are and how they can benefit your company.');
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/pwa-white-paper/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/resources-header.jpg');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Progressive Web App, PWA, White Paper');
  }

  scrollToContent() {
    const form = document.getElementById('content');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div id="top" class="resources-landing">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-8 col-sm-10 text-container">
                <h1>
                  <app-translate key="resourcesLanding.header.title" />
                </h1>
                <p>
                  <app-translate key="resourcesLanding.header.text" />
                </p>
                <button onClick={this.scrollToContent.bind(this)} class="btn btn-primary">
                  <app-translate key="resourcesLanding.header.action" />
                </button>
              </div>
            </div>
          </div>
        </header>
        <div id="content" class="content container">
          <hr />
          <h1>Our Resources</h1>
          <section class="text-img-container right-side">
            <app-img class="img-fluid d-md-inline" src="/assets/services-design-toolbox-first.png" alt="" />
            <div class="text-img-container-text">
              <h2>JuntoScope Case Study</h2>
              <p>
                We'll help you evaluate your business needs and challenge your assumptions before entering into the Design and Development processs. Make sure that the technology you're building makes
                sense for your business.
              </p>
              <stencil-route-link url="/juntoscope" class="align-self-center">
                <button class="btn btn-primary">LEARN MORE</button>
              </stencil-route-link>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>PWA White Paper</h2>
              <p>
                We'll help you evaluate your business needs and challenge your assumptions before entering into the Design and Development processs. Make sure that the technology you're building makes
                sense for your business.
              </p>
              <stencil-route-link url="/pwa-white-paper" class="align-self-center">
                <button class="btn btn-primary">LEARN MORE</button>
              </stencil-route-link>
            </div>
            <app-img class="img-fluid d-md-inline" src="/assets/services-design-toolbox-first.png" alt="" />
          </section>
          <section class="text-img-container right-side">
            <app-img class="img-fluid d-md-inline" src="/assets/services-design-toolbox-first.png" alt="" />
            <div class="text-img-container-text">
              <h2>ToolBox Page</h2>
              <p>
                We'll help you evaluate your business needs and challenge your assumptions before entering into the Design and Development processs. Make sure that the technology you're building makes
                sense for your business.
              </p>
              <stencil-route-link url="/toolbox" class="align-self-center">
                <button class="btn btn-primary">LEARN MORE</button>
              </stencil-route-link>
            </div>
          </section>
        </div>

        {/* aside - cta */}
        <app-cta />

        <app-footer />
      </div>
    );
  }
}
