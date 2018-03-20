import { render } from '@stencil/core/testing';

import { AppContact } from './app-contact';

describe('app', () => {
  it('should build', () => {
    expect(new AppContact()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppContact],
        html: '<app-contact></app-contact>',
      });
    });
  });
});
