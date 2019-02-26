import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-blog-card',
  styleUrl: 'app-blog-card.scss',
})
export class AppBlogCard {
  @Prop() blogPost: any;

  componentDidLoad() {
    console.log('blog data', this.blogPost);
  }

  render() {
    return (
      <div>
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
