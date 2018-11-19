import '@stencil/router';
import { Component } from '@stencil/core';
import { polyfill } from 'smoothscroll-polyfill';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  mainEl: HTMLElement;

  componentDidLoad() {
    try {
      this.mainEl = document.querySelector('app-nav-header');
    } catch (e) {
      console.error('caught error componentDidLoad open-forge-app', e);
    }

    if (this.mainEl) {
      this.mainEl.addEventListener('click', () => {
        const opened = document.getElementsByClassName('navbar-collapse show');
        if (opened.length > 0) {
          const navbarButton: any = document.getElementsByClassName(
            'navbar-toggler'
          )[0];
          navbarButton.click();
        }
      });
    }
  }

  // supportWebp() {
  //   let appVersion = navigator.appVersion;
  //   let userAgent = navigator.userAgent;
  //   let browserName = navigator.appName;
  //   let fullVersion = '' + parseFloat(navigator.appVersion);
  //   let majorVersion = parseInt(navigator.appVersion, 10);
  //   let nameOffset: any;
  //   let verOffset: any;
  //   let ix: any;
  //   let supportWebp = false;

  //   // In Opera, the true version is after "Opera" or after "Version"
  //   if ((verOffset = userAgent.indexOf("Opera")) != -1) {
  //     browserName = "Opera";
  //     fullVersion = userAgent.substring(verOffset + 6);

  //     if ((verOffset = userAgent.indexOf("Version")) != -1) {
  //       fullVersion = userAgent.substring(verOffset + 8);
  //     }
  //   }
  //   // In MSIE, the true version is after "MSIE" in userAgent
  //   else if ((verOffset=userAgent.indexOf("MSIE"))!=-1) {
  //     browserName = "Microsoft Internet Explorer";
  //     fullVersion = userAgent.substring(verOffset+5);
  //  }
  //  // In Chrome, the true version is after "Chrome"
  //   else if ((verOffset=userAgent.indexOf("Chrome"))!=-1) {
  //     browserName = "Chrome";
  //     fullVersion = userAgent.substring(verOffset+7);
  //   }
  //   // In Safari, the true version is after "Safari" or after "Version"
  //   else if ((verOffset=userAgent.indexOf("Safari"))!=-1) {
  //     browserName = "Safari";
  //     fullVersion = userAgent.substring(verOffset+7);
  //     if ((verOffset=userAgent.indexOf("Version"))!=-1)
  //       fullVersion = userAgent.substring(verOffset+8);
  //   }
  //   // In Firefox, the true version is after "Firefox"
  //   else if ((verOffset=userAgent.indexOf("Firefox"))!=-1) {
  //     browserName = "Firefox";
  //     fullVersion = userAgent.substring(verOffset+8);
  //   }
  //   // Adding logic for detecting Chrome on mobile devices
  //   else if (userAgent.includes("Android") && userAgent.includes("Chrome")) {
  //     if ((verOffset = userAgent.indexOf("Chrome")) != -1) {
  //       browserName = "Android Chrome";
  //       fullVersion = userAgent.substring(verOffset + 7);
  //     }
  //   }
  //  // In most other browsers, "name/version" is at the end of userAgent
  //   else if ( (nameOffset=userAgent.lastIndexOf(' ')+1) < (verOffset=userAgent.lastIndexOf('/')) ) {
  //     browserName = userAgent.substring(nameOffset,verOffset);
  //     fullVersion = userAgent.substring(verOffset+1);
  //     if (browserName.toLowerCase()==browserName.toUpperCase()) {
  //       browserName = navigator.appName;
  //     }
  //   }
  //   // trim the fullVersion string at semicolon/space if present
  //   if (( ix=fullVersion.indexOf(";")) != -1) {
  //     fullVersion = fullVersion.substring(0, ix);
  //   }
  //   if (( ix = fullVersion.indexOf(" ")) != -1) {
  //     fullVersion = fullVersion.substring(0, ix);
  //   }

  //   majorVersion = parseInt("" + fullVersion, 10);
  //   if (isNaN(majorVersion)) {
  //     fullVersion = "" + parseFloat(navigator.appVersion);
  //     majorVersion = parseInt(navigator.appVersion, 10);
  //   }

  //   console.log(browserName);
  //   console.log(majorVersion);
  //   console.log(fullVersion);

  //   if (browserName === "Chrome" && majorVersion >= 9) {
  //     supportWebp = true;
  //   }
  //   if (browserName === "Firefox" && majorVersion >= 65) {
  //     supportWebp = true;
  //   }
  //   if (browserName === "Opera" && majorVersion >= 12) {
  //     supportWebp = true;
  //   }
  //   if (browserName === "Android Chrome" && majorVersion >= 70) {
  //     supportWebp = true;
  //   }

  //   return supportWebp;
  // }

  render() {
    // this.supportWebp();
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/404" component="app-404" exact={true} />
          <stencil-route url="/contact" component="app-contact" />
          <stencil-route
            url="/opportunities/:type"
            component="app-opportunities"
          />
          <stencil-route url="/about" component="app-about" exact={true} />
          <stencil-route url="/about/" component="app-about" exact={true} />
          <stencil-route url="/toolbox" component="app-toolbox" />
          <stencil-route
            url="/services/:service"
            component="app-detailed-service"
          />
          <stencil-route url="/resources" component="app-resources" />
          <stencil-route url="/about/:member" component="app-team-landing" />
          <stencil-route url="/juntoscope" component="app-case-study" />
          <stencil-route url="/terms-of-service" component="app-tos" />
          <stencil-route
            url="/service-level-agreement"
            component="app-service-level-agreement"
          />
          <stencil-route component="app-home" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
