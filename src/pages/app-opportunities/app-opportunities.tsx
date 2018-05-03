import { Component, State } from '@stencil/core';

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
  @State() requestingInterview: boolean;

  handleChange(e) {
    this.skills[e.target.name] = parseFloat(e.target.value);

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
    this.requestingInterview = true;
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

            <form
              class="jumbotron mt-5"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <div class="row">
                <div class="col-sm-6">
                  <h2>Are you prepared?</h2>
                  <p>
                    We’re looking for someone who’s ready to hit the ground
                    running - someone who wants to turn big ideas into
                    realities. But first, we need to make sure you’ve got the
                    skills to make it happen.
                  </p>
                </div>
                <div class="col-sm-6 md-auto">
                  <img
                    src="assets/bg-header-person-typing.jpg"
                    class="img-fluid"
                    alt="Responsive image"
                  />
                </div>
              </div>

              <h3 class="font-weight-bold pt-5">
                {' '}
                Move the sliders to the position that aligns with your
                capabilities to continue.
              </h3>
              <div class="form-group text-center">
                <label>Angular</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                  name="angular"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div class="form-group text-center">
                <label>Node</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                  name="node"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div class="form-group text-center">
                <label>Ionic</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                  name="ionic"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div class="form-group text-center">
                <label>HTML</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                  name="html"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div class="form-group text-center">
                <label>CSS</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                  name="css"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div class="form-group text-center mt-5">
                <h4>
                  {!this.isDisabled ? (
                    <p>You're all set! Let's get started.</p>
                  ) : (
                    <p>Not quite...keep sliding!</p>
                  )}
                </h4>
              </div>
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
          </div>
        </section>
      </div>
    );
  }
}
