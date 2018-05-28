import { Component, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'app-hero-home',
  styleUrl: 'app-hero-home.scss',
})
export class AppHeroHome {
  @Prop() textNoWrap: boolean;

  componentDidLoad() {
    this.handleImage();
  }

  // will refactor in the future
  @Listen('window:resize')
  handleImage() {
    let element;
    try {
      element = document.querySelector('header.hero-home');
    } catch (e) {
      console.log('app-hero-home undefined', e);
    }

    if (window.innerWidth < 576) {
      // small
      element.style.backgroundImage = `url('assets/bg-hero-town-sm.jpg')`;
    } else if (window.innerWidth < 992) {
      // medium
      element.style.backgroundImage = `url('assets/bg-hero-town-md.jpg')`;
    } else {
      // large
      element.style.backgroundImage = `url('assets/bg-hero-town.jpg')`;
    }
  }

  render() {
    return (
      <header class="hero-home">
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
            <a href="#second-content" class="btn btn-primary">
              <slot name="link" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
