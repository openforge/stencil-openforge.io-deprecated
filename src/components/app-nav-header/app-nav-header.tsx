import { Component, h } from '@stencil/core';
import { translate, TranslationService } from '../../services/translation.service';

@Component({
  tag: 'app-nav-header',
  styleUrl: 'app-nav-header.scss',
})
export class AppNavHeader {
  isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

  constructor() {
    const translationService = new TranslationService();
    translationService.init('en');
  }

  componentDidLoad() {
    const links: any = document.querySelectorAll('.navbar li.dropdown a.dropdown-item');
    links.forEach(link => {
      link.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      });
    });

    this.toogleSearch('hidden');
  }

  toogleSearch(value: string, pageChanged = false) {
    if (value === 'hidden') {
      document.querySelector('open-forge-app').style.position = 'initial';
      if (!pageChanged) {
        const scrollY = document.querySelector('open-forge-app').style.top;
        document.querySelector('open-forge-app').style.position = '';
        document.querySelector('open-forge-app').style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    } else {
      const scrollY = window.scrollY;
      document.querySelector('open-forge-app').style.position = 'fixed';
      document.querySelector('open-forge-app').style.top = `-${scrollY}px`;
      window.scrollTo(0, 0);
      setTimeout(() => document.getElementById('blog-search').focus());
    }

    document.querySelector('app-search-results').style.visibility = value;
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg align-items-lg-end fixed-top navbar-light">
          <div class="container">
            <div class="navbar-brand">
              <stencil-route-link tabindex="0" url="/" exact={true} anchorClass="nav-link" activeClass="active">
                <h1>
                  <app-img class="img-fluid" src="/assets/logo-openforge.png" alt={translate('nav.header.img.alt')} />
                </h1>
              </stencil-route-link>
            </div>
            <button
              class="navbar-toggler"
              data-cy="burgerMenu"
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
              <ul class="navbar-nav">
                <li class="nav-item" data-target="#navbarSupportedContent">
                  <stencil-route-link url="/our-work" exact={true} anchorClass="nav-link" activeClass="active">
                    {translate('nav.links.ourWork')}
                  </stencil-route-link>
                </li>
                <li class="nav-item dropdown" data-target="#navbarSupportedContent">
                  <a href="" class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {translate('nav.links.resources')}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                    <stencil-route-link url="/blog" anchorClass="nav-link dropdown-item" activeClass="active">
                      Blog
                    </stencil-route-link>
                    {/* <stencil-route-link url="/forge" anchorClass="nav-link dropdown-item" activeClass="active">
                      The Forge
                    </stencil-route-link> */}
                    <a class="nav-link" id="github" href="https://github.com/openforge" title={translate('nav.links.github')} target="_blank" rel="noopener">
                      Github
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown" data-target="#navbarSupportedContent">
                  <a href="" class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {translate('nav.links.about')}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                    <stencil-route-link url="/about" anchorClass="nav-link dropdown-item" activeClass="active">
                      Meet the Team
                    </stencil-route-link>
                    {/* <stencil-route-link url="/process" anchorClass="nav-link dropdown-item" activeClass="active">
                      Our Process
                    </stencil-route-link> */}
                    <stencil-route-link url="/partners" anchorClass="nav-link dropdown-item" activeClass="active">
                      Partners
                    </stencil-route-link>
                  </div>
                </li>
                <li class="nav-item contact-us-button" data-target="#navbarSupportedContent">
                  <stencil-route-link url="/contact" anchorClass="nav-link contact-us" activeClass="active">
                    {translate('nav.links.workWithUs')}
                  </stencil-route-link>
                </li>
                <li class="nav-item search d-none d-lg-block" data-target="#navbarSupportedContent" onClick={() => this.toogleSearch('visible')}>
                  <i class="fa fa-search" />
                </li>
                <li
                  class="nav-item search-bar d-md-block d-lg-none"
                  data-target="#navbarSupportedContent"
                  data-toggle="collapse"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  onClick={() => this.toogleSearch('visible')}
                >
                  <input type="text" placeholder="Type to search content..." class="search-input" />
                  <div class="search-icon">
                    <i class="fa fa-search" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <app-search-results onClose={ev => this.toogleSearch('hidden', ev.detail.pageChanged)} />
      </div>
    );
  }
}
