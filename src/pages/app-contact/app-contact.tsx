import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss',
})
export class AppContact {
  @Prop() match: MatchResults;
  @State() value: string;
  @State() budget: any;
  @State() service: any;

  async handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      message: e.target[3].value,
      desireService: this.service.value,
      budget: this.budget.value,
    };

    console.log(formData);

    try {
      const response = await fetch(
        'https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeContactUs',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: JSON.stringify(formData),
        }
      );

      console.log('response', response);

      e.target.reset();
      return response;
    } catch {
      console.log('Error');
    }
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

              <form onSubmit={this.handleSubmit} id="contact-form">
                <app-input
                  label="Full Name"
                  type="text"
                  onChange={this.handleChange}
                />
                <app-input
                  label="E-mail"
                  type="email"
                  onChange={this.handleChange}
                />
                <app-input
                  label="Phone"
                  type="number"
                  onChange={this.handleChange}
                />
                <app-input
                  type="text"
                  label="How did you hear about OpenForge?"
                  onChange={this.handleChange}
                />

                <fieldset onChange={this.handleChange}>
                  <legend class="lead">How can we help you?</legend>
                  <div class="row ml-2">
                    <div class="col-sm-6">
                      <app-radio
                        name="service"
                        value="App Development"
                        label="App Development"
                      />
                      <app-radio
                        name="service"
                        value="Web Development"
                        label="Web Development"
                      />
                      <app-radio
                        name="service"
                        value="UI/UX Design"
                        label="UI/UX Design"
                      />
                      <app-radio
                        name="service"
                        value="Graphic Design"
                        label="Graphic Design"
                      />
                    </div>
                    <div class="col-sm-6">
                      <app-radio
                        name="service"
                        value="Consulting"
                        label="Consulting"
                      />
                      <app-radio
                        name="service"
                        value="CTO as a service"
                        label="CTO as a service"
                      />
                      <app-radio name="service" value="Unsure" label="Unsure" />
                    </div>
                  </div>
                </fieldset>

                <fieldset onChange={this.handleChange}>
                  <legend class="lead">Do you have a budget?</legend>
                  <div class="row ml-2">
                    <div class="col-sm-6">
                      <app-radio name="budget" value="5K-10K" label="5K-10K" />
                      <app-radio
                        name="budget"
                        value="10K-25K"
                        label="10K-25K"
                      />
                      <app-radio
                        name="budget"
                        value="25K-50K"
                        label="25K-50K"
                      />
                      <app-radio
                        name="budget"
                        value="50K-75K"
                        label="50K-75K"
                      />
                    </div>
                    <div class="col-sm-6">
                      <app-radio
                        name="budget"
                        value="75K-100K"
                        label="75K-100K"
                      />
                      <app-radio
                        name="budget"
                        value="100K-200K"
                        label="100K-200K"
                      />
                      <app-radio name="budget" value="200K" label="200K" />
                      <app-radio name="budget" value="Unsure" label="Unsure" />
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
