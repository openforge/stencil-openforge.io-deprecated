import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-detailed-services',
  styleUrl: 'app-detailed-services.scss',
})
export class AppDetailedServices {
  @Prop() match: MatchResults;

  render() {
    return (
      <section class="services">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <h2>We Are Passionate About Technology and Design</h2>
                <p>
                  We belive that your success is our success. We're here to
                  challengeyour assumptions and help you discover your web or
                  mobile applications full potential.
                </p>
              </div>
            </div>
          </div>
        </header>
        <section class="app-development">
          <h2>
            <app-translate
              key={`home.services.what.${this.match.params.service}`}
            />
          </h2>
          <p>
            <app-translate
              key={`home.services.what.${this.match.params.service}Text`}
            />
          </p>
        </section>
        <section class="our-toolbox">
          <h2>Our Toolbox</h2>
          <p>let us show you our skills in:</p>
          <div class="row">
            <div class="image-column col-sm-12 col-md-4">
              <h3>Angular</h3>
              <app-img
                class="img-fluid d-none d-md-inline"
                src="/assets/graphic-opportunities-phone1.png"
                alt=""
              />
            </div>
            <div class="image-column col-sm-12 col-md-4">
              <h3>Redux</h3>
              <app-img
                class="img-fluid d-none d-md-inline"
                src="/assets/graphic-opportunities-phone2.png"
                alt=""
              />
            </div>
            <div class="image-column col-sm-12 col-md-4">
              <h3>API Integration</h3>
              <app-img
                class="img-fluid d-none d-md-inline"
                src="/assets/graphic-opportunities-phone3.png"
                alt=""
              />
              <app-img
                class="img-fluid d-xs-inline d-md-none"
                src="/assets/graphic-opportunities-phone4.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section class="work-examples">
          <h2>Work Examples</h2>
          <div class="single-example">
            <app-img
              class=""
              src="/assets/graphic-home-voyage.png"
              alt="voyage-app-image"
            />
            <div class="single-example-text">
              <h2>Example</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin massa. Nunc sagittis tincidunt
                sapien at ornare. Vivamus tristique ullamcorper tincidunt. In a
                mauris porttitor, fermentum arcu vel, cursus sapien.
                Pellentesque convallis risus est, et interdum tellus egestas ut.
                Nam ac consequat mauris. Sed vulputate nisl vel leo mattis, et
                congue mi porttitor. In condimentum augue id neque ultricies,
                vitae ornare elit laoreet. Duis dignissim ut risus at accumsan.
                Integer non faucibus lorem. Phasellus rutrum, orci nec efficitur
                scelerisque, lectus arcu consequat nisl, eu sollicitudin velit
                tellus eu nulla. Nullam maximus ipsum sit amet diam rhoncus
                convallis. Mauris nulla nisl, accumsan at nisl id, consequat
                tempor augue.
              </p>
            </div>
          </div>
        </section>
        <section class="contact-us">
          <div class="container">
            <div class="jumbotron">
              <h2>Contact Us</h2>

              <form id="contact-form" novalidate={true}>
                <app-input
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
                  required={true}
                />

                <app-input
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  required={true}
                />

                <app-textarea
                  name="message"
                  label="Message"
                  rows={5}
                  required={true}
                />
                <button name="submit" type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <app-footer />
      </section>
    );
  }
}
