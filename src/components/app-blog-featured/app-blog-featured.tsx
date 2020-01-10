import { Component, Prop, h } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';
import { formatDate } from '../../shared/date-format';

@Component({
  tag: 'app-blog-featured',
  styleUrl: 'app-blog-featured.scss',
})
export class AppBlogFeatured {
  @Prop() blogPost: BlogPost;

  componentDidLoad() {}

  render() {
    const publishDate = new Date(this.blogPost.published);
    return (
      <div class="blog-featured">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="featured-title">
                <div>
                  <h4>What's New In Our Blog</h4>
                </div>
              </div>
              <div class="featured-image">
                <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
                  <img src={this.blogPost.featured_image} alt={this.blogPost.title} />
                </stencil-route-link>
              </div>
              <div class="featured-post-title">
                <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
                  <h2 id="featured-blog-title">{this.blogPost.title}</h2>
                </stencil-route-link>
              </div>
              <div class="author">
                <img class="profile-image d-none d-md-block" src={this.blogPost.author.profile_image} alt={`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`} />
                <div>
                  By &nbsp;
                  <stencil-route-link url={`/about/${this.blogPost.author.slug}`}>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</stencil-route-link>
                  &nbsp; on {formatDate(publishDate)}
                </div>
              </div>
              <div class="summary">{this.blogPost.summary}</div>
              <stencil-route-link class="read-more" url={`/blog/${this.blogPost.slug}`}>
                Read More
              </stencil-route-link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
