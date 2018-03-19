import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @Prop() match: MatchResults;

  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the OpenForge. Check out the stencil docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
      </div>
    );
  }
}
