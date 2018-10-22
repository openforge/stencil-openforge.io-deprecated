import { Component } from '@stencil/core';

@Component({
  tag: 'app-juntoscope',
  styleUrl: 'app-juntoscope.scss',
})
export class AppJuntoScope {
  render() {
    return (
      <div class="juntoscope">
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-9 col-md-8 col-lg-9">
                <h2>We Built JuntoScope!</h2>
                <p>
                  We are excited to share our experiences with building
                  JuntoScope with the open-source community. Download the sketch
                  file we used to build JuntoScope from the button below. Come
                  back for more updates and resources soon!
                </p>
                <a href="assets/pdf/juntoscope.sketch">
                  <button class="btn btn-primary">Download</button>
                </a>
              </div>
            </div>
          </div>
        </header>
        <app-footer />
      </div>
    );
  }
}
