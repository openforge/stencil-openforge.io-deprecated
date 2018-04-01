import { Component, Listen, Prop, State } from '@stencil/core';
import { ActiveRouter, RouterHistory, LocationSegments } from '@stencil/router';

import { polyfill } from 'smoothscroll-polyfill';
polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  @Prop({ context: 'activeRouter' })
  activeRouter: ActiveRouter;
  unsubscribe: () => void;

  @State() currentHash = '';
  navbarEl: HTMLElement;
  mainEl: HTMLElement;
  isScrolled = false;

  componentDidLoad() {
    this.navbarEl = document.querySelector('nav.navbar');
    this.mainEl = document.querySelector('main');

    const history: RouterHistory = this.activeRouter.get('history');
    this.currentHash = history.location.hash;

    this.unsubscribe = history.listen((segments: LocationSegments) => {
      this.currentHash = segments.hash;
    });
  }

  componentDidUnload() {
    this.unsubscribe();
  }

  @Listen('window:scroll')
  handleScroll() {
    this.setIsScrolled();

    if (this.isScrolled && !this.navbarEl.classList.contains('background')) {
      this.navbarEl.classList.add('background');
    } else if (!this.isScrolled) {
      this.navbarEl.classList.remove('background');
    }
  }

  setIsScrolled() {
    const dimensions = this.mainEl.getBoundingClientRect();
    this.isScrolled = dimensions.top < 0;
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark align-items-lg-end fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <h1>
                <img
                  class="img-fluid"
                  src="assets/logo-openforge.png"
                  alt="OpenForge"
                />
              </h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-md-auto">
                <li
                  class={{
                    'nav-item': true,
                    active: !this.currentHash,
                  }}
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li
                  class={{
                    'nav-item': true,
                    active: this.currentHash === '#process',
                  }}
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link url="/about" class="nav-link">
                    About
                  </stencil-route-link>
                </li>
                <li
                  class={{
                    'nav-item': true,
                    active: this.currentHash === '#development',
                  }}
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link url="services" class="nav-link">
                    Services
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <a
                    class="nav-link"
                    href="mailto:hello@openforge.io"
                    target="_blank"
                  >
                    Contact
                  </a>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <a
                    class="nav-link"
                    href="https://github.com/openforge"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <stencil-router>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/about" component="app-about" exact={true} />
            <stencil-route
              url="/services"
              component="app-services"
              exact={true}
            />
            <stencil-route
              url="/contact"
              component="app-contact"
              exact={true}
            />
          </stencil-router>
        </main>

        <app-footer />
      </div>
    );
  }
}
