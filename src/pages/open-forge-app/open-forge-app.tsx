import { Component } from '@stencil/core';

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.css',
})
export class OpenForgeApp {
  render() {
    return (
      <div>
        <header>
          <h1>OpenForge Website</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/about" component="app-about" exact={true} />
            <stencil-route url="/blog" component="app-blog" exact={true} />
            <stencil-route
              url="/contact"
              component="app-contact"
              exact={true}
            />
          </stencil-router>
        </main>
      </div>
    );
  }
}
