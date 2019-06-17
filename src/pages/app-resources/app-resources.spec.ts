import { render } from '@stencil/core/testing';

import { AppResources } from './app-resources';

describe('app', () => {
  it('should build', () => {
    expect(new AppResources()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppResources],
        html: '<app-resources></app-resources>',
      });
    });
  });
});
