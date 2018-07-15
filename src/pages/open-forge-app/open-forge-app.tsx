import { Component, Prop } from '@stencil/core';
import { ActiveRouter } from '@stencil/router';

import { polyfill } from 'smoothscroll-polyfill';

import { gtag } from '../../shared/gtag';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */

  @Prop({ context: 'activeRouter' })
  activeRouter: ActiveRouter;
  unsubscribe: () => void;
  mainEl: HTMLElement;

  componentDidUnload() {
    this.unsubscribe();
  }

  componentDidLoad() {
    console.log('OpenForge Loaded Successfully!');
    gtag('js', new Date());
    try {
      this.mainEl = document.querySelector('main');
    } catch (e) {
      console.error('caught error componentDidLoad open-forge-app', e);
    }
  }

  render() {
    return (
      <div>
        <app-nav-header />
        <main>
          <stencil-router scrollTopOffset={0}>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/contact" component="app-contact" />
            {/* <stencil-route url="/services" component="app-services" /> */}
            <stencil-route
              url="/opportunities"
              component="app-opportunities"
              exact={true}
            />
            <stencil-route url="/about" component="app-about" />
          </stencil-router>
        </main>
        <app-footer />
      </div>
    );
  }
}
