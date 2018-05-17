import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-hero-home',
  styleUrl: 'app-hero-home.scss',
})
export class AppHeroHome {
  @Prop() linkUrl: string;
  @Prop() backgroundUrl: string;
  @Prop() textNoWrap: boolean;
  @Prop() hideLink: boolean;

  componentDidLoad() {
    const element = document.querySelector('header.hero') as HTMLElement;
    element.style.backgroundImage = `url('${this.backgroundUrl}')`;
  }

  render() {
    return (
      <header class="hero">
        <div class="container">
          <div class="content">
            <h2
              class={{
                'text-nowrap': this.textNoWrap,
              }}
            >
              <slot name="header" />
            </h2>

            <p>
              <slot name="body" />
            </p>
            {!this.hideLink ? (
              <a href={this.linkUrl} class="btn btn-primary" target="_blank">
                <slot name="link" />
              </a>
            ) : null}
          </div>
        </div>
      </header>
    );
  }
}
