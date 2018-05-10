import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'content-graphic-lg',
  styleUrl: 'content-graphic-lg.scss',
})
export class ContentGraphicLg {
  @Prop() imgUrl: string;
  @Prop() reverse: boolean;

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
        <div class="col-sm-12 col-md-6 text-center px-5">
          <img class="img-fluid" src={this.imgUrl} alt="" />
        </div>
        <div class="content col-sm-12 col-md-6 px-5">
          <slot name="header" />
          <slot name="body" />
        </div>
      </div>
    );
  }
}
