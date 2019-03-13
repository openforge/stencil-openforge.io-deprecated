import { Component, Prop } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';
import { formatDate } from '../../shared/date-format';

@Component({
  tag: 'app-blog-content',
  styleUrl: 'app-blog-content.scss',
})
export class AppBlogContent {
  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop() blogPost: BlogPost;

  componentDidLoad() {
    console.log('blog content', this.blogPost);
    console.log(this.blogPost.author);

    if (!this.isServer) {
      this.handleIcons();
      window.addEventListener('resize', this.handleIcons);
    }
  }

  handleIcons() {
    const topIcons = document.getElementById('blog-content-contact-icons-top');
    const sideIcons = document.getElementById('blog-content-contact-icons-side');
    if (window.innerWidth < 768) {
      topIcons.style.setProperty('display', 'flex');
      sideIcons.style.setProperty('display', 'none');
    } else {
      topIcons.style.setProperty('display', 'none');
      sideIcons.style.setProperty('display', 'flex');
    }
  }

  shareOnTwitter() {
    const twitterWindow = window.open(`https://twitter.com/share?url=${document.URL}`, 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
  }

  shareOnFacebook() {
    const facebookWindow = window.open(`https://www.facebook.com/sharer/sharer.php?u=${document.URL}`, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
  }

  shareOnLinkedin() {
    const linkedinWindow = window.open(`http://www.linkedin.com/shareArticle?mini=true&url=${document.URL}`, 'sharer', 'toolbar=0, status=0, width=600, height=350');
    if (linkedinWindow.focus) {
      linkedinWindow.focus();
    }
  }

  render() {
    const publishDate = new Date(this.blogPost.published);
    const contactIconsTop = (
      <div class="contact-icons-top">
        <app-img onClick={this.shareOnTwitter.bind(this)} class="contact-icon" src="/assets/blog/twitter.png" alt="share on twitter" />
        <app-img onClick={this.shareOnFacebook.bind(this)} class="contact-icon" src="/assets/blog/facebook.png" alt="share on facebook" />
        <app-img onClick={this.shareOnLinkedin.bind(this)} class="contact-icon" src="/assets/blog/linkedin.png" alt="share on linkedin" />
      </div>
    );
    const contactIconsSide = (
      <div class="contact-icons-side">
        <app-img onClick={this.shareOnTwitter.bind(this)} class="contact-icon" src="/assets/blog/twitter.png" alt="share on twitter" />
        <app-img onClick={this.shareOnFacebook.bind(this)} class="contact-icon" src="/assets/blog/facebook.png" alt="share on facebook" />
        <app-img onClick={this.shareOnLinkedin.bind(this)} class="contact-icon" src="/assets/blog/linkedin.png" alt="share on linkedin" />
      </div>
    );

    return (
      <div class="blog-content">
        <div class="blog-content-header">
          <h1>{this.blogPost.title}</h1>
          <div>{this.blogPost.summary}</div>
          <div class="blog-content-date-author row">
            <div class="blog-content-date col-md-6">{formatDate(publishDate)}</div>
            <div class="blog-content-author col-md-6">
              <img class="profile-image " src={this.blogPost.author.profile_image} />
              <div>
                By &nbsp;
                <stencil-route-link url={`/about/sam-hudgens`}>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</stencil-route-link>
              </div>
            </div>
          </div>
          <div id="blog-content-contact-icons-top">{contactIconsTop}</div>
          <img class="blog-content-image" src={this.blogPost.featured_image} />
        </div>
        <div class="blog-content-post">
          <div class="row">
            <div class="col-md-2">
              <div id="blog-content-contact-icons-side">{contactIconsSide}</div>
            </div>
            <div class="col-md-8">
              <div innerHTML={this.blogPost.body} class="blog-content-body" />
            </div>
            <div class="col-md-2" />
          </div>
        </div>

        <div class="blog-content-author">
          <hr />
          <div class="row">
            <div class="col-md-2 offset-md-2 blog-content-author-image">
              <h5>About the Author</h5>
              <img src={this.blogPost.author.profile_image} />
            </div>
            <div class="col-md-6 blog-content-author-text">
              <h5>About the Author</h5>
              <h2>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</h2>
              <p>{this.blogPost.author.bio}</p>
            </div>
            <div class="col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}
