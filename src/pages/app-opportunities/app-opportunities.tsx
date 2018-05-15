import { Component, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  @State() isDisabled: boolean = true;
  // @State() canRequestInterview: boolean;
  @State() canRequestInterview: boolean = true;
  @State() formSubmitting: boolean = false;
  @State() formSubmitted: boolean = false;

  formValues: {
    angular: number;
    node: number;
    ionic: number;
    html: number;
    css: number;
    resume: any;
    cv: string;
    name: string;
    email: string;
    phone: string;
    github: string;
  };

  formData = new FormData();

  componentDidLoad() {
    this.resetFormValues();
  }

  @Event() valueChange: EventEmitter;
  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value } = event.detail;
    this.formValues[field] = value;

    if (
      this.formValues.angular > 60 &&
      this.formValues.node > 60 &&
      this.formValues.ionic > 60 &&
      this.formValues.html > 60 &&
      this.formValues.css > 60
    ) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  handleSliders(e) {
    e.preventDefault();
    this.canRequestInterview = true;
  }

  handleFile(e) {
    this.formValues[e.target.name] = e.target.value;
  }

  async handleSubmit(e) {
    e.preventDefault();

    for (const value in this.formValues) {
      this.formData.append(value, this.formValues[value]);
    }

    try {
      this.formSubmitting = true;
      await fetch(
        'https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeOpportunities',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: this.formData,
        }
      );

      e.target.reset();
      this.resetFormValues();

      this.formSubmitting = false;
      this.formSubmitted = true;
    } catch (error) {
      console.log('Error', error);
    }
  }

  render() {
    return (
      <div class="opportunities">
        {/* header - hero */}
        <app-hero background-url="assets/bg-hero-mountain.jpg">
          <span slot="header">
            OpenForge is hiring two mid-level developers.
          </span>
          <span slot="body">
            Looking for a new adventure? Want to know if you're the right fit
            for the team? Keep reading!
          </span>
        </app-hero>

        {/* section - intro */}
        <section id="intro">
          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-suck.jpg"
              reverse={true}
            >
              <h3 slot="header">Forget normal interviews!</h3>
              <p slot="body">
                From our work to our interview process, we break the norm. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-codemaster.jpg">
              <h3 slot="header">We want to put you to the test!</h3>
              <p slot="body">
                Instead of asking you a million questions, we'd rather get to
                know you another way - lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod.
              </p>
            </content-graphic-lg>
          </div>

          <div class="challenge">
            <div class="container">
              <div class="intro text-center">
                <h2>The Challenge</h2>
                <p>
                  <em>Should you choose to accept,</em> you will develop a
                  3-page app in the ionic framework.
                </p>
                <p>Show us your skills in:</p>
              </div>
              <div class="row">
                <div class="image-column col-sm-12 col-md-4">
                  <h3>Angular</h3>
                  <img
                    class="img-fluid"
                    src="assets/graphic-opportunities-phone.png"
                    alt=""
                  />
                </div>
                <div class="image-column col-sm-12 col-md-4">
                  <h3>Redux</h3>
                  <img
                    class="img-fluid"
                    src="assets/graphic-opportunities-phone.png"
                    alt=""
                  />
                </div>
                <div class="image-column col-sm-12 col-md-4">
                  <h3>API Integration</h3>
                  <img
                    class="img-fluid"
                    src="assets/graphic-opportunities-phone.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-ionic.jpg"
              reverse={true}
            >
              <h3 slot="header">Why?</h3>
              <p slot="body">
                Because we value our partnerships. And because we are a trusted
                Ionic partner, we want lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-sword.png">
              <h3 slot="header">Are you prepared?</h3>
              <p slot="body">
                We're looking for someone who’s ready to hit the ground running
                - someone who wants to turn big ideas into realities. But first,
                we need to make sure you’ve got the skills to make it happen.
              </p>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - apply */}
        <section id="apply">
          <div class="container">
            {!this.canRequestInterview ? (
              <form class="apply-1" onSubmit={this.handleSliders.bind(this)}>
                <h2>Show us your skills</h2>
                <p>
                  Move the sliders to the position that aligns with your
                  capabilities to continue.
                </p>

                <div class="slider-labels">
                  <p>N00b</p>
                  <p>Expert</p>
                </div>

                <app-slider name="angular" label="Angular" />
                <app-slider name="node" label="Node" />
                <app-slider name="ionic" label="Ionic" />
                <app-slider name="html" label="HTML" />
                <app-slider name="css" label="CSS" />

                {!this.isDisabled ? (
                  <p>You're all set! Let's get started.</p>
                ) : (
                  <p>Not quite...keep sliding!</p>
                )}

                <button
                  class="btn btn-primary"
                  type="submit"
                  disabled={this.isDisabled}
                  id="requestInterview"
                >
                  Request an interview
                </button>
              </form>
            ) : (
              <form class="apply-2" onSubmit={this.handleSubmit.bind(this)}>
                <h2>Mid-Level Developer</h2>
                <ul>
                  <li>Philadelphia</li>
                  <li>Technology</li>
                  <li>Full-Time</li>
                </ul>

                <h3>Submit your application</h3>

                <div class="form-group">
                  <label>Resume/CV</label>
                  <input
                    class="input-file"
                    type="file"
                    name="resume"
                    onInput={this.handleFile.bind(this)}
                    required={true}
                  />
                </div>

                <app-input
                  label="Full Name"
                  name="name"
                  type="text"
                  // placeholder="Full Name"
                  required={true}
                />
                <app-input
                  label="Email"
                  name="email"
                  type="email"
                  // placeholder="Email Address"
                  required={true}
                />
                <app-input
                  label="Phone"
                  name="phone"
                  type="tel"
                  // placeholder="Phone Number"
                  required={true}
                />

                <h3>Links</h3>
                <app-input
                  label="GitHub URL"
                  name="github"
                  type="text"
                  // placeholder="GitHub Link"
                  required={true}
                />
                <p>
                  LinkedIn URL?<br />Twitter URL?
                </p>

                <h3>What makes you unique?</h3>

                <div class="form-group input-textarea">
                  <label>
                    In 150 characters or fewer, tell us what makes you unique.
                    Try to be creative and say something that will catch our
                    eye!
                  </label>
                  <textarea
                    class="form-control"
                    // placeholder="Hello, I would like..."
                    name="cv"
                    onBlur={this.handleFile.bind(this)}
                    required={true}
                  />
                </div>

                <button class="btn btn-primary" type="submit">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    );
  }

  private resetFormValues() {
    this.formValues = {
      angular: parseFloat(''),
      node: parseFloat(''),
      ionic: parseFloat(''),
      html: parseFloat(''),
      css: parseFloat(''),
      resume: '',
      cv: '',
      name: '',
      email: '',
      phone: '',
      github: '',
    };

    this.formData = new FormData();
  }
}
