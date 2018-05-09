import { Component, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  skills: any = {
    angular: '',
    node: '',
    ionic: '',
    html: '',
    css: '',
  };

  @State() isDisabled: boolean = true;
  @State() canRequestInterview: boolean;
  @Event() valueChange: EventEmitter;

  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value } = event.detail;
    this.skills[field] = value;

    if (
      this.skills.angular > 85 &&
      this.skills.node > 85 &&
      this.skills.ionic > 85 &&
      this.skills.html > 85 &&
      this.skills.css > 85
    ) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.canRequestInterview = true;
  }

  render() {
    return (
      <div>
        <app-hero background-url="assets/bg-hero-wireframes-pencils.jpg">
          <span slot="header">Look for a new adventure?</span>
          <span slot="body">
            OpenForge is hiring two mid-level developers. Want to know if you're
            the right fit for the team? Keep reading!
          </span>
        </app-hero>

        <section id="opportunities">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <h2>
                  From our work to our interview process, we break the norm.
                </h2>
              </div>
              <div class="col-sm-6 md-auto">
                <img
                  src="assets/bg-header-person-typing.jpg"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6 md-auto">
                <img
                  src="assets/bg-header-person-typing.jpg"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </div>

              <div class="col-sm-6">
                <h2>Instead of asking you a million questions,</h2>
                <p>
                  we'd rather get to know you another way: by putting you to the
                  test.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <h2>The Challenge</h2>
                <p>
                  should you choose to accept, will be to develop a 3-page app
                  in ionic framework
                </p>
                <img
                  src="assets/bg-header-person-typing.jpg"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-sm-6 md-auto">
                <img
                  src="assets/bg-header-person-typing.jpg"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </div>

              <div class="col-sm-6">
                <h2>Why? Because we value our partnerships</h2>
              </div>
            </div>

            {!this.canRequestInterview ? (
              <form
                class="jumbotron mt-5"
                onSubmit={this.handleSubmit.bind(this)}
              >
                <app-slider name="angular" label="Angular" />
                <app-slider name="node" label="Node" />
                <app-slider name="ionic" label="Ionic" />
                <app-slider name="html" label="HTML" />
                <app-slider name="css" label="CSS" />

                <h4 class="form-group text-center">
                  {!this.isDisabled ? (
                    <p>You're all set! Let's get started.</p>
                  ) : (
                    <p>Not quite...keep sliding!</p>
                  )}
                </h4>

                <div class="form-group text-center">
                  <button
                    type="submit"
                    disabled={this.isDisabled}
                    id="requestInterview"
                  >
                    Request an interview
                  </button>
                </div>
              </form>
            ) : (
              <div>Upload resume component will go here</div>
            )}
          </div>
        </section>
      </div>
    );
  }
}
