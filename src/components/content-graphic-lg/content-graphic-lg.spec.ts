import { render } from '@stencil/core/testing';

import { ContentGraphicLg } from './content-graphic-lg';

describe('app', () => {
  it('should build', () => {
    expect(new ContentGraphicLg()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [ContentGraphicLg],
        html: '<content-graphic-lg></content-graphic-lg>',
      });
    });
  });
});
