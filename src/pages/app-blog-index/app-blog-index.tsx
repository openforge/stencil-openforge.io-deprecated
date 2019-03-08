import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-blog-index',
  styleUrl: 'app-blog-index.scss',
})
export class AppBlogIndex {
  @State() blogData = [];
  @Prop() butter: any;
  @Prop({ context: 'isServer' })
  private isServer: boolean;

  componentWillLoad() {
    // const promise =
    this.butter.post
      .list({ page: 1, page_size: 100000, exclude_body: true })
      .then(resp => {
        this.blogData = resp.data.data;
      })
      .catch(resp => {
        console.error('Could not load blog data   ', resp);
      });

    if (this.isServer) {
      // If this is a pre-render, we can return the promise. This will force stencil to wait
      // until the data is loaded before rendering the page. We don't want to return the promise
      // in the browser though, this would cause the page to not load until the data comes back
      //  return promise;
    }
  }

  render() {
    return (
      <div class="mt-5 pt-5">
        {this.blogData.map(e => {
          const url = `/blog/${e.slug}`;
          return (
            <div>
              <stencil-route-link url={url}>{e.seo_title}</stencil-route-link>
            </div>
          );
        })}
      </div>
    );
  }
}
