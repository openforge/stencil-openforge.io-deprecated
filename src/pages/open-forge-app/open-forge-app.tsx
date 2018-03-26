import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  navbarEl: HTMLElement;
  mainEl: HTMLElement;
  isScrolled = false;

  componentDidLoad() {
    this.navbarEl = document.querySelector('nav.navbar');
    this.mainEl = document.querySelector('main');
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
                  src="../../assets/logo-openforge.png"
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
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
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
          </stencil-router>
        </main>
      </div>
    );
  }
}
