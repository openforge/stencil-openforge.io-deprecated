import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'content-graphic',
  styleUrl: 'content-graphic.scss',
})
export class ContentGraphic {
  @Prop() match: MatchResults;
  @Prop() imgUrl: string;
  @Prop() reverse: boolean;

  render() {
    return (
      <div
        class={{
          row: true,
          'justify-content-around': true,
          'align-items-center': true,
          'flex-row-reverse': this.reverse,
        }}
      >
        <div class="col-sm-12 col-md-4">
          <img class="img-fluid" src={this.imgUrl} alt="" />
        </div>
        <div class="content col-sm-12 col-md-7">
          <slot name="header" />

          <slot name="body" />
        </div>
      </div>
    );
  }
}
