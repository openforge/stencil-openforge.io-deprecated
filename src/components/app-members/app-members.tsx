import { Component, Prop } from '@stencil/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  tag: 'app-members',
  styleUrl: 'app-members.scss',
})
export class AppMembers {
  @Prop() members: any[];
  ts: TranslationService;

  constructor() {
    this.ts = new TranslationService();
  }

  render() {
    const { translate } = this.ts;
    return (
      <div class="row">
        {this.members.map(member => (
          <div class="col-sm-12 col-md-4 mb-4">
            <div class="pt-4" style={{ border: `${member.color} 2px solid` }}>
              <app-img
                class="card-img-top mt-2 px-4"
                src={member.image}
                alt={member.name}
                style={{ borderRadius: '80%' }}
              />

              <div class="card-body text-center">
                <small
                  class="card-title mb-auto font-weight-bold"
                  style={{ color: member.color }}
                >
                  {member.title}
                </small>
                <h4 class="card-text mb-auto">{member.name}</h4>
              </div>

              <div class="col text-center" style={{ fontSize: '2em' }}>
                {!member.mail ? null : (
                  <a
                    href={`mailto:${member.mail}`}
                    title={`${member.name} ${translate('members.mailAccount')}`}
                    target="_blank"
                    rel="noopener"
                    style={{ color: member.color }}
                  >
                    <i class="fa fa-envelope-square pr-3" aria-hidden="true" />
                  </a>
                )}

                {!member.twitter ? null : (
                  <a
                    href={member.twitter}
                    title={`${member.name} ${translate(
                      'members.twitterAccount'
                    )}`}
                    target="_blank"
                    rel="noopener"
                    style={{ color: member.color }}
                  >
                    <i
                      class="fab fa-twitter-square pr-3"
                      aria-hidden="true"
                      link-url={member.twitter}
                    />
                  </a>
                )}
                {!member.github ? null : (
                  <a
                    href={member.github}
                    title={`${member.name} ${translate(
                      'members.githubAccount'
                    )}`}
                    target="_blank"
                    rel="noopener"
                    style={{ color: member.color }}
                  >
                    <i class="fab fa-github-square pr-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
