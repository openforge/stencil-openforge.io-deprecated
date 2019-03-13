import { Component, Prop } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';

@Component({
  tag: 'app-blog-content',
  styleUrl: 'app-blog-content.scss',
})
export class AppBlogContent {
  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop() blogPost: BlogPost;

  componentDidLoad() {
    console.log('blog content', this.blogPost);

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

  render() {
    const publishDate = new Date(this.blogPost.published);
    const contactIconsTop = (
      <div class="contact-icons-top">
        <span class="fa fa-check contact-icon" />
        <span class="fa fa-check contact-icon" />
        <span class="fa fa-check contact-icon" />
      </div>
    );
    const contactIconsSide = (
      <div class="contact-icons-side">
        <span class="fa fa-check contact-icon" />
        <span class="fa fa-check contact-icon" />
        <span class="fa fa-check contact-icon" />
      </div>
    );

    return (
      <div class="blog-content">
        <div class="blog-content-header">
          <h1>{this.blogPost.title}</h1>
          <div>{this.blogPost.summary}</div>
          <div class="blog-content-date-author row">
            <div class="blog-content-date col-md-6">{publishDate.toLocaleDateString()}</div>
            <div class="blog-content-author col-md-6">
              <img class="profile-image " src={this.blogPost.author.profile_image} />
              <div>
                By &nbsp;
                <stencil-route-link url={`/about/${this.blogPost.author.slug}`}>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</stencil-route-link>
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
      </div>
    );
  }
}
