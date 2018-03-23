import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  @Prop() match: MatchResults;

  render() {
    return (
      <div>
        {/* intro */}
        <section class="intro">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6 col-xl-5">
                <h2>We are thinkers, makers &amp; doers</h2>

                <p>
                  Work with our team of highly skilled consultants, developers,
                  and designers to develop solutions and processes to fit your
                  requirements.
                </p>

                <a class="text-uppercase" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* approach */}
        <section class="approach">
          <div class="container">
            <h2>
              <span>Our Approach</span>
              We use the latest technology to build your business. Let's show
              you how!
            </h2>

            <div class="row">
              <div class="content col-md-12 col-lg-4 d-flex">
                <div class="img-container">
                  <img
                    class="img-fluid"
                    src="../../assets/icon-chat.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>
                    <span>Firstly </span>Consulting
                  </h3>
                  <p>
                    Are you ready to challenge your assumptions? We'll help you
                    identify your goals and guide you along the way in 1:1 and
                    group sessions.
                  </p>
                </div>
              </div>
              <div class="content col-md-12 col-lg-4 d-flex">
                <div class="img-container">
                  <img
                    class="img-fluid"
                    src="../../assets/icon-mobile.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>
                    <span>Second </span>User experience design
                  </h3>
                  <p>
                    Whether you're looking to design an interactive user
                    interface or make improvements to your current app's user
                    experience, we're here to help.
                  </p>
                </div>
              </div>
              <div class="content col-md-12 col-lg-4 d-flex">
                <div class="img-container">
                  <img
                    class="img-fluid"
                    src="../../assets/icon-code.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>
                    <span>Lastly </span>Development
                  </h3>
                  <p>
                    We're experts in mobile and web app development. We
                    specialize in web technologies including Ionic, React,
                    Stencil, Angular, Node, MongoDB, and MySQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* cta-1 */}
        <section class="cta cta-1 bg-gradient-primary px-2 text-center text-white">
          <div class="d-sm-inline-flex d-md-flex flex-sm-column flex-md-row justify-content-center">
            <h2 class="mr-sm-0 mr-md-5">Need a team for your project?</h2>
            <button class="btn btn-primary align-self-center">
              Get in touch
            </button>
          </div>
        </section>

        {/* cta-2 */}
        <section class="cta cta-2 px-2 text-white text-center">
          <h2 class="mb-4">Ready to work with us?</h2>
          <p>Contact us now (or keep going) to learn more.</p>
          <hr />
          <button class="btn btn-primary">Contact us</button>
        </section>
      </div>
    );
  }
}
