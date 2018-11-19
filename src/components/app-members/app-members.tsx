import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-members',
  styleUrl: 'app-members.scss',
})
export class AppMembers {
  @Prop() members: any[];

  public images: any;

  // buildImageArray() {
  //   // this.images = document.querySelectorAll('img[src$=".jpg"], img[src$=".png"]');
  //   this.images = document.querySelectorAll('img');
  //   console.log(this.images);
  //   console.log("build image array executed");
  // }

  render() {
    // this.buildImageArray();

    return (
      <div class="team">
        {this.members.map(member => {
          if (!member.external) {
            if (member.url === '/opportunities') {
              return (
                <figure class="member">
                  <stencil-route-link url={member.url} exact={true}>
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
                <stencil-route-link url={member.url} exact={true}>
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
              <a href={member.url} target="_blank" rel="noopener">
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
              </a>
            </figure>
          );
        })}
      </div>
    );
  }
}
