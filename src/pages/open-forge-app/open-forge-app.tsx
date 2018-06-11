import { Component, Prop, Listen } from '@stencil/core';
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
  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */

  // TODO: Figure out toast message alternative
  @Listen('window:swUpdate')
  async onSWUpdate() {
    // const toast = await this.toastCtrl.create({
    //   message: 'New version available',
    //   showCloseButton: true,
    //   closeButtonText: 'Reload'
    // });
    // await toast.present();
    // await toast.onWillDismiss()
    window.location.reload();
  }

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

      if (segments.hash !== '') {
        const sectionId = segments.hash.replace('#', '');
        setTimeout(() => {
          document.getElementById(sectionId).scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
        }, 250);
      }
    });
  }

  render() {
    return (
      <div>
        <app-nav-header />
        <main>
          <stencil-router>
            <RouterSwitch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/services" component="app-services" />
              <stencil-route url="/contact" component="app-contact" />
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
