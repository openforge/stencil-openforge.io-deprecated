import { Component, Prop, Event, EventEmitter } from '@stencil/core';

let id = 1;

@Component({
  tag: 'app-radio',
  styleUrl: 'app-radio.scss',
})
export class AppRadio {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() label: string;
  @Prop() required = false;

  @Event() valueChange: EventEmitter;

  private inputId = '';

  changeHandler(event) {
    this.valueChange.emit({
      field: this.name,
      value: event.target.value,
      checked: event.target.checked,
    });
  }

  render() {
    if (!this.inputId) {
      this.inputId = `${this.name}${id}`;
      id += 1;
    }

    return (
      <div class="form-check">
        <input
          id={this.inputId}
          class="form-check-input"
          type="radio"
          name={this.name}
          value={this.value}
          required={this.required}
          onInput={this.changeHandler.bind(this)}
        />
        <label class="form-check-label" htmlFor={this.inputId}>
          {this.label}
        </label>
      </div>
    );
  }
}
