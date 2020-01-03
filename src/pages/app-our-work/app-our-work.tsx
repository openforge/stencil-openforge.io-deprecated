import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-our-work',
  styleUrl: 'app-our-work.scss',
})
export class AppOurWork {
  render() {
    return (
      <div class="our-work">
        <header>
          <section class="container">
            <h1>Our Work</h1>
            <p>Each day we work to make our world better by design. Below you will find examples of projects that we've had the pleasure of working on.</p>
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
              <h2>Mobile Measures</h2>
              <p>
                A Physical Therapist's brainchild; this app aims to help Physical Therapists keep track of their patients’ progress. Like many founders and entrepreneurs, Ben’s foray into the start-up
                world started with a simple idea: "There has to be a better way!"
              </p>
              <button>View Project</button>
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
              <h2>LoudCloud</h2>
              <p>
                This app was designed with privacy in mind. Users can receive and make calls through a temporary and disposable phone number; in over 40 countries! LoudCloud allows for more secure
                business and social interactions.
              </p>
              <button>View Project</button>
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
              <h2>The Voyage</h2>
              <p>
                Employers can now incentivize their employees to develop and commit to healthy habits thanks to New Ocean Health’s unique app. A company-wide social platform where employees can
                interact & challenge each other to reap the benefits.
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
              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-bb.png" alt="BB logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-aeris.png" alt="Aeris logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-mobilemeasures.png" alt="Mobile Measures logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-kemin.png" alt="Kemin logo" />
              </div>
            </div>

            <div class="row img-row">
              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid pad" src="/assets/services-logo-newocean.png" alt="New Ocean Health logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid pad" src="/assets/services-logo-wharton.png" alt="Wharton logo" />
              </div>
            </div>

            <div class="row img-row">
              <div class="col-md-2 col-6 center-col">
                <app-img class="img-fluid pad" src="/assets/services-logo-redqueen.jpg" alt="RedQueen logo" />
              </div>

              <div class="col-md-2 col-6 center-col">
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
