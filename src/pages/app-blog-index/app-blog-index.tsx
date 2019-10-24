import { Component, State, h, Build } from '@stencil/core';
import { BLOG_DATA } from '../app-blog-post/prerender-blog-data';
import * as Fetch from '../../shared/fetch-handler';

@Component({
  tag: 'app-blog-index',
  styleUrl: 'app-blog-index.scss',
})
export class AppBlogIndex {
  @State() blogData = [];

  componentWillLoad() {
    if (!Build.isBrowser) {
      this.blogData = BLOG_DATA.data;
    } else {
      Fetch.fetchBlogPosts().then(resp => {
        this.blogData = resp.data;
      });
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
