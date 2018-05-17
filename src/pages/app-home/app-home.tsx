import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  componentDidLoad() {
    const hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
    hrefArray.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero
          link-url="mailto:hello@openforge.io"
          background-url="assets/bg-hero-woman-writing.jpg"
        >
          <span slot="header">We are thinkers, makers &amp; doers</span>
          <span slot="body">
            Work with our team of highly skilled consultants, developers, and
            designers to develop solutions and processes to fit your
            requirements.
          </span>
          <span slot="link">Learn More</span>
        </app-hero>

        {/* section - services */}
        <section>
          <div class="container services">
            <h2>
              <span class="small">Our Services</span>
              What do we provide?
            </h2>
            <p>
              Whether you are a start up or an enterprise, we will work with you
              every step of the way. <br class="d-none d-md-block" />
              Choose your path below to learn more about our custom services:
            </p>

            <div class="services-selections">
              <a href="#startup">
                <figure>
                  <img
                    class="img-fluid"
                    src="assets/graphic-home-startup.png"
                    alt=""
                  />
                  <figcaption>Start Up</figcaption>
                </figure>
              </a>

              <a href="#enterprise">
                <figure>
                  <img
                    class="img-fluid"
                    src="assets/graphic-home-enterprise.png"
                    alt=""
                  />
                  <figcaption>Enterprise</figcaption>
                </figure>
              </a>
            </div>
          </div>
        </section>

        {/* section - startup */}
        <section id="startup" class="bg-gray">
          <div class="container services">
            <h2>
              <span class="small">Our Services</span>
              Start Up Services
            </h2>

            <div class="services-content">
              <img
                class="img-fluid"
                src="assets/graphic-home-startup.png"
                alt=""
              />
              <ul>
                <li>Business Consulting</li>
                <li>Pitch Decks</li>
                <li>Clickable Prototypes</li>
                <li>Mobile &amp; Web App Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>

            <div class="text-center">
              <button class="btn btn-primary">
                Learn more<br class="d-xs-block d-sm-block d-md-none" /> about
                our process
              </button>
            </div>
          </div>
        </section>

        {/* section - enterprise */}
        <section id="enterprise">
          <div class="container services">
            <h2>
              <span class="small">Our Services</span>
              Enterprise Services
            </h2>

            <div class="services-content flex-row-reverse">
              <img
                class="img-fluid"
                src="assets/graphic-home-enterprise.png"
                alt=""
              />
              <ul>
                <li>UI Design &amp; UX Audit</li>
                <li>Enterprise Training</li>
                <li>Workshops</li>
                <li>Process Improvement</li>
                <li>Software Development Services</li>
              </ul>
            </div>

            <div class="text-center">
              <button class="btn btn-primary">
                Learn more<br class="d-xs-block d-sm-block d-md-none" /> about
                our process
              </button>
            </div>
          </div>
        </section>

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
        <app-cta link-url="mailto:hello@openforge.io">
          <span slot="header">Want to learn more about us?</span>
          <span slot="link">Get to know us</span>
        </app-cta>
      </div>
    );
  }
}
