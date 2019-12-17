import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-our-work',
  styleUrl: 'app-our-work.scss',
})
export class AppOurWork {
  render() {
    return (
      <div class="our-work">
        <header class="container">
          <h1>Our Work</h1>
          <p>Each day we work to make our world better by design. Below you will find examples of projects that we've had the pleasure of working on.</p>
        </header>
        <section class="container">
          <div class="card-container">
            <div class="card-image mobilemeasures">
              <div class="row">
                <img src="/assets/apps/mobilemeasures/graphic-example-1.png" class="behind-left" alt="mobil emeasures app screenshot" />
                <img src="/assets/apps/mobilemeasures/graphic-example-2.png" class="front-center" alt="mobile measures app screenshot" />
                <img src="/assets/apps/mobilemeasures/graphic-example-3.png" class="behind-right" alt="mobile measures app screenshot" />
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
              <h2>Mobile Measures</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </p>
              <button>View Project</button>
            </div>
          </div>
        </section>
        <section class="container">
          <div class="card-container">
            <div class="card-image loudcloud">
              <div class="row">
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
              <h2>LoudCloud</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </p>
              <button>View Project</button>
            </div>
          </div>
        </section>
        <section class="container">
          <div class="card-container">
            <div class="card-image voyage">
              <div class="row">
                <img src="/assets/apps/voyage/graphic-example-1.png" class="behind-left" alt="voyage app screenshot" />
                <img src="/assets/apps/voyage/graphic-example-2.png" class="front-center" alt="voyage app screenshot" />
                <img src="/assets/apps/voyage/graphic-example-3.png" class="behind-right" alt="voyage app screenshot" />
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
              <h2>The Voyage</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </p>
              <button>View Project</button>
            </div>
          </div>
        </section>
        <section id="worked-with" class="worked-with">
          <div class="container text-center">
            <div class="row header">
              <div class="col-12">
                <h2>Who We've Worked With</h2>
              </div>
            </div>

            <div class="row img-row">
              <div class="col-md-2 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-bb.png" alt="BB logo" />
              </div>

              <div class="col-md-2 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-aeris.png" alt="Aeris logo" />
              </div>

              <div class="col-md-2 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-mobilemeasures.png" alt="Mobile Measures logo" />
              </div>

              <div class="col-md-2 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-kemin.png" alt="Kemin logo" />
              </div>
            </div>

            <div class="row img-row">
              <div class="col-md-2 col-sm-12">
                <app-img class="img-fluid pad" src="/assets/services-logo-newocean.png" alt="New Ocean Health logo" />
              </div>

              <div class="col-md-2 col-sm-12">
                <app-img class="img-fluid pad" src="/assets/services-logo-wharton.png" alt="Wharton logo" />
              </div>
            </div>

            <div class="row img-row">
              <div class="col-md-2 col-sm-12 align-right">
                <app-img class="img-fluid pad" src="/assets/services-logo-redqueen.jpg" alt="RedQueen logo" />
              </div>

              <div class="col-md-2 col-sm-12 align-left">
                <app-img class="img-fluid pad" src="/assets/services-logo-loudcloud.png" alt="LoudCloud logo" />
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
