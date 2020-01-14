import '@stencil/router';
import { Component, h, Listen } from '@stencil/core';
import { polyfill } from 'smoothscroll-polyfill';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  mainEl: HTMLElement;
  newServiceWorker: boolean = false;
  registration: ServiceWorkerRegistration;

  @Listen('swUpdate', { target: 'window' })
  async onSWUpdate() {
    this.registration = await navigator.serviceWorker.getRegistration();
    if (this.registration && this.registration.waiting) {
      this.showToast();
    }
  }

  showToast() {
    const toastDiv = document.getElementById('toast');
    toastDiv.className = 'show';
    const toastButton = document.getElementById('toast-button');
    toastButton.addEventListener('click', () => this.closeAndReload());
  }

  closeAndReload() {
    if (this.registration && this.registration.waiting) {
      this.registration.waiting.postMessage('skipWaiting');
    }
    window.location.reload();
  }

  componentDidLoad() {
    try {
      this.mainEl = document.querySelector('app-nav-header') as HTMLElement;
    } catch (e) {
      console.error('caught error componentDidLoad open-forge-app', e);
    }

    if (this.mainEl) {
      this.mainEl.addEventListener('click', ev => {
        const srcEl = ev.srcElement as HTMLElement;
        if (srcEl.classList.contains('dropdown-toggle')) {
          return;
        }
        if (srcEl.classList.contains('search-input')) {
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

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={1}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/contact" component="app-contact" />
          <stencil-route url="/opportunities" component="app-opportunities" />
          <stencil-route url="/about" component="app-about" exact={true} />
          <stencil-route url="/about/" component="app-about" exact={true} />
          <stencil-route url="/toolbox" component="app-toolbox" />
          <stencil-route url="/services" component="app-services" exact={true} />
          <stencil-route url="/services/" component="app-services" exact={true} />
          <stencil-route url="/services/:service" component="app-detailed-service" />
          <stencil-route url="/resources/:source" component="app-resources" />
          <stencil-route url="/about/:member" component="app-team-landing" />
          <stencil-route url="/juntoscope" component="app-case-study" />
          <stencil-route url="/terms-of-service" component="app-tos" />
          <stencil-route url="/our-work" component="app-our-work" />
          <stencil-route url="/our-work-single/:project" component="app-our-work-single" />
          <stencil-route url="/service-level-agreement" component="app-service-level-agreement" />
          <stencil-route url="/blog" component="app-blog" exact={true} />
          <stencil-route url="/blog/" component="app-blog" exact={true} />
          <stencil-route url="/blog-index" component="app-blog-index" exact={true} />
          <stencil-route url="/blog/:slug" component="app-blog-post" />
          <stencil-route url="/partners" component="app-partners" exact={true} />
          <stencil-route component="app-not-found" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
