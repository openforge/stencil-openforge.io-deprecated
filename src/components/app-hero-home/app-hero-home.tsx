import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-hero-home',
  styleUrl: 'app-hero-home.scss',
})
export class AppHeroHome {
  @Prop() textNoWrap: boolean;

  scrollToForm() {
    const form = document.getElementById('services');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
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
            <a onClick={this.scrollToForm.bind(this)} class="btn btn-primary">
              <slot name="link" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
