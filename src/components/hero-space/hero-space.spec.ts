import { render } from '@stencil/core/testing';

import { heroSpace } from './hero-space';

describe('app', () => {
  it('should build', () => {
    expect(new heroSpace()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [heroSpace],
        html: '<hero-space></hero-space>',
      });
    });
  });
});
