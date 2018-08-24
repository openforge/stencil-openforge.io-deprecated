import { Component, Prop, State, Listen } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-detailed-service',
  styleUrl: 'app-detailed-service.scss',
})
export class AppDetailedService {
  @Prop() match: MatchResults;

  @State()
  imgs = {
    'app-developer': {
      first: '/assets/graphic-opportunities-phone1.png',
      second: '/assets/graphic-opportunities-phone1.png',
      third: '/assets/graphic-opportunities-phone1.png',
      toolbox: {
        first: '/assets/graphic-opportunities-phone1.png',
        second: '/assets/graphic-opportunities-phone1.png',
        third: '/assets/graphic-opportunities-phone1.png',
      },
    },
    'app-designer': {
      first: '/assets/graphic-opportunities-phone2.png',
      second: '/assets/graphic-opportunities-phone2.png',
      third: '/assets/graphic-opportunities-phone2.png',
      toolbox: {
        first: '/assets/graphic-opportunities-phone2.png',
        second: '/assets/graphic-opportunities-phone2.png',
        third: '/assets/graphic-opportunities-phone2.png',
      },
    },
    'tech-consulting': {
      first: '/assets/graphic-opportunities-phone3.png',
      second: '/assets/graphic-opportunities-phone3.png',
      third: '/assets/graphic-opportunities-phone3.png',
      toolbox: {
        first: '/assets/graphic-opportunities-phone3.png',
        second: '/assets/graphic-opportunities-phone3.png',
        third: '/assets/graphic-opportunities-phone3.png',
      },
    },
  };

  @State() formSubmitted = false;
  @State() formSubmitting = false;
  @State()
  formValues: {
    name: '';
    email: '';
    message: '';

    nameValid: false;
    emailValid: false;
    messageValid: false;
  };
  @State() nameError: string;
  @State() emailError: string;
  @State() messageError: string;
  @State() isDisabled = true;

  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value, target } = event.detail;

    this.formValues[field] = value;

    this.validateField(target);
  }

  componentDidLoad() {
    this.resetFormValues();
  }

  validateField(e) {
    switch (e.name) {
      case 'name':
        this.formValues.nameValid = e.checkValidity();
        this.nameError = this.formValues.nameValid
          ? ''
          : (this.nameError = e.validationMessage);
        break;

      case 'email':
        this.formValues.emailValid = e.checkValidity();
        this.emailError = this.formValues.emailValid
          ? ''
          : (this.emailError = e.validationMessage);
        break;

      case 'message':
        this.formValues.messageValid = e.checkValidity();
        this.messageError = this.formValues.messageValid
          ? ''
          : (this.messageError = e.validationMessage);
        break;
    }

    this.formValues.nameValid &&
    this.formValues.emailValid &&
    this.formValues.messageValid
      ? (this.isDisabled = false)
      : (this.isDisabled = true);
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      this.formSubmitting = true;
      this.isDisabled = true;

      await fetch(
        'https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeContactUs',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: JSON.stringify(this.formValues),
        }
      );

      event.target.reset();
      this.resetFormValues();

      this.isDisabled = false;
      this.formSubmitting = false;
      this.formSubmitted = true;

      const form = document.getElementById('second-content');
      form.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } catch (error) {
      console.log('Error', error);
    }
  }

  render() {
    return (
      <section class="services">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-8 col-lg-8">
                <h2>
                  <app-translate
                    key={`services.${this.match.params.service}.hero.title`}
                  />
                </h2>
                <p>
                  <app-translate
                    key={`services.${this.match.params.service}.hero.text`}
                  />
                </p>
              </div>
            </div>
          </div>
        </header>
        <section class="app-development right-side">
          <app-img
            class="img-fluid d-none d-md-inline"
            src={this.imgs[this.match.params.service].first}
            alt=""
          />
          <div class="app-development-text">
            <h2>
              <app-translate
                key={`services.${this.match.params.service}.first.title`}
              />
            </h2>
            <p>
              <app-translate
                key={`services.${this.match.params.service}.first.text`}
              />
            </p>
          </div>
        </section>
        <section class="app-development left-side">
          <div class="app-development-text">
            <h2>
              <app-translate
                key={`services.${this.match.params.service}.second.title`}
              />
            </h2>
            <p>
              <app-translate
                key={`services.${this.match.params.service}.second.text`}
              />
            </p>
          </div>
          <app-img
            class="img-fluid d-none d-md-inline"
            src={this.imgs[this.match.params.service].second}
            alt=""
          />
        </section>
        <section class="app-development right-side">
          <app-img
            class="img-fluid d-none d-md-inline"
            src={this.imgs[this.match.params.service].third}
            alt=""
          />
          <div class="app-development-text">
            <h2>
              <app-translate
                key={`services.${this.match.params.service}.third.title`}
              />
            </h2>
            <p>
              <app-translate
                key={`services.${this.match.params.service}.third.text`}
              />
            </p>
          </div>
        </section>
        <section class="container">
          <div class="our-toolbox">
            <h2>Our Toolbox</h2>
            <p>let us show you our skills in:</p>
            <div class="row">
              <div class="image-column col-sm-12 col-md-4">
                <app-img
                  class="img-fluid d-none d-md-inline"
                  src={this.imgs[this.match.params.service].toolbox.first}
                  alt=""
                />
              </div>
              <div class="image-column col-sm-12 col-md-4">
                <app-img
                  class="img-fluid d-none d-md-inline"
                  src={this.imgs[this.match.params.service].toolbox.second}
                  alt=""
                />
              </div>
              <div class="image-column col-sm-12 col-md-4">
                <app-img
                  class="img-fluid d-none d-md-inline"
                  src={this.imgs[this.match.params.service].toolbox.third}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section class="work-examples">
          <h2>Work Examples</h2>
          <div class="single-example">
            <app-img
              class=""
              src="/assets/graphic-home-voyage.png"
              alt="voyage-app-image"
            />
            <div class="single-example-text">
              <h2>Example</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin massa. Nunc sagittis tincidunt
                sapien at ornare. Vivamus tristique ullamcorper tincidunt. In a
                mauris porttitor, fermentum arcu vel, cursus sapien.
                Pellentesque convallis risus est, et interdum tellus egestas ut.
                Nam ac consequat mauris. Sed vulputate nisl vel leo mattis, et
                congue mi porttitor. In condimentum augue id neque ultricies,
                vitae ornare elit laoreet. Duis dignissim ut risus at accumsan.
                Integer non faucibus lorem. Phasellus rutrum, orci nec efficitur
                scelerisque, lectus arcu consequat nisl, eu sollicitudin velit
                tellus eu nulla. Nullam maximus ipsum sit amet diam rhoncus
                convallis. Mauris nulla nisl, accumsan at nisl id, consequat
                tempor augue.
              </p>
            </div>
          </div>
          <div class="single-example">
            <div class="single-example-text">
              <h2>Example</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin massa. Nunc sagittis tincidunt
                sapien at ornare. Vivamus tristique ullamcorper tincidunt. In a
                mauris porttitor, fermentum arcu vel, cursus sapien.
                Pellentesque convallis risus est, et interdum tellus egestas ut.
                Nam ac consequat mauris. Sed vulputate nisl vel leo mattis, et
                congue mi porttitor. In condimentum augue id neque ultricies,
                vitae ornare elit laoreet. Duis dignissim ut risus at accumsan.
                Integer non faucibus lorem. Phasellus rutrum, orci nec efficitur
                scelerisque, lectus arcu consequat nisl, eu sollicitudin velit
                tellus eu nulla. Nullam maximus ipsum sit amet diam rhoncus
                convallis. Mauris nulla nisl, accumsan at nisl id, consequat
                tempor augue.
              </p>
            </div>
            <app-img
              class=""
              src="/assets/graphic-home-voyage.png"
              alt="voyage-app-image"
            />
          </div>
          <div class="single-example">
            <app-img
              class=""
              src="/assets/graphic-home-voyage.png"
              alt="voyage-app-image"
            />
            <div class="single-example-text">
              <h2>Example</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin massa. Nunc sagittis tincidunt
                sapien at ornare. Vivamus tristique ullamcorper tincidunt. In a
                mauris porttitor, fermentum arcu vel, cursus sapien.
                Pellentesque convallis risus est, et interdum tellus egestas ut.
                Nam ac consequat mauris. Sed vulputate nisl vel leo mattis, et
                congue mi porttitor. In condimentum augue id neque ultricies,
                vitae ornare elit laoreet. Duis dignissim ut risus at accumsan.
                Integer non faucibus lorem. Phasellus rutrum, orci nec efficitur
                scelerisque, lectus arcu consequat nisl, eu sollicitudin velit
                tellus eu nulla. Nullam maximus ipsum sit amet diam rhoncus
                convallis. Mauris nulla nisl, accumsan at nisl id, consequat
                tempor augue.
              </p>
            </div>
          </div>
        </section>
        <section class="contact-us">
          <div class="container">
            <div class="jumbotron">
              <h2>Contact Us</h2>

              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                novalidate={true}
              >
                <app-input
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
                  required={true}
                />

                <app-input
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  required={true}
                />

                <app-textarea
                  name="message"
                  label="Message"
                  rows={5}
                  required={true}
                />
                <button
                  name="submit"
                  type="submit"
                  class="btn btn-primary"
                  disabled={this.isDisabled}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <app-footer />
      </section>
    );
  }

  private resetFormValues() {
    this.formValues = {
      name: '',
      email: '',
      message: '',
      nameValid: false,
      emailValid: false,
      messageValid: false,
    };
  }
}
