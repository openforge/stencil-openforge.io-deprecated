import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss',
})
export class AppContact {
  @Prop() match: MatchResults;
  @State() value: string;

  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      message: e.target[3].value,
      desiredService: e.target[4].value,
      budget: e.target[5].value,
    };

    fetch(
      'https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeContactUs',
      {
        method: 'post',
        // TODO - remove mode: 'no-cors'
        mode: 'no-cors',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: JSON.stringify(formData),
      }
    );
    // .then(function (data) {
    //   console.log('Request succeeded with JSON response', data);
    // })
    // .catch(function (error) {
    //   console.log('Request failed', error);
    // });
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero
          link-url="mailto:hello@openforge.io"
          background-url="assets/bg-hero-handshake-desk.jpg"
          text-no-wrap={true}
        >
          <span slot="header">Let's Work Together</span>
          <span slot="body">Request a Discovery Session Today!</span>
          <span slot="link">Request Now</span>
        </app-hero>

        <section id="contact-form">
          <div class="container">
            <div class="jumbotron">
              <h2 class="display-5 font-weight-bold">Get in Touch</h2>
              <p class="lead">
                Tell us a little bit about what you're working on. We'll be in
                touch to tell you about the next steps toward accomplishing your
                goals!
              </p>

              <form onSubmit={this.handleSubmit}>
                <app-form
                  type="input"
                  label="Full Name"
                  inputType="text"
                  onChange={this.handleChange}
                />
                <app-form
                  type="input"
                  label="E-mail"
                  inputType="email"
                  onChange={this.handleChange}
                />
                <app-form
                  type="input"
                  label="Phone"
                  inputType="number"
                  onChange={this.handleChange}
                />
                {/* NOTE - when I move this input field below the fieldsets, its value doesn't store correctly; TO PONDER - is it bootstrap, or me? */}
                <app-form
                  type="input"
                  label="How did you hear about OpenForge?"
                  inputType="text"
                  onChange={this.handleChange}
                />

                <fieldset class="form-group mt-5" onChange={this.handleChange}>
                  <legend class="lead">How can we help you?</legend>
                  <div class="row ml-2">
                    <div class="col-sm-6">
                      <app-form
                        type="radio"
                        label="App Development"
                        value="App Development"
                      />
                      <app-form
                        type="radio"
                        label="Web Development"
                        value="Web Development"
                      />
                      <app-form
                        type="radio"
                        label="UI/UX Design"
                        value="UI/UX Design"
                      />
                      <app-form
                        type="radio"
                        label="Graphic Design"
                        value="Graphic Design"
                      />
                    </div>

                    <div class="col-sm-6">
                      <app-form
                        type="radio"
                        label="Consulting"
                        value="Consulting"
                      />
                      <app-form
                        type="radio"
                        label="CTO as a Service"
                        value="CTO as a Service"
                      />
                      <app-form type="radio" label="Unsure" value="Unsure" />
                    </div>
                  </div>
                </fieldset>

                <fieldset class="form-group mt-5" onChange={this.handleChange}>
                  <legend class="lead">Do you have a budget?</legend>
                  <div class="row ml-2">
                    <div class="col-sm-6">
                      <app-form type="radio" label="$5-10k" value="$5-10k" />
                      <app-form
                        type="radio"
                        label="$10k-25k"
                        value="$10k-25k"
                      />
                      <app-form type="radio" label="$25-50k" value="$25-50k" />
                      <app-form type="radio" label="$50-75k" value="$50-75k" />
                    </div>
                    <div class="col-sm-6">
                      <app-form
                        type="radio"
                        label="$75-100k"
                        value="$75-100k"
                      />
                      <app-form
                        type="radio"
                        label="$100-200k"
                        value="100-200k"
                      />
                      <app-form type="radio" label="$200k+" value="200k" />
                      <app-form type="radio" label="Unsure" value="unsure" />
                    </div>
                  </div>
                </fieldset>

                <button type="submit" class="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
