import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.css',
})
export class AppContact {
  @Prop() match: MatchResults;

  render() {
    return (
      <div class="app-contact">
        <p>Welcome to the contact us page!</p>
      </div>
    );
  }
}
