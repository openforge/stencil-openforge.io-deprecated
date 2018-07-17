import { Component } from '@stencil/core';

@Component({
  tag: 'app-services',
  styleUrl: 'app-services.scss',
})
export class AppServices {
  render() {
    return (
      <section class="services">
        <div class="">
          <div class="services--header">
            <h2>
              <app-translate key="services.what.title" />
            </h2>
            <p>
              <app-translate key="services.what.text" />
            </p>
          </div>

          <div class="services--tab-panel">
            <nav class="nav" role="navigation">
              <div class="nav nav-tabs nav-fill" id="nav-tab">
                <a
                  class="nav-item nav-link active"
                  id="nav-startup-tab"
                  data-toggle="tab"
                  href="#nav-startup"
                  role="tab"
                  aria-controls="nav-startup"
                  aria-selected="true"
                >
                  <figure>
                    <img
                      class="img-fluid"
                      src="assets/graphic-services-startup.png"
                      alt=""
                    />
                    <figcaption>
                      <app-translate key="services.what.startup" />
                    </figcaption>
                  </figure>
                </a>

                <a
                  class="nav-item nav-link"
                  id="nav-smallteam-tab"
                  data-toggle="tab"
                  href="#nav-smallteam"
                  role="tab"
                  aria-controls="nav-smallteam"
                  aria-selected="false"
                >
                  <figure>
                    <img
                      class="img-fluid"
                      src="assets/graphic-services-small.png"
                      alt=""
                    />
                    <figcaption>
                      <app-translate key="services.what.smallTeam" />
                    </figcaption>
                  </figure>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-midteam-tab"
                  data-toggle="tab"
                  href="#nav-midteam"
                  role="tab"
                  aria-controls="nav-midteam"
                  aria-selected="false"
                >
                  <figure>
                    <img
                      class="img-fluid"
                      src="assets/graphic-services-midsize.png"
                      alt=""
                    />
                    <figcaption>
                      <app-translate key="services.what.midSizeTeam" />
                    </figcaption>
                  </figure>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-enterprise-tab"
                  data-toggle="tab"
                  href="#nav-enterprise"
                  role="tab"
                  aria-controls="nav-enterprise"
                  aria-selected="false"
                >
                  <figure>
                    <img
                      class="img-fluid"
                      src="assets/graphic-services-enterprise.png"
                      alt=""
                    />
                    <figcaption>
                      <app-translate key="services.what.enterprise" />
                    </figcaption>
                  </figure>
                </a>
              </div>
            </nav>

            <div class="tab-content services--panel" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-startup"
                role="tabpanel"
                aria-labelledby="nav-startup-tab"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6 mb-5 mb-5">
                    <h3>
                      <app-translate key="services.what.whatYouNeed" />
                    </h3>
                    <app-translate key="services.what.whatYouNeedText" />
                  </div>
                  <div class="col-sm-12 offset-md-1 col-md-5">
                    <h3>
                      <app-translate key="services.what.whatWeProvide.title" />:
                    </h3>
                    <ul>
                      <li>
                        <app-translate key="services.what.whatWeProvide.startUpConsulting" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.enhancedDesigns" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.uiRecommendations" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.mobileDevelopment" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.webDevelopment" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.engagementStrategy" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.guearillaMarketingStrategy" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-smallteam"
                role="tabpanel"
                aria-labelledby="nav-smallteam-tab"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6 mb-5">
                    <h3>
                      <app-translate key="services.what.whatYouNeed" />:
                    </h3>
                    <app-translate key="services.what.whatYouNeedTextSmallTeam" />
                  </div>
                  <div class="col-sm-12 offset-md-1 col-md-5">
                    <h3>
                      <app-translate key="services.what.whatWeProvide.title" />:
                    </h3>
                    <ul>
                      <li>
                        <app-translate key="services.what.whatWeProvide.businessConsulting" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.technicalConsulting" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.businessElligibilityAudit" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.mobileWebDesigns" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.uIUXAudits" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.mobileWebApplicationDevelopment" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.customerEngagementStrategy" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-midteam"
                role="tabpanel"
                aria-labelledby="nav-midteam-tab"
              >
                <div class="services-content">
                  <div class="row">
                    <div class="col-sm-12 col-md-6 mb-5">
                      <h3>
                        <app-translate key="services.what.whatYouNeed" />:
                      </h3>
                      <app-translate key="services.what.whatYouNeedTextMidTeam" />
                    </div>
                    <div class="col-sm-12 offset-md-1 col-md-5">
                      <h3>
                        <app-translate key="services.what.whatWeProvide.title" />:
                      </h3>
                      <ul>
                        <li>
                          <app-translate key="services.what.whatWeProvide.businessStrategyConsulting" />
                        </li>
                        <li>
                          <app-translate key="services.what.whatWeProvide.professionalMobileWebDesigns" />
                        </li>
                        <li>
                          <app-translate key="services.what.whatWeProvide.uIUXAuditsRecommendations" />
                        </li>
                        <li>
                          <app-translate key="services.what.whatWeProvide.mobileDevelopment" />
                        </li>
                        <li>
                          <app-translate key="services.what.whatWeProvide.webDevelopment" />
                        </li>
                        <li>
                          <app-translate key="services.what.whatWeProvide.strategicCustomerEngagementConsulting" />
                        </li>
                        <li>
                          <app-translate key="services.what.whatWeProvide.teamTrainingsWorkshops" />
                        </li>
                        <li>
                          <app-translate key="services.what.whatWeProvide.processImprovementTraining" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-enterprise"
                role="tabpanel"
                aria-labelledby="nav-enterprise-tab"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6 mb-5">
                    <h3>
                      <app-translate key="services.what.whatYouNeed" />:
                    </h3>
                    <app-translate key="services.what.whatYouNeedTextEnterpriseTeam" />
                  </div>
                  <div class="col-sm-12 offset-md-1 col-md-5">
                    <h3>
                      <app-translate key="services.what.whatWeProvide.title" />:
                    </h3>
                    <ul>
                      <li>
                        <app-translate key="services.what.whatWeProvide.enterpriseDesignWorkshops" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.crossDisciplinaryTeamTraining" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.externalConsultingProcessImprovement" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.webAccessabilityAudits" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.userExperienceUIUXAudits" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.mobileWebApplicationServices" />
                      </li>
                      <li>
                        <app-translate key="services.what.whatWeProvide.customerEngagementStrategy" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <app-footer />
      </section>
    );
  }
}
