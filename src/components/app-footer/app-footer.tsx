import { Component } from '@stencil/core';
import { translate } from '../../services/translation.service';

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
              <h2>{translate('footer.address.header')}</h2>
              <p>
                {translate('footer.address.name')}
                <br />
                {translate('footer.address.line1')}
                <br />
                {translate('footer.address.line2')}

                <a href="mailto:hello@openforge.io">
                  {translate('footer.address.email')}
                </a>
              </p>

              {/* <a href="https://www.openforge.io" target="_blank">
                Work at OpenForge
              </a> */}
            </div>

            <div class="footer--column col-12 col-sm-4">
              <h2>{translate('footer.social.followUs')}</h2>
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
              <h2>{translate('footer.webinar.signup')}</h2>
              <p>{translate('footer.webinar.webinarText')}</p>
              <a
                href="http://learn.openforge.io/"
                target="_blank"
                rel="noopener"
                class="footer--btn btn btn-primary"
              >
                {translate('footer.webinar.register')}
              </a>
            </div>
          </div>

          <p class="copyright">&copy; OpenForge 2018</p>
        </div>
      </footer>
    );
  }
}
