import { RouterHistory } from '@stencil/router';
import { Component, Prop } from '@stencil/core';
import { polyfill } from 'smoothscroll-polyfill';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  @Prop() history: RouterHistory;
  mainEl: HTMLElement;

  componentDidLoad() {
    try {
      this.mainEl = document.querySelector('app-nav-header');
    } catch (e) {
      console.error('caught error componentDidLoad open-forge-app', e);
    }

    if (this.isIE()) {
      console.log('Is IE check = ', true);
      this.history.push('404', {});
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

  private msieversion() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      console.log(msie, ua, 'msie');
      // If Internet Explorer, return version number
      return true;
    }

    return false;
  }

  isIE() {
    return !!this.msieversion();
  }

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/contact" component="app-contact" />
          <stencil-route url="/opportunities" component="app-opportunities" />
          <stencil-route url="/about" component="app-about" />
          <stencil-route url="/404" component="app-404" exact={true} />
          <stencil-route component="app-home" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
