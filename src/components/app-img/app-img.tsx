import { Component, Element, Prop, State, Watch } from '@stencil/core';
// import { LazyImg } from './lazy-img';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.scss',
})
export class Img {
  private io: IntersectionObserver | null = null;
  private switchToWebp: boolean = false;

  @Element() el: HTMLElement;

  @State() loadSrc: string;

  @Prop() fit = false;
  @Prop() alt: string;
  @Prop() preLoad: boolean = false;
  @Prop() src: string;
  @Watch('src')
  srcChanged() {
    this.addIntersectionObserver();
  }

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  private addIntersectionObserver() {
    if (!this.src) {
      return;
    }

    if (!this.preLoad && 'IntersectionObserver' in window) {
      this.removeIntersectionObserver();
      this.io = new IntersectionObserver(data => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.loadSrc = this.src;
          this.removeIntersectionObserver();
        }
      });

      this.io.observe(this.el);
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => (this.loadSrc = this.src), 300);
    }
  }

  private removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  private changeExtension() {
    this.switchToWebp = this.detectBrowser();
    if (this.switchToWebp && this.loadSrc) {
      const idx = this.loadSrc.lastIndexOf('.');
      this.loadSrc = this.loadSrc.substr(0, idx) + '.webp';
    }
  }

  detectBrowser(): boolean {
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

  render() {
    this.changeExtension();
    console.log(this.loadSrc);
    return (
      // <lazy-img class={{ fit: this.fit }} src={this.loadSrc} alt={this.alt}></lazy-img>
      <img
        class={{ fit: this.fit }}
        src={this.loadSrc}
        alt={this.alt}
        decoding="async"
      />
    );
  }
}
