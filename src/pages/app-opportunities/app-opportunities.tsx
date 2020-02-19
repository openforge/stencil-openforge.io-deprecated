import { Component, State, Listen, Prop, Watch, h } from '@stencil/core';
import { translate } from '../../services/translation.service';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  maxFileSize = 10485760; // 10MB
  formData: any;
  // private allowWebp = localStorage.getItem('allowWebp') === 'true' ? true : false;

  formValues: {
    angular: number;
    node: number;
    ionic: number;
    html: number;
    css: number;

    sketch: number;
    photoshop: number;
    illustrator: number;
    adobe: number;
    prototyping: number;

    file: string;
    name: string;
    phone: string;
    message: string;
    email: string;
    github: string;

    formErrors: {
      fileValid: false;
      nameValid: false;
      emailValid: false;
      phoneValid: false;
      githubValid: false;
      messageValid: false;
      formValid: false;
    };
  };

  @State() fileError: any;
  @State() fileName: any;
  @State() nameError: string;
  @State() emailError: string;
  @State() phoneError: string;
  @State() githubError: string;
  @State() messageError: string;

  @State() interviewButtonDisabled: boolean = true;
  @State() submitButtonDisabled: boolean = true;
  @State() canRequestInterview: boolean = false;
  @State() formSubmitting: boolean = false;
  @State() formSubmitted: boolean = false;
  @State() fileSizeErrorShown: boolean = false;

  @State()
  texts = {
    develop: {
      googleDoc: 'https://docs.google.com/document/d/1WUrZp0FinRbT2fROmPjXAyqhCPlam-G3w0siFgbVgF4/edit',
      backgroundPhoto: '/assets/graphic-opportunities-dev-header.png',
      firstSkill: {
        name: 'Angular',
        img: '/assets/graphic-opportunities-dev-phone1.png',
      },
      secondSkill: {
        name: 'Redux',
        img: '/assets/graphic-opportunities-dev-phone2.png',
      },
      thirdSkill: {
        name: 'API Integration',
        img: '/assets/graphic-opportunities-dev-phone3.png',
      },
      mobile: {
        img: '/assets/graphic-opportunities-dev-phone4.png',
      },
      sliders: {
        first: {
          label: 'Angular',
          name: 'angular',
        },
        second: {
          label: 'Node',
          name: 'node',
        },
        third: {
          label: 'Ionic',
          name: 'ionic',
        },
        fourth: {
          label: 'Html',
          name: 'html',
        },
        fifth: {
          label: 'Css',
          name: 'css',
        },
      },
      metatags: {
        title: 'App Developer Job Application | OpenForge',
        description:
          'From our work to our interview process, we break the norm. We believe in Open Source contributions; so part of your interview assignment will be exactly that - build out a simple (open source) Ionic or React App!',
        keywords: 'Software Developer Job Application',
        url: 'https://openforge.io/opportunities/develop/',
        image: 'https://openforge.io/assets/graphic-opportunities-dev-header.png',
      },
      candidateUrl: '/assets/opportunities/codemaster.png',
      requisitesUrl: '/assets/case-study-development.png',
    },
    design: {
      googleDoc: 'https://docs.google.com/document/d/1wqwowtkU52JmLb8HkR-bOZhx_MpLIUXnTJSy47U_OuI/edit',
      backgroundPhoto: '/assets/graphic-opportunities-design-header.png',
      firstSkill: {
        name: 'Wireframing',
        img: '/assets/graphic-opportunities-design-phone1.png',
      },
      secondSkill: {
        name: 'Prototyping',
        img: '/assets/graphic-opportunities-design-phone2.png',
      },
      thirdSkill: {
        name: 'Responsive Design',
        img: '/assets/graphic-opportunities-design-phone3.png',
      },
      mobile: {
        img: '/assets/graphic-opportunities-design-phone1.png',
      },
      sliders: {
        first: {
          label: 'Sketch',
          name: 'sketch',
        },
        second: {
          label: 'Photoshop CC',
          name: 'photoshop',
        },
        third: {
          label: 'Illustrator CC',
          name: 'illustrator',
        },
        fourth: {
          label: 'Adobe XD CC',
          name: 'adobe',
        },
        fifth: {
          label: 'Prototyping',
          name: 'prototyping',
        },
      },
      metatags: {
        title: 'Graphic Designer Job Application | OpenForge',
        description:
          'At OpenForge, we believe that sometimes actions speak louder than words, so as part of your interview assignment, we’d like to challenge you to design 3 pages of an app of your choosing.',
        keywords: 'Graphic Designer Job Application',
        url: 'https://openforge.io/opportunities/design/',
        image: 'https://openforge.io/assets/graphic-opportunities-design-header.png',
      },
      candidateUrl: '/assets/opportunities/designmaster.png',
      requisitesUrl: '/assets/case-study-design.png',
    },
  };

  @Prop()
  errorIconStyles = {
    display: 'inline',
    marginBottom: '.2rem',
    paddingRight: '5px',
  };
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() opporunityTypeCurrent: string;
  @State() opporunityTypePrevious: string;
  @State() opporunityTypeActive: string;

  @Watch('match')
  matchHandler() {
    this.changeMetadata();
  }

  componentDidLoad() {
    this.resetFormValues();
    this.changeMetadata();
  }

  componentDidUpdate() {
    if (!this.interviewButtonDisabled) {
      if (document.getElementById('requestInterview')) {
        document.getElementById('requestInterview').focus();
      }
    }
  }

  @Listen('valueChanged')
  valueChangedHandler(event) {
    const { field, value, target } = event.detail;
    this.formValues[field] = value;

    if (this.opporunityTypeCurrent === 'develop') {
      if (this.formValues.angular > 90 && this.formValues.node > 90 && this.formValues.ionic > 90 && this.formValues.html > 90 && this.formValues.css > 90) {
        this.interviewButtonDisabled = false;
      } else {
        this.interviewButtonDisabled = true;
      }
    }

    if (this.opporunityTypeCurrent === 'design') {
      if (this.formValues.sketch > 70 && this.formValues.photoshop > 70 && this.formValues.illustrator > 70 && this.formValues.adobe > 70 && this.formValues.prototyping > 70) {
        this.interviewButtonDisabled = false;
      } else {
        this.interviewButtonDisabled = true;
      }
    }
    this.validateField(target);
  }

  validateField(e) {
    if (e) {
      if (!e.name) {
        switch (e.target.name) {
          case 'message':
            this.formValues.formErrors.messageValid = e.target.checkValidity();
            this.messageError = this.formValues.formErrors.messageValid ? '' : (this.messageError = e.target.validationMessage);
            break;

          case 'file':
            this.formValues.formErrors.fileValid = e.target.checkValidity();
            if (!this.fileSizeErrorShown) {
              this.fileError = this.formValues.formErrors.fileValid ? '' : (this.fileError = e.target.validationMessage);
            }
            break;
        }
      }

      switch (e.name) {
        case 'name':
          this.formValues.formErrors.nameValid = e.checkValidity();
          this.nameError = this.formValues.formErrors.nameValid ? '' : (this.nameError = e.validationMessage);
          break;
        case 'email':
          this.formValues.formErrors.emailValid = e.checkValidity();
          this.emailError = this.formValues.formErrors.emailValid ? '' : (this.emailError = e.validationMessage);
          break;

        case 'phone':
          this.formValues.formErrors.phoneValid = e.checkValidity();
          this.phoneError = this.formValues.formErrors.phoneValid ? '' : (this.phoneError = e.validationMessage);
          break;

        case 'github':
          this.formValues.formErrors.githubValid = e.checkValidity();
          this.githubError = this.formValues.formErrors.githubValid ? '' : (this.githubError = e.validationMessage);
          break;
      }
    }

    const isFileValid = this.formValues.formErrors.fileValid || this.fileSizeErrorShown;

    isFileValid &&
      this.formValues.formErrors.nameValid &&
      this.formValues.formErrors.emailValid &&
      this.formValues.formErrors.phoneValid &&
      this.formValues.formErrors.githubValid &&
      this.formValues.formErrors.messageValid
      ? (this.submitButtonDisabled = false)
      : (this.submitButtonDisabled = true);
  }

  handleSliders(e) {
    e.preventDefault();
    this.canRequestInterview = true;
    document.getElementById('hero').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  handleFile(e) {
    const files = e.target.files;
    const file = files[0];
    this.formData = new FormData();
    this.formData.append('files', files[0]);
    this.fileName = file.name;
    this.formValues.formErrors.fileValid = e.target.checkValidity();
    if (file && file.size > this.maxFileSize) {
      this.fileSizeErrorShown = true;
      this.fileError = 'Your Resume/CV file is too large. Your application will be submitted without it.';
      this.validateField(null);
      return;
    }

    this.fileSizeErrorShown = false;
    this.fileError = '';
    this.validateField(null);
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.formValues['message'] = e.target.message.value;

    for (const value in this.formValues) {
      this.formData.append(value, this.formValues[value]);
    }

    try {
      this.formSubmitting = true;
      this.submitButtonDisabled = true;

      await fetch('https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeOpportunities', {
        method: 'POST',
        mode: 'no-cors',
        body: this.formData,
      });

      e.target.reset();
      this.resetFormValues();

      this.submitButtonDisabled = false;
      this.formSubmitting = false;
      this.formSubmitted = true;
      this.fileSizeErrorShown = false;

      document.getElementById('thanks').scrollIntoView({ block: 'start' });
    } catch (error) {
      console.log('Error', error);
    }
  }

  scrollToForm() {
    const form = document.getElementById('interviews');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  scrollToApply() {
    const element = document.getElementById('applyForm');
    const headerOffset = 30;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  changeMetadata() {
    if (this.texts[this.opporunityTypeCurrent]) {
      // Change meta tags dynamically d
      document.querySelector("meta[property='og:title']").setAttribute('content', this.texts[this.opporunityTypeCurrent].metatags.title);
      document.querySelector("meta[property='og:description']").setAttribute('content', this.texts[this.opporunityTypeCurrent].metatags.description);
      document.querySelector("meta[property='og:url']").setAttribute('content', this.texts[this.opporunityTypeCurrent].metatags.url);
      document.querySelector("meta[property='og:image']").setAttribute('content', this.texts[this.opporunityTypeCurrent].metatags.image);
      document.querySelector("meta[name='keywords']").setAttribute('content', this.texts[this.opporunityTypeCurrent].metatags.keywords);
    }
  }

  selectType(type: string) {
    if (this.opporunityTypeCurrent !== type) {
      this.opporunityTypePrevious = this.opporunityTypeCurrent;
      this.opporunityTypeCurrent = type;
      setTimeout(() => {
        this.opporunityTypeActive = this.opporunityTypeCurrent;
      }, 1000);
    }
  }

  render() {
    return (
      <div class="opportunities">
        {!this.canRequestInterview ? (
          // Header for initial state
          <header
            id="hero"
            class={
              !this.opporunityTypePrevious && !this.opporunityTypeCurrent
                ? 'hero header-animated'
                : this.opporunityTypeActive === 'develop' && this.opporunityTypeCurrent === 'develop'
                  ? 'hero header-dev-active'
                  : this.opporunityTypeActive === 'design' && this.opporunityTypeCurrent === 'design'
                    ? 'hero header-design-active'
                    : !this.opporunityTypePrevious && this.opporunityTypeCurrent === 'develop'
                      ? 'hero header-transition-dev'
                      : !this.opporunityTypePrevious && this.opporunityTypeCurrent === 'design'
                        ? 'hero header-transition-design'
                        : this.opporunityTypePrevious === 'develop' && this.opporunityTypeCurrent === 'design'
                          ? 'hero header-transition-dev-design'
                          : this.opporunityTypePrevious === 'design' && this.opporunityTypeCurrent === 'develop'
                            ? 'hero header-transition-design-dev'
                            : 'hero header-animated'
            }
          >
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-6 hero-text-container">
                  <h2>
                    <app-translate keyword="opportunities.hero.title" />
                  </h2>
                  <p>
                    <app-translate keyword="opportunities.hero.text" />
                  </p>
                  <div class="hero-type-buttons">
                    <button id='dev' onClick={() => this.selectType('develop')} class={this.opporunityTypeCurrent === 'develop' ? 'btn btn-primary opportunity-btn active' : 'btn btn-primary opportunity-btn'}>
                      <app-translate keyword="opportunities.hero.developer" />
                    </button>
                    <button id='des' onClick={() => this.selectType('design')} class={this.opporunityTypeCurrent === 'design' ? 'btn btn-primary opportunity-btn active' : 'btn btn-primary opportunity-btn'}>
                      <app-translate keyword="opportunities.hero.designer" />
                    </button>
                  </div>
                  <div class="hero-arrow-img">
                    {this.opporunityTypeCurrent
                      ? [
                        <app-translate keyword="opportunities.hero.text2" />,
                        <app-img onClick={this.scrollToForm.bind(this)} src="/assets/opportunities/opportunities-arrow-animated.svg" alt="down arrow svg" />,
                      ]
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </header>
        ) : (
            // Header for the state after click on apply
            <header class="hero-submit container">
              <content-graphic
                leftAlign={true}
                img-url={this.opporunityTypeCurrent === 'design' ? '/assets/opportunities/opportunities-designer-candidate.svg' : '/assets/opportunities/opportunities-dev-candidate.svg'}
                reverse={this.opporunityTypeCurrent === 'design' ? true : false}
              >
                <h3 class="original thin margin-bottom auto-align" slot="header">
                  <app-translate keyword={`opportunities.hero.${this.opporunityTypeCurrent}.title`} />
                </h3>
                <p class="auto-align" slot="body">
                  <app-translate keyword={`opportunities.hero.${this.opporunityTypeCurrent}.text`} />
                </p>
                <div class="footer-btn" slot="footer">
                  <button class="btn btn-primary apply-btn" onClick={this.scrollToApply.bind(this)}>
                    <app-translate keyword={`opportunities.hero.${this.opporunityTypeCurrent}.button`} />
                  </button>
                </div>
              </content-graphic>
            </header>
          )}
        {this.opporunityTypeCurrent ? (
          !this.canRequestInterview ? (
            // Content section for initial state
            <section id="interviews" class="interviews">
              <div class="container">
                <content-graphic img-url="/assets/graphic-opportunities-suck.jpg" reverse={true}>
                  <h3 class="original thin margin-bottom auto-align" slot="header">
                    <app-translate keyword="opportunities.intro.title" />
                  </h3>
                  <p class="auto-align" slot="body">
                    <app-translate keyword={`opportunities.intro.${this.opporunityTypeCurrent}.text`} />
                  </p>
                </content-graphic>

                <content-graphic img-url={this.opporunityTypeCurrent === 'design' ? '/assets/opportunities/test-designer.png' : '/assets/opportunities/test-dev.png'}>
                  <h3 class="original thin margin-bottom" slot="header">
                    <app-translate keyword="opportunities.test.title" />
                  </h3>
                  <p slot="body">
                    <app-translate keyword={`opportunities.test.${this.opporunityTypeCurrent}.text`} />
                  </p>
                </content-graphic>
              </div>

              <div class="challenge">
                <div class="container">
                  <div class="intro text-center">
                    <h2>
                      <app-translate keyword="opportunities.challenge.title" />
                    </h2>
                    <p>
                      <app-translate keyword="opportunities.challenge.showUs" />
                    </p>
                  </div>
                  <div class="row">
                    <div class="image-column col-sm-12 col-md-4">
                      <h3>{this.texts[this.opporunityTypeCurrent].firstSkill.name}</h3>
                      <app-img class="img-fluid d-none d-md-inline" src={this.texts[this.opporunityTypeCurrent].firstSkill.img} alt={this.texts[this.opporunityTypeCurrent].firstSkill.name} />
                    </div>
                    <div class="image-column col-sm-12 col-md-4">
                      <h3>{this.texts[this.opporunityTypeCurrent].secondSkill.name}</h3>
                      <app-img class="img-fluid d-none d-md-inline" src={this.texts[this.opporunityTypeCurrent].secondSkill.img} alt={this.texts[this.opporunityTypeCurrent].secondSkill.name} />
                    </div>
                    <div class="image-column col-sm-12 col-md-4">
                      <h3>{this.texts[this.opporunityTypeCurrent].thirdSkill.name}</h3>
                      <app-img class="img-fluid d-none d-md-inline" src={this.texts[this.opporunityTypeCurrent].thirdSkill.img} alt={this.texts[this.opporunityTypeCurrent].thirdSkill.name} />
                      <app-img class="img-fluid d-xs-inline d-md-none" src={this.texts[this.opporunityTypeCurrent].mobile.img} alt="Mobile Image" />
                    </div>
                  </div>
                </div>
              </div>

              <div id="reputation" class="container">
                <content-graphic img-url="/assets/graphic-opportunities-ionic.jpg" reverse={true}>
                  <h3 class="original thin margin-bottom auto-align" slot="header">
                    <app-translate keyword="opportunities.reputation.title" />
                  </h3>
                  <p class="auto-align" slot="body">
                    <app-translate keyword="opportunities.reputation.text" />
                  </p>
                </content-graphic>

                <content-graphic smallerImg={true} img-url={this.opporunityTypeCurrent === 'design' ? '/assets/opportunities/designmaster.png' : '/assets/opportunities/codemaster.png'}>
                  <h3 class="thin" slot="header">
                    <app-translate keyword="opportunities.prepared.title" />
                  </h3>
                  <p slot="body">
                    <app-translate keyword="opportunities.prepared.body" />
                  </p>
                </content-graphic>
              </div>
            </section>
          ) : (
              // Content section for the state after click on apply
              <section id="candidate-requisites" class="container">
                <hr />
                <content-graphic
                  leftAlign={true}
                  inverseOrder={true}
                  wider={true}
                  img-url={this.texts[this.opporunityTypeCurrent].candidateUrl}
                  reverse={this.opporunityTypeCurrent === 'develop' ? true : false}
                >
                  <h3 class="original thin margin-bottom auto-align" slot="header">
                    <app-translate keyword={`opportunities.candidate.${this.opporunityTypeCurrent}.title`} />
                  </h3>
                  <ul class="auto-align" slot="body">
                    <li>
                      <app-translate keyword={`opportunities.candidate.${this.opporunityTypeCurrent}.text1`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.candidate.${this.opporunityTypeCurrent}.text2`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.candidate.${this.opporunityTypeCurrent}.text3`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.candidate.${this.opporunityTypeCurrent}.text4`} />
                    </li>
                    {this.opporunityTypeCurrent === 'develop' ? (
                      <li>
                        <app-translate keyword={`opportunities.candidate.${this.opporunityTypeCurrent}.text5`} />
                      </li>
                    ) : null}
                  </ul>
                </content-graphic>
                <content-graphic
                  leftAlign={true}
                  inverseOrder={true}
                  wider={true}
                  img-url={this.texts[this.opporunityTypeCurrent].requisitesUrl}
                  reverse={this.opporunityTypeCurrent === 'develop' ? false : true}
                >
                  <h3 class="original thin margin-bottom auto-align" slot="header">
                    <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.title`} />
                  </h3>
                  <ul class="auto-align" slot="body">
                    <li>
                      <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text1`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text2`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text3`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text4`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text5`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text6`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text7`} />
                    </li>
                    <li>
                      <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text8`} />
                    </li>
                    {this.opporunityTypeCurrent === 'develop' ? (
                      <li>
                        <app-translate keyword={`opportunities.requisites.${this.opporunityTypeCurrent}.text9`} />
                      </li>
                    ) : null}
                  </ul>
                </content-graphic>
              </section>
            )
        ) : null}
        {this.opporunityTypeCurrent
          ? [
            <section id="apply" class="apply">
              <div class="container">
                {!this.canRequestInterview ? (
                  // First form with sliders
                  <form class="apply-1" onSubmit={this.handleSliders.bind(this)}>
                    <h2>
                      <app-translate keyword="opportunities.skills.title" />
                    </h2>
                    <p>
                      <app-translate keyword="opportunities.skills.text" />
                    </p>

                    <div class="slider-labels">
                      <p>
                        <app-translate keyword="opportunities.skills.noob" />
                      </p>
                      <p>
                        <app-translate keyword="opportunities.skills.expert" />
                      </p>
                    </div>

                    <app-slider name={this.texts[this.opporunityTypeCurrent].sliders.first.name} label={this.texts[this.opporunityTypeCurrent].sliders.first.label} />
                    <app-slider name={this.texts[this.opporunityTypeCurrent].sliders.second.name} label={this.texts[this.opporunityTypeCurrent].sliders.second.label} />
                    <app-slider name={this.texts[this.opporunityTypeCurrent].sliders.third.name} label={this.texts[this.opporunityTypeCurrent].sliders.third.label} />
                    <app-slider name={this.texts[this.opporunityTypeCurrent].sliders.fourth.name} label={this.texts[this.opporunityTypeCurrent].sliders.fourth.label} />
                    <app-slider name={this.texts[this.opporunityTypeCurrent].sliders.fifth.name} label={this.texts[this.opporunityTypeCurrent].sliders.fifth.label} />

                    {!this.interviewButtonDisabled ? (
                      <p>
                        <app-translate keyword="opportunities.form.allset" />
                      </p>
                    ) : (
                        <p>
                          <app-translate keyword="opportunities.form.almost" />
                        </p>
                      )}

                    <button class="btn btn-primary apply-btn" type="submit" disabled={this.interviewButtonDisabled}>
                      <app-translate keyword="opportunities.form.request" />
                    </button>
                  </form>
                ) : (
                    // Second form to submit the resume
                    <form class="apply-2" id="applyForm" onSubmit={this.handleSubmit.bind(this)}>
                      <h3>
                        <app-translate keyword="opportunities.form.submitTitle" />
                      </h3>

                      <div class="form-group">
                        <label class="resume">
                          <app-translate keyword="opportunities.form.resume" />
                        </label>
                        <label htmlFor="files" class="resume-btn">
                          {this.fileName ? 'Modify File' : 'Choose File'}
                        </label>
                        {this.fileName ? <label class="resume-filename">{this.fileName}</label> : null}
                        <input
                          id="files"
                          class="input-file"
                          type="file"
                          name="file"
                          onChange={this.handleFile.bind(this)}
                          // onBlur={this.validateField.bind(this)}
                          required={!this.fileSizeErrorShown}
                        />
                      </div>
                      <p class="error">
                        <span style={!this.fileError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.fileError}
                      </p>

                      <app-input slimmer={true} placeholder={translate('contact.form.placeholder.fullName')} label={translate('contact.form.fullName')} name="name" type="text" required={true} />
                      <p class="error">
                        <span style={!this.nameError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.nameError}
                      </p>
                      <app-input slimmer={true} placeholder={translate('contact.form.placeholder.email')} label={translate('contact.form.email')} name="email" type="email" required={true} />
                      <p class="error">
                        <span style={!this.emailError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.emailError}
                      </p>
                      <app-input slimmer={true} placeholder={translate('contact.form.placeholder.phone')} label={translate('contact.form.phone')} name="phone" type="number" required={true} />
                      <p class="error">
                        <span style={!this.phoneError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.phoneError}
                      </p>
                      {this.opporunityTypeCurrent === 'develop'
                        ? [
                          <app-input slimmer={true} placeholder={translate('contact.form.placeholder.github')} label={translate('contact.form.github')} name="github" type="text" required={true} />,
                          <p class="error">
                            <span style={!this.githubError ? { display: 'none' } : this.errorIconStyles}>
                              <i class="fa fa-exclamation-circle" aria-hidden="true" />
                            </span>
                            {this.githubError}
                          </p>,
                        ]
                        : [
                          <app-input
                            slimmer={true}
                            placeholder={translate('contact.form.placeholder.designProfile')}
                            label={translate('contact.form.designProfile')}
                            name="github"
                            type="text"
                            required={true}
                          />,
                          <p class="error">
                            <span style={!this.githubError ? { display: 'none' } : this.errorIconStyles}>
                              <i class="fa fa-exclamation-circle" aria-hidden="true" />
                            </span>
                            {this.githubError}
                          </p>,
                        ]}

                      <h3>
                        <app-translate keyword="opportunities.form.unique.title" />
                      </h3>

                      <div class="form-group input-textarea">
                        <label>
                          <app-translate keyword="opportunities.form.unique.text" />
                        </label>
                        <textarea class="form-control" name="message" maxLength={200} required={true} onChange={this.validateField.bind(this)} />
                      </div>
                      <p class="error">
                        <span style={!this.messageError ? { display: 'none' } : this.errorIconStyles}>
                          <i class="fa fa-exclamation-circle" aria-hidden="true" />
                        </span>
                        {this.messageError}
                      </p>

                      <div class="submit-btn-container">
                        <button class="btn btn-primary apply-btn" type="submit" disabled={this.submitButtonDisabled}>
                          <app-translate keyword="opportunities.form.submit" />
                        </button>
                      </div>

                      {this.formSubmitted ? (
                        <div class="submitted-text" id="thanks">
                          <p>
                            <app-translate keyword="opportunities.form.submitted" />
                          </p>
                          <p>
                            <app-translate keyword="opportunities.form.thanks_interest" />
                          </p>
                        </div>
                      ) : null}
                    </form>
                  )}
              </div>
            </section>,
          ]
          : null}
        <app-footer />
      </div>
    );
  }

  private resetFormValues() {
    this.formValues = {
      angular: parseFloat(''),
      node: parseFloat(''),
      ionic: parseFloat(''),
      html: parseFloat(''),
      css: parseFloat(''),

      sketch: parseFloat(''),
      adobe: parseFloat(''),
      prototyping: parseFloat(''),
      illustrator: parseFloat(''),
      photoshop: parseFloat(''),

      file: '',
      name: '',
      message: '',
      email: '',
      phone: '',
      github: '',

      formErrors: {
        fileValid: false,
        nameValid: false,
        emailValid: false,
        phoneValid: false,
        githubValid: false,
        messageValid: false,
        formValid: false,
      },
    };

    this.formData = null;
  }
}
