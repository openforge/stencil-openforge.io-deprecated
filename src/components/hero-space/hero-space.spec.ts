import { render } from '@stencil/core/testing';

import { HeroSpace } from './hero-space';

describe('app', () => {
  it('should build', () => {
    expect(new HeroSpace()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [HeroSpace],
        html: '<hero-space></hero-space>',
      });
    });
  });
});
