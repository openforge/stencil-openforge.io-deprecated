import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-input',
  styleUrl: 'app-input.scss',
})
export class AppInput {
  @Prop() name: string;
  @Prop() type: string;
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() required = false;

  @Event() valueChange: EventEmitter;

  inputHandler(event) {
    this.valueChange.emit({
      field: this.name,
      value: event.target.value,
    });
  }

  render() {
    return (
      <div class="form-group">
        <label htmlFor={this.name}>{this.label}</label>
        <input
          class="form-control"
          type={this.type}
          name={this.name}
          required={this.required}
          onInput={this.inputHandler.bind(this)}
        />
      </div>
    );
  }
}
