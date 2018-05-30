import { Component, Prop } from '@stencil/core';
import i18next from 'i18next';

@Component({
  tag: 'app-translate',
  styleUrl: 'app-translate.scss',
})
export class AppTranslate {
  @Prop() private key: string = '';

  @Prop() params: {} = {};

  public render() {
    return i18next.t(this.key, this.params);
  }
}
