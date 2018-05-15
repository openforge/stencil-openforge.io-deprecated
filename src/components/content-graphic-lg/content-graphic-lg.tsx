import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'content-graphic-lg',
  styleUrl: 'content-graphic-lg.scss',
})
export class ContentGraphicLg {
  @Prop() imgUrl: string;
  @Prop() reverse: boolean = false;

  render() {
    return (
      <div
        class={{
          'content-graphic-lg': true,
          row: true,
          'justify-content-center': true,
          'align-items-center': true,
          'flex-row-reverse': this.reverse,
        }}
      >
        <div
          class={{
            'col-sm-12': true,
            'col-md-6': true,
            'px-lg-5': true,
            'p-4': true,
            'text-md-right': !this.reverse,
          }}
        >
          <img class="img-fluid d-none d-md-block" src={this.imgUrl} alt="" />
        </div>
        <div
          class={{
            'col-sm-12': true,
            'col-md-6': true,
            'px-lg-5': true,
            'text-md-right': this.reverse,
          }}
        >
          <slot name="header" />
          <img
            class="img-fluid d-xs-block d-md-none"
            src={this.imgUrl}
            alt=""
          />
          <slot name="body" />
        </div>
      </div>
    );
  }
}
