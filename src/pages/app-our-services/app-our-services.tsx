import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-our-services',
  styleUrl: 'app-our-services.css',
})
export class AppOurServices {
  @Prop() match: MatchResults;

  render() {
    return (
      <div class="app-our-services">
        <p>Welcome to the our Services page!</p>
      </div>
    );
  }
}
