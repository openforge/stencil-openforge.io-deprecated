import { render } from '@stencil/core/testing';

import { AppHeroHome } from './app-hero-home';

describe('app', () => {
  it('should build', () => {
    expect(new AppHeroHome()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppHeroHome],
        html: '<app-hero-home></app-hero-home>',
      });
    });
  });
});
