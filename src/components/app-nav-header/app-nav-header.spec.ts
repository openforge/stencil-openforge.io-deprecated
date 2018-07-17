import { render } from '@stencil/core/testing';

import { AppNavHeader } from './app-nav-header';

describe('app', () => {
  it('should build', () => {
    expect(new AppNavHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppNavHeader],
        html: '<app-nav-header></app-nav-header>',
      });
    });
  });
});
