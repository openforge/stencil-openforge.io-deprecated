import { Component, Prop, State, Watch } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-team-landing',
  styleUrl: 'app-team-landing.scss',
})
export class AppTeamLanding {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() chips;
  data = {
    'rachel-bennett': {
      firstname: 'Rachel',
      surname: 'Bennett',
      title: translate('about.meet.member.title.designer'),
      headerText:
        "Rachel is originally from the suburbs of Washington, DC and moved to Philadelphia for school, ultimately deciding to stay in Philly after graduating. Her interest in art and language led her to pursue a degree in Graphic Design at Philadelphia University. After graduating with a Bachelor's of Science in 2012, she has been working in the field of design ever since.",
      bodyText:
        'As Lead Designer, Rachel oversees all design projects and communicates directly with our clients for all design related needs. Whether she is designing, strategizing, or concepting, she approaches each problem with an equal measure of discipline and curiosity.',
      skills: [
        'UI/UX Design',
        'Graphic Design',
        'Consulting',
        'Communication',
        'Illustration',
        'Presentation Design',
        'Marketing',
        'Photo Editing',
        'Copywriting',
      ],
      team: 'design',
      backgroundPhoto: '/assets/bios-background-rachel.jpg',
      metatags: {
        title: 'Rachel Bennett - Visual Designer | OpenForge',
        description:
          'As Lead Designer, Rachel oversees all design projects and communicates directly with our clients for all design related needs. Whether she is designing, strategizing, or concepting, she approaches each problem with an equal measure of discipline and curiosity.',
        keywords: 'Rachel Bennett, designer, visual designer, UIUX',
        url: 'https://openforge.io/about/rachel-bennett/',
        image: 'https://openforge.io/assets/bios-background-rachel.jpg'
      },
    },
    'geoffrey-melle': {
      firstname: 'Geoffrey',
      surname: 'Melle',
      title: translate('about.meet.member.title.accountManager'),
      headerText:
        'Geoffrey grew up in the suburbs of Philadelphia and started out his college career pursuing engineering at Drexel University. He formed a new found love for the marketing field though graduating Summa Cum Laud with a Marketing and Business Management degree from West Chester University.',
      bodyText:
        'As account manager, Geoffrey tackles marketing and sales objectives for OpenForge with his experience in digital marketing. Additionally Geoffrey takes part in project management overseeing internal and client projects, ensuring smooth communication and delivery of assets.',
      skills: [
        'Email Marketing',
        'SEO',
        'Networking',
        'Digital Markting Analysis',
        'Dog Whispering',
      ],
      team: 'management',
      backgroundPhoto: '/assets/bios-background-geoff.jpg',
      metatags: {
        title: 'Geoffrey Melle - Account Manager | OpenForge',
        description:
          'As account manager, Geoffrey tackles marketing and sales objectives for OpenForge with his experience in digital marketing. Additionally Geoffrey takes part in project management overseeing internal and client projects, ensuring smooth communication and delivery of assets.',
        keywords: 'Geoffrey Melle',
        url: 'https://openforge.io/about/geoffrey-melle/',
        image: 'https://openforge.io/assets/bios-background-geoff.jpg'
      },
    },
    'joni-lehto': {
      firstname: 'Joni',
      surname: 'Lehto',
      title: translate('about.meet.member.title.developer'),
      headerText:
        'Joni grew up and currently lives in Rovaniemi Finland. After receiving a Bachelor’s degree he has worked as a senior software developer for several prominent companies. He joined OpenForge team to get new international experiences and become a part of a diverse and growing organization.',
      bodyText:
        'As a software engineer, Joni uses his wide expertise and skills to ensure the best possible result. Having worked on various development projects across  industries, he is capable of working on any task that comes his way whether front end or back end development. Joni is also always keen to learn new technologies and processes with your team and ours.',
      skills: [
        'Angular',
        'Ionic',
        'Frontend Development',
        'Firebase',
        'NodeJS',
        'Android',
        'HTML/CSS',
        'MongoDB',
        'React',
      ],
      team: 'development',
      backgroundPhoto: '/assets/team-landing-header.jpg',
    },
    'paulina-gallo': {
      firstname: 'Paulina',
      surname: 'Gallo',
      title: translate('about.meet.member.title.developer'),
      headerText:
        'Paulina started her technical journey at a very young age through video games. This interest sparked her drive to study and receive her Bachelor’s in Computer Science and Digital Media. She has spent the past few years developing web and mobile applications for a wide range of startup and enterprise level clients, all while attending, voluntering, and speaking at various conferences within the development community.',
      bodyText:
        'Not only does Paulina code and maintain her development skills, she stays heavily involved with managing the full development process of a project, including the initial scoping, architecture planning, client communication management, and deployment involved in all projects. Paulina volunteers for various organizations and is the co-organizer for Angular Philly and Ionic Philly.',
      skills: [
        'Angular',
        'Ionic',
        'iOS',
        'Android',
        'Frontend Development',
        'UX',
        'Firebase',
        'ParseSDK',
        'Public speaking',
        'Project Management',
      ],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-paulina.png',
      metatags: {
        title: 'Paulina Gallo - Software Engineer | OpenForge',
        description:
          'Not only does Paulina code and maintain her development skills, she stays heavily involved with managing the full development process of a project, including the initial scoping, architecture planning, client communication management, and deployment involved in all projects. Paulina volunteers for various organizations and is the co-organizer for Angular Philly and Ionic Philly.',
        keywords: 'Paulina Gallo',
        url: 'https://openforge.io/about/paulina-gallo/',
        image: 'https://openforge.io/assets/bios-background-paulina.png'
      },
    },
    'fernando-del-olmo': {
      firstname: 'Fernando',
      surname: 'Del Olmo',
      title: translate('about.meet.member.title.developer'),
      headerText:
        "Fernando is originally from Madrid, Spain where he recieved his Bachelor's degree in Computer Engineering from Universidad Autónoma of Madrid. Joining the OpenForge team allowed Fernando to pursue his dream of having a flexible career working remotely and avoiding a life of cubicles.",
      bodyText:
        'Fernando leverages his development skills and curiousity to troubleshoot road bumps that come up when coding. His ability to discover new technologies and introduce them to the team have kept us up to date with the latest and greatest tools and technology available to the community.',
      skills: [
        'Angular',
        'Ionic',
        'Stencil',
        'Firebase',
        'NGRX',
        'NodeJS',
        'Frontend Development',
      ],
      team: 'development',
      backgroundPhoto: '/assets/team-landing-header.jpg',
    },
    'billy-holloran': {
      firstname: 'Billy',
      surname: 'Holloran',
      title: translate('about.meet.member.title.projectManager'),
      headerText:
        'Billy, our hometown guy was born and raised in Philadelphia and started his career training right out of highschool. Forgoing of the path of college, Billy attended the pre-apprenticeship program at The Urban Technology Project. His tenacity and dedication for a carrer in technology landed him with our team as Project Manager and Quality Assurance Engineer.',
      bodyText:
        'As Project Manager, Billy ensures that our team and your team have the resources and requirements needed in order to successfully launch your product. Heading up our quality assurance process, Billy leads the team in testing all deliverables maintaining high quality standards.',
      skills: [
        'Quality Assurance',
        'Organization',
        'Communication',
        'Critical Thinking',
        'Negotiation',
        'Sense of Humor',
      ],
      team: 'management',
      backgroundPhoto: '/assets/bios-background-billy.jpg',
      metatags: {
        title: 'Billy Holloran - QA Engineer | OpenForge',
        description:
          'As Project Manager, Billy ensures that our team and your team have the resources and requirements needed in order to successfully launch your product. Heading up our quality assurance process, Billy leads the team in testing all deliverables maintaining high quality standards.',
        keywords: 'Billy Holloran',
        url: 'https://openforge.io/about/billy-holloran/',
        image: 'https://openforge.io/assets/bios-background-billy.jpg'
      },
    },
    'luis-chacon': {
      firstname: 'Luis',
      surname: 'Chacon',
      title: translate('about.meet.member.title.developer'),
      headerText:
        'Luis grew up in San José, Costa Rica where he received his Bachelor’s degree in Computer Science and Informatics. Then he traveled to Italy and Spain to study a Masters in Software Engineering with a full scholarship form the European Union. Since then he has developed applications for companies, start ups and government institutions before joining our team at OpenForge.',
      bodyText:
        'Luis has mastered the agile approach to software development having the ability to pivot when necessity arises. His physical distance from other team members does not stand in the way when it comes to pulling the team together for collaboration to tackle tasks at hand and deliver working code that ourselves and clients can rely on.',
      skills: [
        'Angular',
        'Ionic',
        'Firebase',
        'Scrum',
        'Video Game Development',
      ],
      team: 'development',
      backgroundPhoto: '/assets/team-landing-header.jpg',
    },
    'claudio-del-valle': {
      firstname: 'Claudio',
      surname: 'Del Valle',
      title: translate('about.meet.member.title.developer'),
      headerText:
        'Claudio is from Monterrey, Mexico and came to the OpenForge team as an intern from Drexel University. He is currently a senior at Drexel University, where he is expected to graduate with a B.A. in Computer Engineering in 2019. Claudio is a self-proclaimed thinkerer who enjoys 3D-printing and machine learning.',
      bodyText:
        "Claudio leverages his development skills and strong troubleshooting abilities, helping our development team find creative ways to code and debug. Claudio's experience with Angular, Ionic, and Firebase have accelerated our development team and overall processes improving efficiency and productivity.",
      skills: [
        'Angular',
        'Ionic',
        'Firebase',
        'NGRX',
        'NGXS',
        'Thinker',
        'Maker',
        'Doer',
      ],
      team: 'development',
      backgroundPhoto: '/assets/team-landing-header.jpg',
    },
    'ethan-bohan': {
      firstname: 'Ethan',
      surname: 'Bohan',
      title: translate('about.meet.member.title.designer'),
      headerText:
        "Ethan is originally from Long Island New York.  He recieved his Bachelor's degree in Interactive Digital Media from Drexel University. While at at Drexel University he worked with our team as an intern which lead him to his full time position with OpenForge after graduation.",
      bodyText:
        "As a designer, Ethan leverages his design experience and front end development skills helping your team to create an intuitive user interface that translates into a positive user experience. Through close collaboration with our design team and development team, Ethan's skills streamline the design process.",
      skills: [
        'UI/UX Design',
        'Graphic Design',
        'Frontend development',
        'Ionic',
        'Sketch',
        'Adobe Creative Suite',
      ],
      team: 'design',
      backgroundPhoto: '/assets/bios-background-ethan.jpg',
      metatags: {
        title: 'Ethan Bohan- Visual Designer | OpenForge',
        description:
          "As a designer, Ethan leverages his design experience and front end development skills helping your team to create an intuitive user interface that translates into a positive user experience. Through close collaboration with our design team and development team, Ethan's skills streamline the design process.",
        keywords: 'Ethan Bohan',
        url: 'https://openforge.io/about/ethan-bohan/',
        image: 'https://openforge.io/assets/bios-background-ethan.jpg'
      },
    },
    'dhairya-pujara': {
      firstname: 'Dhairya',
      surname: 'Pujara',
      title: translate('about.meet.member.title.consultant'),
      headerText:
        "Dhairya Pujara is the Founder, CEO at Ycenter, he is responsible for building a global ecosystem bringing in corporates, universities, NGOs for creating experiential educational programs. Dhairya's core expertise is in Design Thinking, Business Model, Market Research, Customer Journey using Empathy maps and Story-telling for Brand positioning.",
      bodyText:
        "Dhairya has been the curator for 'Global Shaper Hub Philadelphia' by World Economic Forum. He has been a global TEDx organizer and a sought-after public speaker on entrepreneurship and international development. He delivers keynote and guest lectures in some of the top business schools and conferences around the globe. From United Nations G77 to Wharton Business School, Dhairya is a leading speaker and educator around the world. Dhairya sits on the advisory board for European Commission program LASIN - Latin American Social Innovation network. In 2015, American Immigration granted him an approval for special category work visa reserved for 'an individual of extra-ordinary abilities. For more information please visit https://dhairyapujara.me/",
      skills: [
        'Design Thinking',
        'Business Model',
        'Market Research',
        'Customer Journey',
        'Empathy Maps',
        'Story Telling',
        'Brand Positioning',
      ],
      team: 'consultant',
      backgroundPhoto: '/assets/team-landing-header.jpg',
    },
    'ted-grant': {
      firstname: 'Ted',
      surname: 'Grant',
      title: translate('about.meet.member.title.designer'),
      headerText:
        'Ted grew up in Westchester, New York and Atlanta, Georgia. He is a Junior attending Drexel University in Philadelphia, pursuing a degree in Game Design and Production, and is on a co-op with OpenForge. He enjoys working with 3D modeling, 2D art, and pen-and-paper games.',
      bodyText:
        "As a designer, Ted uses his experience in visual design and eye for user-flow to help make a product that is visually pleasing and tactually smooth. Thanks to Drexel's rapid-fire scheduling, he is adaptable and quick to learn new skills, helping to ease collaborator's work and get projects done faster.",
      skills: [
        'UI/UX Design',
        'Adobe Creative Suite',
        'Sketch',
        'Autodesk applications',
        'Unity',
      ],
      team: 'design',
      backgroundPhoto: '/assets/bios-background-ted.png',
      metatags: {
        title: 'Ted Grant - Design Intern | OpenForge',
        description:
          "As a designer, Ted uses his experience in visual design and eye for user-flow to help make a product that is visually pleasing and tactually smooth. Thanks to Drexel's rapid-fire scheduling, he is adaptable and quick to learn new skills, helping to ease collaborators' work and get projects done faster.",
        keywords: 'Ted Grant',
        url: 'https://openforge.io/about/ted-grant/',
        image: 'https://openforge.io/assets/bios-background-ted.png'
      },
    },
    'kevon-chambers': {
      firstname: 'Kevon',
      surname: 'Chambers',
      title: translate('about.meet.member.title.marketing'),
      headerText: '',
      bodyText: '',
      skills: [],
      team: 'design',
      backgroundPhoto: '/assets/bios-background-kevon.png',
    },
    'young-song': {
      firstname: 'Young',
      surname: 'Song',
      title: translate('about.meet.member.title.softwareIntern'),
      headerText:
        'Young was born in Korea. He came to the USA in 1990 to study Physics. His first programming experience was about 25 years ago. However, he had to stop his coding job after he failed to get a working visa. In 2017, after he received a green card, He restarted coding. He learned coding using a mixture of Udemy, YouTube, and Collegiate courses.',
      bodyText:
        'Young is an intern at OpenForge learning mobile app development with the Ionic framework and Angular.',
      skills: ['UI/UX Design', 'Frontend development', 'Backend development'],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-young.jpg',
      metatags: {
        title: 'Young Son - Software Intern | OpenForge',
        description:
          'Young is an intern at OpenForge learning mobile app development with the Ionic framework and Angular.',
        keywords: 'Young Song',
        url: 'https://openforge.io/about/young-song/',
        image: 'https://openforge.io/assets/bios-background-young.jpg'
      },
    },
    'sam-hudgens': {
      firstname: 'Sam',
      surname: 'Hudgens',
      title: translate('about.meet.member.title.softwareIntern'),
      headerText:
        'Sam is originally from Montgomery, Alabama. He studied Chinese and Business Administration at the University of Southern California in Los Angeles with plans of going into finance, but decided on a career change into tech at the last minute. He attended a programming bootcamp after graduating college and ended up in Philadelphia. Sam likes learning both computer languages and human languages.',
      bodyText:
        'Sam is an intern at OpenForge learning mobile app development with the Ionic framework and Angular.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Java'],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-sam.jpg',
      metatags: {
        title: 'Sam Hudgens - Software Intern | OpenForge',
        description:
          'Sam is an intern at OpenForge learning mobile app development with the Ionic framework and Angular.',
        keywords: 'Sam Hudgens',
        url: 'https://openforge.io/about/sam-hudgens/',
        image: 'https://openforge.io/assets/bios-background-sam.jpg'
      },
    },
    casey: {
      firstname: 'Casey',
      surname: '',
      title: translate('about.meet.member.title.officer'),
      headerText:
        'Casey started her life out on the streets in the Kensington section of Philadelphia where a good samaritan found her at just few weeks old and dropped her off at a local animal shelter. She enjoys long hikes, belly rubs, doggy bones, and giving kisses to all who are present. ',
      bodyText:
        'As office dog, Casey ensures that no employee is ever left feeling like they are suffering from a lack of doggy affection. Working tirelessly to give doggy kisses and taking naps throughout the day, she offers a fresh perspective on what it means to live a worry-free life.',
      skills: [
        'Running',
        'Jumping',
        'Bone Chewing',
        'Licking',
        'Napping',
        'Barking',
        'Whinning',
      ],
      team: 'pet',
      backgroundPhoto: '/assets/bios-background-casey.jpg',
      metatags: {
        title: 'Casey - Chief Happiness Officer | OpenForge',
        description:
          'As office dog, Casey ensures that no employee is ever left feeling like they are suffering from a lack of doggy affection. Working tirelessly to give doggy kisses and taking naps throughout the day, she offers a fresh perspective on what it means to live a worry-free life.',
        keywords: 'Casey',
        url: 'https://openforge.io/about/casey/',
        image: 'https://openforge.io/assets/bios-background-casey.jpg'
      },
    },
  };

  @Watch('match')
  matchHandler() {
    this.changeMetadata();
  }

  componentWillLoad() {
    if(!this.data[this.match.params.member]) {
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
    if(this.data[this.match.params.member]) {
      // Change meta tags dynamically
      document
        .querySelector("meta[property='og:title']")
        .setAttribute(
          'content',
          this.data[this.match.params.member].metatags.title
        );
      document
        .querySelector("meta[property='og:description']")
        .setAttribute(
          'content',
          this.data[this.match.params.member].metatags.description
        );
      document
        .querySelector("meta[property='og:url']")
        .setAttribute(
          'content',
          this.data[this.match.params.member].metatags.url
        );
      document
        .querySelector("meta[property='og:image']")
        .setAttribute(
          'content',
          this.data[this.match.params.member].metatags.image
        );
      document
        .querySelector("meta[name='keywords']")
        .setAttribute(
          'content',
          this.data[this.match.params.member].metatags.keywords
      );
    }
  }

  render() {
    return (
      <section class="team-landing">
      {/* header - hero */}
      {this.data[this.match.params.member] 
      ? [
          <header
            class="hero"
            style={{
              'background-image': `url(${
                this.data[this.match.params.member].backgroundPhoto
              })`,
            }}
          >
          <div class="overlay" />,
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12 col-md-8 col-lg-8">
                  <h2>
                    {`${this.data[this.match.params.member].firstname} ${
                      this.data[this.match.params.member].surname
                    }`}
                  </h2>
                  <h4>{this.data[this.match.params.member].title}</h4>
                  <p>{this.data[this.match.params.member].headerText}</p>
                </div>
              </div>
            </div>
          </header>,
          <div class="container">
            <section class="text-img-container right-side">
              <app-img
                class="img-fluid d-none d-md-inline"
                src={`/assets/team-landing-${
                  this.data[this.match.params.member].team
                }.png`}
                alt=""
              />
              <div class="text-img-container-text">
                <h2>What {this.data[this.match.params.member].firstname} Does</h2>
                <p>{this.data[this.match.params.member].bodyText}</p>
                <h4>Skills</h4>
                {this.chips}
              </div>
            </section>
          </div>,
          <app-cta link-url="/about">
            <span slot="header">Meet The Team</span>
            <span slot="link">Let's go</span>
          </app-cta>,
          <app-footer />,
        ]
      : null }
      </section>
    );
  }
}
