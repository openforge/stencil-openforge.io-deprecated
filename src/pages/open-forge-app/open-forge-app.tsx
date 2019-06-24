import '@stencil/router';
import { Component, Prop } from '@stencil/core';
import { polyfill } from 'smoothscroll-polyfill';
import { BrowserService } from '../../services/browser.services';
/* tslint:disable-next-line */
import Butter from 'buttercms';
import { BUTTER_API_KEY } from '../../butter-api/butter-api-key';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  @Prop({ context: 'isServer' })
  private isServer: boolean;

  mainEl: HTMLElement;
  newServiceWorker: boolean = false;
  public butterService;

  constructor() {
    const browserService = new BrowserService();
    browserService.check_webp(this.isServer);
    console.log(BUTTER_API_KEY);
  }

  componentWillLoad() {
    this.butterService = Butter(BUTTER_API_KEY);
  }

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
          const navbarButton: any = document.getElementsByClassName('navbar-toggler')[0];
          navbarButton.click();
        }
      });
    }
  }

  onNewServiceWorker(registration, callback) {
    if (registration.waiting) {
      return callback();
    }

    function listenInstalledStateChange() {
      registration.installing.addEventListener('statechange', event => {
        if (event.target.state === 'installed') {
          // A new service worker is available, so trigger the callback to inform the user
          callback();
        }
      });
    }

    if (registration.installing) {
      return listenInstalledStateChange();
    }

    // We are currently controlled so a new SW may be found...
    // Add a listener in case a new SW is found,
    registration.addEventListener('updatefound', listenInstalledStateChange);
  }

  listenForNewServiceWorker = window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      // Track updates to the Service Worker
      if (!navigator.serviceWorker.controller) {
        // The window client isn't currently controlled so it's a new service worker that will activate immediately
        return;
      }

      // When the user asks to refresh the UI, we'll need to reload the window
      let preventDevToolsReloadLoop;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Ensure refresh is only called once.
        // This works around a bug in "force update on reload".
        if (preventDevToolsReloadLoop) return;
        preventDevToolsReloadLoop = true;
        window.location.reload();
      });

      setTimeout(
        this.onNewServiceWorker(registration, () => {
          console.log('New service worker detected');
          this.newServiceWorker = true;
        }),
        10000
      );
    });
  });

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} componentProps={{ butter: this.butterService }} />
          <stencil-route url="/contact" component="app-contact" />
          <stencil-route url="/opportunities/:type" component="app-opportunities" />
          <stencil-route url="/about" component="app-about" exact={true} />
          <stencil-route url="/about/" component="app-about" exact={true} />
          <stencil-route url="/toolbox" component="app-toolbox" />
          <stencil-route url="/services" component="app-services" exact={true} />
          <stencil-route url="/services/:service" component="app-detailed-service" />
          <stencil-route url="/resources/:source" component="app-resources" />
          <stencil-route url="/about/:member" component="app-team-landing" />
          <stencil-route url="/juntoscope" component="app-case-study" />
          <stencil-route url="/terms-of-service" component="app-tos" />
          <stencil-route url="/service-level-agreement" component="app-service-level-agreement" />
          <stencil-route url="/blog" component="app-blog" exact={true} componentProps={{ butter: this.butterService }} />
          <stencil-route url="/blog-index" component="app-blog-index" exact={true} componentProps={{ butter: this.butterService }} />
          <stencil-route url="/blog/:slug" component="app-blog-post" componentProps={{ butter: this.butterService }} />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
