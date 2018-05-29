import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  componentDidLoad() {
    let hrefArray;
    try {
      hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
      hrefArray.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
        });
      });
    } catch (e) {
      console.error('caught error componentDidLoad app-home', e);
    }
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero-home>
          <span slot="header">We are Thinkers. Makers. Doers.</span>
          <span slot="body">
            Work with our team of highly skilled designers, developers, and
            consultants to develop solutions and processes that fit your
            business requirements.
          </span>
          <span slot="link">Let's Get Started</span>
        </app-hero-home>

        {/* section - services */}
        <section id="services">
          <div class="container services">
            <h2>What do we provide?</h2>
            <p>
              Whether you are a start up, an enterprise, or somewhere in
              between, we will work with you every step of the way. Choose your
              path below to learm more about our custom services.
              {/* Technology is constantly changing; Let us help you change with it. */}
            </p>
            <nav class="nav">
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-startup-tab"
                  data-toggle="tab"
                  href="#nav-startup"
                  role="tab"
                  aria-controls="nav-startup"
                  aria-selected="true"
                >
                  Start Up
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
                  Small Team
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
                  Mid-Size Team
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
                  Enterprise
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-startup"
                role="tabpanel"
                aria-labelledby="nav-startup-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3> What you need: </h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed odio non turpis volutpat suscipit. Duis rutrum
                      fringilla scelerisque. Duis eget ex faucibus, egestas eros
                      non, fermentum ex. Quisque lobortis venenatis metus, vitae
                      ornare turpis. Phasellus sed convallis dolor. Fusce in
                      ante vitae nisl porta vestibulum vel eget tellus. Quisque
                      varius in felis ut pulvinar. Donec aliquet, nisi eget
                      tempor accumsan, risus felis viverra tortor, eget euismod
                      metus risus ac velit.
                    </div>

                    <div class="col-md-4">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                        <li>Guerilla Marketing Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-smallteam"
                role="tabpanel"
                aria-labelledby="nav-smallteam-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3> What you need: </h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed odio non turpis volutpat suscipit. Duis rutrum
                      fringilla scelerisque. Duis eget ex faucibus, egestas eros
                      non, fermentum ex. Quisque lobortis venenatis metus, vitae
                      ornare turpis. Phasellus sed convallis dolor. Fusce in
                      ante vitae nisl porta vestibulum vel eget tellus. Quisque
                      varius in felis ut pulvinar. Donec aliquet, nisi eget
                      tempor accumsan, risus felis viverra tortor, eget euismod
                      metus risus ac velit.
                    </div>

                    <div class="col-md-4">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                        <li>Guerilla Marketing Strategy</li>
                      </ul>
                    </div>
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
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3> What you need: </h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed odio non turpis volutpat suscipit. Duis rutrum
                      fringilla scelerisque. Duis eget ex faucibus, egestas eros
                      non, fermentum ex. Quisque lobortis venenatis metus, vitae
                      ornare turpis. Phasellus sed convallis dolor. Fusce in
                      ante vitae nisl porta vestibulum vel eget tellus. Quisque
                      varius in felis ut pulvinar. Donec aliquet, nisi eget
                      tempor accumsan, risus felis viverra tortor, eget euismod
                      metus risus ac velit.
                    </div>

                    <div class="col-md-4">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                        <li>Guerilla Marketing Strategy</li>
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
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3> What you need: </h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed odio non turpis volutpat suscipit. Duis rutrum
                      fringilla scelerisque. Duis eget ex faucibus, egestas eros
                      non, fermentum ex. Quisque lobortis venenatis metus, vitae
                      ornare turpis. Phasellus sed convallis dolor. Fusce in
                      ante vitae nisl porta vestibulum vel eget tellus. Quisque
                      varius in felis ut pulvinar. Donec aliquet, nisi eget
                      tempor accumsan, risus felis viverra tortor, eget euismod
                      metus risus ac velit.
                    </div>

                    <div class="col-md-4">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                        <li>Guerilla Marketing Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section - process */}
        <section id="process" class="bg-gray">
          <div class="container process">
            <h2>Our Process</h2>

            <img
              class="img-fluid"
              src="assets/graphic-home-process.png"
              alt="We start with Discovery, then onto Design and Development Consulting, Development, Launch and User Feedback"
            />
          </div>
        </section>

        {/* section - divider */}
        <app-cta hideButton={true}>
          <span slot="header">See what makes us different</span>
        </app-cta>

        {/* section - approach */}
        <section class="bg-gray">
          <div class="container approach">
            <content-graphic
              img-url="assets/graphic-home-code.png"
              reverse={true}
            >
              <h3 slot="header">Get Technical</h3>
              <p slot="body">
                We're experts in mobile and web app development. We specialize
                in web technologies including Ionic, React, Stencil, Angular,
                Node, MongoDB, and MySQL.
              </p>
            </content-graphic>

            <content-graphic img-url="assets/graphic-home-devices.png">
              <h3 slot="header">Process Matters</h3>
              <p slot="body">
                Our team specializes in providing enterprise quality software
                for applications of all sizes. We believe that an inclusive and
                collaborative approach to design and development is essential
                for success. We'll guide you through brainstorming sessions,
                sketch ideas, challenge assumptions, and find creative
                solutions.
              </p>
            </content-graphic>

            <content-graphic
              img-url="assets/graphic-home-design.png"
              reverse={true}
            >
              <h3 slot="header">Design is important</h3>
              <p slot="body">
                Great user experiences are a result of strategic planning and
                collaborative design. We'll take your overall vision and goals
                into account, along with our research findings. You'll also work
                with our team of designers and developers to co-create journey
                maps, sketches, and user flows.
              </p>
            </content-graphic>

            <content-graphic img-url="assets/graphic-home-computer.png">
              <h3 slot="header">We don't do fixed bids</h3>
              <p slot="body">
                Because we charge by time and materials, our clients gain the
                full flexibility of being able to change their requirements on
                the fly to meet their business needs. Need to change scope?
                Pause a project and resume later? We promise no fees or contract
                changes; it's all built into the OpenForge way of doing things.
              </p>
            </content-graphic>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/about">
          <span slot="header">Want to learn more about us?</span>
          <span slot="link">Get to know us</span>
        </app-cta>
      </div>
    );
  }
}
