import { Component, State, Listen, Prop, Watch } from '@stencil/core';
import { translate } from '../../services/translation.service';
import { MatchResults, RouterHistory } from '@stencil/router';

declare var fbq;

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  maxFileSize = 10485760; // 10MB
  formData = new FormData();
  private allowWebp = localStorage.getItem('allowWebp') === 'true' ? true : false;

  formValues: {
    angular: number;
    node: number;
    ionic: number;
    html: number;
    css: number;

    sketch: number;
    adobe: number;
    interactive: number;
    ux: number;
    presentation: number;

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
          label: 'Adobe CC',
          name: 'adobe',
        },
        third: {
          label: 'Interactive Prototyping',
          name: 'interactive',
        },
        fourth: {
          label: 'User Experience Design',
          name: 'ux',
        },
        fifth: {
          label: 'Presentation Design',
          name: 'presentation',
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
    },
  };

  @Prop({ context: 'isServer' })
  private isServer: boolean;

  @Prop()
  errorIconStyles = {
    display: 'inline',
    marginBottom: '.2rem',
    paddingRight: '5px',
  };
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @Watch('match')
  matchHandler() {
    this.changeMetadata();
  }

  componentWillLoad() {
    if (!this.texts[this.match.params.type]) {
      this.history.push(`/`, {});
    }
  }

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
      fbq('track', 'Lead');
    }
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

  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value, target } = event.detail;
    this.formValues[field] = value;

    if (this.match.params.type === 'develop') {
      if (this.formValues.angular > 90 && this.formValues.node > 90 && this.formValues.ionic > 90 && this.formValues.html > 90 && this.formValues.css > 90) {
        this.interviewButtonDisabled = false;
      } else {
        this.interviewButtonDisabled = true;
      }
    }

    if (this.match.params.type === 'design') {
      if (this.formValues.sketch > 70 && this.formValues.adobe > 70 && this.formValues.interactive > 70 && this.formValues.ux > 70 && this.formValues.presentation > 70) {
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
    document.getElementById('apply').scrollIntoView({ block: 'start' });
  }

  handleFile(e) {
    const files = e.target.files;
    const file = files[0];

    this.formData = new FormData();
    this.formData.append('files', files[0]);

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

      // isServer is false when running in the browser
      // and true when being prerendered
      if (!this.isServer) {
        fbq('track', 'CompleteRegistration');
      }

      e.target.reset();
      this.resetFormValues();

      this.submitButtonDisabled = false;
      this.formSubmitting = false;
      this.formSubmitted = true;
      this.fileSizeErrorShown = false;

      document.getElementById('apply').scrollIntoView({ block: 'start' });
    } catch (error) {
      console.log('Error', error);
    }
  }

  scrollToForm() {
    const form = document.getElementById('interviews');

    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  changeMetadata() {
    if (this.texts[this.match.params.type]) {
      // Change meta tags dynamically d
      document.querySelector("meta[property='og:title']").setAttribute('content', this.texts[this.match.params.type].metatags.title);
      document.querySelector("meta[property='og:description']").setAttribute('content', this.texts[this.match.params.type].metatags.description);
      document.querySelector("meta[property='og:url']").setAttribute('content', this.texts[this.match.params.type].metatags.url);
      document.querySelector("meta[property='og:image']").setAttribute('content', this.texts[this.match.params.type].metatags.image);
      document.querySelector("meta[name='keywords']").setAttribute('content', this.texts[this.match.params.type].metatags.keywords);
    }
  }

  changeImageFormat(img: string) {
    if (img && this.allowWebp) {
      const idx = img.lastIndexOf('.');
      return `${img.substring(0, idx)}.webp`;
    }
    return img;
  }

  render() {
    const backgroundPhoto = this.changeImageFormat(this.texts[this.match.params.type].backgroundPhoto);
    return (
      <div class="opportunities">
        {/* header - hero */}
        {this.texts[this.match.params.type]
          ? [
              <header
                class="hero"
                style={{
                  'background-image': `url(${backgroundPhoto})`,
                }}
              >
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-sm-12 col-md-8 col-lg-6">
                      <h2>
                        <app-translate key="opportunities.hero.title" />
                      </h2>
                      <p>
                        <app-translate key="opportunities.hero.text" />
                      </p>
                      <button onClick={this.scrollToForm.bind(this)} class="btn btn-primary">
                        <app-translate key="opportunities.hero.text2" />
                      </button>
                    </div>
                  </div>
                </div>
              </header>,

              /* section -  interviews */
              <section id="interviews" class="interviews">
                <div class="container">
                  <content-graphic img-url="/assets/graphic-opportunities-suck.jpg" reverse={true}>
                    <h3 slot="header">
                      <app-translate key="opportunities.intro.title" />
                    </h3>
                    <p slot="body">
                      <app-translate key={`opportunities.intro.${this.match.params.type}.text`} />
                    </p>
                  </content-graphic>

                  <content-graphic img-url={`/assets/graphic-opportunities-master-${this.match.params.type}.jpg`}>
                    <h3 slot="header">
                      <app-translate key="opportunities.intro.title" />
                    </h3>
                    <p slot="body">
                      <app-translate key={`opportunities.test.${this.match.params.type}.text`} />
                    </p>
                  </content-graphic>
                </div>

                <div class="challenge">
                  <div class="container">
                    <div class="intro text-center">
                      <h2>
                        <app-translate key="opportunities.challenge.title" />
                      </h2>
                      <p>
                        <app-translate key="opportunities.challenge.showUs" />
                      </p>
                    </div>
                    <div class="row">
                      <div class="image-column col-sm-12 col-md-4">
                        <h3>{this.texts[this.match.params.type].firstSkill.name}</h3>
                        <app-img class="img-fluid d-none d-md-inline" src={this.texts[this.match.params.type].firstSkill.img} alt="" />
                      </div>
                      <div class="image-column col-sm-12 col-md-4">
                        <h3>{this.texts[this.match.params.type].secondSkill.name}</h3>
                        <app-img class="img-fluid d-none d-md-inline" src={this.texts[this.match.params.type].secondSkill.img} alt="" />
                      </div>
                      <div class="image-column col-sm-12 col-md-4">
                        <h3>{this.texts[this.match.params.type].thirdSkill.name}</h3>
                        <app-img class="img-fluid d-none d-md-inline" src={this.texts[this.match.params.type].thirdSkill.img} alt="" />
                        <app-img class="img-fluid d-xs-inline d-md-none" src={this.texts[this.match.params.type].mobile.img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="container">
                  <content-graphic img-url="/assets/graphic-opportunities-ionic.jpg" reverse={true}>
                    <h3 slot="header">
                      <app-translate key="opportunities.reputation.title" />
                    </h3>
                    <p slot="body">
                      <app-translate key="opportunities.reputation.text" />
                    </p>
                  </content-graphic>

                  <content-graphic img-url="/assets/graphic-opportunities-sword.png">
                    <h3 slot="header">
                      <app-translate key="opportunities.prepared.title" />
                    </h3>
                    <p slot="body">
                      <app-translate key="opportunities.prepared.body" />
                    </p>
                  </content-graphic>
                </div>
              </section>,

              /* section - apply */
              <section id="apply" class="apply">
                {!this.formSubmitted ? (
                  <div class="container">
                    {!this.canRequestInterview ? (
                      <form class="apply-1" onSubmit={this.handleSliders.bind(this)}>
                        <h2>
                          <app-translate key="opportunities.skills.title" />
                        </h2>
                        <p>
                          <app-translate key="opportunities.skills.text" />
                        </p>

                        <div class="slider-labels">
                          <p>
                            <app-translate key="opportunities.skills.noob" />
                          </p>
                          <p>
                            <app-translate key="opportunities.skills.expert" />
                          </p>
                        </div>

                        <app-slider name={this.texts[this.match.params.type].sliders.first.name} label={this.texts[this.match.params.type].sliders.first.label} />
                        <app-slider name={this.texts[this.match.params.type].sliders.second.name} label={this.texts[this.match.params.type].sliders.second.label} />
                        <app-slider name={this.texts[this.match.params.type].sliders.third.name} label={this.texts[this.match.params.type].sliders.third.label} />
                        <app-slider name={this.texts[this.match.params.type].sliders.fourth.name} label={this.texts[this.match.params.type].sliders.fourth.label} />
                        <app-slider name={this.texts[this.match.params.type].sliders.fifth.name} label={this.texts[this.match.params.type].sliders.fifth.label} />

                        {!this.interviewButtonDisabled ? (
                          <p>
                            <app-translate key="opportunities.form.allset" />
                          </p>
                        ) : (
                          <p>
                            <app-translate key="opportunities.form.almost" />
                          </p>
                        )}

                        <button class="btn btn-primary" type="submit" disabled={this.interviewButtonDisabled}>
                          <app-translate key="opportunities.form.request" />
                        </button>
                      </form>
                    ) : (
                      <form class="apply-2" id="myLittleAnchor" onSubmit={this.handleSubmit.bind(this)}>
                        <p>
                          Want to know exactly what you're getting yourself into? Check out our
                          <a class="doc-link" target="_blank" href={this.texts[this.match.params.type].googleDoc}>
                            Google Document
                          </a>
                          to see the ins and outs of what this epic adventure will include!
                        </p>
                        <h3>
                          <app-translate key="opportunities.form.submitTitle" />
                        </h3>

                        <div class="form-group">
                          <label>
                            <app-translate key="opportunities.form.resume" />
                          </label>
                          <input
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

                        <app-input label={translate('contact.form.fullName')} name="name" type="text" required={true} />
                        <p class="error">
                          <span style={!this.nameError ? { display: 'none' } : this.errorIconStyles}>
                            <i class="fa fa-exclamation-circle" aria-hidden="true" />
                          </span>
                          {this.nameError}
                        </p>
                        <app-input label={translate('contact.form.email')} name="email" type="email" required={true} />
                        <p class="error">
                          <span style={!this.emailError ? { display: 'none' } : this.errorIconStyles}>
                            <i class="fa fa-exclamation-circle" aria-hidden="true" />
                          </span>
                          {this.emailError}
                        </p>
                        <app-input label={translate('contact.form.phone')} name="phone" type="number" required={true} />
                        <p class="error">
                          <span style={!this.phoneError ? { display: 'none' } : this.errorIconStyles}>
                            <i class="fa fa-exclamation-circle" aria-hidden="true" />
                          </span>
                          {this.phoneError}
                        </p>
                        <app-input label={translate('contact.form.github')} name="github" type="text" required={true} />
                        <p class="error">
                          <span style={!this.githubError ? { display: 'none' } : this.errorIconStyles}>
                            <i class="fa fa-exclamation-circle" aria-hidden="true" />
                          </span>
                          {this.githubError}
                        </p>

                        <h3>
                          <app-translate key="opportunities.form.unique.title" />
                        </h3>

                        <div class="form-group input-textarea">
                          <label>
                            <app-translate key="opportunities.form.unique.text" />
                          </label>
                          <textarea class="form-control" name="message" maxLength={150} required={true} onChange={this.validateField.bind(this)} />
                        </div>
                        <p class="error">
                          <span style={!this.messageError ? { display: 'none' } : this.errorIconStyles}>
                            <i class="fa fa-exclamation-circle" aria-hidden="true" />
                          </span>
                          {this.messageError}
                        </p>

                        <button class="btn btn-primary" type="submit" disabled={this.submitButtonDisabled}>
                          <app-translate key="opportunities.form.submit" />
                        </button>
                      </form>
                    )}
                  </div>
                ) : (
                  <div class="container apply-3">
                    <h2>
                      <app-translate key="opportunities.form.submitted" />
                    </h2>

                    <content-graphic img-url="/assets/graphic-opportunities-robot.png">
                      <h3 slot="header">
                        <app-translate key="opportunities.form.thanks.title" />
                      </h3>
                      <p slot="body">
                        <app-translate key="opportunities.form.thanks.text" />
                      </p>
                    </content-graphic>
                  </div>
                )}
              </section>,
              <app-footer />,
            ]
          : null}
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
      interactive: parseFloat(''),
      ux: parseFloat(''),
      presentation: parseFloat(''),

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

    this.formData = new FormData();
  }
}
