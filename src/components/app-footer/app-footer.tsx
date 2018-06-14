import { Component } from '@stencil/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
})
export class AppFooter {
  ts: TranslationService;

  constructor() {
    this.ts = new TranslationService();
  }

  render() {
    const { translate } = this.ts;

    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="content col-sm-12 col-md-4">
              <h2>{translate('footer.address.header')}</h2>
              <p>
                {translate('footer.address.name')}
                <br />
                {translate('footer.address.line1')}
                <br />
                {translate('footer.address.line2')}
              </p>
              <a href="mailto:hello@openforge.io">
                {translate('footer.address.email')}
              </a>
              {/* <a href="https://www.openforge.io" target="_blank" rel="noopener">
                Work at OpenForge
              </a>
              <a href="/career">Career Opportunities</a> */}
            </div>
            <div class="content col-sm-12 col-md-4">
              <h2>{translate('footer.partners.header')}</h2>
              <a
                href="https://ionicframework.com/"
                title={translate('footer.partners.ionic.title')}
                target="_blank"
                rel="noopener"
              >
                <app-img
                  class="img-fluid"
                  src="assets/logo-ionic.png"
                  alt="Ionic"
                />
              </a>
              <a
                href="http://www.215marketing.com/"
                title={translate('footer.partners.marketing215.title')}
                target="_blank"
                rel="noopener"
              >
                <app-img
                  class="img-fluid"
                  src="assets/logo-215marketing.png"
                  alt={translate('footer.partners.marketing215.alt')}
                />
              </a>
              <a
                href="https://www.goemerchant.com/"
                title={translate('footer.partners.goEmerchant.title')}
                target="_blank"
                rel="noopener"
              >
                <app-img
                  class="img-fluid"
                  src="assets/logo-goemerchant.png"
                  alt={translate('footer.partners.goEmerchant.alt')}
                />
              </a>
            </div>
            <div class="content col-sm-12 col-md-4">
              <h2>{translate('footer.blog.header')}</h2>
              <p>{translate('footer.blog.content')}</p>
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

          <p class="text-center">
            <app-translate key="footer.copyright" />
          </p>
        </div>
      </footer>
    );
  }
}
