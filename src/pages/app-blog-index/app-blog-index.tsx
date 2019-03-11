import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-blog-index',
  styleUrl: 'app-blog-index.scss',
})
export class AppBlogIndex {
  @State() blogData = [];
  @Prop() butter: any;

  componentWillLoad() {
    this.butter.post
      .list({ page: 1, page_size: 100000, exclude_body: true })
      .then(resp => {
        this.blogData = resp.data.data;
      })
      .catch(resp => {
        console.error('Could not load blog data   ', resp);
      });
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
