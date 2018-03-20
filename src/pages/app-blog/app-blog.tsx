import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.css',
})
export class AppBlog {
  @Prop() match: MatchResults;

  render() {
    return (
      <div class="app-blog">
        <p>Welcome to the blog page!</p>
      </div>
    );
  }
}
