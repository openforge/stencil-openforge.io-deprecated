import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  @Prop() match: MatchResults;

  render() {
    return (
      <section class="intro">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-8 col-lg-6 col-xl-5">
              <h2>We are thinkers, makers &amp; doers</h2>

              <p>
                Work with our team of highly skilled consultants, developers,
                and designers to develop solutions and processes to fit your
                requirements.
              </p>

              <a href="">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
