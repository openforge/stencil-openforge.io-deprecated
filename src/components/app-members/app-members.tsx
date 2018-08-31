import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-members',
  styleUrl: 'app-members.scss',
})
export class AppMembers {
  @Prop() members: any[];

  render() {
    return (
      <div class="team">
        {this.members.map(member => {
          if (member.detail) {
            return (
              <figure class="member">
                <stencil-route-link
                  url={`/team-landing/${member.onlyName}`}
                  exact={true}
                >
                  <app-img
                    class="member--image"
                    src={member.image}
                    alt={member.name}
                  />
                  <div class="member--overlay">
                    <figcaption class="member--text">
                      <span class="">{member.name}</span>
                      <span class="">{member.title}</span>
                    </figcaption>
                  </div>
                </stencil-route-link>
              </figure>
            );
          }
          return (
            <figure class="member">
              <app-img
                class="member--image"
                src={member.image}
                alt={member.name}
              />
              <div class="member--overlay">
                <figcaption class="member--text">
                  <span class="">{member.name}</span>
                  <span class="">{member.title}</span>
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>
    );
  }
}
