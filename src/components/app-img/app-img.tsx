import { Component, Element, Prop, State, Watch, h, Build } from '@stencil/core';
// import { LazyImg } from './lazy-img';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.scss',
})
export class Img {
  private io: IntersectionObserver | null = null;

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
          this.changeImageFormat();
          this.removeIntersectionObserver();
        }
      });

      this.io.observe(this.el);
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => {
        this.loadSrc = this.src;
        this.changeImageFormat();
      }, 300);
    }
  }

  private removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  private changeImageFormat() {
    if (this.loadSrc && (Build.isBrowser && localStorage.getItem('allowWebp') === 'true')) {
      const idx = this.loadSrc.lastIndexOf('.');
      const ext = this.loadSrc.substring(idx + 1, this.loadSrc.length);
      if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
        this.loadSrc = `${this.loadSrc.substring(0, idx)}.webp`;
      }
    }
  }

  render() {
    return <lazy-img class={{ fit: this.fit }} src={this.loadSrc} alt={this.alt} />;
  }
}
