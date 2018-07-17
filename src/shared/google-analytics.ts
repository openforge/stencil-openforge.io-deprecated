export const GA_TRACKING_ID = 'UA-118169306-1';
declare let ga: any;

let didInit = false;

// tslint:disable-next-line
export function gtag(..._args: any[]) {
  if (!didInit) {
    window['dataLayer'] = window['dataLayer'] || [];
    didInit = true;
  }

  window['dataLayer'].push(arguments);
}

export function initGa() {
  ga('create', GA_TRACKING_ID, 'auto');
}

export function gaPage(pageName) {
  ga('set', 'page', pageName);
  ga('send', 'pageview');
}

export function gaEvent(
  category: string,
  action: string,
  label: string,
  value?: any
) {
  ga('send', 'event', category, action, label, value);
}
