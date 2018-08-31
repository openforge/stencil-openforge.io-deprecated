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
      headerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultricies quam ac pulvinar. Mauris quis dignissim dui. Mauris nec lorem eget mi accumsan auctor. Integer accumsan aliquet nulla, ac condimentum mauris faucibus eu. Quisque lectus sapien, consectetur et congue nec, pretium id nisi. Integer consectetur, massa in sagittis dapibus, tellus lacus scelerisque ante, at auctor ligula ipsum sit amet purus. Sed ex nulla, vehicula nec enim eget, viverra consequat eros.',
      bodyText:
        "There's no doubt that our team is made up of brilliant and talented individuals. Together we design, code, grow, and evolce. Lorem ipsum dolor sit amet, consectetur adispiscing elit. Aliquam ac libero.",
      skills: ['¯\\_(ツ)_/¯'],
      image: '/assets/team-landing-management.png',
    },
    geoffery: {
      firstname: 'Geoffery',
      surname: 'Melle',
      title: translate('home.member.title.accountManager'),
      headerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultricies quam ac pulvinar. Mauris quis dignissim dui. Mauris nec lorem eget mi accumsan auctor. Integer accumsan aliquet nulla, ac condimentum mauris faucibus eu. Quisque lectus sapien, consectetur et congue nec, pretium id nisi. Integer consectetur, massa in sagittis dapibus, tellus lacus scelerisque ante, at auctor ligula ipsum sit amet purus. Sed ex nulla, vehicula nec enim eget, viverra consequat eros.',
      bodyText:
        "There's no doubt that our team is made up of brilliant and talented individuals. Together we design, code, grow, and evolce. Lorem ipsum dolor sit amet, consectetur adispiscing elit. Aliquam ac libero.",
      skills: [
        'Email Marketing',
        'SEO',
        'Networking',
        'Digital Markting Analysis',
        'Dog Whispering',
      ],
      image: '/assets/team-landing-management.png',
    },
    paulina: {
      firstname: 'Paulina',
      surname: 'Gallo',
      title: translate('home.member.title.developer'),
      headerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultricies quam ac pulvinar. Mauris quis dignissim dui. Mauris nec lorem eget mi accumsan auctor. Integer accumsan aliquet nulla, ac condimentum mauris faucibus eu. Quisque lectus sapien, consectetur et congue nec, pretium id nisi. Integer consectetur, massa in sagittis dapibus, tellus lacus scelerisque ante, at auctor ligula ipsum sit amet purus. Sed ex nulla, vehicula nec enim eget, viverra consequat eros.',
      bodyText:
        "There's no doubt that our team is made up of brilliant and talented individuals. Together we design, code, grow, and evolce. Lorem ipsum dolor sit amet, consectetur adispiscing elit. Aliquam ac libero.",
      skills: [
        'Angular',
        'Ionic',
        'Firebase',
        'iOS',
        'Android',
        'Frontend Development',
        'ParseSDK',
        'UX',
      ],
      image: '/assets/team-landing-development.png',
    },
    fernando: {
      firstname: 'Fernando',
      surname: 'Del Olmo',
      title: translate('home.member.title.developer'),
      headerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultricies quam ac pulvinar. Mauris quis dignissim dui. Mauris nec lorem eget mi accumsan auctor. Integer accumsan aliquet nulla, ac condimentum mauris faucibus eu. Quisque lectus sapien, consectetur et congue nec, pretium id nisi. Integer consectetur, massa in sagittis dapibus, tellus lacus scelerisque ante, at auctor ligula ipsum sit amet purus. Sed ex nulla, vehicula nec enim eget, viverra consequat eros.',
      bodyText:
        "There's no doubt that our team is made up of brilliant and talented individuals. Together we design, code, grow, and evolce. Lorem ipsum dolor sit amet, consectetur adispiscing elit. Aliquam ac libero.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NodeJS'],
      image: '/assets/team-landing-development.png',
    },
    william: {
      firstname: 'William',
      surname: 'Holloran',
      title: translate('home.member.title.projectManager'),
      headerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultricies quam ac pulvinar. Mauris quis dignissim dui. Mauris nec lorem eget mi accumsan auctor. Integer accumsan aliquet nulla, ac condimentum mauris faucibus eu. Quisque lectus sapien, consectetur et congue nec, pretium id nisi. Integer consectetur, massa in sagittis dapibus, tellus lacus scelerisque ante, at auctor ligula ipsum sit amet purus. Sed ex nulla, vehicula nec enim eget, viverra consequat eros.',
      bodyText:
        "There's no doubt that our team is made up of brilliant and talented individuals. Together we design, code, grow, and evolce. Lorem ipsum dolor sit amet, consectetur adispiscing elit. Aliquam ac libero.",
      skills: [
        'Quality Assurance',
        'Organization',
        'Communication',
        'Critical Thinking',
        'Negotiation',
        'Sense of Humor',
      ],
      image: '/assets/team-landing-management.png',
    },
    luis: {
      firstname: 'Luis',
      surname: 'Chacon',
      title: translate('home.member.title.developer'),
      headerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultricies quam ac pulvinar. Mauris quis dignissim dui. Mauris nec lorem eget mi accumsan auctor. Integer accumsan aliquet nulla, ac condimentum mauris faucibus eu. Quisque lectus sapien, consectetur et congue nec, pretium id nisi. Integer consectetur, massa in sagittis dapibus, tellus lacus scelerisque ante, at auctor ligula ipsum sit amet purus. Sed ex nulla, vehicula nec enim eget, viverra consequat eros.',
      bodyText:
        "There's no doubt that our team is made up of brilliant and talented individuals. Together we design, code, grow, and evolce. Lorem ipsum dolor sit amet, consectetur adispiscing elit. Aliquam ac libero.",
      skills: [
        'Angular',
        'Ionic',
        'Firebase',
        'Scrum',
        'Video Game Development',
      ],
      image: '/assets/team-landing-development.png',
    },
    rachel: {
      firstname: 'Rachel',
      surname: 'Bennett',
      title: translate('home.member.title.designer'),
      headerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultricies quam ac pulvinar. Mauris quis dignissim dui. Mauris nec lorem eget mi accumsan auctor. Integer accumsan aliquet nulla, ac condimentum mauris faucibus eu. Quisque lectus sapien, consectetur et congue nec, pretium id nisi. Integer consectetur, massa in sagittis dapibus, tellus lacus scelerisque ante, at auctor ligula ipsum sit amet purus. Sed ex nulla, vehicula nec enim eget, viverra consequat eros.',
      bodyText:
        "There's no doubt that our team is made up of brilliant and talented individuals. Together we design, code, grow, and evolce. Lorem ipsum dolor sit amet, consectetur adispiscing elit. Aliquam ac libero.",
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
      image: '/assets/team-landing-design.png',
    },
    claudio: {
      firstname: 'Claudio',
      surname: 'Del Valle',
      title: translate('home.member.title.developer'),
      headerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultricies quam ac pulvinar. Mauris quis dignissim dui. Mauris nec lorem eget mi accumsan auctor. Integer accumsan aliquet nulla, ac condimentum mauris faucibus eu. Quisque lectus sapien, consectetur et congue nec, pretium id nisi. Integer consectetur, massa in sagittis dapibus, tellus lacus scelerisque ante, at auctor ligula ipsum sit amet purus. Sed ex nulla, vehicula nec enim eget, viverra consequat eros.',
      bodyText:
        "There's no doubt that our team is made up of brilliant and talented individuals. Together we design, code, grow, and evolce. Lorem ipsum dolor sit amet, consectetur adispiscing elit. Aliquam ac libero.",
      skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS'],
      image: '/assets/team-landing-development.png',
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
        <header class="hero">
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
              src={this.data[this.match.params.member].image}
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
