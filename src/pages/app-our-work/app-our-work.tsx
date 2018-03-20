import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-our-work',
  styleUrl: 'app-our-work.css',
})
export class AppOurWork {
  @Prop() match: MatchResults;

  render() {
    return (
      <div class="app-our-work">
        <p>Welcome to the our work page!</p>
      </div>
    );
  }
}
