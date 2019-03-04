import { Component } from '@stencil/core';
import { BLOG_DATA } from './prerender-blog-data';

@Component({
  tag: 'app-blog-index',
  styleUrl: 'app-blog-index.scss',
})
export class AppBlogIndex {
  private blogLinks;

  componentWillLoad() {
    this.blogLinks = BLOG_DATA.data.data.map(e => {
      const url = `/blog/${e.slug}`;
      return (
        <div>
          <stencil-route-link url={url}>{e.seo_title}</stencil-route-link>
        </div>
      );
    });
  }

  componentDidLoad() {}

  render() {
    return <div class="pt-5">{this.blogLinks}</div>;
  }
}
