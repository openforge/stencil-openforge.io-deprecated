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
        {/* header - hero */}
        <app-hero
          link-url="/about"
          background-url="../../assets/bg-hero-woman-writing.jpg"
        >
          <span slot="header">We are thinkers, makers &amp; doers</span>
          <span slot="body">
            Work with our team of highly skilled consultants, developers, and
            designers to develop solutions and processes to fit your
            requirements.
          </span>
          <span slot="link">Learn More</span>
        </app-hero>

        {/* section - approach */}
        <section class="approach">
          <div class="container">
            <h2>
              <span class="small">Our Approach</span>
              We use the latest technology to build your business. Let's show
              you how!
            </h2>

            <div class="row">
              <div class="content col-sm-12 col-md-4">
                <i class="fa fa-comment-o" aria-hidden="true" />
                <h3>
                  <span class="small">First </span>Consulting
                </h3>
                <p>
                  Are you ready to challenge your assumptions? We'll help you
                  identify your goals and guide you along the way in 1:1 and
                  group sessions.
                </p>
              </div>
              <div class="content col-sm-12 col-md-4">
                <i class="fa fa-smile-o" aria-hidden="true" />
                <h3>
                  <span class="small">Second </span>User experience Design
                </h3>
                <p>
                  Whether you're looking to design an interactive user interface
                  or make improvements to your current app's user experience,
                  we're here to help.
                </p>
              </div>
              <div class="content col-sm-12 col-md-4">
                <i class="fa fa-code" aria-hidden="true" />
                <h3>
                  <span class="small">Third </span>Development
                </h3>
                <p>
                  We're experts in mobile and web app development. We specialize
                  in web technologies including Ionic, React, Stencil, Angular,
                  Node, MongoDB, and MySQL.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/about">
          <span slot="header">Need a team for your project?</span>
          <span slot="link">Get in touch</span>
        </app-cta>

        {/* section - process */}
        <section class="section process">
          <header class="d-flex flex-column justify-content-center">
            <h2>
              <span class="small">Our Process</span>
              Creative Solutions to Real World Problems
            </h2>
            <p>Our process is important to us and our clients</p>
            <button class="btn btn-primary btn-arrow">
              <i class="fa fa-arrow-down" aria-hidden="true" />
              <span class="sr-only">Down</span>
            </button>
          </header>

          <div class="container">
            <div class="row pb-xs-0 pb-sm-5 justify-content-around align-items-center">
              <div class="col-sm-12 col-md-4">
                <img
                  class="img-fluid"
                  src="../../assets/graphic-desktop-tablet-mobile.png"
                  alt=""
                />
              </div>
              <div class="content col-sm-12 col-md-7">
                <h3>Process Matters</h3>
                <p>
                  Our team specializes in providing enterprise quality software
                  for applications of all sizes. We believe that an inclusive
                  and collaborative approach to design and development is
                  essential for success. We'll guide you through brainstorming
                  sessions, sketch ideas, challenge assumptions, and find
                  creative solutions.
                </p>
              </div>
            </div>
            <div class="row py-5 d-flex flex-row-reverse justify-content-around align-items-center">
              <div class="col-sm-12 col-md-4">
                <img
                  class="img-fluid"
                  src="../../assets/graphic-computer-clock.png"
                  alt=""
                />
              </div>
              <div class="content col-sm-12 col-md-7">
                <h3>Design is important</h3>
                <p>
                  Great user experiences are a result of strategic planning and
                  collaborative design. We'll take your overall vision and goals
                  into account, along with our research findings. You'll also
                  work with our team of designers and developers to co-create
                  journey maps, sketches, and user flows.
                </p>
              </div>
            </div>
            <div class="row pt-xs-0 pt-sm-5 justify-content-around align-items-center">
              <div class="col-sm-12 col-md-4">
                <img
                  class="img-fluid"
                  src="../../assets/graphic-computer-clock.png"
                  alt=""
                />
              </div>
              <div class="content col-sm-12 col-md-7">
                <h3>We don't do fixed bids</h3>
                <p>
                  Because we charge by time and materials, our clients gain the
                  full flexibility of being able to change their requirements on
                  the fly to meet their business needs. Need to change scope?
                  Pause a project and resume later? We promise no fees or
                  contract changes; it's all built into the OpenForge way of
                  doing things.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/about">
          <span slot="header">Want more details on our process?</span>
          <span slot="link">Learn more</span>
        </app-cta>

        {/* section - development */}
        <section class="section development">
          <header class="d-flex flex-column justify-content-center">
            <h2>
              <span class="small">Our Development</span>
              Software You Can Always Trust
            </h2>
            <p>
              We find the right way to build you app and treat each project
              differently
            </p>
            <button class="btn btn-primary btn-arrow">
              <i class="fa fa-arrow-down" aria-hidden="true" />
              <span class="sr-only">Down</span>
            </button>
          </header>

          <div class="container">
            <div class="row pb-xs-0 pb-sm-5 justify-content-around align-items-center">
              <div class="col-sm-12 col-md-4">
                <img
                  class="img-fluid"
                  src="../../assets/graphic-info-tree.png"
                  alt=""
                />
              </div>
              <div class="content col-sm-12 col-md-7">
                <h3>Best architecture in town</h3>
                <p>
                  Don't believe us? Check out some of our open source
                  repositories. We require all of our team members to do
                  constant exercises in continuing their education as
                  developers, including practice in the latest architecture and
                  design paradigns released by the top minds world-wide.
                </p>
              </div>
            </div>
            <div class="row py-5 d-flex flex-row-reverse justify-content-around align-items-center">
              <div class="col-sm-12 col-md-4">
                <img
                  class="img-fluid"
                  src="../../assets/graphic-technology-check.png"
                  alt=""
                />
              </div>
              <div class="content col-sm-12 col-md-7">
                <h3>Technology to fit your business needs</h3>
                <p>
                  One size shoe does not fit all, and the same applies to
                  technology. We pick the tech stack who’s advantages best fit
                  your application. This allows us to utilize the best of each
                  different technology in order to aximize the results and
                  minimize the cost.
                </p>
              </div>
            </div>
            <div class="row pt-xs-0 pt-sm-5 justify-content-around align-items-center">
              <div class="col-sm-12 col-md-4">
                <img
                  class="img-fluid"
                  src="../../assets/graphic-pair-programming.png"
                  alt=""
                />
              </div>
              <div class="content col-sm-12 col-md-7">
                <h3>Paired programming at its finest</h3>
                <p>
                  Not only will you receive dedicated staff for the scope of
                  your project, but each team member at OpenForge is also
                  required to do code reviews and pair programming with our lead
                  Architects &amp; CTO. This assures that the work our team
                  delivers is always thought out and top-notch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/about">
          <span slot="header">Want to learn more about us?</span>
          <span slot="link">Get to know us</span>
        </app-cta>

        {/* footer */}
        <app-footer />
      </div>
    );
  }
}
