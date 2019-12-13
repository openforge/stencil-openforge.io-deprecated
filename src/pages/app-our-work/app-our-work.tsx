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
        <section class="services">
          <div class="row header container text-center">
            <div class="col-12">
              <h2>Who We've Worked With</h2>
            </div>
          </div>
          <div class="container text-center">

            <div class="row pad">
              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-bb.png" alt="BB logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-aeris.png" alt="Aeris logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-mobilemeasures.png" alt="Mobile Measures logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-kemin.png" alt="Kemin logo" />
              </div>
            </div>

            <div class="row pad">
              <div class="col-md-6 col-sm-12">
                <app-img class="img-fluid pad" src="/assets/services-logo-newocean.png" alt="New Ocean Health logo" />
              </div>

              <div class="col-md-6 col-sm-12">
                <app-img class="img-fluid pad" src="/assets/services-logo-wharton.png" alt="Wharton logo" />
              </div>
            </div>

            <div class="row pad">
              <div class="col-md-6 col-sm-12 align-right">
                <app-img class="img-fluid pad" src="/assets/services-logo-redqueen.jpg" alt="RedQueen logo" />
              </div>

              <div class="col-md-6 col-sm-12 align-left">
                <app-img class="img-fluid pad" src="/assets/services-logo-loudcloud.png" alt="LoudCloud logo" />
              </div>
            </div>
          </div>
        </section>
        <br />
        <app-cta />
        <app-footer />
      </div>
    );
  }
}
