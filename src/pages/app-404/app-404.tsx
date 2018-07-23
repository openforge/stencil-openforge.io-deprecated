import { Component } from '@stencil/core';

@Component({
  tag: 'app-404',
  styleUrl: 'app-404.scss',
})
export class App404 {
  render() {
    return (
      <div class="no-page">
        <section class="container">
          <img src="/assets/forge.png" />

          <p>
            {' '}
            We've detected that you're using Internet Explorer; oh my is that an
            old browser!
          </p>

          <p>
            Our Website utilizes the latest PWA (Progressive Web App)
            technologies and we knowingly (and proudly) do not support Internet
            Explorer. We highly recommend that you update your browser to
            Chrome, Firefox, Safari, or even Microsoft Edge.
          </p>
        </section>
        <app-footer />
      </div>
    );
  }
}
