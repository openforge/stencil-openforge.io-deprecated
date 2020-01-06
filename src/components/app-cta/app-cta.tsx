import { Component, h } from '@stencil/core';

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
              <app-translate keyword="cta.title" />
            </h2>
            <h3>
              <app-translate keyword="cta.subTitle" />
            </h3>
            {/* <h2>
              <app-translate keyword="cta.text" />
            </h2> */}

            <stencil-route-link url="/contact">
              <button class="btn btn-primary">
                <app-translate keyword="cta.link" />
              </button>
            </stencil-route-link>
          </div>
        </div>
      </section>
    );
  }
}
