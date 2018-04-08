import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.scss',
})
export class AppForm {
  @Prop() match: MatchResults;
  @Prop() type: string;
  @Prop() selection: string;
  @Prop() value: string;
  @Prop() inputType: any;

  render() {
    if (this.type === 'radio') {
      return (
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id={this.value}
            value={this.value}
          />
          <label class="form-check-label">{this.selection}</label>
        </div>
      );
    }
    return (
      <div class="form-group">
        <label class="text-uppercase font-weight-bold">{this.selection}</label>
        <input
          class="form-control"
          type={this.inputType}
          id={this.value}
          value={this.value}
        />
      </div>
    );
  }
}
