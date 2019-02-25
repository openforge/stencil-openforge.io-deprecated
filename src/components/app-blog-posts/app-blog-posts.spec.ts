import { render } from '@stencil/core/testing';

import { AppBlogPosts } from './app-blog-posts';

describe('app', () => {
  it('should build', () => {
    expect(new AppBlogPosts()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppBlogPosts],
        html: '<app-blog-posts></app-blog-posts>',
      });
    });
  });
});
