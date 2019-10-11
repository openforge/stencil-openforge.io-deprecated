import { Component, Prop, Element } from '@stencil/core';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-translate',
  styleUrl: 'app-translate.scss',
})
export class AppTranslate {
  @Prop() tKey: string = '';
  @Prop() params: {} = {};
  @Element() translatedTextElement: HTMLElement;

  public render() {
    console.log('in app translate: ', this.tKey);
    // This is only for HTML tags in localized strings to work
    this.translatedTextElement.innerHTML = translate(this.tKey, this.params);
    return;
  }
}
