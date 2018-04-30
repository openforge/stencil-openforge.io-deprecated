import { Component, Listen, Prop } from '@stencil/core';
import { ActiveRouter, RouterHistory, LocationSegments } from '@stencil/router';

import { polyfill } from 'smoothscroll-polyfill';

import { gtag, GA_TRACKING_ID } from '../../shared/gtag';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  @Prop({ context: 'activeRouter' })
  activeRouter: ActiveRouter;
  unsubscribe: () => void;

  navbarEl: HTMLElement;
  mainEl: HTMLElement;
  isScrolled = false;

  componentDidLoad() {
    gtag('js', new Date());

    this.navbarEl = document.querySelector('nav.navbar');
    this.mainEl = document.querySelector('main');

    const history: RouterHistory = this.activeRouter.get('history');
    gtag('config', GA_TRACKING_ID, { page_path: history.location.pathname });

    this.unsubscribe = history.listen((segments: LocationSegments) => {
      console.log(segments);
      gtag('config', GA_TRACKING_ID, { page_path: segments.pathname });
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
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/"
                    exact={true}
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Home
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/about"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    About
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/services"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Services
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/contact"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Contact
                  </stencil-route-link>
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
                    GitHub
                  </a>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/opportunities"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Opportunities
                  </stencil-route-link>
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
            <stencil-route
              url="/opportunities"
              component="app-opportunities"
              exact={true}
            />
          </stencil-router>
        </main>

        <app-footer />
      </div>
    );
  }
}
