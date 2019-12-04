import { Component } from '@stencil/core';

@Component({
  tag: 'app-our-work',
  styleUrl: 'app-our-work.scss',
})
export class AppOurWork {
  render() {
    return (
      <div class="ourwork">
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 flex-column text">
                <h1>Our Work</h1>
                <h2>Each day we work to make our world better by design. Below you will find examples of projects that we've had the pleasure of working on.</h2>
              </div>
            </div>
          </div>
        </header>
        <app-cta />
        <app-footer />
      </div>
    );
  }
}
