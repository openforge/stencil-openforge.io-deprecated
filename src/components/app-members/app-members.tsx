import { Component, Prop, h } from '@stencil/core';
import { isMobile } from '../../shared/mobile-check';

@Component({
  tag: 'app-members',
  styleUrl: 'app-members.scss',
})
export class AppMembers {
  @Prop() members: any[];

  public images: any;

  render() {
    return (
      <div class="team justify-content-center">
        {this.members.map(member => {
          if (!member.external) {
            if (member.url === '/opportunities') {
              return (
                <figure class="member">
                  <stencil-route-link url={member.url} exact={true}>
                    <app-img class="member--image" src={member.image} alt={member.name} />
                    {!isMobile() && (
                      <div class="member--overlay">
                        <figcaption class="member--text">
                          <span class="">{member.name}</span>
                          <span class="">{member.title}</span>
                        </figcaption>
                      </div>
                    )}
                  </stencil-route-link>
                </figure>
              );
            }
            return (
              <figure class="member">
                <stencil-route-link url={member.url} exact={true}>
                  <app-img class="member--image" src={member.image} alt={member.name} />
                  {!isMobile() && (
                    <div class="member--overlay">
                      <figcaption class="member--text">
                        <span class="">{member.name}</span>
                        <span class="">{member.title}</span>
                      </figcaption>
                    </div>
                  )}
                </stencil-route-link>
              </figure>
            );
          }
          return (
            <figure class="member">
              <a href={member.url} target="_blank" rel="noopener">
                <app-img class="member--image" src={member.image} alt={member.name} />
                {!isMobile() && (
                  <div class="member--overlay">
                    <figcaption class="member--text">
                      <span class="">{member.name}</span>
                      <span class="">{member.title}</span>
                    </figcaption>
                  </div>
                )}
              </a>
            </figure>
          );
        })}
        <figure class="member" />
        <figure class="member" />
      </div>
    );
  }
}
