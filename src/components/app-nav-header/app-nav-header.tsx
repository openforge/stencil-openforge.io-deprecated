import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
  tag: 'app-nav-header',
  styleUrl: 'app-nav-header.scss',
})
export class AppNavHeader {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark align-items-lg-end fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <h1>
              <app-img
                class="img-fluid"
                src="assets/logo-openforge.png"
                alt="OpenForge"
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
                  exact={true}
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  About Us
                </stencil-route-link>
              </li>
              {/* <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/services"
                  exact={true}
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  Services
                </stencil-route-link>
              </li> */}
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/contact"
                  exact={true}
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  Contact
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/opportunities"
                  exact={true}
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
                  title="Openforge Github account"
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
