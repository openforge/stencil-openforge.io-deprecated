import { render } from '@stencil/core/testing';

import { AppHero } from './app-hero';

describe('app', () => {
  it('should build', () => {
    expect(new AppHero()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppHero],
        html: '<app-hero></app-hero>',
      });
    });
  });
});
