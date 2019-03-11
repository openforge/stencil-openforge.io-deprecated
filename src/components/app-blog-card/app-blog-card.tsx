import { Component, Prop } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';
import { formatDate } from '../../shared/date-format';

@Component({
  tag: 'app-blog-card',
  styleUrl: 'app-blog-card.scss',
})
export class AppBlogCard {
  @Prop() blogPost: BlogPost;

  componentDidLoad() {
    console.log('blog data', this.blogPost);
  }

  render() {
    const publishDate = new Date(this.blogPost.published);
    return (
      <div class="blog-card">
        <div class="row">
          <div class="col-md-4">
            <img class="blog-card-image" src={this.blogPost.featured_image} />
          </div>
          <div class="blog-card-content col-md-8">
            <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
              <h3 class="blog-card-title">{this.blogPost.title}</h3>
            </stencil-route-link>
            <div>{this.blogPost.summary}</div>
            <div class="blog-card-author">
              <img class="profile-image" src={this.blogPost.author.profile_image} />
              <div>
                Published by &nbsp;
                <stencil-route-link url={`/about/${this.blogPost.author.slug}`}>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</stencil-route-link>
                &nbsp; on {formatDate(publishDate)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
