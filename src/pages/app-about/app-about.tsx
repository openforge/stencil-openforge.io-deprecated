import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
})
export class AppAbout {
  @Prop() match: MatchResults;

  render() {
    return (
      <div class="app-about">
        <p>Welcome to the about page!</p>
      </div>
    );
  }
}
