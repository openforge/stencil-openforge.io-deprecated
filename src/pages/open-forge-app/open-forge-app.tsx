import { Component, Prop } from '@stencil/core';
import {
  ActiveRouter,
  RouterHistory,
  RouterSwitch,
  LocationSegments,
} from '@stencil/router';

import { polyfill } from 'smoothscroll-polyfill';

import { gtag, GA_TRACKING_ID } from '../../shared/gtag';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  @Prop({ context: 'activeRouter' })
  activeRouter: ActiveRouter;
  unsubscribe: () => void;
  mainEl: HTMLElement;

  componentDidUnload() {
    this.unsubscribe();
  }

  componentDidLoad() {
    gtag('js', new Date());
    try {
      this.mainEl = document.querySelector('main');
    } catch (e) {
      console.error('caught error componentDidLoad open-forge-app', e);
    }

    const history: RouterHistory = this.activeRouter.get('history');
    gtag('config', GA_TRACKING_ID, { page_path: history.location.pathname });

    this.unsubscribe = history.listen((segments: LocationSegments) => {
      console.log(segments);
      gtag('config', GA_TRACKING_ID, { page_path: segments.pathname });
    });
  }

  render() {
    return (
      <div>
        <app-nav-header />
        <main>
          <stencil-router>
            <RouterSwitch>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/about" component="app-about" exact={true} />
              <stencil-route
                url="/services"
                component="app-services"
                exact={true}
              />
              <stencil-route
                url="/contact"
                component="app-contact"
                exact={true}
              />
              <stencil-route
                url="/opportunities"
                component="app-opportunities"
                exact={true}
              />
            </RouterSwitch>
          </stencil-router>
        </main>
        <app-footer />
      </div>
    );
  }
}
