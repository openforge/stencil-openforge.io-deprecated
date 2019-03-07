import { Component, Prop } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';

@Component({
  tag: 'app-blog-content',
  styleUrl: 'app-blog-content.scss',
})
export class AppBlogContent {
  @Prop() blogPost: BlogPost;

  componentDidLoad() {
    console.log('blog content', this.blogPost);
  }

  render() {
    return (
      <div>
        <h1>{this.blogPost.title}</h1>
        <div>{this.blogPost.summary}</div>
        <div>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</div>
        <div>{this.blogPost.author.email}</div>
      </div>
    );
  }
}
