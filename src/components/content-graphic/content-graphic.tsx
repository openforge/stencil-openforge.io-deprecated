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
  @Prop() wider: boolean;
  @Prop() inverseOrder: boolean;
  @Prop() leftAlign: boolean;
  @Prop() smallerImg: boolean;

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
            'col-lg-4': this.wider,
            'col-sm-12': true,
            'col-md-5': true,
            'px-lg-5': true,
            'p-4': true,
            'text-md-right': !this.reverse,
          }}
        >
          <app-img
            class={{
              'img-fluid': true,
              'd-none': true,
              'd-md-inline': true,
              'small-img': this.smallerImg,
            }}
            src={this.imgUrl}
            preLoad={this.preLoadImg}
            alt={this.alt}
          />
        </div>
        <div
          class={{
            'col-lg-6': this.wider,
            'col-sm-12': true,
            'col-md-5': true,
            'px-lg-5': !this.wider,
            'text-md-right': this.reverse,
            'content-container': this.inverseOrder,
            'left-align': this.leftAlign,
          }}
        >
          <slot name="header" />
          <app-img
            class={{
              'img-fluid': true,
              'd-xs-inline': true,
              'd-md-none': true,
              'small-img': this.smallerImg,
            }}
            src={this.imgUrl}
            alt={this.alt}
            preLoad={this.preLoadImg}
          />
          <slot name="body" />
          <slot name="footer" />
        </div>
      </div>
    );
  }
}
