import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-members',
  styleUrl: 'app-members.scss',
})
export class AppMembers {
  @Prop() members: any[];

  render() {
    return (
      <div class="row">
        {this.members.map(member => (
          <div class="col-sm-12 col-md-4 mb-4">
            <div class="pt-4" style={{ border: `${member.color} 2px solid` }}>
              <img
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

              <div
                class="col align-self-center text-center"
                style={{ fontSize: '2em' }}
              >
                {/* If we have an email account */}
                {!member.mail ? null : (
                  <a
                    href={`mailto:${member.mail}`}
                    target="_blank"
                    style={{ color: member.color }}
                  >
                    <i class="fa fa-envelope-square pr-3" aria-hidden="true" />
                  </a>
                )}

                {/* If we have a twitter account */}
                {!member.twitter ? null : (
                  <a
                    href={member.twitter}
                    target="_blank"
                    style={{ color: member.color }}
                  >
                    <i
                      class="fa fa-twitter-square pr-3"
                      aria-hidden="true"
                      link-url={member.twitter}
                    />
                  </a>
                )}

                {/* If we have a github account */}
                {!member.github ? null : (
                  <a
                    href={member.github}
                    target="_blank"
                    style={{ color: member.color }}
                  >
                    <i class="fa fa-github-square pr-3" aria-hidden="true" />
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
