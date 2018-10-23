import { Component } from '@stencil/core';
import {
  translate,
  TranslationService,
} from '../../services/translation.service';

@Component({
  tag: 'app-nav-header',
  styleUrl: 'app-nav-header.scss',
})
export class AppNavHeader {
  isMobile = navigator.userAgent.match(
    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
  );

  constructor() {
    const translationService = new TranslationService();
    translationService.init('en');
  }

  componentDidLoad() {
    const links: any = document.querySelectorAll(
      '.navbar li.dropdown a.dropdown-item'
    );
    links.forEach(link => {
      link.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      });
    });
  }

  render() {
    return (
      <nav class="navbar navbar-expand-xl navbar-dark align-items-lg-end fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <h1>
              <app-img
                class="img-fluid"
                src="/assets/logo-openforge.png"
                alt={translate('nav.header.img.alt')}
              />
            </h1>
          </div>
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

          <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/"
                  exact={true}
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  {translate('nav.links.home')}
                </stencil-route-link>
              </li>
              {this.isMobile === null ? (
                <li
                  class="nav-item dropdown"
                  data-target="#navbarSupportedContent"
                >
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <stencil-route-link
                      url="/services/app-developer"
                      anchorClass="nav-link dropdown-item"
                      activeClass="active"
                    >
                      Development
                    </stencil-route-link>
                    <stencil-route-link
                      url="/services/app-designer"
                      anchorClass="nav-link dropdown-item"
                      activeClass="active"
                    >
                      UX/UI Design
                    </stencil-route-link>
                    <stencil-route-link
                      url="/services/tech-consulting"
                      anchorClass="nav-link dropdown-item"
                      activeClass="active"
                    >
                      Consulting
                    </stencil-route-link>
                  </div>
                </li>
              ) : null}
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/about"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  {translate('nav.links.about')}
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/resources"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  Resources
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/contact"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  {translate('nav.links.contact')}
                </stencil-route-link>
              </li>
              <li
                class="nav-item dropdown"
                data-target="#navbarSupportedContent"
              >
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {translate('nav.links.opportunities')}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <stencil-route-link
                    url="/opportunities/develop"
                    anchorClass="nav-link dropdown-item"
                    activeClass="active"
                  >
                    Develop
                  </stencil-route-link>
                  <stencil-route-link
                    url="/opportunities/design"
                    anchorClass="nav-link dropdown-item"
                    activeClass="active"
                  >
                    Design
                  </stencil-route-link>
                </div>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/toolbox"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  Toolbox
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <a
                  class="nav-link"
                  href="https://github.com/openforge"
                  title={translate('nav.links.github')}
                  target="_blank"
                  rel="noopener"
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
