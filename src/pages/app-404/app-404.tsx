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
            We've detected that you're using{' '}
            <b>
              <u>Internet Explorer</u>
            </b>; oh my is that an old browser!
          </p>

          <p>
            We highly recommend that you update your browser to Chrome, Firefox,
            Safari, or even{' '}
            <b>
              <u>Microsoft Edge.</u>
            </b>
          </p>
        </section>
        <app-footer />
      </div>
    );
  }
}
