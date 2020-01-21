import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-our-work',
  styleUrl: 'app-our-work.scss',
})
export class AppOurWork {
  render() {
    return (
      <div id="contentStart" class="our-work">
        <header>
          <section class="container">
            <h1>
              <app-translate keyword="ourWork.header.title" />
            </h1>
            <p>
              <app-translate keyword="ourWork.header.text" />
            </p>
          </section>
        </header>
        <section class="container">
          <div class="card-container">
            <div class="card-image mobilemeasures">
              <div class="row card-image-row">
                <img src="/assets/apps/mobilemeasures/graphic-example-1.png" class="behind-left" alt="mobile measures app screenshot" />
                <img src="/assets/apps/mobilemeasures/graphic-example-2.png" class="front-center" alt="mobile measures app screenshot" />
                <img src="/assets/apps/mobilemeasures/graphic-example-3.png" class="behind-right" alt="mobile measures app screenshot" />
              </div>
              <div class="store-buttons">
                <a href="https://apps.apple.com/us/app/mobile-measures/id1440639312" target="_blank" rel="noopener" data-cy="mobilemeasures-apple">
                  <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.mobilemeasuresllc.mobilemeasures" target="_blank" rel="noopener" data-cy="mobilemeasures-google">
                  <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                </a>
              </div>
            </div>
            <div class="card-content">
              <h2>
                <app-translate keyword="ourWork.cards.mobile_measures.title" />
              </h2>
              <p>
                <app-translate keyword="ourWork.cards.mobile_measures.text" />
              </p>
              <stencil-route-link url="/our-work-single/mobilemeasures" exact={true}>
                <button>
                  <app-translate keyword="ourWork.cards.button" />
                </button>
              </stencil-route-link>
            </div>
          </div>
        </section>
        <section class="container">
          <div class="card-container">
            <div class="card-image loudcloud">
              <div class="row card-image-row">
                <img src="/assets/apps/loudcloud/graphic-example-1.png" class="behind-left" alt="loudcloud app screenshot" />
                <img src="/assets/apps/loudcloud/graphic-example-2.png" class="front-center" alt="loudcloud app screenshot" />
                <img src="/assets/apps/loudcloud/graphic-example-3.png" class="behind-right" alt="loudcloud app screenshot" />
              </div>
              <div class="store-buttons">
                <a href="https://itunes.apple.com/us/app/loudcloud-disposable-numbers/id723331666?mt=8" target="_blank" rel="noopener" data-cy="loudcloud-apple">
                  <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.ignitras.loudcloud&hl=en" target="_blank" rel="noopener" data-cy="loudcloud-google">
                  <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                </a>
              </div>
            </div>
            <div class="card-content">
              <h2>
                <app-translate keyword="ourWork.cards.loudcloud.title" />
              </h2>
              <p>
                <app-translate keyword="ourWork.cards.loudcloud.text" />
              </p>
              <stencil-route-link url="/our-work-single/loudcloud" exact={true}>
                <button>
                  <app-translate keyword="ourWork.cards.button" />
                </button>
              </stencil-route-link>
            </div>
          </div>
        </section>
        <section class="container">
          <div class="card-container">
            <div class="card-image voyage">
              <div class="row card-image-row">
                <img src="/assets/apps/voyage/graphic-example-1.png" class="behind-left" alt="voyage app screenshot" />
                <img src="/assets/apps/voyage/graphic-example-2.png" class="front-center" alt="voyage app screenshot" />
                <img src="/assets/apps/voyage/graphic-example-3.png" class="behind-right" alt="voyage app screenshot" />
              </div>
              <div class="store-buttons">
                <a href="https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8" target="_blank" rel="noopener" data-cy="voyage-apple">
                  <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile" target="_blank" rel="noopener" data-cy="voyage-google">
                  <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                </a>
              </div>
            </div>
            <div class="card-content">
              <h2>
                <app-translate keyword="ourWork.cards.voyage.title" />
              </h2>
              <p>
                <app-translate keyword="ourWork.cards.voyage.text" />
              </p>
              <stencil-route-link url="/our-work-single/voyage" exact={true}>
                <button>
                  <app-translate keyword="ourWork.cards.button" />
                </button>
              </stencil-route-link>
            </div>
          </div>
        </section>
        <section id="worked-with" class="worked-with">
          <div class="container text-center">
            <div class="row header">
              <div class="col-12">
                <h2>
                  <app-translate keyword="ourWork.worked_with" />
                </h2>
              </div>
            </div>

            <div class="row img-row">
              <div class="col-md-2 col-6 center-col">
                <img class="img-fluid no-pad" src="/assets/our-work/ic3401-logo.png" alt="ic 3401 logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid no-pad" src="/assets/our-work/omnifan-logo.png" alt="Omnifan logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid no-pad" src="/assets/our-work/mobilemeasures-logo.png" alt="Mobile Measures logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid no-pad" src="/assets/our-work/kemin-logo.png" alt="Kemin logo" />
              </div>
            </div>

            <div class="row img-row">
              <div class="col-md-3 col-6 center-col">
                <app-img class="img-fluid pad" src="/assets/our-work/new-ocean-health-logo.png" alt="New Ocean Health logo" />
              </div>

              <div class="col-md-3 col-6 center-col">
                <app-img class="img-fluid pad" src="/assets/our-work/gomerchant-logo.png" alt="GoMerchang logo" />
              </div>
            </div>

            <div class="row img-row">
              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid pad" src="/assets/our-work/ngatl-logo.png" alt="NGATL logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid pad" src="/assets/our-work/loudcloud-logo.png" alt="LoudCloud logo" />
              </div>
            </div>
          </div>
        </section>
        <app-cta />
        <app-footer />
      </div>
    );
  }
}
