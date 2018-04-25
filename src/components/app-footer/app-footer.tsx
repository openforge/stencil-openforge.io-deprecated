import { Component } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
})
export class AppFooter {
  render() {
    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="content col-sm-12 col-md-4">
              <h2>Our Headquarters</h2>
              <p>
                OpenForge<br />
                1040 N 2nd St.<br />
                Philadelphia, PA 19123
              </p>
              <a href="mailto:hello@openforge.io">hello@openforge.io</a>
              {/* <a href="https://www.openforge.io" target="_blank">
                Work at OpenForge
              </a>
              <a href="/career">Career Opportunities</a> */}
            </div>
            <div class="content col-sm-12 col-md-4">
              <h2>Our Partners</h2>
              <a href="https://ionicframework.com/" target="_blank">
                <img
                  class="img-fluid"
                  src="assets/logo-ionic.png"
                  alt="Ionic"
                />
              </a>
              <a href="http://www.215marketing.com/" target="_blank">
                <img
                  class="img-fluid"
                  src="assets/logo-215marketing.png"
                  alt="215 Marketing"
                />
              </a>
              <a href="https://www.goemerchant.com/" target="_blank">
                <img
                  class="img-fluid"
                  src="assets/logo-goemerchant.png"
                  alt="goEmerchant Payment Processing"
                />
              </a>
            </div>
            <div class="content col-sm-12 col-md-4">
              <h2>Subscribe to Blog via Email</h2>
              <p>Coming soon!</p>
              {/* <p>
                Enter your email address to subscribe to our blog and receive
                notifications of new posts by email.
              </p>
              <p>Join 2,816 other subscribers</p>
              <form>
                <div class="form-group">
                  <label class="sr-only">Email address</label>
                  <input
                    id="email"
                    class="form-control"
                    type="email"
                    placeholder="Email address.."
                  />
                </div>
                <button class="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </form> */}
            </div>
          </div>

          <p class="text-center">&copy; OpenForge. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}
