import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-services',
  styleUrl: 'app-services.scss',
})
export class AppServices {
  @Prop() match: MatchResults;

  render() {
    return <div>Our Services!</div>;
  }
}
