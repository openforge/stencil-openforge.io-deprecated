import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'app-input',
  styleUrl: 'app-input.scss',
})
export class AppInput {
  @Prop()
  name: string;
  @Prop()
  type: string;
  @Prop()
  label: string;
  @Prop()
  placeholder: string;
  @Prop()
  inputId: string;
  @Prop()
  maxlength: string;
  @Prop()
  required = false;
  @Event()
  valueChanged: EventEmitter;
  @Prop()
  valid = false;
  @Prop()
  slimmer = false;

  inputHandler(event) {
    this.valueChanged.emit({
      field: this.name,
      value: event.target.value,
      target: event.target,
    });
  }

  render() {
    return (
      <div class={`form-group${this.valid ? ` valid` : ``}`}>
        <label htmlFor={this.name}>{this.label}</label>
        <input
          class={{
            slimmer: this.slimmer,
            'form-control': true,
          }}
          type={this.type}
          name={this.name}
          id={this.inputId}
          maxlength={this.maxlength}
          required={this.required}
          placeholder={this.placeholder}
          onInput={this.inputHandler.bind(this)}
        />
        <i class="fas fa-check" />
      </div>
    );
  }
}
