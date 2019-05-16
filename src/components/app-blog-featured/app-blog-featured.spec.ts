import { render } from '@stencil/core/testing';

import { AppBlogFeatured } from './app-blog-featured';

describe('app', () => {
  it('should build', () => {
    expect(new AppBlogFeatured()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppBlogFeatured],
        html: '<app-blog-featured></app-blog-featured>',
      });
    });
  });
});
