import { render } from '@stencil/core/testing';

import { AppHeader } from './app-header';

describe('app', () => {
  it('should build', () => {
    expect(new AppHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppHeader],
        html: '<app-header></app-header>',
      });
    });
  });
});
