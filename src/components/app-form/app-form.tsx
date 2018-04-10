import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.scss',
})
export class AppForm {
  @Prop() match: MatchResults;
  @Prop() type: string;
  @Prop() label: string;
  @Prop() inputType: any;
  @Prop() value: string;

  render() {
    if (this.type === 'radio') {
      return (
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value={this.value}
            required={true}
          />
          <label class="form-check-label">{this.label}</label>
        </div>
      );
    }
    return (
      <div class="form-group">
        <label class="text-uppercase font-weight-bold">{this.label}</label>
        <input
          class="form-control"
          type={this.inputType}
          name={this.value}
          required={true}
        />
      </div>
    );
  }
}
