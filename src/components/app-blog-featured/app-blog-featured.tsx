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
    return (
      <div>
        <h2>Featured Post</h2>
        <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
          <div>{this.blogPost.title}</div>
        </stencil-route-link>
        <div>{this.blogPost.summary}</div>
        <div>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</div>
        <div>{this.blogPost.author.email}</div>
      </div>
    );
  }
}
