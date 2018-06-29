import { render } from '@stencil/core/testing';

import { AppMembers } from './app-members';

describe('app', () => {
  it('should build', () => {
    expect(new AppMembers()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppMembers],
        html: '<app-members></app-members>',
      });
    });
  });
});
