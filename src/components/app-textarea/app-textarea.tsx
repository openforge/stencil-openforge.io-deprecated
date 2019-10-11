import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'app-textarea',
  styleUrl: 'app-textarea.scss',
})
export class AppTextarea {
  @Prop() name: string;
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() inputId: string;
  @Prop() maxlength: string;
  @Prop() rows: number;
  @Prop() required = false;
  @Event() valueChange: EventEmitter;

  inputHandler(event) {
    this.valueChange.emit({
      field: this.name,
      value: event.target.value,
      target: event.target,
    });
  }

  render() {
    return (
      <div class="form-group">
        <label htmlFor={this.name}>{this.label}</label>
        <textarea class="form-control" name={this.name} id={this.inputId} maxlength={this.maxlength} rows={this.rows} required={this.required} onInput={this.inputHandler.bind(this)} />
      </div>
    );
  }
}
