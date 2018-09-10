import { Component } from '@stencil/core';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  members = [
    {
      name: 'Jedi Weller',
      image: './../../assets/headshot-jedi.jpg',
      title: translate('home.member.title.founder'),
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
      url: '',
    },
    {
      name: 'Rachel Bennett',
      image: './../../assets/headshot-rachel.jpg',
      title: translate('home.member.title.designer'),
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
      url: '/team-landing/rachel',
    },
    {
      name: 'Geoffery Melle',
      image: './../../assets/headshot-geoff.jpg',
      title: translate('home.member.title.accountManager'),
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
      url: '/team-landing/geoffery',
    },
    {
      name: 'Joni Leho',
      image: './../../assets/headshot-joni.jpg',
      title: translate('home.member.title.developer'),
      mail: 'joni@openforge.io',
      twitter: 'https://twitter.com/lehto_joni',
      url: '/team-landing/joni',
    },
    {
      name: 'Auvo Severinkangas',
      image: './../../assets/headshot-auvo.jpg',
      title: translate('home.member.title.developer'),
      mail: 'auvo@openforge.io',
      twitter: '',
      github: '',
      url: '',
    },
    {
      name: 'Paulina Gallo',
      image: './../../assets/headshot-paulina.jpg',
      title: translate('home.member.title.developer'),
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
      url: '',
    },
    {
      name: 'Meredith Alcorn',
      image: './../../assets/headshot-meredith.jpg',
      title: translate('home.member.title.developer'),
      mail: 'meredith@openforge.io',
      github: 'https://github.com/mmalcorn',
      url: '',
    },
    {
      name: 'Fernando Del Olmo',
      image: './../../assets/headshot-fernando.jpg',
      title: translate('home.member.title.developer'),
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
      url: '/team-landing/fernando',
    },
    {
      name: 'William Holloran',
      image: './../../assets/headshot-billy.jpg',
      title: translate('home.member.title.projectManager'),
      mail: 'william@openforge.io',
      url: '/team-landing/william',
    },
    {
      name: 'Luis Chacon',
      image: './../../assets/headshot-luis.jpg',
      title: translate('home.member.title.developer'),
      mail: 'luis@openforge.io',
      twitter: 'https://twitter.com/luiskcs89',
      github: 'https://github.com/luiskcs89',
      url: '/team-landing/luis',
    },
    {
      name: 'Claudio Del Valle',
      image: './../../assets/headshot-claudio.jpg',
      title: translate('home.member.title.developer'),
      mail: 'claudio@openforge.io',
      github: 'https://github.com/daftclaud',
      url: '/team-landing/claudio',
    },
    {
      name: 'Ethan Bohan',
      image: './../../assets/headshot-ethan.jpg',
      title: translate('home.member.title.designer'),
      mail: 'ethan@openforge.io',
      github: '',
      url: '/team-landing/ethan',
    },
    {
      name: 'Eli Lu Entertainment',
      image: './../../assets/headshot-eli.jpg',
      title: '',
      mail: '',
      github: '',
      url: 'http://eliluproductions.com/',
      external: true,
    },
    {
      name: 'Eli Lu Entertainment',
      image: './../../assets/headshot-lu.jpg',
      title: '',
      mail: '',
      github: '',
      url: 'http://eliluproductions.com/',
      external: true,
    },
    {
      name: 'YOU?',
      image: './../../assets/headshot-placeholder.jpg',
      title: '',
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
      url: '/opportunities',
    },
  ];

  scrollToForm() {
    const form = document.getElementById('about-section');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="about">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-9 col-md-8 col-lg-9">
                <h2>We Are Passionate About Technology and Design</h2>
                <p>
                  We believe that your success is our success. We're here to
                  challenge your assumptions and help you discover your web or
                  mobile applications full potential.
                </p>
                <button
                  onClick={this.scrollToForm.bind(this)}
                  class="btn btn-primary"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* section - about */}
        <section id="about-section" class="about bg-gray">
          <div class="container">
            <div class="about--header">
              <h2>Meet the Team</h2>
              <p>
                There's no doubt that our team is made up of brilliant and
                talented individuals who are passionate about technology and
                design thinking. Together we design, code, grow, and evolve.
              </p>
            </div>

            <app-members members={this.members} />
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact">
          <span slot="header">Want to work with us?</span>
          <span slot="link">Get in touch</span>
        </app-cta>
        <app-footer />
      </div>
    );
  }
}
