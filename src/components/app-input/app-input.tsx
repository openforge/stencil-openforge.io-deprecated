import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-input',
  styleUrl: 'app-input.scss',
})
export class AppInput {
  @Prop() match: MatchResults;
  @Prop() type: string;
  @Prop() label: string;

  render() {
    return (
      <div class="form-group">
        <label class="text-uppercase font-weight-bold">{this.label}</label>
        <input class="form-control" type={this.type} required={true} />
      </div>
    );
  }
}
