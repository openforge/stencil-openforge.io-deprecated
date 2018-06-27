import { render } from '@stencil/core/testing';

import { AppRadio } from './app-radio';

describe('app', () => {
  it('should build', () => {
    expect(new AppRadio()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppRadio],
        html: '<app-radio></app-radio>',
      });
    });
  });
});
