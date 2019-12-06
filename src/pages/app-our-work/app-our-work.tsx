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
          <div class="container text-center">
            <div class="row align-items-center">
              <div class="col-12 ourworkb">
                <h1>Our Work</h1>
                <h2>Each day we work to make our world better by design. Below you will find examples of projects that we've had the pleasure of working on.</h2>
              </div>
            </div>
          </div>
        </header>
        <section class="work text-center container">
          <div class="cont">
            <div class="row">
              <div class="col-md-6 mobile-measures">
                <div class="img">
                  <div>
                    <div class="row">
                      <img src="/assets/mobile-measures.png" class="front-center" alt="vanlife app screenshot" />
                    </div>

                    <div class="store-buttons">
                      <a href="https://itunes.apple.com/us/app/the-vanlife-app/id1447689037?mt=8" target="_blank" rel="noopener" data-cy="vanlife-apple" />
                      <a href="https://play.google.com/store/apps/details?id=com.thevanlifeapp.vanlifeapp&hl=en" target="_blank" rel="noopener" data-cy="vanlife-google" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h2> Mobile Measures</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui erat, suscipit eu eros a, tincidunt pulvinar justo. Ut eget magna eros. Integer vitae consectetur risus. </p>
              </div>
            </div>
          </div>
          <div class="cont">
            <div class="row">
              <div class="col-md-6 loud-cloud">
                <div class="img">
                  <div>
                    <div class="row">
                      <img src="/assets/loudcloud.png" class="front-center" alt="vanlife app screenshot" />
                    </div>

                    <div class="store-buttons">
                      <a href="https://itunes.apple.com/us/app/the-vanlife-app/id1447689037?mt=8" target="_blank" rel="noopener" data-cy="vanlife-apple" />
                      <a href="https://play.google.com/store/apps/details?id=com.thevanlifeapp.vanlifeapp&hl=en" target="_blank" rel="noopener" data-cy="vanlife-google" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Loud Cloud</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui erat, suscipit eu eros a, tincidunt pulvinar justo. Ut eget magna eros. Integer vitae consectetur risus. </p>
              </div>
            </div>
          </div>
          <div class="cont">
            <div class="row full">
              <div class="col-md-6 voyage">
                <div class="img">
                  <div>
                    <div class="row">
                      <img src="/assets/voyage.png" class="front-center" alt="vanlife app screenshot" />
                    </div>

                    <div class="store-buttons">
                      <a href="https://itunes.apple.com/us/app/the-vanlife-app/id1447689037?mt=8" target="_blank" rel="noopener" data-cy="vanlife-apple" />
                      <a href="https://play.google.com/store/apps/details?id=com.thevanlifeapp.vanlifeapp&hl=en" target="_blank" rel="noopener" data-cy="vanlife-google" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h2>The Voyage</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui erat, suscipit eu eros a, tincidunt pulvinar justo. Ut eget magna eros. Integer vitae consectetur risus. </p>
              </div>
            </div>
          </div>
          <div class="cont">
            <div class="row full">
              <div class="col-md-6 digithermo">
                <div class="img">
                  <div>
                    <div class="row">
                      <img src="/assets/voyage.png" class="front-center" alt="vanlife app screenshot" />
                    </div>

                    <div class="store-buttons">
                      <a href="https://itunes.apple.com/us/app/the-vanlife-app/id1447689037?mt=8" target="_blank" rel="noopener" data-cy="vanlife-apple" />
                      <a href="https://play.google.com/store/apps/details?id=com.thevanlifeapp.vanlifeapp&hl=en" target="_blank" rel="noopener" data-cy="vanlife-google" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h2>DigiThermo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui erat, suscipit eu eros a, tincidunt pulvinar justo. Ut eget magna eros. Integer vitae consectetur risus. </p>
              </div>
            </div>
          </div>
        </section>
        <section class="services text-center">
          <h1>Who We've Worked With</h1>
          <div class="containerser">
            <div class="row r1">
              <div class="col-md-2">
                <app-img class="img-fluid" src="/assets/services-logo-bb.png" alt="BB Logo" />
              </div>
              <div class="col-md-2">
                <app-img class="img-fluid" src="/assets/services-logo-aeris.png" alt="Aeris Logo" />
              </div>
              <div class="col-md-2">
                <app-img class="img-fluid" src="/assets/services-logo-mobilemeasures.png" alt="Mobile Logo" />
              </div>
              <div class="col-md-2">
                <app-img class="img-fluid" src="/assets/services-logo-kemin.png" alt="Kemin Logo" />
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
