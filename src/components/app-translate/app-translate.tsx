import { Component, Prop, Element } from '@stencil/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  tag: 'app-translate',
  styleUrl: 'app-translate.scss',
})
export class AppTranslate {
  @Prop() private key: string = '';

  @Prop() params: {} = {};

  @Element() translatedTextElement: HTMLElement;

  ts: TranslationService;

  constructor() {
    this.ts = new TranslationService();
  }

  public render() {
    // This is only for HTML tags in localized strings to work
    this.translatedTextElement.innerHTML = this.ts.translate(
      this.key,
      this.params
    );
    return;
    // return this.ts.translate(this.key, this.params);
  }
}
