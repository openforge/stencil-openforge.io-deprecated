import { Component } from '@stencil/core';

@Component({
  tag: 'app-toolbox',
  styleUrl: 'app-toolbox.scss',
})
export class AppToolbox {
  scrollToForm() {
    const form = document.getElementById('second-content');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="toolbox">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-9 col-md-8 col-lg-9">
                <h2>Here are some of the tools we use</h2>
                <p>
                  We believe that your success is our success. We're here to
                  challenge your assumptions and help you discover your web or
                  mobile applications full potential.
                </p>
                <button
                  onClick={this.scrollToForm.bind(this)}
                  class="btn btn-primary"
                >
                  Scroll to Learn More
                </button>
              </div>
            </div>
          </div>
        </header>
        <div id="second-content" class="container">
          <h1>UI/UX Design</h1>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-design-toolbox-first.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Abstract</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>Marvel</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-design-toolbox-second.png"
              alt=""
            />
          </section>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-design-toolbox-third.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Sketch</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </section>
        </div>
        <div class="container">
          <h1>App Development</h1>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-development-toolbox-first.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Abstract</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>Marvel</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-development-toolbox-second.png"
              alt=""
            />
          </section>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-development-toolbox-third.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Sketch</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </section>
        </div>
        <div class="container">
          <h1>Consulting</h1>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-consulting-toolbox-first.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Abstract</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </section>
          <section class="text-img-container left-side">
            <div class="text-img-container-text">
              <h2>Marvel</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-consulting-toolbox-second.png"
              alt=""
            />
          </section>
          <section class="text-img-container right-side">
            <app-img
              class="img-fluid d-none d-md-inline"
              src="/assets/services-consulting-toolbox-third.png"
              alt=""
            />
            <div class="text-img-container-text">
              <h2>Sketch</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </section>
        </div>
        <app-footer />
      </div>
    );
  }
}
