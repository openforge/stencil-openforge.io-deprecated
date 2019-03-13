import { Component, Prop } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';

@Component({
  tag: 'app-blog-featured',
  styleUrl: 'app-blog-featured.scss',
})
export class AppBlogFeatured {
  @Prop() blogPost: BlogPost;

  componentDidLoad() {
    console.log('blog data', this.blogPost);
  }

  render() {
    const publishDate = new Date(this.blogPost.published);
    return (
      <div class="blog-featured">
        <div class="container">
          <div class="row">
            <div class="blog-featured-image-wrapper col-md-6 order-md-2">
              <div class="blog-featured-image">
                <img src={this.blogPost.featured_image} />
              </div>
            </div>
            <div class="blog-info col-md-6 order-md-1">
              <h4>Featured Post</h4>
              <h1>{this.blogPost.title}</h1>

              <div>{this.blogPost.summary}</div>
              <div>{publishDate.toLocaleDateString()}</div>
              <div class="blog-featured-author">
                <img class="profile-image" src={this.blogPost.author.profile_image} />
                <div>
                  By &nbsp;
                  <stencil-route-link url={`/about/${this.blogPost.author.slug}`}>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</stencil-route-link>
                </div>
              </div>
              <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
                <button>Read More</button>
              </stencil-route-link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
