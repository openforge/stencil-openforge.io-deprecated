import { Component } from '@stencil/core';

@Component({
  tag: 'app-case-study',
  styleUrl: 'app-case-study.scss',
})
export class AppCaseStudy {
  scrollToTop() {
    const form = document.getElementsByTagName('header')[0];
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="case-study">
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div style={{ margin: 'auto' }}>
                <h2>CASE STUDY</h2>
                <p>Painless Project Scoping with Juntoscope</p>
              </div>
            </div>
          </div>
        </header>
        <section class="container text-section">
          <h2>The Problem</h2>
          <p>
            Determining a scope of hours for a large project that will be
            completed by a team of developers is difficult and leaves too high
            of a margin of error - and mistakes can be costly! Project Managers
            need a way to accurately determine the scope of a project in a way
            that accounts for differences in experience levels across a team.
          </p>
        </section>
        <section class="text-section background-image">
          <div class="container" style={{ padding: '25px' }}>
            <h2>The Goal</h2>
            <p>
              Create an app that allows a team to accurately scope a
              collaborative project in a way that is seamless, painless and
              reduces the margin of error. Our audience? Developers, project
              managers, consultants, and anyone looking to maximize the
              efficiency of their team.
            </p>
          </div>
        </section>
        <section class="container product-section">
          <app-img
              class=""
              src="/assets/work-example-juntoscope-mobile.png"
              alt="juntoscope mobile view"
          />
          <div class="text-container">
            <h2>The Product</h2>
            <p>
              The goal of{' '}
              <a href="http://try.juntoscope.com/" target="_blank">
                JuntoScope
              </a>{' '}
              is to help teams determine scopes for tasks in{' '}
              <a
                href="https://www.teamwork.com/partner/gqfq4mb55o"
                target="_blank"
              >
                Teamwork.com
              </a>
              © Projects more accurately, quickly, and efficiently to keep
              projects within budget and on time. Integrating with Teamwork
              Projects API, teams will be able to:
            </p>
            <ul>
              <li>
                Scope tasks anonymously and accurately without influence of
                other team members
              </li>
              <li>
                Determine team averages for scoped items to give the best
                estimate
              </li>
              <li>
                Allow team members to scope items easily through their mobile
                device
              </li>
              <li>
                Increase accuracy of scoped time for tasks within Teamwork
                Projects
              </li>
              <li>Prevent teams from going over scope</li>
              <li>Improve ROI</li>
              <li>Decrease time spent scoping tasks</li>
            </ul>
          </div>
        </section>
        <section class="timeline">
          <div class="container">
            <h2>The Process</h2>
            <div class="timeline-items">
              <div class="timeline-wrapper timeline-bullet-left">
                <div class="timeline-item left">
                  <app-img
                    class=""
                    src="/assets/case-study-discovery.png"
                    alt="case study discovery icon"
                  />
                  <div class="timeline-item-content">
                    <h3>Discovery</h3>
                    <ul>
                      <li>Identify the problem</li>
                      <li>Research competing products</li>
                      <li>Create a lean canvas and feature pyramid</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="blank-cell">&nbsp;</div>
              <div class="timeline-wrapper blank-cell">&nbsp;</div>
              <div class="timeline-item right timeline-bullet-right">
                <app-img
                  class=""
                  src="/assets/case-study-design.png"
                  alt="case study design icon"
                />
                <div class="timeline-item-content">
                  <h3>Design</h3>
                  <ul>
                    <li>Wireframing and user flows</li>
                    <li>Creation of branding and design guidelines</li>
                    <li>Implementation of guidelines</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-wrapper">
                <div class="timeline-item left timeline-bullet-left">
                  <app-img
                    class=""
                    src="/assets/case-study-development.png"
                    alt="case study development icon"
                  />
                  <div class="timeline-item-content">
                    <h3>Development</h3>
                    <ul>
                      <li>Documentation, architecture & server set up</li>
                      <li>Creation of framework</li>
                      <li>Feature development & review</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="blank-cell">&nbsp;</div>
              <div class="timeline-wrapper blank-cell">&nbsp;</div>
              <div class="timeline-item right timeline-bullet-right">
                <app-img
                  class=""
                  src="/assets/case-study-qa.png"
                  alt="case study quality assurance icon"
                />
                <div class="timeline-item-content">
                  <h3>Quality Assurance</h3>
                  <ul>
                    <li>Feature Testing</li>
                    <li>Bug Fixes</li>
                    <li>Final review & app submission</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="final-timeline-item">
              <div class="blank-cell">&nbsp;</div>
              <div class="timeline-item">
                <app-img
                  class=""
                  src="/assets/graphic-home-deployment.png"
                  alt="case study deployment icon"
                />
                <div class="timeline-item-content">
                  <h3>Launch!</h3>
                </div>
              </div>
              <div class="blank-cell">&nbsp;</div>
            </div>
          </div>
        </section>
        <section class="container conclusion-section">
          <h2>A Deeper Dive</h2>
          <h3>Design</h3>
          <p>
            We began the{' '}
            <a
              href="https://openforge.io/services/app-designer"
              target="_blank"
            >
              design process
            </a>{' '}
            by researching similar apps on the marketplace and identifying
            features we liked and did not like about them. We then set up user
            flows and wireframing each identified screen. This process, along
            with the design and styling phase, occurs in{' '}
            <a href="https://openforge.io/toolbox" target="_blank">
              Sketch
            </a>
            . After completing the full skeleton, we reviewed each user flow and
            tried to identify any gaps or weaknesses in the user flow. From
            there, we made modifications and began identifying styles and colors
            for the app. We created a logo and a splash screen and applied the
            styles to the rest of the screens. We then created a working
            prototype in Marvel to aid our development team in the next phase
            and prepared for handoff.{' '}
          </p>
          <h3>Development</h3>
          <p>
            We began the{' '}
            <a
              href="https://openforge.io/services/app-developer"
              target="_blank"
            >
              development process
            </a>{' '}
            with a full design review. Our team worked closely with the
            designers to document a list of feature requirements that would
            later translate into development requirements. From there, we
            architected and established a base draft for client and server side
            implementation. We iterated through a review process as we gradually
            expanded and started to develop features.From our draft a skeleton
            client-side application is started in-tangent with developing
            server-side implementation to test and ensure all the data and state
            was expected and is functioning where it needs to be. Additional
            developers then followed in client-side to finalize pieces of the
            skeleton to reflect the designs. As each portion finished, it is
            formally reviewed, tested, and merged into a `master` branch for
            that app version. We reviewed these branches at critical milestones
            and had our quality assurance team review in order to ensure we
            stayed on top of bugs, in which we tracked in Github.
          </p>
          <h3>What we learned</h3>
          <p>
            Throughout the process of developing JuntoScope,{' '}
            <a href="https://openforge.io/about" target="_blank">
              our team
            </a>{' '}
            learned the importance of establishing a process that is fully
            understood by each and every member. Our company was going through a
            transitional phase early on in the development of JuntoScope
            bringing on new team members and creating efficient processes.
            Towards the end of the session phase we discovered that the
            processes we established for work with our clients wasn't being
            diligently followed for JuntoScope.
            <br />
            <br />
            This included designs that were not fully reviewed and understood by
            our development team, designs that did not follow guidelines with
            consistent styles and symbols, and a lack of forethought into the
            user experience of people not familiar with the app. What made sense
            to or team did not make sense to new users. This goes back to the
            saying, if your user interface needs to be explained, it's no good.
            <br />
            <br />
            As our team came close to launching{' '}
            <a href="http://try.juntoscope.com" target="_blank">
              JuntoScope
            </a>
            , we learned from Teamwork.com that they were changing the way their
            API worked and this forced us to go back to our design and
            development teams to work in the new authentication flows. This set
            our team back a few weeks from our initial planned launch. We
            learned the importance of staying up to date with technical updates
            to software that we integrate with so we immediately subscribed to
            their announcements.
            <br />
            <br />
            Designing and developing JuntoScope was a great learning experience
            for our team as we used this as a time for us to perfect our
            internal processes that make all of our subsequent products
            seamless. This has had a lasting impact on the quality of apps that
            we produce for our clients and ultimately has made us a better team.
          </p>

          <div class="download-link">
            <a href="assets/pdf/juntoscope.sketch" download="juntoscope.sketch">
              <button class="btn btn-primary">Download our Sketch file</button>
            </a>
          </div>

          <p class="top-link" onClick={this.scrollToTop.bind(this)}>
            back to top
          </p>
        </section>
        <app-footer />
      </div>
    );
  }
}
