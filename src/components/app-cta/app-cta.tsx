import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-cta',
  styleUrl: 'app-cta.scss',
})
export class AppCta {
  @Prop() linkUrl: string;
  @Prop() hideButton: boolean = false;

  componentDidLoad() {
    if (this.hideButton) {
      const button = document.getElementsByClassName('btn btn-primary');
      button['0'].style.visibility = 'hidden';
    }
  }

  render() {
    return (
      <aside class="cta px-2 text-center text-white">
        <div class="d-sm-inline-flex d-md-flex flex-sm-column flex-md-row justify-content-center">
          <h3 class="mr-sm-0 mr-md-5">
            <slot name="header" />
          </h3>

          {this.hideButton ? null : (
            <a href={this.linkUrl} class="btn btn-primary" target="_blank">
              <slot name="link" />
            </a>
          )}
        </div>
      </aside>
    );
  }
}
