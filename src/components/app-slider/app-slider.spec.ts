import { render } from '@stencil/core/testing';

import { AppSlider } from './app-slider';

describe('app', () => {
  it('should build', () => {
    expect(new AppSlider()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppSlider],
        html: '<app-slider></app-slider>',
      });
    });
  });
});
