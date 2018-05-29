import { Component, Listen } from '@stencil/core';
@Component({
  tag: 'app-nav-header',
  styleUrl: 'app-nav-header.scss',
})
export class AppNavHeader {
  mainEl: HTMLElement;
  navbarEl: HTMLElement;
  isScrolled = false;

  componentDidLoad() {
    try {
      this.mainEl = document.querySelector('main');
      this.navbarEl = document.querySelector('nav.navbar');
    } catch (e) {
      console.error('caught error ', e);
    }
  }

  @Listen('window:scroll')
  handleScroll() {
    this.setIsScrolled();
    if (this.isScrolled && !this.navbarEl.classList.contains('background')) {
      // this.navbarEl.classList.add('background');
    } else if (!this.isScrolled) {
      // this.navbarEl.classList.remove('background');
    }
  }

  setIsScrolled() {
    const dimensions = this.mainEl.getBoundingClientRect();
    this.isScrolled = dimensions.top < 0;
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark align-items-lg-end fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <h1>
              <img
                class="img-fluid"
                src="assets/logo-openforge.png"
                alt="OpenForge"
              />
            </h1>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/"
                  exact={true}
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  Home
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/about"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  About
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/contact"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  Contact
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/opportunities"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  Opportunities
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <a
                  class="nav-link"
                  href="https://github.com/openforge"
                  target="_blank"
                >
                  <div class="fab fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
