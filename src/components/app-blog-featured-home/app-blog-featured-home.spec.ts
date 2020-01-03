import { render } from '@stencil/core/testing';

import { AppBlogFeaturedHome } from './app-blog-featured-home';

describe('app', () => {
  it('should build', () => {
    expect(new AppBlogFeaturedHome()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppBlogFeaturedHome],
        html: '<app-blog-featured-home></app-blog-featured-home>',
      });
    });
  });
});
