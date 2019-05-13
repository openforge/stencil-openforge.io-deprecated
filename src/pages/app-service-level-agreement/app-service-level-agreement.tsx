import { Component, Prop } from '@stencil/core';
declare var gtag;

@Component({
  tag: 'app-service-level-agreement',
  styleUrl: 'app-service-level-agreement.scss',
})
export class AppServiceLevelAgreement {
  @Prop({ context: 'isServer' })
  private isServer: boolean;

  private className;
  componentWillLoad() {
    this.className = !this.isServer ? (localStorage.getItem('allowWebp') === 'false' ? 'webp' : 'hero') : 'webp';
  }

  componentDidLoad() {
    gtag('config', 'UA-118169306-1', {
      page_title: document.title,
      page_path: window.location.pathname,
    });
  }

  scrollTo() {
    const form = document.getElementById('sla');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  scrollToTop() {
    const form = document.getElementsByTagName('header')[0];
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="service-level-agreement">
        <header class={this.className}>
          <div class="overlay" />
          <div class="container">
            <div class="row align-items-center">
              <div class="hero-content col-sm-12">
                <h2>Service Level Agreement</h2>
                <p>Below you can read the contents of our SLA. We welcome questions, so if you have any, don't hesitate to contact us at hello@openforge.io!</p>
                <button class="btn btn-primary" onClick={this.scrollTo.bind(this)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </header>
        <div id="sla" class="container sla-content">
          <div class="sla-headers">
            <h2>Area</h2>
            <h2>Action</h2>
            <h2>Detail</h2>
          </div>
          <hr />
          <div class="sla-row">
            <h3>Client Service</h3>
            <h3>Client Management</h3>
            <div class="sla-detail">
              <ul>
                <li>
                  <p>Meeting minutes will be used within 24 hours of meeting</p>
                </li>
                <li>
                  <p>A weekly status report will be provided onactively scheduled projects/multiple project accounts</p>
                </li>
                <li>
                  <p>All Teamwork messages will be responded to within 6 - 24 hors, depending on priority of the message. More options are available upon request</p>
                </li>
                <li>
                  <p>Clients will be kept up to date on relevant informaton of project delirables, inlcuding milestones and risks</p>
                </li>
                <li>
                  <p>A quarterly review meeting will be scheduled with Client and Client Management team to review overall project and roadmap</p>
                </li>
                <li>
                  <p>Handover notes and replacement agency contact will be provded in the case of a switch in provider. Please shcedule hand-off documentation at least one week in advance</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="sla-row">
            <h3>Creative</h3>
            <h3>Concept</h3>
            <div class="sla-detail">
              <ul>
                <li>
                  <p>Concepts will be presented and supportd eith a strategic and creative rationale</p>
                </li>
                <li>
                  <p>Recommendation provided; if requested Creative execution will be adhere to client brand and guidelines where available and appropiate</p>
                </li>
                <li>
                  <p>Creative team will attend presentation where feasible or necessary</p>
                </li>
                <li>
                  <p>
                    A creative review of each client will take place on a <strong>quarterly basis</strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="sla-row">
            <h3>Project Management</h3>
            <h3>Planning & Scheduling</h3>
            <div class="sla-detail">
              <ul>
                <li>
                  <p>A roadmap of major milestone & feature completions will be provided via Teamwork's Milestone functionality Milestones will be updated and reviewd when necessary</p>
                </li>
                <li>
                  <p>Project and production timing plans will be adhered to and in the event of milestones being missed, a revised timing plan will be provided</p>
                </li>
                <li>
                  <p>Any changes to ultimate delivery will be discussed and agreed with the Client</p>
                </li>
                <li>
                  <p>
                    Openforge will <strong>always</strong> aim to meet the original deadline
                  </p>
                </li>
                <li>
                  <p>Where this is not possible, potential alternative will be provided</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="sla-row">
            <h3>Production</h3>
            <h3>Costs</h3>
            <div class="sla-detail">
              <ul>
                <li>
                  <p>A cost estimate of Creative work will be presented and agreed to by Client before work is started</p>
                </li>
                <li>
                  <p>Cost Estimate will be based on approved project brief from client</p>
                </li>
                <li>
                  <p>Production cost estimates can be obtained from eternal suppliers on behalf of client</p>
                </li>
                <li>
                  <p>A cost estimate of Development work will be presented once Creative work (Design) and Architecture Discovery is completed</p>
                </li>
                <li>
                  <p>Any estimtes provided before Opeforge's discovery & design process are complete are only estimates, and can not be guarantedd by threshold pricing policy</p>
                </li>
                <li>
                  <p>Openforge will proceed with the relevant action following written approval of costs through Teamwork</p>
                </li>
                <li>
                  <p>
                    A concept will be delivered on budget. In the event of a concept being over budget, or at risk of going over budget, an alternative on-budget alternative solution will be provided
                  </p>
                </li>
                <li>
                  <p>
                    If a conept is delivered over budget due to a change in requirements or a dependency on a 3rd party provider, regular pricing applies. If a concept is delivered over budget for any
                    other reason, threshold pricing will apply
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="sla-row">
            <h3>Finance</h3>
            <h3>Billing</h3>
            <div class="sla-detail">
              <ul>
                <li>
                  <p>Any changes to costs will be discussed with the client and documented via Teamwork</p>
                </li>
                <li>
                  <p>All work is scheduled in advance with pre-paid retainers, also known as a "top-p" model</p>
                </li>
                <li>
                  <p>
                    Only after payment of hours will client work be scheduled, with the exception of high priority tickets and client questions / communications. These will be addressed immediately,
                    up to 10hrs, and billed afterwords
                  </p>
                </li>
                <li>
                  <p>Client automatically approves any hours spent responding to questions or high priority tickets</p>
                </li>
              </ul>
            </div>
          </div>
          <p class="top-link" onClick={this.scrollToTop.bind(this)}>
            Back to top
          </p>
        </div>
        <app-footer />
      </div>
    );
  }
}
