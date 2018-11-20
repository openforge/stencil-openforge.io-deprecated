import { Component, Prop } from '@stencil/core';
import { translate } from '../../services/translation.service';

declare var fbq;

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  @Prop({ context: 'isServer' })
  private isServer: boolean;

  public images: any;

  members = [
    {
      name: 'Jedi Weller',
      image: './../../assets/headshot-jedi.jpg',
      title: translate('about.meet.member.title.founder'),
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
    },
    {
      name: 'Rachel Bennett',
      image: './../../assets/headshot-rachel.jpg',
      title: translate('about.meet.member.title.designer'),
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
      url: '/about/rachel-bennett',
    },
    {
      name: 'Geoffrey Melle',
      image: './../../assets/headshot-geoff.jpg',
      title: translate('about.meet.member.title.accountManager'),
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
      url: '/about/geoffrey-melle',
    },
    {
      name: 'Joni Lehto',
      image: './../../assets/headshot-joni.jpg',
      title: translate('about.meet.member.title.developer'),
      mail: 'joni@openforge.io',
      twitter: 'https://twitter.com/lehto_joni',
      github: '',
    },
    {
      name: 'Auvo Severinkangas',
      image: './../../assets/headshot-auvo.jpg',
      title: translate('about.meet.member.title.developer'),
      mail: 'auvo@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Paulina Gallo',
      image: './../../assets/headshot-paulina.png',
      title: translate('about.meet.member.title.developer'),
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
      url: '/about/paulina-gallo',
    },
    {
      name: 'Meredith Alcorn',
      image: './../../assets/headshot-meredith.jpg',
      title: translate('about.meet.member.title.developer'),
      mail: 'meredith@openforge.io',
      twitter: '',
      github: 'https://github.com/mmalcorn',
    },
    {
      name: 'Fernando Del Olmo',
      image: './../../assets/headshot-fernando.jpg',
      title: translate('about.meet.member.title.developer'),
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
    },
    {
      name: 'Billy Holloran',
      image: './../../assets/headshot-billy.png',
      title: translate('about.meet.member.title.projectManager'),
      mail: 'billy@openforge.io',
      url: '/about/billy-holloran',
    },
    {
      name: 'Luis Chacon',
      image: './../../assets/headshot-luis.jpg',
      title: translate('about.meet.member.title.developer'),
      mail: 'luis@openforge.io',
      twitter: 'https://twitter.com/luiskcs89',
      github: 'https://github.com/luiskcs89',
    },
    {
      name: 'Claudio Del Valle',
      image: './../../assets/headshot-claudio.jpg',
      title: translate('about.meet.member.title.developer'),
      mail: 'claudio@openforge.io',
      titter: '',
      github: 'https://github.com/daftclaud',
    },
    {
      name: 'Ethan Bohan',
      image: './../../assets/headshot-ethan.jpg',
      title: translate('about.meet.member.title.designer'),
      mail: 'ethan@openforge.io',
      twitter: '',
      github: '',
      url: '/about/ethan-bohan',
    },
    {
      name: 'Ted Grant',
      image: '/assets/headshot-ted.png',
      title: translate('about.meet.member.title.designer'),
      mail: 'ted@openforge.io',
      twitter: '',
      github: '',
      url: '/about/ted-grant',
    },
    {
      name: 'Kevon Chambers',
      image: '/assets/headshot-kevon.png',
      title: translate('about.meet.member.title.marketing'),
      mail: 'kevon@openforge.io',
      twitter: '',
      github: '',
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
      image: './../../assets/headshot-dhairya.jpg',
      title: translate('about.meet.member.title.consultant'),
      mail: '',
      twitter: 'https://twitter.com/dhairyapujara',
      github: '',
    },
    {
      name: 'Young Song',
      image: './../../assets/headshot-young.jpg',
      title: translate('about.meet.member.title.softwareIntern'),
      mail: '',
      twitter: 'https://twitter.com/YoungSongJS',
      github: 'https://github.com/Hogusong',
      url: '/about/young-song',
    },
    {
      name: 'Sam Hudgens',
      image: './../../assets/headshot-sam.jpg',
      title: translate('about.meet.member.title.softwareIntern'),
      mail: 'sam@openforge.io',
      twitter: '',
      github: 'https://github.com/samhudgens',
      url: '/about/sam-hudgens',
    },
    {
      name: 'Casey',
      image: './../../assets/headshot-casey.jpg',
      title: translate('about.meet.member.title.officer'),
      mail: '',
      twitter: '',
      github: '',
      url: '/about/casey',
    },
    // {
    //   name: 'YOU?',
    //   image: '/assets/headshot-placeholder.jpg',
    //   title: '',
    //   mail: 'geoff@openforge.io',
    //   twitter: '',
    //   github: '',
    //   url: '/opportunities/develop',
    // },
  ];

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }

    // Change meta tags dynamically
    document
      .querySelector("meta[name='title']")
      .setAttribute(
        'content',
        'Philadelphia’s Top Mobile Technology and Design Experts | OpenForge'
      );
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        'content',
        'We are Technology and Design Experts who specialize in Mobile Application Development in Philadelphia'
      );
    document
      .querySelector("meta[name='keywords']")
      .setAttribute(
        'content',
        'Technology, Design, Philadelphia, Mobile App, Development, Jedidiah Weller'
      );
  }

  scrollToForm() {
    const form = document.getElementById('about-section');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  // buildImageArray() {
  //   // this.images = document.querySelectorAll('img[src$=".jpg"], img[src$=".png"]');
  //   this.images = document.querySelectorAll('app-img');
  //   console.log(this.images);
  //   console.log("build image array executed");
  // }

  render() {
    // this.buildImageArray();

    return (
      <div class="about">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-9 col-md-8 col-lg-9">
                <h2>
                  <app-translate key="about.title" />
                </h2>
                <p>
                  <app-translate key="about.text" />
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
              <h2>
                <app-translate key="about.meet.header" />
              </h2>
              <p>
                <app-translate key="about.meet.text" />
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
