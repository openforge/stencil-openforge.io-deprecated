import { render } from '@stencil/core/testing';

import { AppServices } from './app-services';

describe('app', () => {
  it('should build', () => {
    expect(new AppServices()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppServices],
        html: '<app-services></app-services>',
      });
    });
  });
});
