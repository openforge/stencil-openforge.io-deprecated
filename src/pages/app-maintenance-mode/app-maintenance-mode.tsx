import { Component } from '@stencil/core';

@Component({
  tag: 'app-maintenance-mode',
  styleUrl: 'app-maintenance-mode.scss',
})
export class AppMaintenanceMode {
  render() {
    return (
      <div class="maintenance-mode container">
        <app-img
          class="member--image"
          src="/assets/logo-openforge-icon.png"
          alt="Openforge Logo"
        />
        <div class="text-container">
          <h1>Under Construction</h1>
          <p>
            Thank you for visiting us currently forging a new version of this of
            our site. If you would like to get in touch with us or hear about
            the awesome projects we are workng follow us here
          </p>
          <div class="social-links">
            <a
              href="https://www.facebook.com/OpenForgeUS/"
              target="_blank"
              rel="noopener"
            >
              <i class="fab fa-facebook-square" aria-hidden="true" />{' '}
              OpenForge_US
            </a>
            <a
              href="https://www.linkedin.com/company/openforge/"
              target="_blank"
              rel="noopener"
            >
              <i class="fab fa-linkedin" aria-hidden="true" /> OpenForge_US
            </a>
            <a
              href="https://twitter.com/OpenForge_US"
              target="_blank"
              rel="noopener"
            >
              <i class="fab fa-twitter-square" aria-hidden="true" />{' '}
              @OpenForge_US
            </a>
          </div>
          <button
            onClick={() => (location.href = 'mailto:hello@openForge.io')}
            class="btn btn-primary"
          >
            Email Us
          </button>
        </div>
      </div>
    );
  }
}
