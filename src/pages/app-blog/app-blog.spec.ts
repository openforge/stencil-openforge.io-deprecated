import { render } from '@stencil/core/testing';

import { AppBlog } from './app-blog';

describe('app', () => {
  it('should build', () => {
    expect(new AppBlog()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppBlog],
        html: '<app-blog></app-blog>',
      });
    });
  });
});
