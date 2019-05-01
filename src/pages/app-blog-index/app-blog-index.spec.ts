import { render } from '@stencil/core/testing';

import { AppBlogIndex } from './app-blog-index';

describe('app', () => {
  it('should build', () => {
    expect(new AppBlogIndex()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppBlogIndex],
        html: '<app-blog-index></app-blog-index>',
      });
    });
  });
});
