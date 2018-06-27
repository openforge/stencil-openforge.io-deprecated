import { render } from '@stencil/core/testing';

import { AppInput } from './app-input';

describe('app', () => {
  it('should build', () => {
    expect(new AppInput()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppInput],
        html: '<app-input></app-input>',
      });
    });
  });
});
