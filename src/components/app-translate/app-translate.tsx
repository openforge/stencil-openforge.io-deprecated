import { Component, Prop, Element } from '@stencil/core';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-translate',
  styleUrl: 'app-translate.scss',
})
export class AppTranslate {
  @Prop() private key: string = '';
  @Prop() params: {} = {};
  @Element() translatedTextElement: HTMLElement;

  public render() {
    // This is only for HTML tags in localized strings to work
    this.translatedTextElement.innerHTML = translate(this.key, this.params);
    return;
  }
}
