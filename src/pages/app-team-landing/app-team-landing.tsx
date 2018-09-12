import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-team-landing',
  styleUrl: 'app-team-landing.scss',
})
export class AppTeamLanding {
  @Prop() match: MatchResults;

  @State()
  data = {
    jedi: {
      firstname: 'Jedi',
      surname: 'Weller',
      title: translate('home.member.title.founder'),
      headerText: '',
      bodyText: '',
      skills: [],
      team: 'management',
    },
    rachel: {
      firstname: 'Rachel',
      surname: 'Bennett',
      title: translate('home.member.title.designer'),
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
    },
    geoffery: {
      firstname: 'Geoffery',
      surname: 'Melle',
      title: translate('home.member.title.accountManager'),
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
    },
    joni: {
      firstname: 'Joni',
      surname: 'Leho',
      title: translate('home.member.title.developer'),
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
    },
    auvo: {
      firstname: 'Auvo',
      surname: 'Severinkangas',
      title: translate('home.member.title.developer'),
      headerText: '',
      bodyText: '',
      skills: [],
      team: 'development',
    },
    paulina: {
      firstname: 'Paulina',
      surname: 'Gallo',
      title: translate('home.member.title.developer'),
      headerText: 'Paulina started her technical journey at a very young age through video games. This interest sparked her drive to study and receive her Bachelor’s in Computer Science and Digital Media. She has spent the past few years developing web and mobile applications for a wide range of startup and enterprise level clients, all while attending, voluntering, and speaking at various conferences within the development community.',
      bodyText: 'Not only does Paulina code and maintain her development skills, she stays heavily involved with managing the full development process of a project, including the initial scoping, architecture planning, client communication management, and deployment involved in all projects. Paulina volunteers for various organizations and is the co-organizer for Angular Philly and Ionic Philly.',
      skills: [
        'Angular',
        'Ionic',
        'Firebase',
        'iOS',
        'Android',
        'Frontend Development',
        'ParseSDK',
        'UX',
        'Communication',
        'Public speaking',
        'Organization',
      ],
      team: 'development',
    },
    meredith: {
      firstname: 'Meredith',
      surname: 'Alcorn',
      title: translate('home.member.title.developer'),
      headerText: '',
      bodyText: '',
      skills: [],
      team: 'development',
    },
    fernando: {
      firstname: 'Fernando',
      surname: 'Del Olmo',
      title: translate('home.member.title.developer'),
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
    },
    william: {
      firstname: 'William',
      surname: 'Holloran',
      title: translate('home.member.title.projectManager'),
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
    },
    luis: {
      firstname: 'Luis',
      surname: 'Chacon',
      title: translate('home.member.title.developer'),
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
    },
    claudio: {
      firstname: 'Claudio',
      surname: 'Del Valle',
      title: translate('home.member.title.developer'),
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
    },
    ethan: {
      firstname: 'Ethan',
      surname: 'Bohan',
      title: translate('home.member.title.designer'),
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
    },
  };

  chips;

  componentWillLoad() {
    this.chips = this.data[this.match.params.member].skills.map(skill => {
      return <label class="skill-chip">{skill}</label>;
    });
  }

  render() {
    return (
      <section class="team-landing">
        {/* header - hero */}
        <header
          class="hero"
          style={{
            'background-image': `url('/assets/team-landing-header.jpg')`,
          }}
        >
          <div class="overlay" />
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
        </header>
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
        </div>
        <app-cta link-url="/about">
          <span slot="header">Meet The Team</span>
          <span slot="link">Let's go</span>
        </app-cta>
        <app-footer />
      </section>
    );
  }
}
