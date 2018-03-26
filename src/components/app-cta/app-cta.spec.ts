import { render } from '@stencil/core/testing';

import { AppCta } from './app-cta';

describe('app', () => {
  it('should build', () => {
    expect(new AppCta()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppCta],
        html: '<app-cta></app-cta>',
      });
    });
  });
});
