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
      .list({ page: 1, page_size: 10, exclude_body: true })
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
    let postData = <div>Loading</div>;
    if (this.blogData) {
      postData = (
        <div class="blog-container">
          {this.blogData.map(post => (
            <div class="card blog-card">
              <app-blog-card blogPost={post} />
            </div>
          ))}
        </div>
      );
    }
    return postData;
  }
}
