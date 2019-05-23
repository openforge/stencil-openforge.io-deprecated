import { Component } from '@stencil/core';

@Component({
  tag: 'app-toolbox',
  styleUrl: 'app-toolbox.scss',
})
export class AppToolbox {
  // private className = localStorage.getItem('allowWebp') === 'true' ? 'webp' : 'hero';

  scrollToForm() {
    const form = document.getElementById('content');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  componentDidLoad() {
    document.querySelector("meta[property='og:title']").setAttribute('content', 'Toolbox - Development & Design Tools | OpenForge');
    document
      .querySelector("meta[property='og:description']")
      .setAttribute(
        'content',
        'Our team members use a variety of tools to bring projects to light in an efficient and effective manner. Our development team and design team both use the latest technologies available to create innovative and beautiful products with the user in mind'
      );
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/toolbox/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/toolbox-hero-img.png');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'developer tools, designer tools');
  }

  render() {
    return (
      <div class="toolbox">
        {/* header - hero */}
        <header class="header">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-6">
                <h1>The best tools create the best products.</h1>
                <p>As a digital agency, utilizing the best mobile and web practices is among our foremost concerns. Check out some of the tools we use to keep our products looking great and runnig smoothly across all devices.</p>
                <button onClick={this.scrollToForm.bind(this)} class="btn btn-primary">
                  SEE WHAT'S INSIDE
                </button>
              </div>
              <div class="col-sm-12 col-md-6">
                <app-img src="/assets/svg/toolbox-graphic-header.svg" alt="Toolbox Header Graphic" />
              </div>
            </div>
            <div class="line-break" />
          </div>
        </header>

        <section class="md-content d-md-block" id="md-content">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex flex-column align-items-center">

                <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="pills-design-tab" data-toggle="pill" href="#pills-design" role="tab" aria-controls="pills-design" aria-selected="true">Design</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-development-tab" data-toggle="pill" href="#pills-development" role="tab" aria-controls="pills-development" aria-selected="false">Development</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-qa-tab" data-toggle="pill" href="#pills-qa" role="tab" aria-controls="pills-qa" aria-selected="false">Quality Assurance</a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        <img src="/assets/toolbox/toolbox-graphic-chest-top.png" />
                        <img src="/assets/toolbox/toolbox-graphic-chest-bottom.png" />
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <h3>Tools of the Trade</h3>
                        <p>The tools we use create a bridge between design and development, allowing us to bring our designs to life through beautifully crafted code. Click any bubble to see how they work.</p>
                      </div>
                    </div>             
                  </div>
                  <div class="tab-pane fade" id="pills-development" role="tabpanel" aria-labelledby="pills-development-tab">
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        chest
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <h3>Tools of the Trade</h3>
                        <p>The tools we use create a bridge between design and development, allowing us to bring our designs to life through beautifully crafted code. Click any bubble to see how they work.</p>
                      </div>
                    </div>  
                  </div>
                  <div class="tab-pane fade" id="pills-qa" role="tabpanel" aria-labelledby="pills-qa-tab">
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        chest
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <h3>Tools of the Trade</h3>
                        <p>The tools we use create a bridge between design and development, allowing us to bring our designs to life through beautifully crafted code. Click any bubble to see how they work.</p>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section class="sm-content d-xs-block d-md-none" id="sm-content">
          <div class="container text-center">
            <div class="row">
              <div class="col-sm-12">
                <h3>Design</h3>
                <div id="toolboxCarousel-design" class="carousel slide" data-ride="carousel" data-pause="false">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="chest-icon" src="/assets/toolbox/icon-abstract.svg" />
                      <div class="text-container">
                        <h4>Abstract</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="chest-icon" src="/assets/toolbox/icon-marvel.svg" />
                      <div class="text-container">
                        <h4>Marvel</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="chest-icon" src="/assets/toolbox/icon-sketch.svg" />
                      <div class="text-container">
                        <h4>Sketch</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#toolboxCarousel-design" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true" />
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#toolboxCarousel-design" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true" />
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <h3>Development</h3>
                <div id="toolboxCarousel-development" class="carousel slide" data-ride="carousel" data-pause="false">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="chest-icon" src="/assets/toolbox/icon-ionic.svg" />
                      <div class="text-container">
                        <h4>Ionic</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="chest-icon" src="/assets/toolbox/icon-angular.svg" />
                      <div class="text-container">
                        <h4>Angular</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="chest-icon" src="/assets/toolbox/icon-strapi.svg" />
                      <div class="text-container">
                        <h4>Strapi</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#toolboxCarousel-development" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true" />
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#toolboxCarousel-development" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true" />
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <h3>Quality Assurance</h3>
                <div id="toolboxCarousel-quality" class="carousel slide" data-ride="carousel" data-pause="false">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="chest-icon" src="/assets/toolbox/icon-instabug.svg" />
                      <div class="text-container">
                        <h4>Instabug</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="chest-icon" src="/assets/toolbox/icon-cypress.svg" />
                      <div class="text-container">
                        <h4>Cypress</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="chest-icon" src="/assets/toolbox/icon-teamwork.svg" />
                      <div class="text-container">
                        <h4>Teamwork</h4>
                        <p>Lorem ipsum dodor sit omet, constreur elist set do tempor induincit et dore manga aliquea labore ut elsmod</p>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#toolboxCarousel-quality" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true" />
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#toolboxCarousel-quality" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true" />
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    






        <app-cta />
        <app-footer />
      </div>
    );
  }
}
