import { Component } from '@stencil/core';

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark align-items-lg-end fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <h1>
                <img
                  class="img-fluid"
                  src="../../assets/logo-openforge.png"
                  alt="OpenForge"
                />
              </h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <stencil-router>
            <stencil-route url="/" component="app-home" exact={true} />
          </stencil-router>
        </main>
      </div>
    );
  }
}
