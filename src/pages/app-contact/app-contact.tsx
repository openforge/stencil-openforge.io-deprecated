import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss',
})
export class AppContact {
  @Prop() match: MatchResults;

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

              <form>
                <app-form type="input" selection="Full Name" inputType="text" />
                <app-form type="input" selection="E-mail" inputType="email" />

                <app-form type="input" selection="Phone" inputType="number" />

                <fieldset class="form-group mt-5">
                  <legend class="lead">How can we help you?</legend>
                  <div class="row ml-2">
                    <div class="col-sm-6">
                      <app-form
                        type="radio"
                        selection="App Development"
                        value="appDev"
                      />

                      <app-form
                        type="radio"
                        selection="Web Development"
                        value="webDev"
                      />

                      <app-form
                        type="radio"
                        selection="UI/UX Design"
                        value="uiDesign"
                      />

                      <app-form
                        type="radio"
                        selection="Graphic Design"
                        value="graphicDesign"
                      />
                    </div>
                    <div class="col-sm-6">
                      <app-form
                        type="radio"
                        selection="Consulting"
                        value="consult"
                      />
                      <app-form
                        type="radio"
                        selection="CTO as a Service"
                        value="cto"
                      />
                      <app-form
                        type="radio"
                        selection="Unsure"
                        value="unsure"
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset class="form-group mt-5">
                  <legend class="lead">Do you have a budget?</legend>
                  <div class="row ml-2">
                    <div class="col-sm-6">
                      <app-form type="radio" selection="$5-10k" value="5k" />
                      <app-form type="radio" selection="$10k-25k" value="10k" />
                      <app-form type="radio" selection="$25-50k" value="25k" />
                      <app-form type="radio" selection="$50-75k" value="50k" />
                    </div>
                    <div class="col-sm-6">
                      <app-form type="radio" selection="$75-100k" value="75k" />
                      <app-form
                        type="radio"
                        selection="$100-200k"
                        value="100k"
                      />
                      <app-form type="radio" selection="$200k+" value="200k" />
                      <app-form
                        type="radio"
                        selection="Unsure"
                        value="unsure"
                      />
                    </div>
                  </div>
                </fieldset>

                <header class="lead">How did you hear about OpenForge?</header>
                <app-form type="input" inputType="text" />
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
