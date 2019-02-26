import { Component, Prop, State } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';

declare var butter;

@Component({
  tag: 'app-blog-post',
  styleUrl: 'app-blog-post.scss',
})
export class AppBlogPost {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() blogPost;
  @State() postNotFound = false;

  componentWillLoad() {
    butter.post
      .retrieve(this.match.params.slug)
      .then(resp => {
        this.blogPost = resp.data.data;
        console.log(resp.data);
      })
      .catch(() => {
        this.postNotFound = true;
      });
  }

  render() {
    let post = <div>Loading</div>;
    if (this.postNotFound) {
      post = <div>This post could not be found</div>;
    } else if (this.blogPost) {
      post = (
        <div>
          <div>{this.blogPost.title}</div>
          <div>{this.blogPost.summary}</div>
          <div>{this.blogPost.author.first_name + this.blogPost.author.last_name}</div>
          <div>{this.blogPost.author.email}</div>
          <div innerHTML={this.blogPost.body} />
        </div>
      );
    }
    return (
      <div class="blog-post">
        <stencil-route-link url={'/blog'}>
          <button type="button" class="btn btn-primary">
            Back to all blog posts
          </button>
        </stencil-route-link>
        {post}
      </div>
    );
  }
}
