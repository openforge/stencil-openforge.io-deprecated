import { render } from '@stencil/core/testing';

import { AppFooter } from './app-footer';

describe('app', () => {
  it('should build', () => {
    expect(new AppFooter()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppFooter],
        html: '<app-footer></app-footer>',
      });
    });
  });
});
