import { Component, State, Prop, Watch, h } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-team-landing',
  styleUrl: 'app-team-landing.scss',
})
export class AppTeamLanding {
  // private allowWebp = localStorage.getItem('allowWebp') === 'true' ? true : false;

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() chips;
  data = {
    'jedi-weller': {
      firstname: 'Jedi',
      surname: 'Weller',
      title: translate('about.team.member.title.founder'),
      headerText:
        'Jedi (Jedidah) is a speaker, community leader, and developer who advocates for the empowerment of businesses through technology. Jedi and his team have been pioneering new ways of designing mobile solutions for the digital world. His work at OpenForge and the development community continues to lay the groundwork for clearer communication and enhanced transparency in the technology and Startup communities.',
      bodyText:
        'Besides being the chief morale booster, Jedi leads the strategic partnerships and public outreach programs at OpenForge. His boundless energy and ambition means he’s constantly jumping between client calls, networking events, and ensuring the team and clients are happy with the work being done.',
      skills: ['UI/UX Design', 'Graphic Design', 'Consulting', 'Communication', 'Illustration', 'Presentation Design', 'Marketing', 'Photo Editing', 'Copywriting'],
      team: 'design',
      backgroundPhoto: '/assets/bios-background-jedi.jpg',
      metatags: {
        title: 'Rachel Bennett - Visual Designer | OpenForge',
        description:
          'As Lead Designer, Rachel oversees all design projects and communicates directly with our clients for all design related needs. Whether she is designing, strategizing, or concepting, she approaches each problem with an equal measure of discipline and curiosity.',
        keywords: 'Rachel Bennett, designer, visual designer, UIUX',
        url: 'https://openforge.io/about/rachel-bennett/',
        image: 'https://openforge.io/assets/bios-background-jedi.jpg',
      },
    },
    'rachel-bennett': {
      firstname: 'Rachel',
      surname: 'Bennett',
      title: translate('about.team.member.title.designer'),
      headerText:
        'Originally hailing from the Washington, D.C. area, Rachel first came to Philadelphia to study Graphic Design. She has since adopted the city as her second home and currently resides in South Philadelphia. When she’s not solving UX problems, she likes to spend her time drawing, running, and taking pictures of her cats.',
      bodyText:
        'As Lead Designer, Rachel oversees all design projects and communicates directly with our clients for all design related needs. Whether she is designing, strategizing, or conceptualizing, she approaches each problem with an equal measure of discipline and curiosity.',
      skills: ['UI Design', 'UX Design', 'Web Design', 'Product Design', 'Graphic Design', 'Prototyping', 'Consulting'],
      team: 'design',
      backgroundPhoto: '/assets/bios-background-rachel.jpg',
      metatags: {
        title: 'Rachel Bennett - Visual Designer | OpenForge',
        description:
          'As Lead Designer, Rachel oversees all design projects and communicates directly with our clients for all design related needs. Whether she is designing, strategizing, or concepting, she approaches each problem with an equal measure of discipline and curiosity.',
        keywords: 'Rachel Bennett, designer, visual designer, UIUX',
        url: 'https://openforge.io/about/rachel-bennett/',
        image: 'https://openforge.io/assets/bios-background-rachel.jpg',
      },
    },
    'paulina-gallo': {
      firstname: 'Paulina',
      surname: 'Gallo',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Paulina started her technical journey at a young age through an interest in video games. This interest sparked her drive to study and she received her Bachelor’s in Computer Science and Digital Media. She has spent the past few years developing web and mobile applications for a wide range of start-up and enterprise level clients, all while attending, volunteering, and speaking at various conferences within the development community. Even with all this she still finds time to play video games.',
      bodyText:
        'Not only does Paulina code on a daily basis and maintain her development skills, she stays heavily involved with managing the development process. This includes the initial scoping, architecture planning, client communication, and the deployment of all projects. Outside of OpenForge Paulina volunteers for various local tech organizations and is the co-organizer of Angular Philly and Ionic Philly.',
      skills: ['Front-end Wizard', 'Angular', 'Ionic', 'Typescript', 'Cordova', 'Capacitor', 'Firebase', 'RxJS', 'Redux', 'NgRx'],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-paulina.png',
      metatags: {
        title: 'Paulina Gallo - Software Engineer | OpenForge',
        description:
          'Not only does Paulina code and maintain her development skills, she stays heavily involved with managing the full development process of a project, including the initial scoping, architecture planning, client communication management, and deployment involved in all projects. Paulina volunteers for various organizations and is the co-organizer for Angular Philly and Ionic Philly.',
        keywords: 'Paulina Gallo',
        url: 'https://openforge.io/about/paulina-gallo/',
        image: 'https://openforge.io/assets/bios-background-paulina.png',
      },
    },
    'leon-degtar': {
      firstname: 'Leon',
      surname: 'Degtar',
      title: translate('about.team.member.title.operationsDirector'),
      headerText:
        'Leon is an operational and financial leader who has worked in a variety of industries and businesses. He has worked on technology projects with many Fortune 1000 companies. As Director of Operations, Leon focuses on partnering with our clients to solve their business problems with cutting-edge mobile technology.',
      bodyText: 'Leon provides guidance to our clients and team with clear process and a focus on execution and communication.',
      skills: ['Business Analysis', 'Financial Oversight', 'Organizational Development', 'Process Optimization'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-leon.png',
      metatags: {
        title: 'Fernando Del Olmo - Software Engineer | OpenForge',
        description:
          'Fernando is originally from Madrid, Spain where he recieved his Bachelors degree in Computer Engineering from Universidad Autónoma of Madrid. Joining the OpenForge team allowed Fernando to pursue his dream of having a flexible career working remotely and avoiding a life of cubicles.',
        keywords: 'Fernano Del Olmo',
        url: 'https://openforge.io/about/fernando-del-olmo/',
        image: 'https://openforge.io/assets/bios-background-fernando.png',
      },
    },
    'fernando-del-olmo': {
      firstname: 'Fernando',
      surname: 'Del Olmo',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Growing up, Fernando was surrounded by people who loved computers and gaming. This stirred his own interest in learning more about technology, which eventually lead him to becoming a Computer Engineer. After graduating, he worked for a number of different companies, all dealing with web technologies and finally found the perfect fit with OpenForge!',
      bodyText:
        'Fernando helps manage the development process of projects; from the initial scoping and architectural planning aspects, all the way through to the actual development of the product. He is always considering ways to improve the way the development team functions by staying up-to-date on  technology and tools.',
      skills: ['Angular', 'Ionic', 'Stencil', 'Firebase', 'NGRX', 'NodeJS', 'Frontend Development'],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-fernando.png',
      metatags: {
        title: 'Fernando Del Olmo - Software Engineer | OpenForge',
        description:
          'Fernando is originally from Madrid, Spain where he recieved his Bachelors degree in Computer Engineering from Universidad Autónoma of Madrid. Joining the OpenForge team allowed Fernando to pursue his dream of having a flexible career working remotely and avoiding a life of cubicles.',
        keywords: 'Fernano Del Olmo',
        url: 'https://openforge.io/about/fernando-del-olmo/',
        image: 'https://openforge.io/assets/bios-background-fernando.png',
      },
    },
    'william-holloran': {
      firstname: 'Billy',
      surname: 'Holloran',
      title: translate('about.team.member.title.qualityManager'),
      headerText:
        'Billy, our hometown guy, was born and raised in Philadelphia and started his career training right out of high school. Forgoing of the path of college, Billy attended the pre-apprenticeship program at The Urban Technology Project. His tenacity and dedication for a career in technology landed him with our team as head of Quality Management.',
      bodyText:
        'As Quality Management, Billy leads the team in testing all company deliverables. Through manual and automated testing, Billy reviews projects to ensure that all functional requirements are met, and releases contain only expectable bugs.',
      skills: ['Quality Assurance', 'Organization', 'Communication', 'Critical Thinking', 'Negotiation', 'Sense of Humor'],
      team: 'management',
      backgroundPhoto: '/assets/bios-background-billy.jpg',
      metatags: {
        title: 'Billy Holloran - QA Engineer | OpenForge',
        description:
          'As Project Manager, Billy ensures that our team and your team have the resources and requirements needed in order to successfully launch your product. Heading up our quality assurance process, Billy leads the team in testing all deliverables maintaining high quality standards.',
        keywords: 'Billy Holloran',
        url: 'https://openforge.io/about/billy-holloran/',
        image: 'https://openforge.io/assets/bios-background-billy.jpg',
      },
    },
    'luis-chacon': {
      firstname: 'Luis',
      surname: 'Chacon',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Luis grew up in San José, Costa Rica where he received his Bachelor’s degree in Computer Science and Informatics. He received a full scholarship from the European Union and traveled to Italy and Spain in order to pursue a Master’s degree in Software Engineering. Since then, he has developed a diverse range of mobile applications for companies, start-ups and governmental institutions before joining our team at OpenForge.',
      bodyText:
        'Luis has mastered the agile approach to software development and has the ability to seamlessly transition between tasks and pivot if the necessity arises. His physical distance from the other team members does not stand in the way when it comes to pulling the team together for collaboration to tackle tasks at hand and deliver working code that ourselves and clients can rely on.',
      skills: ['Typescript', 'Firebase', 'Scrum'],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-luis.png',
      metatags: {
        title: 'Luis Chacon - Software Engineer | OpenForge',
        description:
          'Luis grew up in San José, Costa Rica where he received his Bachelor’s degree in Computer Science and Informatics. Then he traveled to Italy and Spain to study a Masters in Software Engineering with a full scholarship form the European Union. Since then he has developed applications for companies, start ups and government institutions before joining our team at OpenForge.',
        keywords: 'Luis Chacon',
        url: 'https://openforge.io/about/luis-chacon/',
        image: 'https://openforge.io/assets/bios-background-luis.jpg',
      },
    },
    'claudio-del-valle': {
      firstname: 'Claudio',
      surname: 'Del Valle',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio began programming early in High School as a way to learn more about robotics. After being introduced to OpenForge; and stemming from his love for creating and a passion for continuous improvement, Web Development became his main focus. Finally, a couple of years (and a bachelor’s degree in Computer Engineering) later, Claudio enjoys keeping up with the newest trends in web development; especially those related to Ionic and Angular.',
      bodyText:
        'Like most of the developers at OpenForge, Claudio is involved in the scoping and development process of mobile apps. He enjoys the discovery process and lends his technical opinion wherever needed to improve the overall product. He enjoys keeping up with the latest web development trends and sharing his knowledge with the rest of the team.',
      skills: ['NodeJS', 'RxJS', 'Angular', 'Ionic', 'StencilJS', 'Firebase'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-claudio.png',
    },
    'min-lee': {
      firstname: 'Min',
      surname: 'Lee',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-min.png',
    },
    'may-alkhraisha': {
      firstname: 'May',
      surname: 'Alkhraisha',
      title: translate('about.team.member.title.marketingCoordinator'),
      headerText:
        'After studying business in her home country; Jordan, May undertook a course in Web & Graphic Design. She entered the world of marketing through her work in branding agencies. She became the newest addition to our team after attending a start-up event hosted by OpenForge. May lives in Center City and spends her free time working on her own mobile application, hiking, or climbing.',
      bodyText:
        'May handles branding, marketing & communication efforts within the company. In a turn of fate, she is also responsible for planning the same events that introduced her to OpenForge! May also meets with clients & is happy to introduce them to our process & walk them through it step-by-step.',
      skills: ['Branding', 'Content Writing', 'Editing', 'Marketing'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-may.png',
    },
    'mariela-mora': {
      firstname: 'Mariela',
      surname: 'Mora Quesada',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Mariela is our administrative assistant and is from Coronado; just east of San Jose, Costa Rica. While she has a degree in Physical Therapy, she  accumulated 15 years experience in customer service and interpretation, which makes her an excellent communicator. Her curiosity about web & mobile app development lead her to joining the OpenForge team.',
      bodyText:
        "Mariela is in charge of reviewing the team's schedules and generating both internal and external reports, as well as invoicing. She constantly strives to improve the services we provide.",
      skills: ['Communication', 'Problem Solving', 'Customer Service'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-mariela.png',
    },
    'petrell-vereen': {
      firstname: 'Petrell',
      surname: 'Vereen',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-petrell.png',
    },
    'jared-bradshaw': {
      firstname: 'Jared',
      surname: 'Bradshaw',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-jared.png',
    },
    'harry-scheuerle': {
      firstname: 'Harry',
      surname: 'Scheuerle',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-harry.png',
    },
    'matt-moran': {
      firstname: 'Matt',
      surname: 'Moran',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-matt.png',
    },
    'carter-simonson': {
      firstname: 'Carter',
      surname: 'Simonson',
      title: translate('about.team.member.title.developer'),
      headerText:
        "Carter is a school student and software developer from small-town Wisconsin, who - like many developers - discovered his passion for software development at an early age through video games. He soon after learned that he loved mobile app development, and hasn't looked back since! Joining the OpenForge team remotely allowed him the flexibility to pursue his software development career while still attending school.",
      bodyText: 'Carter is primarily a mobile developer, and helps our team in the initial setup, planning,and development of new mobile applications.',
      skills: ['Typescript', 'Angular', 'React', 'Ionic', 'Firebase', 'NodeJS'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-carter.png',
    },
    'griffin-robbins': {
      firstname: 'Griffin',
      surname: 'Robbins',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-griffin.png',
    },
    'pablo-huerta': {
      firstname: 'Pablo',
      surname: 'Huerta',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-pablo.png',
    },
    'alberto-carniel': {
      firstname: 'Alberto',
      surname: 'Carniel',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
      team: 'development',
      headshotPhoto: './../../assets/headshot-alberto.png',
    },
  };

  @Watch('match')
  matchHandler() {
    this.changeMetadata();
  }

  componentWillLoad() {
    if (!this.data[this.match.params.member]) {
      this.history.push(`/`, {});
    } else {
      this.chips = this.data[this.match.params.member].skills.map(skill => {
        return <label class="skill-chip">{skill}</label>;
      });
    }
  }

  componentDidLoad() {
    this.changeMetadata();
  }

  changeMetadata() {
    if (this.data[this.match.params.member]) {
      // Change meta tags dynamically
      document.querySelector("meta[property='og:title']").setAttribute('content', this.data[this.match.params.member].metatags.title);
      document.querySelector("meta[property='og:description']").setAttribute('content', this.data[this.match.params.member].metatags.description);
      document.querySelector("meta[property='og:url']").setAttribute('content', this.data[this.match.params.member].metatags.url);
      document.querySelector("meta[property='og:image']").setAttribute('content', this.data[this.match.params.member].metatags.image);
      document.querySelector("meta[name='keywords']").setAttribute('content', this.data[this.match.params.member].metatags.keywords);
    }
  }

  changeImageFormat(img: string) {
    // if (img && this.allowWebp) {
    //   const idx = img.lastIndexOf('.');
    //   return `${img.substring(0, idx)}.webp`;
    // }
    return img;
  }

  render() {
    const backgroundPhoto = this.changeImageFormat(this.data[this.match.params.member].backgroundPhoto);
    const headshotPhoto = this.changeImageFormat(this.data[this.match.params.member].headshotPhoto);
    let style = {};
    if (window.innerWidth > 767.98) {
      style = backgroundPhoto
        ? {
            'background-image': `linear-gradient(90deg, #000000 20%, rgba(255, 255, 255, 0) 70%), url(${backgroundPhoto})`,
          }
        : {
            'background-color': '#292A2D',
          };
    }
    window.addEventListener('resize', () => {
      const hero = document.querySelector('.hero') as HTMLElement;
      if (window.innerWidth > 767.98) {
        hero.style.backgroundColor = '#292A2D';
        if (backgroundPhoto) {
          hero.style.backgroundImage = `linear-gradient(90deg, #000000 20%, rgba(255, 255, 255, 0) 70%), url(${backgroundPhoto})`;
        }
      } else {
        hero.style.backgroundImage = 'none';
        hero.style.backgroundColor = 'transparent';
      }
    });

    return (
      <section class="team-landing">
        {/* header - hero */}
        {this.data[this.match.params.member]
          ? [
              <div class="container-fluid">
                <div class="row justify-content-center align-items-center hero" style={style}>
                  <div class="col-10 col-sm-12 d-block d-md-none">
                    <app-img class="headshot-mobile" src={headshotPhoto} />
                  </div>
                  <div class="col-11 col-sm-9 col-md-7 col-lg-6 align-self-start">
                    <div class="header-text">
                      <h1>{`${this.data[this.match.params.member].firstname} ${this.data[this.match.params.member].surname}`}</h1>
                      <h3>{this.data[this.match.params.member].title}</h3>
                      <app-img
                        class="d-md-none badge"
                        src={`/assets/team-landing-graphic-${this.data[this.match.params.member].team}-badge.png`}
                        alt="Job Title Badge - Design, Development, Management"
                      />
                      <p>{this.data[this.match.params.member].headerText}</p>
                    </div>
                  </div>
                  <div class="col-md-4 d-none d-md-block">{!backgroundPhoto && <app-img class="headshot" src={headshotPhoto} />}</div>
                </div>

                <div class="row align-items-center justify-content-center bio">
                  <div class="col-9 col-sm-9 col-md-5 col-lg-4">
                    <app-img
                      class="d-none d-md-block badge"
                      src={`/assets/team-landing-graphic-${this.data[this.match.params.member].team}-badge.png`}
                      alt="Job Title Badge - Design, Development, Management"
                    />
                  </div>
                  <div class="col-11 col-sm-9 col-md-7 col-lg-5">
                    <h2>
                      <app-translate keyword="about.landing.container.title1" />
                      &nbsp;{this.data[this.match.params.member].firstname}&nbsp;
                      <app-translate keyword="about.landing.container.title2" />
                    </h2>
                    <p>{this.data[this.match.params.member].bodyText}</p>
                    <h4>
                      <app-translate keyword="about.landing.container.skills" />
                    </h4>
                    <div class="chips-container">{this.chips}</div>
                  </div>
                </div>

                <div id="members" class="row justify-content-center members">
                  <div class="col-11 col-lg-12">
                    <h2>
                      <app-translate keyword="about.landing.cta.title" />
                    </h2>
                    <app-members-section />
                  </div>
                </div>
              </div>,
              <app-footer />,
            ]
          : null}
      </section>
    );
  }
}
