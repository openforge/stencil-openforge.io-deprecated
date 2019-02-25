import { Component, Prop, State } from '@stencil/core';

declare var fbq;
declare var butter;

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.scss',
})
export class AppBlog {
  @Prop({ context: 'isServer' })
  private isServer: boolean;
  @State() blogData = [];
  @State() blogMeta;

  componentWillLoad() {
    butter.post
      .list({ page: 1, page_size: 10 })
      .then(resp => {
        this.blogData = [...resp.data.data];
        this.blogMeta = resp.data.meta;

        console.log(this.blogData);
        console.log(this.blogMeta);
      })
      .catch(resp => {
        console.log(resp);
      });
  }

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }
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
