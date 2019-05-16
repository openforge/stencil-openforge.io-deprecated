import { render } from '@stencil/core/testing';

import { AppBlogCard } from './app-blog-card';

describe('app', () => {
  it('should build', () => {
    expect(new AppBlogCard()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppBlogCard],
        html: '<app-blog-card></app-blog-card>',
      });
    });
  });
});
