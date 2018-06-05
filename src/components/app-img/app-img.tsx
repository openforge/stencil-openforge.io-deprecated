import { Component, Element, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.scss',
  shadow: true,
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

  render() {
    return (
      <img
        class={{ fit: this.fit }}
        src={this.loadSrc}
        alt={this.alt}
        decoding="async"
      />
    );
  }
}
