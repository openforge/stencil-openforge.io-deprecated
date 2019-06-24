import { Component } from '@stencil/core';
declare var gtag;

@Component({
  tag: 'app-tos',
  styleUrl: 'app-tos.scss',
})
export class AppTOS {
  componentDidLoad() {
    gtag('config', 'UA-118169306-1', {
      page_title: document.title,
      page_path: window.location.pathname,
    });
  }

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
