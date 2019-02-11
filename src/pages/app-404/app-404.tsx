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
          <app-img src="/assets/forge.png" />

          <p>
            {' '}
            Utoh, we've detected that this page does not exist, or something
            else has gone wrong!{' '}
          </p>

          <p>
            It must be something to do with our awesomeness, the coolness of our
            apps, or some other equally awesome thing. Don't worry, we'll fix it
            soon but in the mean time feel free to email us at{' '}
            <a href="mailto:hello@openforge.io">hello@openforge.io</a>!
          </p>

          <p> Thank you for your business! </p>
        </section>
        <app-footer />
      </div>
    );
  }
}
