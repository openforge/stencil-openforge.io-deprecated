import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-blog-posts',
  styleUrl: 'app-blog-posts.scss',
})
export class AppBlogPosts {
  @Prop() blogData: any[];

  componentDidLoad() {
    console.log('blog data', this.blogData);
  }

  render() {
    return this.blogData.map(post => {
      <div>
        <h1>test</h1>
        <div>{post.title}</div>
        <div>{post.summary}</div>
        <div>{post.author.first_name + post.author.last_name}</div>
        <div>{post.author.email}</div>
        <div>{post.body}</div>
      </div>;
    });
  }
}
