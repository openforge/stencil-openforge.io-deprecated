import { Component } from '@stencil/core';
import { translate } from '../../services/translation.service';

declare var fbq;

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  members = [
    {
      name: 'Jedi Weller',
      image: '/assets/headshot-jedi.jpg',
      title: translate('home.member.title.founder'),
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
      url: '',
    },
    {
      name: 'Rachel Bennett',
      image: '/assets/headshot-rachel.jpg',
      title: translate('home.member.title.designer'),
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
      url: '/team-landing/rachel-bennett',
    },
    {
      name: 'Geoffrey Melle',
      image: '/assets/headshot-geoff.jpg',
      title: translate('home.member.title.accountManager'),
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
      url: '/team-landing/geoffery-melle',
    },
    {
      name: 'Joni Lehto',
      image: '/assets/headshot-joni.jpg',
      title: translate('home.member.title.developer'),
      mail: 'joni@openforge.io',
      twitter: 'https://twitter.com/lehto_joni',
      github: '',
      url: '/team-landing/joni-lehto',
    },
    {
      name: 'Auvo Severinkangas',
      image: '/assets/headshot-auvo.jpg',
      title: translate('home.member.title.developer'),
      mail: 'auvo@openforge.io',
      twitter: '',
      github: '',
      url: '',
    },
    {
      name: 'Paulina Gallo',
      image: '/assets/headshot-paulina.png',
      title: translate('home.member.title.developer'),
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
      url: '/team-landing/paulina-gallo',
    },
    {
      name: 'Meredith Alcorn',
      image: '/assets/headshot-meredith.jpg',
      title: translate('home.member.title.developer'),
      mail: 'meredith@openforge.io',
      twitter: '',
      github: 'https://github.com/mmalcorn',
      url: '',
    },
    {
      name: 'Fernando Del Olmo',
      image: '/assets/headshot-fernando.jpg',
      title: translate('home.member.title.developer'),
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
      url: '/team-landing/fernando-del-olmo',
    },
    {
      name: 'William Holloran',
      image: '/assets/headshot-billy.png',
      title: translate('home.member.title.projectManager'),
      mail: 'william@openforge.io',
      url: '/team-landing/william-holloran',
    },
    {
      name: 'Luis Chacon',
      image: '/assets/headshot-luis.jpg',
      title: translate('home.member.title.developer'),
      mail: 'luis@openforge.io',
      twitter: 'https://twitter.com/luiskcs89',
      github: 'https://github.com/luiskcs89',
      url: '/team-landing/luis-chacon',
    },
    {
      name: 'Claudio Del Valle',
      image: '/assets/headshot-claudio.jpg',
      title: translate('home.member.title.developer'),
      mail: 'claudio@openforge.io',
      titter: '',
      github: 'https://github.com/daftclaud',
      url: '/team-landing/claudio-del-valle',
    },
    {
      name: 'Ethan Bohan',
      image: '/assets/headshot-ethan.jpg',
      title: translate('home.member.title.designer'),
      mail: 'ethan@openforge.io',
      twitter: '',
      github: '',
      url: '/team-landing/ethan-bohan',
    },
    {
      name: 'Ted Grant',
      image: '/assets/headshot-ted.png',
      title: translate('home.member.title.designer'),
      mail: 'ted@openforge.io',
      twitter: '',
      github: '',
      url: '/team-landing/ted-grant',
    },
    {
      name: 'Kevon Chambers',
      image: '/assets/headshot-kevon.png',
      title: translate('home.member.title.marketing'),
      mail: 'kevon@openforge.io',
      twitter: '',
      github: '',
      url: '/team-landing/kevon-chambers',
    },
    {
      name: 'Eli',
      image: '/assets/headshot-eli.jpg',
      title: 'Entertainment',
      mail: '',
      twitter: '',
      github: '',
      url: 'http://eliluproductions.com/',
      external: true,
    },
    {
      name: 'Lu',
      image: '/assets/headshot-lu.jpg',
      title: 'Entertainment',
      mail: '',
      twitter: '',
      github: '',
      url: 'http://eliluproductions.com/',
      external: true,
    },
    {
      name: 'Dhairya Pujara',
      image: '/assets/headshot-dhairya.jpg',
      title: translate('home.member.title.consultant'),
      mail: '',
      twitter: 'https://twitter.com/dhairyapujara',
      github: '',
      url: '/team-landing/dhairya-pujara',
    },
    {
      name: 'YOU?',
      image: '/assets/headshot-placeholder.jpg',
      title: '',
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
      url: '/opportunities',
    },
  ];

  componentDidLoad() {
    fbq('track', 'ViewContent');
  }

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
