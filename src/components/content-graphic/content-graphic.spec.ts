import { render } from '@stencil/core/testing';

import { ContentGraphic } from './content-graphic';

describe('app', () => {
  it('should build', () => {
    expect(new ContentGraphic()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [ContentGraphic],
        html: '<content-graphic></content-graphic>',
      });
    });
  });
});
