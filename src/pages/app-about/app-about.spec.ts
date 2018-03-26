import { render } from '@stencil/core/testing';

import { AppAbout } from './app-about';

describe('app', () => {
  it('should build', () => {
    expect(new AppAbout()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppAbout],
        html: '<app-about></app-about>',
      });
    });
  });
});
