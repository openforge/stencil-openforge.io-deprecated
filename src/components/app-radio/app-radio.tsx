import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-radio',
  styleUrl: 'app-radio.scss',
})
export class AppRadio {
  @Prop() match: MatchResults;
  @Prop() name: string;
  @Prop() value: string;
  @Prop() label: string;

  render() {
    return (
      <div class="form-check">
        {/* NOTE - below works when uncommented, but is going against linting rules (ERROR -- Value must be set for boolean attributes);
        trying to rewrite this to follow the standards.
        <input class="form-check-input" type="radio" name={this.name} value={this.value} checked={this.value === this.name} required /> */}
        <label class="form-check-label">{this.label}</label>
      </div>
    );
  }
}
