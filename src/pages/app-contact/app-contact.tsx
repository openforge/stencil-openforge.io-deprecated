import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss',
})
export class AppContact {
  @Prop() match: MatchResults;

  render() {
    return <div>Contact us!</div>;
  }
}
