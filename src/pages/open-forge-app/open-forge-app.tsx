import '@stencil/router';
import { Component } from '@stencil/core';

import { polyfill } from 'smoothscroll-polyfill';
polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  render() {
    console.log('rendering open-forge-app');
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/contact" component="app-contact" exact={true} />
          <stencil-route
            url="/opportunities"
            component="app-opportunities"
            exact={true}
          />
          <stencil-route url="/about" component="app-about" exact={true} />
          <stencil-route component="app-home" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
