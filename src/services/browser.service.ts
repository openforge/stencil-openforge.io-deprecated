export class BrowserService {
  detectBrowser() {
    const allowWebp = String(this.detectWebpSupport());
    const isSafari =
      !/Chrome/i.test(navigator.userAgent) &&
      /Safari/i.test(navigator.userAgent)
        ? 'true'
        : 'false';
    localStorage.setItem('allowWebp', allowWebp);
    localStorage.setItem('isSafari', isSafari);
  }

  detectWebpSupport(): boolean {
    const nAgt = navigator.userAgent;
    let fullVersion = '' + parseFloat(navigator.appVersion);
    let verIndex: any;

    // detect 'Firefox'
    if (/Firefox/i.test(navigator.userAgent)) {
      // detect 'Firefox for Android'
      if (/Android|android|FxiOS/i.test(navigator.userAgent)) {
        return false;
      }
      verIndex = nAgt.indexOf('Firefox');
      fullVersion = nAgt.substring(verIndex + 8);
      const version = this.getMajorVersion(fullVersion);
      return version >= 65 ? true : false;
    }

    // detect Opera Mini
    if (/Opera Mini|Android|android/i.test(navigator.userAgent)) {
      return true;
    }

    // In Opera, the true version is after "Opera" or after "Version"
    if ((verIndex = nAgt.indexOf('Opera')) !== -1) {
      fullVersion = nAgt.substring(verIndex + 6);
      if ((verIndex = nAgt.indexOf('Version')) !== -1) {
        fullVersion = nAgt.substring(verIndex + 8);
      }
      const version = this.getMajorVersion(fullVersion);
      return version > 11.4 ? true : false;
    }

    // In Chrome, the true version is after "Chrome"
    if ((verIndex = nAgt.indexOf('Chrome')) !== -1) {
      fullVersion = nAgt.substring(verIndex + 7);
      const version = this.getMajorVersion(fullVersion);
      return version > 9 ? true : false;
    }
    return false;
  }

  getMajorVersion(fullVersion: string) {
    let ix: number;
    let majorVersion: number;
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(';')) !== -1) {
      majorVersion = parseFloat(fullVersion.substring(0, ix));
    }
    if ((ix = fullVersion.indexOf(' ')) !== -1) {
      majorVersion = parseFloat(fullVersion.substring(0, ix));
    }
    if (isNaN(majorVersion)) {
      majorVersion = parseFloat(navigator.appVersion);
    }
    return majorVersion;
  }
}
