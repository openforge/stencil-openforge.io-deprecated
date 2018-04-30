import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  @State() value: number;
  @State() isEnabled: boolean;

  handleChange(e) {
    this.isEnabled = e.target.value > 50;
  }

  renderRangeInputs(labels: string[]) {
    const rangeInputs = [];

    labels.forEach(label => {
      const rangeLabel = <label>{label}</label>;
      rangeInputs.push(rangeLabel);

      const rangeInput = (
        <input
          type="range"
          class="form-control-range mb-2"
          id="formControlRange"
          onChange={this.handleChange}
        />
      );
      rangeInputs.push(rangeInput);
    });

    return rangeInputs;
  }

  handleSubmit(e) {
    e.prevent.default();
    console.log(e);
  }

  render() {
    return (
      <div>
        <app-hero background-url="assets/bg-hero-wireframes-pencils.jpg">
          <span slot="header">XXXXXX</span>
          <span slot="body" />
        </app-hero>

        <section id="opportunities">
          <div class="container">
            <h2 class="display-5 font-weight-bold pt-5">What's your level?</h2>
            <form onSubmit={this.handleSubmit} class="pb-5">
              <div class="form-group">
                {this.renderRangeInputs(rangeLabels)}
              </div>
              <button
                type="submit"
                id="requestInterview"
                disabled={!this.isEnabled}
              >
                Request an interview
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

const rangeLabels = ['Angular ', 'Node ', 'Ionic ', 'HTML ', 'CSS '];
