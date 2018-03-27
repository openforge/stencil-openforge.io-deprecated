import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
})
export class AppHeader {
  @Prop() match: MatchResults;
  @Prop() linkUrl: string;
  @Prop() backgroundUrl: string;

  componentDidLoad() {
    const element = document.querySelector('header.header') as HTMLElement;
    element.style.backgroundImage = `url('${this.backgroundUrl}')`;
  }

  render() {
    return (
      <header class="header d-flex flex-column justify-content-center">
        <slot name="header" />

        <slot name="subheader" />

        <a class="btn btn-primary btn-arrow" href={this.linkUrl}>
          <i class="fa fa-arrow-down" aria-hidden="true" />
          <span class="sr-only">Scroll to content</span>
        </a>
      </header>
    );
  }
}
