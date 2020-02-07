import { Component, h } from '@stencil/core';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
})
export class AppFooter {
  open(provider: string) {
    switch (provider) {
      case 'instagram':
        window.open('https://www.instagram.com/openforgemobile/', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/openforgemobile', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/company/openforge/', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/openforgemobile/', '_blank');
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer--column col-12 col-sm-4">
              <div>
                <h2>{translate('footer.address.header')}</h2>
                <p>
                  {translate('footer.address.name')}
                  <br />
                  {translate('footer.address.line1')}
                  <br />
                  {translate('footer.address.line2')}
                  <br />
                  {translate('footer.address.phoneNumber')}
                  <br />
                  <a href="mailto:hello@openforge.io" target="_blank">
                    {translate('footer.address.email')}
                  </a>
                  <br />
                  <br class="d-none d-md-block" />
                  <stencil-route-link url="/service-level-agreement">{translate('footer.social.sla')}</stencil-route-link>
                  <br />
                  {/* <stencil-route-link url="/service-level-agreement">{translate('footer.social.presskit')}</stencil-route-link> */}
                </p>
              </div>
            </div>

            <div class="footer--column col-12 col-sm-4">
              <h2>{translate('footer.work.header')}</h2>
              <p>{translate('footer.work.text')}</p>
              <a href="/opportunities" class="btn-primary button-link">
                {translate('footer.work.apply')}
              </a>
            </div>
            <div class="footer--column col-12 col-sm-4">
              <h2>{translate('footer.webinar.signup')}</h2>
              <p>{translate('footer.webinar.webinarText')}</p>
              {/* <a href="http://startupjunto.org/" target="_blank" id="startup-junto meetup" rel="noopener" class="btn-primary button-link">
                {translate('footer.webinar.register')}
              </a> */}
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <p class="copyright">&copy; OpenForge 2019 v2.5.1</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 order-first order-md-2 social">
              <p class="follow">
                Follow us:
                <a onClick={() => this.open('instagram')} id="instagram" target="_blank" rel="noopener" aria-label="Openforge Instagram account link">
                  <i class="fab fa-instagram" aria-hidden="true" />
                </a>
                <a onClick={() => this.open('twitter')} id="twitter" target="_blank" rel="noopener" aria-label="Openforge Twitter account link">
                  <i class="fab fa-twitter-square" aria-hidden="true" />
                </a>
                <a onClick={() => this.open('linkedin')} id="linkedin" target="_blank" rel="noopener" aria-label="Openforge Linkedin account link">
                  <i class="fab fa-linkedin" aria-hidden="true" />
                </a>
                <a onClick={() => this.open('facebook')} id="facebook" target="_blank" rel="noopener" aria-label="Openforge Facebook account link">
                  <i class="fab fa-facebook-square" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
