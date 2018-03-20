import { render } from '@stencil/core/testing';

import { AppOurServices } from './app-our-services';

describe('app', () => {
  it('should build', () => {
    expect(new AppOurServices()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppOurServices],
        html: '<app-our-services></app-our-services>',
      });
    });
  });
});
