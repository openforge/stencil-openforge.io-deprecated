import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-hero',
  styleUrl: 'app-hero.scss',
})
export class AppHero {
  @Prop() match: MatchResults;
  @Prop() linkUrl: string;
  @Prop() backgroundUrl: string;

  componentDidLoad() {
    const element = document.querySelector('header.hero') as HTMLElement;
    element.style.backgroundImage = `url('${this.backgroundUrl}')`;
  }

  render() {
    return (
      <header class="hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-8 col-lg-6">
              <h2>
                <slot name="header" />
              </h2>

              <p>
                <slot name="body" />
              </p>

              <a href={this.linkUrl}>
                <a class="btn btn-primary">
                  <slot name="link" />
                </a>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
