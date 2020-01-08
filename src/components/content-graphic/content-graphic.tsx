import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'content-graphic',
  styleUrl: 'content-graphic.scss',
})
export class ContentGraphic {
  @Prop() imgUrl: string;
  @Prop() reverse: boolean = false;
  @Prop() preLoadImg: boolean = false;
  @Prop() alt: string;

  render() {
    return (
      <div
        class={{
          'content-graphic': true,
          row: true,
          'justify-content-center': true,
          'align-items-center': true,
          'flex-row-reverse': this.reverse,
        }}
      >
        <div
          class={{
            'col-sm-12': true,
            'col-md-5': true,
            'px-lg-5': true,
            'p-4': true,
            'text-md-right': !this.reverse,
          }}
        >
          <app-img class="img-fluid d-none d-md-inline" src={this.imgUrl} preLoad={this.preLoadImg} alt={this.alt} />
        </div>
        <div
          class={{
            'col-sm-12': true,
            'col-md-5': true,
            'px-lg-5': true,
            'text-md-right': this.reverse,
          }}
        >
          <slot name="header" />
          <app-img class="img-fluid d-xs-inline d-md-none" src={this.imgUrl} alt={this.alt} preLoad={this.preLoadImg} />
          <slot name="body" />
        </div>
      </div>
    );
  }
}
