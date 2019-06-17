import { render } from '@stencil/core/testing';

import { AppBlogContent } from './app-blog-content';

describe('app', () => {
  it('should build', () => {
    expect(new AppBlogContent()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppBlogContent],
        html: '<app-blog-content></app-blog-content>',
      });
    });
  });
});
