import { render } from '@stencil/core/testing';

import { AppResourcesLanding } from './app-resources-landing';

describe('app', () => {
  it('should build', () => {
    expect(new AppResourcesLanding()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppResourcesLanding],
        html: '<app-resources-landing></app-resources-landing>',
      });
    });
  });
});
