import { Component } from '@stencil/core';

@Component({
  tag: 'app-cta',
  styleUrl: 'app-cta.scss',
})
export class AppCta {

  render() {
    return (
      <section id="cta" class="cta">
        <div class="row">
          <div class="col-md-6 col-sm-12 text-center cta-image" />

          <div class="col-md-6 col-sm-12 align-self-center text-center cta-text">
            <h2>
              <app-translate key="cta.title" />
            </h2>
            <p>
              <app-translate key="cta.subTitle" />
            </p>
            <h2>
              <app-translate key="cta.text" />
            </h2>

            <stencil-route-link url="/contact">
              <button class="btn btn-primary mt-md-4 mt-sm-1">
                <app-translate key="cta.link" />
              </button>
            </stencil-route-link>
          </div>
        </div>
      </section>
    );
  }
}
