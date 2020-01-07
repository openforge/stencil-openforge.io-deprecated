import { Component, h, Prop, Build } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

/* tslint:disable-next-line */
declare var bootstrap;

@Component({
  tag: 'app-our-work-single',
  styleUrl: 'app-our-work-single.scss',
})
export class AppOurWorkSingle {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  projects = {
    mobilemeasures: {
      id: 1,
      key: 'mobilemeasures',
      header: {
        title: 'Mobile Measures',
        text: 'A One-Stop-Shop for Physical Therapy outcome measures',
        logo: '/assets/our-work/mm-logo.svg',
        background: '/assets/our-work/mm-background.png',
        backgroundMobile: '/assets/our-work/mm-background-mobile.png',
      },
      content: {
        title: 'Get Back in Motion',
        text:
          'This ingenious app was developed to help Physical Therapists keep track of their patients’ progress. The founder & mastermind, Ben Kenuk - himself a Physical Therapist - approached us after he had mapped out ideas of what he thought the app should provide.<br><br>Starting with the UI/UX aspect, we reviewed and redefined the wireframes in order to improve the overall flow. We then implemented our designs to provide the user with a functional and user-friendly application.',
        image1: '/assets/our-work/mm-content-image1.png',
        image2: '/assets/our-work/mm-content-image2.png',
        icon1: '/assets/our-work/utility-icon.svg',
        icon2: '/assets/our-work/medical-icon.svg',
        icon3: '/assets/our-work/reference-icon.svg',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.mobilemeasuresllc.mobilemeasures',
        appleStore: 'https://apps.apple.com/us/app/mobile-measures/id1440639312',
      },
      features: {
        title: 'Key Features',
        text:
          'Mobile Measures is HIPPA-compliant and provides Physical Therapists with an accurate representation of their patients’ risk assessment. The application also provides useful instructions and demonstration videos.',
        image1: '/assets/our-work/mm-feature-image1.png',
        image2: '/assets/our-work/mm-feature-image2.svg',
        image3: '/assets/our-work/mm-feature-image3.png',
      },
      otherProjectImgs: {
        image1: '/assets/our-work/mm-feature-image3.png',
        image2: '/assets/our-work/mm-feature-image1.png',
      },
    },
    loudcloud: {
      id: 2,
      key: 'loudcloud',
      header: {
        title: 'LoudCloud',
        text: 'Disposable World-Wide Phone Numbers',
        logo: '/assets/our-work/lc-logo.svg',
        background: '/assets/our-work/lc-background.png',
        backgroundMobile: '/assets/our-work/lc-background-mobile.png',
      },
      content: {
        title: 'Privacy on Demand',
        text:
          'Originally a native application, we advised the excellent team at LoudCloud to turn it into a hybrid using Ionic Framework and firmly believe it is a better product for the change! Users can use a temporary, disposable number to handle social or business interactions without providing virtual strangers with their personal numbers.<br><br>After clarifying the user flow, we came up with a minimalistic design for the application as one of the requirements for it was simplicity of use. We also handled the development side using Ionic Framework.',
        image1: '/assets/our-work/lc-content-image1.png',
        image2: '/assets/our-work/lc-content-image2.png',
        icon1: '/assets/our-work/calling-icon.svg',
        icon2: '/assets/our-work/business-icon.svg',
        icon3: '/assets/our-work/lifestyle-icon.svg',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.ignitras.loudcloud&hl=en',
        appleStore: 'https://itunes.apple.com/us/app/loudcloud-disposable-numbers/id723331666?mt=8',
      },
      features: {
        title: 'Key Features',
        text:
          'One of the advantages LoudCloud has over its competitors is the simplicity of its interface. If a user were to have more than one account (one for business and another for social, for example), they would be able to access them all on a central dashboard instead of switching between the different accounts. Users can label their numbers, forward calls to their phones and even pre-announce them to ensure there is no confusion.',
        image1: '/assets/our-work/lc-feature-image1.png',
        image2: '/assets/our-work/lc-feature-image2.png',
        image3: '/assets/our-work/lc-feature-image3.svg',
      },
      otherProjectImgs: {
        image1: '/assets/our-work/lc-feature-image2.png',
        image2: '/assets/our-work/lc-feature-image1.png',
      },
    },
    voyage: {
      id: 3,
      key: 'voyage',
      header: {
        title: 'The Voyage',
        text: 'Health and Well-Being Tracker and Evaluator',
        logo: '/assets/our-work/voyage-logo.svg',
        background: '/assets/our-work/voyage-background.png',
        backgroundMobile: '/assets/our-work/voyage-background-mobile.png', // NEED ASSET
      },
      content: {
        title: 'Get Rewarded For Your Lifestyle',
        text:
          'Equal parts fun and useful, this app allows users to set goals and earn rewards when committing to them! Goals can fall under a variety of different programs such as nutrition, financial well-being or stress management, to name a few. Employees within the same company can challenge each other to make it more fun. The app also provides its users with useful articles, motivational videos and other resources to provide them with a truly useful experience.<br><br>New Ocean Health had a clear idea of what they wanted to provide their users with, and we were more than happy to show them mock-ups and come up with UI/UX designs that adhered to their vision, as well as the development that made it all come to life.',
        image1: '/assets/our-work/voyage-content-image1.png',
        image2: '/assets/our-work/voyage-content-image2.svg',
        icon1: '/assets/our-work/health-icon.svg',
        icon2: '/assets/our-work/productivity-icon.svg',
        icon3: '/assets/our-work/lifestyle-icon.svg',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile',
        appleStore: 'https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8',
      },
      features: {
        title: 'Key Features',
        text:
          'Starting with the confidential Private Health Assessment (PHA); users answer questions in order to establish a profile and map out what their goals are. The app then provides them with reminders of their daily goals and links to helpful resources. The Voyage syncs with most health apps so that more people can benefit from its services.',
        image1: '/assets/our-work/voyage-feature-image1.png',
        image2: '/assets/our-work/voyage-feature-image2.svg',
        image3: '/assets/our-work/voyage-feature-image3.svg',
      },
      otherProjectImgs: {
        image1: '/assets/our-work/voyage-content-image1.png',
        image2: '/assets/our-work/voyage-feature-image1.png',
      },
    },
  };

  componentDidLoad() {
    if (Build.isBrowser) {
      /* tslint:disable-next-line */
      $(document).ready(function() {
        // Force bootstrap to initialize carousel
        const partnersCarousel = $('#partnersCarousel');
        setTimeout(() => bootstrap.Carousel._jQueryInterface.call(partnersCarousel, partnersCarousel.data()), 0);
      });
    }
  }

  getOtherProjects() {
    const projects = [];
    const keys = Object.keys(this.projects);
    for (const key of keys) {
      projects.push(this.projects[key]);
    }
    const otherProjects = projects.filter(proyect => proyect.id !== this.projects[this.match.params.project].id);
    return otherProjects.map(project => {
      return (
        <div class="more-project-single">
          <div class="images-col">
            <img src={project.otherProjectImgs.image1} />
            <img src={project.otherProjectImgs.image2} />
          </div>
          <div class="store-buttons">
            <a href={project.content.appleStore} target="_blank" rel="noopener">
              <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
            </a>
            <a href={project.content.googlePlay} target="_blank" rel="noopener">
              <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
            </a>
          </div>
          <p>{project.header.title}</p>
          <div class="other-button">
            <stencil-route-link url={`/our-work-single/${project.key}`} exact={true}>
              <button>
                <app-translate keyword="ourWork.cards.button" />
              </button>
            </stencil-route-link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div class="our-work-single">
        <header>
          <img class="d-none d-md-block" src={this.projects[this.match.params.project].header.background} />
          <img class="d-md-none" src={this.projects[this.match.params.project].header.backgroundMobile} />
          <div class="header-content">
            <h1>{this.projects[this.match.params.project].header.title}</h1>
            <p>{this.projects[this.match.params.project].header.text}</p>
            <img class="logo" src={this.projects[this.match.params.project].header.logo} />
          </div>
        </header>
        <section class="container project-content">
          <div class="d-none d-md-flex row">
            <div class="col-md-4 col-lg-6 images-col">
              <img src={this.projects[this.match.params.project].content.image1} />
              <img src={this.projects[this.match.params.project].content.image2} />
            </div>
            <div class="col-md-8 col-lg-6">
              <h2>{this.projects[this.match.params.project].content.title}</h2>
              <p innerHTML={this.projects[this.match.params.project].content.text} />
              <div class="project-content-icons">
                <img src={this.projects[this.match.params.project].content.icon1} />
                <img src={this.projects[this.match.params.project].content.icon2} />
                <img src={this.projects[this.match.params.project].content.icon3} />
              </div>
              <div class="store-buttons">
                <a href={this.projects[this.match.params.project].content.appleStore} target="_blank" rel="noopener">
                  <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                </a>
                <a href={this.projects[this.match.params.project].content.googlePlay} target="_blank" rel="noopener">
                  <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                </a>
              </div>
            </div>
          </div>
          <div class="d-md-none container">
            <h2>{this.projects[this.match.params.project].content.title}</h2>
            <div class="images-col">
              <img src={this.projects[this.match.params.project].content.image1} />
              <img src={this.projects[this.match.params.project].content.image2} />
            </div>
            <div class="store-buttons">
              <a href={this.projects[this.match.params.project].content.appleStore} target="_blank" rel="noopener">
                <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
              </a>
              <a href={this.projects[this.match.params.project].content.googlePlay} target="_blank" rel="noopener">
                <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
              </a>
            </div>
            <div class="project-content-icons">
              <img src={this.projects[this.match.params.project].content.icon1} />
              <img src={this.projects[this.match.params.project].content.icon2} />
              <img src={this.projects[this.match.params.project].content.icon3} />
            </div>
            <p innerHTML={this.projects[this.match.params.project].content.text} />
          </div>
        </section>
        <section class="key-features">
          <div
            class={{
              'd-none': true,
              'd-md-flex': true,
              'key-features-imgs': true,
              mobilemeasures: this.match.params.project === 'mobilemeasures' ? true : false,
              loudcloud: this.match.params.project === 'loudcloud' ? true : false,
              voyage: this.match.params.project === 'voyage' ? true : false,
            }}
          >
            <img src={this.projects[this.match.params.project].features.image1} />
            <img src={this.projects[this.match.params.project].features.image2} />
            <img src={this.projects[this.match.params.project].features.image3} />
          </div>
          <div
            class={{
              row: true,
              'd-md-none': true,
              'key-features-imgs': true,
              mobilemeasures: this.match.params.project === 'mobilemeasures' ? true : false,
              loudcloud: this.match.params.project === 'loudcloud' ? true : false,
              voyage: this.match.params.project === 'voyage' ? true : false,
            }}
          >
            <div class="col-12 text-center">
              <div class="carousel slide" id="partnersCarousel">
                <div class="carousel-inner">
                  <div class="row carousel-item active">
                    <div class="col-12 carousel-item-col">
                      <img src={this.projects[this.match.params.project].features.image1} />
                    </div>
                  </div>
                  <div class="row carousel-item">
                    <div class="col-12 carousel-item-col">
                      <img src={this.projects[this.match.params.project].features.image2} />
                    </div>
                  </div>
                  <div class="row carousel-item">
                    <div class="col-12 carousel-item-col">
                      <img src={this.projects[this.match.params.project].features.image3} />
                    </div>
                  </div>
                </div>
                <ol class="carousel-indicators" style={{ bottom: '-50px' }}>
                  <li data-target="#partnersCarousel" data-slide-to="0" class="active" />
                  <li data-target="#partnersCarousel" data-slide-to="1" />
                  <li data-target="#partnersCarousel" data-slide-to="2" />
                </ol>
              </div>
            </div>
          </div>
          <div class="key-features-text">
            <div class="container">
              <h2>{this.projects[this.match.params.project].features.title}</h2>
              <p>{this.projects[this.match.params.project].features.text}</p>
            </div>
          </div>
        </section>
        <section class="more-projects container">
          <h2 class="aside-lines">
            <span>More Projects</span>
          </h2>
          <div class="more-projects-items">{this.getOtherProjects()}</div>
        </section>
        <app-cta />
        <app-footer />
      </div>
    );
  }
}
