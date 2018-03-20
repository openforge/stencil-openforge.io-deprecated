import { render } from '@stencil/core/testing';

import { AppOurWork } from './app-our-work';

describe('app', () => {
  it('should build', () => {
    expect(new AppOurWork()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppOurWork],
        html: '<app-our-work></app-our-work>',
      });
    });
  });
});
