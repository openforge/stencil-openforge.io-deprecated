import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  @Prop() match: MatchResults;

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero
          link-url="mailto:hello@openforge.io"
          background-url="assets/bg-hero-woman-writing.jpg"
        >
          <span slot="header">Powered by engineers &amp; design thinkers</span>
          <span slot="body">
            We believe that your success is our success. We're here to challenge
            your assumptions and help you discover your web or mobile
            applications full potential.
          </span>
          <span slot="link">Learn More</span>
        </app-hero>

        {/* section - values */}
        <section id="values">
          <div class="container">
            <h2>
              <span class="small">Our Key Values</span>
              From discovery to deployment, you can consider Team OpenForge as
              an extention of your team.
            </h2>

            <div class="row">
              <div class="content col-sm-12 col-md-4">
                <h3>Transparency</h3>
                <p>
                  No surprises here. We aim to be fully transparent both
                  internally and externally.
                </p>
              </div>
              <div class="content col-sm-12 col-md-4">
                <h3>Integrity</h3>
                <p>
                  We'll always do our best to provide honest feedback and
                  insights along the way.
                </p>
              </div>
              <div class="content col-sm-12 col-md-4">
                <h3>Trust</h3>
                <p>
                  We stand by our values every step of the way. Plain and
                  simple: we're here to help you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="mailto:hello@openforge.io">
          <span slot="header">Ready to work with us?</span>
          <span slot="link">Get in touch</span>
        </app-cta>

        {/* footer */}
        <app-footer />
      </div>
    );
  }
}
