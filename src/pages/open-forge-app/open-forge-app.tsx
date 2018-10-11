import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-maintenance-mode" />
          <stencil-route component="app-maintenance-mode" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
