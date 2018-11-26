import '@stencil/router';
import { Component } from '@stencil/core';
import { polyfill } from 'smoothscroll-polyfill';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  mainEl: HTMLElement;

  componentDidLoad() {
    try {
      this.mainEl = document.querySelector('app-nav-header');
    } catch (e) {
      console.error('caught error componentDidLoad open-forge-app', e);
    }

    if (this.mainEl) {
      this.mainEl.addEventListener('click', ev => {
        if (ev.srcElement.classList.contains('dropdown-toggle')) {
          return;
        }
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

  detectBrowser() {
    const allowWebp = String(this.detectWebpSupport());
    const isSafari =
      !/Chrome/i.test(navigator.userAgent) &&
      /Safari/i.test(navigator.userAgent)
        ? 'true'
        : 'false';
    localStorage.setItem('allowWebp', allowWebp);
    localStorage.setItem('isSafari', isSafari);
  }

  detectWebpSupport(): boolean {
    const nAgt = navigator.userAgent;
    let fullVersion = '' + parseFloat(navigator.appVersion);
    let verIndex: any;

    // detect 'Firefox'
    if (/Firefox/i.test(navigator.userAgent)) {
      // detect 'Firefox for Android'
      if (/Android|android|FxiOS/i.test(navigator.userAgent)) {
        return false;
      }
      verIndex = nAgt.indexOf('Firefox');
      fullVersion = nAgt.substring(verIndex + 8);
      const version = this.getMajorVersion(fullVersion);
      return version >= 65 ? true : false;
    }

    // detect Opera Mini
    if (/Opera Mini|Android|android/i.test(navigator.userAgent)) {
      return true;
    }

    // In Opera, the true version is after "Opera" or after "Version"
    if ((verIndex = nAgt.indexOf('Opera')) !== -1) {
      fullVersion = nAgt.substring(verIndex + 6);
      if ((verIndex = nAgt.indexOf('Version')) !== -1) {
        fullVersion = nAgt.substring(verIndex + 8);
      }
      const version = this.getMajorVersion(fullVersion);
      return version > 11.4 ? true : false;
    }

    // In Chrome, the true version is after "Chrome"
    if ((verIndex = nAgt.indexOf('Chrome')) !== -1) {
      fullVersion = nAgt.substring(verIndex + 7);
      const version = this.getMajorVersion(fullVersion);
      return version > 9 ? true : false;
    }
    return false;
  }

  getMajorVersion(fullVersion: string) {
    let ix: number;
    let majorVersion: number;
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(';')) !== -1) {
      majorVersion = parseFloat(fullVersion.substring(0, ix));
    }
    if ((ix = fullVersion.indexOf(' ')) !== -1) {
      majorVersion = parseFloat(fullVersion.substring(0, ix));
    }
    if (isNaN(majorVersion)) {
      majorVersion = parseFloat(navigator.appVersion);
    }
    return majorVersion;
  }

  render() {
    this.detectBrowser();
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/404" component="app-404" exact={true} />
          <stencil-route url="/contact" component="app-contact" />
          <stencil-route
            url="/opportunities/:type"
            component="app-opportunities"
          />
          <stencil-route url="/about" component="app-about" exact={true} />
          <stencil-route url="/about/" component="app-about" exact={true} />
          <stencil-route url="/toolbox" component="app-toolbox" />
          <stencil-route
            url="/services/:service"
            component="app-detailed-service"
          />
          <stencil-route url="/resources/:source" component="app-resources" />
          <stencil-route url="/about/:member" component="app-team-landing" />
          <stencil-route url="/juntoscope" component="app-case-study" />
          <stencil-route url="/terms-of-service" component="app-tos" />
          <stencil-route
            url="/service-level-agreement"
            component="app-service-level-agreement"
          />
          <stencil-route component="app-home" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
