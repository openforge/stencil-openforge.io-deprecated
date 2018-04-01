import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-members',
  styleUrl: 'app-members.scss',
})
export class AppMembers {
  @Prop() match: MatchResults;
  @Prop() members: any[];

  render() {
    return (
      <div class="row">
        {this.members.map(member => (
          <div class={{ 'col-sm-12': true, 'col-md-4': true, 'mb-4': true }}>
            <div
              class={{ 'pt-4': true }}
              style={{ border: `${member.color} 2px solid` }}
            >
              <img
                class={{
                  'card-img-top': true,
                  'mt-2': true,
                  'pl-4': true,
                  'pr-4': true,
                }}
                src={member.image}
                alt={member.name}
                style={{ borderRadius: '80%' }}
              />

              <div class={{ 'card-body': true, 'text-center': true }}>
                <small
                  class={{
                    'card-title': true,
                    'mb-auto': true,
                    'font-weight-bold': true,
                  }}
                  style={{ color: member.color }}
                >
                  {member.title}
                </small>
                <h4 class={{ 'card-text': true, 'mb-auto': true }}>
                  {member.name}
                </h4>
              </div>

              <div
                class={{ 'col align-self-center': true, 'text-center': true }}
                style={{ fontSize: '2em' }}
              >
                <a
                  href={`mailto:${member.mail}`}
                  target="_blank"
                  style={{ color: member.color }}
                >
                  <i
                    class={{ 'fa fa-envelope-square': true, 'pr-3': true }}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={`${member.twitter}`}
                  target="_blank"
                  style={{ color: member.color }}
                >
                  <i
                    class={{ 'fa fa-twitter-square': true, 'pr-3': true }}
                    aria-hidden="true"
                    link-url={`${member.twitter}`}
                  />
                </a>

                <a
                  href={`${member.github}`}
                  target="_blank"
                  style={{ color: member.color }}
                >
                  <i
                    class={{ 'fab fa-github-square': true, 'pr-3': true }}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
