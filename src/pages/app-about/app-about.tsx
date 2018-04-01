import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  @Prop() match: MatchResults;

  members = [
    {
      name: 'Jedi Weller',
      image: 'http://webjunto.com/wp-content/uploads/2018/03/jedi.jpg',
      color: '#fa8928',
      title: 'Founder and Head of Technology',
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/jedihacks',
    },
    {
      name: 'Khaled Shaaban',
      image: 'http://webjunto.com/wp-content/uploads/2018/03/khaled-1.jpg',
      color: '#638593',
      title: 'Software Engineer',
      mail: '',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/kshaaban-',
    },
    {
      name: 'Meredith Alcorn',
      image: 'http://webjunto.com/wp-content/uploads/2016/09/meredith.jpg',
      color: '#d8aa0c',
      title: 'Software Engineer',
      mail: '',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/',
    },
    {
      name: 'Mohammad Alfatih',
      image: 'http://webjunto.com/wp-content/uploads/2018/03/mohammad-1.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: '',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/Mohammad-alfatih',
    },
    {
      name: 'Elizabeth Cottrell',
      image: 'http://webjunto.com/wp-content/uploads/2018/03/elizabeth-3.jpg',
      color: '#638593',
      title: 'Front End Developer',
      mail: '',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/LizCottrell',
    },
    {
      name: 'Joni Leho',
      image: 'http://webjunto.com/wp-content/uploads/2016/09/joni.jpg',
      color: '#d8aa0c',
      title: 'Software Engineer',
      mail: '',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/',
    },
    {
      name: 'Fernando Del Olmo',
      image: 'http://webjunto.com/wp-content/uploads/2018/03/fernando-1.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: '',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/Fdom92',
    },
    {
      name: 'William Holloran',
      image: 'http://webjunto.com/wp-content/uploads/2018/03/billy.jpg',
      color: '#638593',
      title: 'QA Engineer',
      mail: '',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/',
    },
    {
      name: 'Luis Chacon',
      image: 'http://webjunto.com/wp-content/uploads/2018/01/luis-294.jpg',
      color: '#d8aa0c',
      title: 'Software Engineer',
      mail: '',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/luiskcs89',
    },
  ];

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

        {/* diversity */}
        {/* TODO: figure out how to make this scroll to sr content - not sure */}
        <section id="diversity">
          <app-header
            link-url="#diversity-content"
            background-url="assets/bg-header-collaboration.jpg"
          >
            <h2 slot="header">
              <span class="small">Diversity Matters</span>
              We Are Powered by Multiple Perspectives
            </h2>
            <p slot="subheader">
              Our individual skills, backgrounds, and life experiences have
              shaped us into the company that we are today. Maintaining a
              diverse team helps us to perform better, attract top talent, and
              make smarter decisions.
            </p>
          </app-header>
        </section>

        {/* team */}
        <section id="team">
          <div class="container">
            <h4>
              <div class="display-4 pb-3">Meet the Team</div>
              There’s no doubt that our team is made up of brilliant and
              talented individuals who are passionate about technology and
              design thinking. Together we design, code, grow, and evolve.
            </h4>

            <app-members members={this.members} />
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="mailto:hello@openforge.io">
          <span slot="header">Ready to work with us?</span>
          <span slot="link">Get in touch</span>
        </app-cta>
      </div>
    );
  }
}
