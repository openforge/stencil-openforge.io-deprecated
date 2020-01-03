import { render } from '@stencil/core/testing';

import { AppSearchResults } from './app-search-results';

describe('app', () => {
  it('should build', () => {
    expect(new AppSearchResults()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppSearchResults],
        html: '<app-search-results></app-search-results>',
      });
    });
  });
});
