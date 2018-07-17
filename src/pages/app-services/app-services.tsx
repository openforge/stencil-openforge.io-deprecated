import { Component } from '@stencil/core';

@Component({
  tag: 'app-services',
  styleUrl: 'app-services.scss',
})
export class AppServices {
  render() {
    return (
      <section class="services">
        <div class="">
          <div class="services--header">
            <h2>What do we provide?</h2>
            <p>
              Whether you are a start up, an enterprise, or somewhere in
              between, we will work with you every step of the way. Choose your
              path below to learm more about our custom services.
            </p>
          </div>

          <div class="services--tab-panel">
            <nav class="nav" role="navigation">
              <div class="nav nav-tabs nav-fill" id="nav-tab">
                <a
                  class="nav-item nav-link active"
                  id="nav-startup-tab"
                  data-toggle="tab"
                  href="#nav-startup"
                  role="tab"
                  aria-controls="nav-startup"
                  aria-selected="true"
                >
                  <figure>
                    <img
                      class="img-fluid"
                      src="assets/graphic-services-startup.png"
                      alt=""
                    />
                    <figcaption>Start Up</figcaption>
                  </figure>
                </a>

                <a
                  class="nav-item nav-link"
                  id="nav-smallteam-tab"
                  data-toggle="tab"
                  href="#nav-smallteam"
                  role="tab"
                  aria-controls="nav-smallteam"
                  aria-selected="false"
                >
                  <figure>
                    <img
                      class="img-fluid"
                      src="assets/graphic-services-small.png"
                      alt=""
                    />
                    <figcaption>Small Team</figcaption>
                  </figure>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-midteam-tab"
                  data-toggle="tab"
                  href="#nav-midteam"
                  role="tab"
                  aria-controls="nav-midteam"
                  aria-selected="false"
                >
                  <figure>
                    <img
                      class="img-fluid"
                      src="assets/graphic-services-midsize.png"
                      alt=""
                    />
                    <figcaption>Mid-Size Team</figcaption>
                  </figure>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-enterprise-tab"
                  data-toggle="tab"
                  href="#nav-enterprise"
                  role="tab"
                  aria-controls="nav-enterprise"
                  aria-selected="false"
                >
                  <figure>
                    <img
                      class="img-fluid"
                      src="assets/graphic-services-enterprise.png"
                      alt=""
                    />
                    <figcaption>Enterprise</figcaption>
                  </figure>
                </a>
              </div>
            </nav>

            <div class="tab-content services--panel" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-startup"
                role="tabpanel"
                aria-labelledby="nav-startup-tab"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6 mb-5 mb-5">
                    <h3> What you need: </h3>
                    Bring your idea to life with our team of experts in Design,
                    UI/UX, Web, and Mobile Application Development. We don't
                    just 'build it', we sit with you to answer the question of
                    how the technology and psychology behind the design will
                    match your business model. Our experience with 100+ Startups
                    becomes your experience as we take you through the next
                    level of Startup Consulting.
                  </div>
                  <div class="col-sm-12 offset-md-1 col-md-5">
                    <h3>What we provide:</h3>
                    <ul>
                      <li>Startup Consulting</li>
                      <li>Enhanced Mobile &amp; Web Designs</li>
                      <li>UI/UX Audits &amp; Recommendations </li>
                      <li>Mobile Application Development</li>
                      <li>Web Application Development</li>
                      <li>Customer Engagement Consulting</li>
                      <li>Guerilla Marketing Strategy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-smallteam"
                role="tabpanel"
                aria-labelledby="nav-smallteam-tab"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6 mb-5">
                    <h3> What you need: </h3>
                    You have a small team and successful company, you've proven
                    your business model and have enough revenue to sustain;
                    however, you are struggling with accelerating growth and
                    would like to utilize technology to skyrocket your business.
                    You're nervous (and rightly so!), because you've never built
                    a technology product before. Fear not! We are here to help.
                    Let us guide you on ins-and-outs of Product Development and
                    help you determine <b>HOW and IF</b> you should be building
                    an app. Sometimes, it's much better to use an existing
                    service!
                  </div>
                  <div class="col-sm-12 offset-md-1 col-md-5">
                    <h3>What we provide:</h3>
                    <ul>
                      <li>Business Consulting</li>
                      <li>Technical Consulting</li>
                      <li>Business Elligibility Audit</li>
                      <li>Mobile &amp; Web Designs</li>
                      <li>UI/UX Audits </li>
                      <li>Mobile & Web Application Development</li>
                      <li>Customer Engagement Strategy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-midteam"
                role="tabpanel"
                aria-labelledby="nav-midteam-tab"
              >
                <div class="services-content">
                  <div class="row">
                    <div class="col-sm-12 col-md-6 mb-5">
                      <h3> What you need: </h3>
                      You have an established business and risks cost money.
                      You're looking for a team you can trust to get the job
                      done right the first time. That's us. We work with your
                      team to evaluate your business goals, develop a plan of
                      attack, and execute in order to deliver your results on
                      budget, but mostly importantly, on time. We can provide
                      support to your existing infrastructure, provide CTO
                      services to guide your existing teams, or build your
                      product start-finish without unneccessary supervision.
                      Whatever you need, we're here.
                    </div>
                    <div class="col-sm-12 offset-md-1 col-md-5">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Business Strategy &amp; Consulting</li>
                        <li>Professional Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Strategic Customer Engagement Consulting</li>
                        <li>Team Trainings &amp; Workshops</li>
                        <li>Process Improvement Training</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-enterprise"
                role="tabpanel"
                aria-labelledby="nav-enterprise-tab"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6 mb-5">
                    <h3> What you need: </h3>
                    Our Enterprise clients have world-wide goals; but often need
                    the agility and flexibility of a small team in order to
                    accomplish those goals and bypass the corporate red-tape.
                    For these clients, we offer tailored solutions to fit your
                    needs. If you have an existing team of Designers and
                    Developers, but they have difficulty communicating and often
                    miss deadlines and go over budget; we provide training and
                    workshops to increase cross-disciplinary communication. For
                    products that have spiraled out of control; we come in and
                    fix the physical (design &amp; dev), but also the systematic
                    problems such as team communication and design to
                    development process improvement.
                  </div>
                  <div class="col-sm-12 offset-md-1 col-md-5">
                    <h3>What we provide:</h3>
                    <ul>
                      <li>Enterprise Design Workshops</li>
                      <li>Cross-Disciplinary Team Training</li>
                      <li>External Consulting &amp; Process Improvement</li>
                      <li>User Experience (UI/UX) Audits</li>
                      <li>Web Accessability Audits</li>
                      <li>Mobile &amp; Web Application Services</li>
                      <li>Customer Engagement Strategy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <app-footer />
      </section>
    );
  }
}
