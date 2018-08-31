import '@stencil/router';
import { Component } from '@stencil/core';
import { polyfill } from 'smoothscroll-polyfill';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  // @Element() mainEl: HTMLElement;
  mainEl: HTMLElement;

  componentDidLoad() {
    try {
      this.mainEl = document.querySelector('app-nav-header');
    } catch (e) {
      console.error('caught error componentDidLoad open-forge-app', e);
    }

    if (this.mainEl) {
      this.mainEl.addEventListener('click', () => {
        const opened = document.getElementsByClassName('navbar-collapse show');
        if (opened.length > 0) {
          const navbarButton: any = document.getElementsByClassName(
            'navbar-toggler'
          )[0];
          navbarButton.click();
        }
      });
    }
  }

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/contact" component="app-contact" />
          <stencil-route url="/opportunities" component="app-opportunities" />
          <stencil-route url="/about" component="app-about" />
          <stencil-route
            url="/services/:service"
            component="app-detailed-service"
          />
          <stencil-route url="/resources" component="app-resources" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
