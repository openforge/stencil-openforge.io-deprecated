import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
})
export class AppHeader {
  @Prop() linkUrl: string;
  @Prop() backgroundUrl: string;
  @Prop() hideButton: boolean = false;

  scrollElement;

  componentDidLoad() {
    if (this.hideButton) {
      const button = document.getElementsByClassName(
        'btn btn-primary btn-arrow'
      );
      button['0'].style.visibility = 'hidden';
    }
    try {
      this.scrollElement = document.querySelector(this.linkUrl);
    } catch (e) {
      console.log('app-header error ', e);
    }
  }

  scrollIntoView = () => {
    this.scrollElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  render() {
    return (
      <header
        class="header d-flex flex-column justify-content-center"
        style={{ backgroundImage: `url('${this.backgroundUrl}')` }}
      >
        <slot name="header" />

        <slot name="subheader" />

        {this.hideButton ? null : (
          <a class="btn btn-primary btn-arrow" onClick={this.scrollIntoView}>
            <i class="fa fa-arrow-down" aria-hidden="true" />
            <span class="sr-only">
              <app-translation key="header.scrollText" />
            </span>
          </a>
        )}
      </header>
    );
  }
}
