import '@stencil/router';
import { Component } from '@stencil/core';
import { polyfill } from 'smoothscroll-polyfill';

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

  render() {
    return (
      <div>
        <app-nav-header />
        <stencil-router scrollTopOffset={0}>
          <stencil-route-switch>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route
              url="/contact"
              component="app-contact"
              exact={true}
            />
            <stencil-route
              url="/opportunities"
              component="app-opportunities"
              exact={true}
            />
            <stencil-route url="/about" component="app-about" exact={true} />
          </stencil-route-switch>
        </stencil-router>
        <app-footer />
      </div>
    );
  }
}
