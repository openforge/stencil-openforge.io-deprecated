import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  formData = new FormData();

  formValues: {
    angular: number;
    node: number;
    ionic: number;
    html: number;
    css: number;

    file: string;
    name: string;
    phone: string;
    message: string;
    email: string;
    github: string;

    formErrors: {
      fileValid: false;
      nameValid: false;
      emailValid: false;
      phoneValid: false;
      githubValid: false;
      messageValid: false;
      formValid: false;
    };
  };

  @State() fileError: any;
  @State() nameError: string;
  @State() emailError: string;
  @State() phoneError: string;
  @State() githubError: string;
  @State() messageError: string;

  @State() isDisabled: boolean = true;
  @State() canRequestInterview: boolean = true;
  @State() formSubmitting: boolean = false;
  @State() formSubmitted: boolean = false;

  application;

  componentDidLoad() {
    this.resetFormValues();
    let element;
    element = document.querySelector('.opportunities .hero');
    element.style.backgroundImage = `url('assets/bg-hero-mountain.jpg')`;
  }

  componentDidUpdate() {
    if (!this.isDisabled) {
      if (document.getElementById('requestInterview')) {
        document.getElementById('requestInterview').focus();
      } else {
        document.getElementById('apply').scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    }
  }

  @Listen('valueChange')
  valueChangeHandler(event) {
    if (
      this.formValues.angular > 90 &&
      this.formValues.node > 90 &&
      this.formValues.ionic > 90 &&
      this.formValues.html > 90 &&
      this.formValues.css > 90
    ) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }

    if (!event.detail) {
      const field = event.target.name;
      this.formValues[event.target.name] = event.target.value;

      switch (field) {
        case 'resume':
          this.formValues.formErrors.fileValid = event.target.checkValidity();
          this.fileError = this.formValues.formErrors.fileValid
            ? ''
            : (this.fileError = event.target.validationMessage);
          break;

        case 'message':
          this.formValues.formErrors.messageValid = event.target.checkValidity();
          this.messageError = this.formValues.formErrors.messageValid
            ? ''
            : (this.messageError = event.target.validationMessage);
          break;
      }
    }

    if (event.detail) {
      const { field, value, isValid, validationMessage } = event.detail;
      this.formValues[field] = value;

      switch (field) {
        case 'name':
          this.formValues.formErrors.nameValid = isValid;
          this.nameError = this.formValues.formErrors.nameValid
            ? ''
            : (this.nameError = validationMessage);
          break;
        case 'email':
          this.formValues.formErrors.emailValid = isValid;
          this.emailError = this.formValues.formErrors.emailValid
            ? ''
            : (this.emailError = validationMessage);
          break;

        case 'phone':
          this.formValues.formErrors.phoneValid = isValid;
          this.phoneError = this.formValues.formErrors.phoneValid
            ? ''
            : (this.phoneError = validationMessage);
          break;

        case 'github':
          this.formValues.formErrors.githubValid = isValid;
          this.githubError = this.formValues.formErrors.githubValid
            ? ''
            : (this.githubError = validationMessage);
          break;
      }
    }

    // this.formValues.formErrors.fileValid &&
    this.formValues.formErrors.nameValid &&
    this.formValues.formErrors.emailValid &&
    this.formValues.formErrors.phoneValid &&
    this.formValues.formErrors.githubValid &&
    this.formValues.formErrors.messageValid
      ? (this.isDisabled = false)
      : (this.isDisabled = true);
  }

  handleSliders(e) {
    e.preventDefault();
    this.canRequestInterview = true;
    document.getElementById('apply').scrollIntoView({ block: 'start' });
  }

  requestInterview() {
    this.application = document
      .getElementById('apply')
      .scrollIntoView({ block: 'start' });
  }

  handleFile(e) {
    const files = e.target.files;
    this.formData.append('files', files[0]);
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.formValues['message'] = e.target.message.value;

    for (const value in this.formValues) {
      this.formData.append(value, this.formValues[value]);
    }

    try {
      this.formSubmitting = true;
      await fetch(
        'https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeOpportunities',
        {
          method: 'POST',
          mode: 'no-cors',
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
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <h2>OpenForge is hiring two amazing developers!</h2>
                <p>
                  Looking for a new adventure? Want to know if you're the right
                  fit for the team?
                </p>
                <p>Scroll down to find out!</p>
              </div>
            </div>
          </div>
        </header>

        {/* section - intro */}
        <section id="intro" class="intro">
          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-suck.jpg"
              reverse={true}
            >
              <h3 slot="header">Forget normal interviews!</h3>
              <p slot="body">
                From our work to our interview process, we break the norm. We
                believe in Open Source contributions; so part of your interview
                assignment will be exactly that - build out a simple (open
                source) <a href="https://ionicframework.com/">Ionic</a> or{' '}
                <a href="https://reactjs.org/"> React App!</a>
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-codemaster.jpg">
              <h3 slot="header">We want to put you to the test!</h3>
              <p slot="body">
                Instead of asking you a million questions, we'd rather get to
                know you another way - seeing how you follow direction, develop,
                and learn a new technology or pattern that you have not used
                before.
              </p>
            </content-graphic-lg>
          </div>

          <div class="challenge">
            <div class="container">
              <div class="intro text-center">
                <h2>The Challenge</h2>
                <p>Show us your skills in:</p>
              </div>
              <div class="row">
                <div class="image-column col-sm-12 col-md-4">
                  <h3>Angular</h3>
                  <app-img
                    class="img-fluid d-none d-md-inline"
                    src="assets/graphic-opportunities-phone1.png"
                    alt=""
                  />
                </div>
                <div class="image-column col-sm-12 col-md-4">
                  <h3>Redux</h3>
                  <app-img
                    class="img-fluid d-none d-md-inline"
                    src="assets/graphic-opportunities-phone2.png"
                    alt=""
                  />
                </div>
                <div class="image-column col-sm-12 col-md-4">
                  <h3>API Integration</h3>
                  <app-img
                    class="img-fluid d-none d-md-inline"
                    src="assets/graphic-opportunities-phone3.png"
                    alt=""
                  />
                  <app-img
                    class="img-fluid d-xs-inline d-md-none"
                    src="assets/graphic-opportunities-phone4.png"
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
              <h3 slot="header">Reputation is Everything.</h3>
              <p slot="body">
                Because we value our partnerships. As a trusted partner of the{' '}
                <a href="https://ionicframework.com/"> Ionic Team </a> our
                clients rely on us to provide enterprise quality applications
                for companies of all sizes; we need to make sure you're up to
                the task!
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-sword.png">
              <h3 slot="header">Are you prepared?</h3>
              <p slot="body">
                We're looking for someone who’s ready to hit the ground running
                - someone who wants to turn big ideas into realities. A person
                who can work on a team, show humility, and is not afraid to
                learn and teach simultaneously.
              </p>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - apply */}
        <section id="apply" class="apply">
          {!this.formSubmitted ? (
            <div class="container">
              {!this.canRequestInterview ? (
                <form
                  class="apply-1"
                  onSubmit={this.handleSliders.bind(this)}
                  no-validate={true}
                >
                  <h2>Show us your skills</h2>
                  <p>
                    So if you're really awesome - prove it and position the
                    sliders to reflect your skills! Hint; only the best shall
                    pass the first test!
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
                    <p>
                      Not quite...keep sliding or keep learning; you can do it!
                    </p>
                  )}

                  <button
                    class="btn btn-primary"
                    type="submit"
                    disabled={this.isDisabled}
                    onClick={this.requestInterview}
                  >
                    Request an interview
                  </button>
                </form>
              ) : (
                <form
                  class="apply-2"
                  id="myLittleAnchor"
                  onSubmit={this.handleSubmit.bind(this)}
                >
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
                      onBlur={this.valueChangeHandler.bind(this)}
                      required={true}
                    />
                  </div>
                  <p class="error">{this.fileError}</p>

                  <app-input
                    label="Full Name"
                    name="name"
                    type="text"
                    // placeholder="Full Name"
                    required={true}
                  />
                  <p class="error">{this.nameError}</p>
                  <app-input
                    label="Email"
                    name="email"
                    type="email"
                    // placeholder="Email Address"
                    required={true}
                  />
                  <p class="error">{this.emailError}</p>
                  <app-input
                    label="Phone"
                    name="phone"
                    type="tel"
                    // placeholder="Phone Number"
                    required={true}
                  />
                  <p class="error">{this.phoneError}</p>
                  <app-input
                    label="GitHub URL"
                    name="github"
                    type="text"
                    // placeholder="GitHub Link"
                    required={true}
                  />
                  <p class="error">{this.githubError}</p>

                  <h3>What makes you unique?</h3>

                  <div class="form-group input-textarea">
                    <label>
                      In 150 characters or fewer, tell us what makes you unique.
                      Try to be creative and say something that will catch our
                      eye!
                    </label>
                    <textarea
                      class="form-control"
                      name="message"
                      maxLength={150}
                      required={true}
                      onInput={this.valueChangeHandler.bind(this)}
                    />
                  </div>
                  <p class="error">{this.messageError}</p>

                  <button
                    class="btn btn-primary"
                    type="submit"
                    disabled={this.isDisabled}
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div class="container apply-3">
              <h2>Application Submitted</h2>

              <content-graphic-lg img-url="assets/graphic-opportunities-robot.png">
                <h3 slot="header">Thank you!</h3>
                <p slot="body">
                  If your resume is a match, someone will be in touch to deliver
                  the necessary materials to complete the challenge.
                </p>
              </content-graphic-lg>
            </div>
          )}
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

      file: '',
      name: '',
      message: '',
      email: '',
      phone: '',
      github: '',

      formErrors: {
        fileValid: false,
        nameValid: false,
        emailValid: false,
        phoneValid: false,
        githubValid: false,
        messageValid: false,
        formValid: false,
      },
    };

    this.formData = new FormData();
  }
}
