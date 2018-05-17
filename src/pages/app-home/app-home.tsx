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
        <app-hero-home>
          <span slot="header">We are Thinkings. Makers. Doers.</span>
          <span slot="body">
            Work with our team of highly skilled designers, developers, and
            consultants to develop solutions and processes that fit your
            business requirements.
          </span>
          <span slot="link">Let's Get Started</span>
        </app-hero-home>

        {/* section - services */}
        <section id="second-content">
          <div class="container services">
            <h2 class="header-text">LET'S GET STARTED</h2>

            <div class="services-selections">
              <a href="#startup">
                <figure>
                  <img
                    class="img-fluid"
                    src="assets/graphic-home-startup.png"
                    alt=""
                  />
                  <figcaption>I'M A STARTUP COMPANY</figcaption>
                </figure>
              </a>

              <a href="#enterprise">
                <figure>
                  <img
                    class="img-fluid"
                    src="assets/graphic-home-enterprise.png"
                    alt=""
                  />
                  <figcaption>I'M AN ENTERPRISE COMPANY</figcaption>
                </figure>
              </a>
            </div>

            <br class="d-md-block d-sm-block" />
            <br class="d-md-block d-sm-block" />

            <p>
              It's our job to make your dreams a reality. Utilize our knowledge
              in UI/UX to increase your customer engagement, our experience in
              technology to decrease your costs, and our expertise in Web and
              Mobile Application Development to provide reliable technology to
              grow your business.
              {/* Technology is constantly changing; Let us help you change with it. */}
            </p>
          </div>
        </section>

        {/* section - startup */}
        <section id="startup" class="bg-gray">
          <div class="container services">
            <h2>
              <span class="small">Common startup services</span>
              Let us help you get started
            </h2>

            <div class="services-content">
              <img
                class="img-fluid"
                src="assets/graphic-home-startup.png"
                alt=""
              />
              <ul>
                <li>Startup Consulting</li>
                <li>Enhanced Mobile & Web Designs</li>
                <li>UI/UX Audits & Recommendations </li>
                <li>Mobile Application Development</li>
                <li>Web Application Development</li>
                <li>Customer Engagement Strategy</li>
                <li>Guerilla Marketing Strategy</li>
              </ul>
            </div>

            {/* <div class="text-center">
              <button class="btn btn-primary">
                Learn more<br class="d-xs-block d-sm-block d-md-none" /> about
                our process
              </button>
            </div> */}
          </div>
        </section>

        {/* section - enterprise */}
        <section id="enterprise">
          <div class="container services">
            <h2>
              <span class="small">Enterprise Services and Offerings</span>
              Any Size. Any Problem.
              <br />
              Our Team is Your Team
            </h2>

            <div class="services-content flex-row-reverse">
              <img
                class="img-fluid"
                src="assets/graphic-home-enterprise.png"
                alt=""
              />
              <ul>
                <li>Branding & UI Design Revitalizations</li>
                <li>User Experience (UI/UX) Audits</li>
                <li>Accessability Audits & Training</li>
                <li>Design & Development Integration Workshops</li>
                <li>Business Process Improvement (BPI) Consulting</li>
                <li>Mobile & Web Application Development Services</li>
              </ul>
            </div>

            {/* <div class="text-center">
              <button class="btn btn-primary">
                Learn more<br class="d-xs-block d-sm-block d-md-none" /> about
                our process
              </button>
            </div> */}
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
