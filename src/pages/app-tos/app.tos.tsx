import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-tos',
  styleUrl: 'app-tos.scss',
})
export class AppTOS {
  componentDidLoad() {}

  render() {
    return (
      <div class="terms-of-service">
        <section class="container">
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vSCOEP_k68YrVKq9tkxSrks-cIoP1pRavN39B52GrSNyEEHtzXIWF5xpIgbw_GKa-5tgxklgPA_xzlr/pub?embedded=true" />
        </section>
        <app-footer />
      </div>
    );
  }
}
