import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'content-graphic',
  styleUrl: 'content-graphic.scss',
})
export class ContentGraphic {
  @Prop() imgUrl: string;
  @Prop() reverse: boolean;

  render() {
    return (
      <div
        class={{
          'content-graphic': true,
          row: true,
          'justify-content-around': true,
          'align-items-center': true,
          'flex-row-reverse': this.reverse,
        }}
      >
        <div class="col-sm-12 col-md-4">
          <app-img class="img-fluid" src={this.imgUrl} alt="" />
        </div>
        <div class="content col-sm-12 col-md-7">
          <slot name="header" />

          <slot name="body" />
        </div>
      </div>
    );
  }
}
