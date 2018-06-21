import { render } from '@stencil/core/testing';

import { AppOpportunities } from './app-opportunities';

describe('app', () => {
  it('should build', () => {
    expect(new AppOpportunities()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppOpportunities],
        html: '<app-opportunities></app-opportunities>',
      });
    });
  });
});
