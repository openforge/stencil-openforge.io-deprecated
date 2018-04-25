export const GA_TRACKING_ID = 'UA-118169306-1';

let didInit = false;

// tslint:disable-next-line
export function gtag(..._args: any[]) {
  if (!didInit) {
    window['dataLayer'] = window['dataLayer'] || [];
    didInit = true;
  }

  window['dataLayer'].push(arguments);
}
