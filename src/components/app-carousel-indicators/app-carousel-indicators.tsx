import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-carousel-indicators',
  styleUrl: 'app-carousel-indicators.scss',
})
export class AppCarouselIndicators {
  @Prop()
  activeIndex: string;

  render() {
    return (
      <ol class="carousel-indicators">
        {+this.activeIndex === 0 ? <li data-target="#processCarousel" data-slide-to="0" class="active" /> : <li data-target="#processCarousel" data-slide-to="0" />}
        {+this.activeIndex === 1 ? <li data-target="#processCarousel" data-slide-to="1" class="active" /> : <li data-target="#processCarousel" data-slide-to="1" />}
        {+this.activeIndex === 2 ? <li data-target="#processCarousel" data-slide-to="2" class="active" /> : <li data-target="#processCarousel" data-slide-to="2" />}
        {+this.activeIndex === 3 ? <li data-target="#processCarousel" data-slide-to="3" class="active" /> : <li data-target="#processCarousel" data-slide-to="3" />}
        {+this.activeIndex === 4 ? <li data-target="#processCarousel" data-slide-to="4" class="active" /> : <li data-target="#processCarousel" data-slide-to="4" />}
      </ol>
    );
  }
}
