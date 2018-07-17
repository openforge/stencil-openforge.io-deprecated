import { Component } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
})
export class AppFooter {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer--column col-12 col-sm-4">
              <h2>Our Headquarters</h2>
              <p>
                OpenForge<br />
                1040 N 2nd St.<br />
                Philadelphia, PA 19123<br />
                <a href="mailto:hello@openforge.io">Hello@openforge.io</a>
              </p>

              {/* <a href="https://www.openforge.io" target="_blank">
                Work at OpenForge
              </a> */}
            </div>
            <div class="footer--column col-12 col-sm-4">
              <h2>Follow Us</h2>
              <ul class="footer--social-links">
                <li>
                  <a
                    href="https://twitter.com/OpenForge_US"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-twitter-square" aria-hidden="true" />{' '}
                    @OpenForge_US
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/OpenForgeUS/"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-facebook-square" aria-hidden="true" />{' '}
                    OpenForge_US
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/openforge/"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-linkedin" aria-hidden="true" />{' '}
                    OpenForge_US
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer--column col-12 col-sm-4">
              <h2>Sign Up for Our Webinar Series</h2>
              <p>
                Our FREE webinar series will cover topics including UI/UX
                design, app development, and SEO strategy.
              </p>
              <a
                href="http://learn.openforge.io/"
                target="_blank"
                rel="noopener"
                class="footer--btn btn btn-primary"
              >
                Register Today
              </a>
            </div>
          </div>

          <p class="copyright">&copy; OpenForge 2018</p>
        </div>
      </footer>
    );
  }
}
