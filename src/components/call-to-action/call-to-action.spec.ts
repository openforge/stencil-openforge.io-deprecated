import { render } from '@stencil/core/testing';

import { CallToAction } from './call-to-action';

describe('app', () => {
  it('should build', () => {
    expect(new CallToAction()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [CallToAction],
        html: '<call-to-action></call-to-action>',
      });
    });
  });
});
