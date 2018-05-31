import { Component } from '@stencil/core';

@Component({
  tag: 'app-services',
  styleUrl: 'app-services.scss',
})
export class AppServices {
  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero
          link-url="mailto:hello@openforge.io"
          background-url="assets/bg-hero-wireframes-pencils.jpg"
        >
          <span slot="header">
            <app-translate key="services.header" />
          </span>
          <span slot="body">
            <app-translate key="services.body" />
          </span>
          <span slot="link">
            <app-translate key="services.learnMore" />
          </span>
        </app-hero>

        {/* aside - cta */}
        <app-cta link-url="mailto:hello@openforge.io">
          <span slot="header">
            <app-translate key="home.contact.title" />
          </span>
          <span slot="link">
            <app-translate key="home.contact.link" />
          </span>
        </app-cta>
      </div>
    );
  }
}
