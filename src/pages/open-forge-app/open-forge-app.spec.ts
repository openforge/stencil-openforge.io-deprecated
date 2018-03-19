import { render } from '@stencil/core/testing';

import { OpenForgeApp } from './open-forge-app';

describe('open-forge-app', () => {
  it('should build', () => {
    expect(new OpenForgeApp()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [OpenForgeApp],
        html: '<open-forge-app></open-forge-app>'
      });
    });
  });
});
