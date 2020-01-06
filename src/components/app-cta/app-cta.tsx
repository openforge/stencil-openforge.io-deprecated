import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-cta',
  styleUrl: 'app-cta.scss',
})

export class AppCta {
  render() {
    return (
      <div id="cta" class="cta">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 text-center cta-image" />
            <div class="col-md-6 col-sm-12 align-self-center text-center cta-text">
              <h2>
                <app-translate keyword="cta.title" />
              </h2>
              <p>
                <app-translate keyword="cta.subTitle" />
              </p>
              <h2>
                <app-translate keyword="cta.text" />
              </h2>
              <stencil-route-link url="/contact">
                <button class="button">
                  <app-translate keyword="cta.link" />
                </button>
              </stencil-route-link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}