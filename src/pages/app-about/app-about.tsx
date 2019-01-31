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
  private className = localStorage.getItem('allowWebp') === 'true' ? 'webp' : 'hero';

  public images: any;

  members = [
    {
      name: 'Jedi Weller',
      image: './../../assets/headshot-jedi.jpg',
      title: translate('about.team.member.title.founder'),
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
    },
    {
      name: 'Paulina Gallo',
      image: './../../assets/headshot-paulina.png',
      title: translate('about.team.member.title.developer'),
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
      url: '/about/paulina-gallo',
    },
    {
      name: 'Geoffrey Melle',
      image: './../../assets/headshot-geoff.jpg',
      title: translate('about.team.member.title.accountManager'),
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
      url: '/about/geoffrey-melle',
    },
    {
      name: 'Rachel Bennett',
      image: './../../assets/headshot-rachel.jpg',
      title: translate('about.team.member.title.designer'),
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
      url: '/about/rachel-bennett',
    },
    {
      name: 'Billy Holloran',
      image: './../../assets/headshot-billy.png',
      title: translate('about.team.member.title.qualityManager'),
      mail: 'billy@openforge.io',
      url: '/about/billy-holloran',
    },
    {
      name: 'Ethan Bohan',
      image: './../../assets/headshot-ethan.jpg',
      title: translate('about.team.member.title.designer'),
      mail: 'ethan@openforge.io',
      twitter: '',
      github: '',
      url: '/about/ethan-bohan',
    },
    {
      name: 'Fernando Del Olmo',
      image: './../../assets/headshot-fernando.jpg',
      title: translate('about.team.member.title.developer'),
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
      url: '/about/fernando-del-olmo',
    },
    {
      name: 'Luis Chacon',
      image: './../../assets/headshot-luis.jpg',
      title: translate('about.team.member.title.developer'),
      mail: 'luis@openforge.io',
      twitter: 'https://twitter.com/luiskcs89',
      github: 'https://github.com/luiskcs89',
      url: '/about/luis-chacon',
    },
    {
      name: 'Kevon Chambers',
      image: '/assets/headshot-kevon.png',
      title: translate('about.team.member.title.marketing'),
      mail: 'kevon@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Sam Hudgens',
      image: './../../assets/headshot-sam.jpg',
      title: translate('about.team.member.title.softwareIntern'),
      mail: 'sam@openforge.io',
      twitter: '',
      github: 'https://github.com/samhudgens',
      url: '/about/sam-hudgens',
    },
    {
      name: 'Young Song',
      image: './../../assets/headshot-young.jpg',
      title: translate('about.team.member.title.softwareIntern'),
      mail: '',
      twitter: 'https://twitter.com/YoungSongJS',
      github: 'https://github.com/Hogusong',
      url: '/about/young-song',
    },
    {
      name: 'Ted Grant',
      image: '/assets/headshot-ted.png',
      title: translate('about.team.member.title.designer'),
      mail: 'ted@openforge.io',
      twitter: '',
      github: '',
      url: '/about/ted-grant',
    },
    {
      name: 'Joni Lehto',
      image: './../../assets/headshot-joni.jpg',
      title: translate('about.team.member.title.developer'),
      mail: 'joni@openforge.io',
      twitter: 'https://twitter.com/lehto_joni',
      github: '',
    },
    {
      name: 'Meredith Alcorn',
      image: './../../assets/headshot-meredith.jpg',
      title: translate('about.team.member.title.developer'),
      mail: 'meredith@openforge.io',
      twitter: '',
      github: 'https://github.com/mmalcorn',
    },
    {
      name: 'Claudio Del Valle',
      image: './../../assets/headshot-claudio.jpg',
      title: translate('about.team.member.title.developer'),
      mail: 'claudio@openforge.io',
      titter: '',
      github: 'https://github.com/daftclaud',
    },
    {
      name: 'Auvo Severinkangas',
      image: './../../assets/headshot-auvo.jpg',
      title: translate('about.team.member.title.developer'),
      mail: 'auvo@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Dhairya Pujara',
      image: './../../assets/headshot-dhairya.jpg',
      title: translate('about.team.member.title.consultant'),
      mail: '',
      twitter: 'https://twitter.com/dhairyapujara',
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
      name: 'Casey',
      image: './../../assets/headshot-casey.jpg',
      title: translate('about.team.member.title.officer'),
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
    document.querySelector("meta[property='og:title']").setAttribute('content', 'Philadelphia’s Top Mobile Technology and Design Experts | OpenForge');
    document.querySelector("meta[property='og:description']").setAttribute('content', 'We are Technology and Design Experts who specialize in Mobile Application Development in Philadelphia');
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/about/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/bg-hero-icons.jpg');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Technology, Design, Philadelphia, Mobile App, Development, Jedidiah Weller');
  }

  scrollToForm() {
    const form = document.getElementById('team-photo');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="about">
        {/* header - hero */}
        <header class={this.className}>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-8 col-sm-10 text-container">
                <h1>
                  <app-translate key="about.header.title" />
                </h1>
                <p>
                  <app-translate key="about.header.text" />
                </p>
                <button onClick={this.scrollToForm.bind(this)} class="btn btn-primary">
                  <app-translate key="about.header.action" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* section - team */}
        <section id="team-photo" class="team-photo">
          <div class="container">
            <div class="row align-items-end text-center">
              <div class="col-12">
                <app-img src="/assets/svg/about-graphic-ribbon.svg" alt="Our Mission - Our mission is to forge a bond between people and technology through digital experiences." />
              </div>
            </div>
          </div>
        </section>

        {/* section - mission statement */}
        <section id="mission-statement" class="mission-statement">
          <div class="mission-statement d-flex text-center">
            <p class="text-white align-self-center">
              <app-translate key="about.mission.statement" />
            </p>
          </div>
        </section>

        {/* section - values */}
        <section id="values" class="values">
          <div class="container text-center">
            <div class="row header">
              <div class="col-12">
                <h2>
                  <app-translate key="about.values.title" />
                </h2>
                <p>
                  <app-translate key="about.values.text" />
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                <object data="assets/svg/about-graphic-integrity.svg" height="164px" width="220px" />
                <app-translate class="value-text" key="about.values.value2" />
              </div>
              <div class="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                <object data="assets/svg/about-graphic-honesty.svg" height="164px" width="220px" />
                <app-translate class="value-text" key="about.values.value1" />
              </div>
              <div class="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                <object data="assets/svg/about-graphic-transparency.svg" height="164px" width="220px" />
                <app-translate class="value-text" key="about.values.value3" />
              </div>
            </div>
          </div>
        </section>

        {/* section - members */}
        <section id="members" class="members">
          <div class="container text-center">
            <div class="header">
              <h2>
                <app-translate key="about.team.title" />
              </h2>
              <p>
                <app-translate key="about.team.text" />
              </p>
            </div>

            <app-members members={this.members} />
          </div>
        </section>

        {/* aside - cta */}
        <app-cta />

        <app-footer />
      </div>
    );
  }
}
