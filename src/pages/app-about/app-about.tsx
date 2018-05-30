import { Component } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  members = [
    {
      name: 'Jedi Weller',
      image: './../../assets/headshot-jedi.jpg',
      color: '#fa8928',
      title: 'founder',
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
    },
    {
      name: 'Rachel Bennett',
      image: './../../assets/headshot-rachel.jpg',
      color: '#638593',
      title: 'designer',
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Geoffery Melle',
      image: './../../assets/headshot-geoff.jpg',
      color: '#d8aa0c',
      title: 'accountManager',
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Joni Leho',
      image: './../../assets/headshot-joni.jpg',
      color: '#fa8928',
      title: 'developer',
      mail: 'joni@openforge.io',
      twitter: 'https://twitter.com/lehto_joni',
    },
    {
      name: 'Auvo Severinkangas',
      image: './../../assets/headshot-auvo.jpg',
      color: '#638593',
      title: 'developer',
      mail: 'auvo@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Elizabeth Cottrell',
      image: './../../assets/headshot-eliza.jpg',
      color: '#d8aa0c',
      title: 'frontEndDeveloper',
      mail: 'elizabeth@openforge.io',
      twitter: 'https://twitter.com/_elizacottrell',
      github: 'https://github.com/LizCottrell',
    },
    {
      name: 'Paulina Gallo',
      image: './../../assets/headshot-paulina.jpg',
      color: '#fa8928',
      title: 'developer',
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
    },
    {
      name: 'Mohammad Alfatih',
      image: './../../assets/headshot-mohammad.jpg',
      color: '#638593',
      title: 'developer',
      mail: 'mo@jawami.com',
      twitter: 'https://twitter.com/webdevffw',
      github: 'https://github.com/Mohammad-alfatih',
    },
    {
      name: 'Meredith Alcorn',
      image: './../../assets/headshot-meredith.jpg',
      color: '#d8aa0c',
      title: 'developer',
      mail: 'meredith@openforge.io',
      github: 'https://github.com/mmalcorn',
    },
    {
      name: 'Fernando Del Olmo',
      image: './../../assets/headshot-fernando.jpg',
      color: '#fa8928',
      title: 'developer',
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
    },
    {
      name: 'William Holloran',
      image: './../../assets/headshot-billy.jpg',
      color: '#638593',
      title: 'projectManager',
      mail: 'william@openforge.io',
    },
    {
      name: 'Luis Chacon',
      image: './../../assets/headshot-luis.jpg',
      color: '#d8aa0c',
      title: 'developer',
      mail: 'luis@openforge.io',
      twitter: 'https://twitter.com/luiskcs89',
      github: 'https://github.com/luiskcs89',
    },
    {
      name: 'Claudio Del Valle',
      image: './../../assets/headshot-claudio.jpg',
      color: '#fa8928',
      title: 'developer',
      mail: 'claudio@openforge.io',
      github: 'https://github.com/daftclaud',
    },
    {
      name: 'Yanying Zhu',
      image: './../../assets/headshot-yanying.jpg',
      color: '#638593',
      title: 'designer',
      mail: 'yanying@openforge.io',
      twitter: '',
      github: '',
    },
  ];

  componentDidLoad() {
    let hrefArray;
    try {
      hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
      hrefArray.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
          });
        });
      });
    } catch (e) {
      console.log('app-about componentdidload undefined query selector', e);
    }
  }

  render() {
    return (
      <div class="about">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <h2>
                  <app-translate key="about.hero.header" />
                </h2>
                <p>
                  <app-translate key="about.hero.body" />
                </p>
                <a href="#second-content" class="btn btn-primary">
                  <app-translate key="about.hero.learnMore" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* section - values */}
        <section id="second-content" class="values">
          <div class="container">
            <h2>
              <span class="small">
                <app-translate key="about.values.title" />
              </span>
              <app-translate key="about.values.text" />
            </h2>

            <div class="row">
              <div class="content col-sm-12 col-md-4">
                <h3>
                  <app-translate key="about.values.transparency" />
                </h3>
                <p>
                  <app-translate key="about.values.transparencyText" />
                </p>
              </div>
              <div class="content col-sm-12 col-md-4">
                <h3>
                  <app-translate key="about.values.integrity" />
                </h3>
                <p>
                  <app-translate key="about.values.integrityText" />
                </p>
              </div>
              <div class="content col-sm-12 col-md-4">
                <h3>
                  <app-translate key="about.values.trust" />
                </h3>
                <p>
                  <app-translate key="about.values.trustText" />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* diversity */}
        <section id="diversity">
          <app-header
            link-url="#team"
            background-url="assets/bg-header-collaboration.jpg"
          >
            <h2 slot="header">
              <span class="small">
                <app-translate key="about.diversity.title" />
              </span>
              <app-translate key="about.diversity.titleBig" />
            </h2>
            <p slot="subheader">
              <app-translate key="about.diversity.subheader" />
            </p>
          </app-header>
        </section>

        {/* team */}
        <section id="team" class="team">
          <div class="container">
            <h4>
              <div class="display-4 pb-3">
                <app-translate key="about.team.title" />
              </div>
              <app-translate key="about.team.text" />
            </h4>

            <app-members members={this.members} />
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact">
          <span slot="header">
            <app-translate key="home.contact.title" />
          </span>
          <span slot="link">
            <app-translate key="home.contact.link" />
          </span>
        </app-cta>
      </div>
    );
  }
}
