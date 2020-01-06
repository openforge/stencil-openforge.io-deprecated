import { Component, Prop, State, Watch, h, Build } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { BlogPost } from '../../model/blog-post.model';
import { BLOG_DATA } from './prerender-blog-data';
import * as Fetch from '../../shared/fetch-handler';

@Component({
  tag: 'app-blog-post',
  styleUrl: 'app-blog-post.scss',
})
export class AppBlogPost {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @Prop() preRenderBlogPost: BlogPost;

  @State() blogPost: BlogPost;
  @State() blogPostIsError = false;
  @State() blogPostIsLoading = true;

  @State() otherPosts: BlogPost[];
  @State() nextPosts: BlogPost[];
  @State() nextPostsIsError = false;
  @State() nextPostsIsLoading = true;

  @State() nextPostsHelper: any;

  @Watch('match')
  watchHandler(newValue: any, oldValue: any) {
    if (!newValue || !oldValue) {
      return;
    }
    if (newValue.params.slug !== oldValue.params.slug) {
      this.getPostContent();
      this.filterNextPosts(newValue.params.slug);
    }
  }

  componentDidLoad() {
    if (!Build.isBrowser) {
      this.setMetaTags();
    }
  }

  componentWillLoad() {
    this.getPostContent();

    // get a bunch of blog posts and pick 3 to display in read next
    // it's kind of a hack but Butter doesn't support getting random posts
    const pageSize = 12;
    if (Build.isBrowser) {
      this.nextPostsIsLoading = true;
      Fetch.fetchPostContent(1, pageSize, true).then(resp => {
        if (resp.data) {
          this.otherPosts = resp.data;
          this.filterNextPosts(this.match.params.slug);
          this.nextPostsHelper = this.renderPosts(this.nextPosts, this.nextPostsIsLoading, this.nextPostsIsError);
        } else {
          this.nextPostsIsError = true;
          this.nextPostsHelper = this.renderPosts(this.nextPosts, this.nextPostsIsLoading, this.nextPostsIsError);
        }
      });
      this.nextPostsIsLoading = false;
    }
  }

  getPostContent() {
    if (!Build.isBrowser) {
      this.blogPost = BLOG_DATA.data.find(post => {
        return post.slug === this.match.params.slug;
      });
      this.setMetaTags();
    } else {
      this.blogPostIsLoading = true;
      Fetch.fetchPostWithSlug(this.match.params.slug).then(resp => {
        if (resp) {
          this.blogPost = resp.data;
          // set scroll to top for when navigating to a new blog post
          window.scrollTo(0, 0);
          this.setMetaTags();
        } else {
          this.blogPostIsError = true;
        }
      });
      this.blogPostIsLoading = false;
    }
  }

  setMetaTags() {
    let tagList = '';
    this.blogPost.tags.forEach((tag, i) => {
      if (i !== 0) {
        tagList = `${tagList} + , `;
      }
      tagList = tag.name;
    });

    document.querySelector("meta[property='og:title']").setAttribute('content', this.blogPost.title);
    document.querySelector("meta[property='og:description']").setAttribute('content', this.blogPost.meta_description);
    document.querySelector("meta[property='og:url']").setAttribute('content', `https://openforge.io/blog/${this.blogPost.slug}`);
    document.querySelector("meta[property='og:image']").setAttribute('content', this.blogPost.featured_image);
    document.querySelector("meta[name='keywords']").setAttribute('content', tagList);
    document.querySelector("meta[property='og:type']").setAttribute('content', 'article');
  }

  filterNextPosts(slug: string) {
    // Filter out the post being displayed
    const otherPosts = this.otherPosts.filter(post => {
      return post.slug !== slug;
    });
    // Shuffle the array
    this.shuffleArray(otherPosts);
    // Pick the first three in the randomized array
    if (otherPosts.length > 2) {
      this.nextPosts = otherPosts.slice(0, 3);
    } else {
      this.nextPosts = otherPosts;
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i = i - 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  renderPostContent(blogPost: BlogPost, isLoading: boolean, isError: boolean) {
    let post;
    if (isError) {
      post = <div>This post could not be found</div>;
    } else if (isLoading) {
      post = (
        <div class="loading">
          <i class="fa fa-spinner fa-spin" />
        </div>
      );
    } else if (blogPost) {
      post = <app-blog-content blogPost={blogPost} />;
    }
    return post;
  }

  renderPosts(blogData: BlogPost[], isLoading: boolean, isError: boolean) {
    let postData;
    if (isError) {
      postData = <div>Error loading posts</div>;
    } else if (isLoading) {
      postData = (
        <div class="loading">
          <i class="fa fa-spinner fa-spin" />
        </div>
      );
    } else if (blogData.length > 0) {
      postData = blogData.map(post => {
        const cardClass = 'blog-card-wrapper';
        if (post === null) {
          return <div class={cardClass} />;
        }
        return (
          <div class={cardClass}>
            <app-blog-card blogPost={post} />
          </div>
        );
      });
    } else if (blogData === []) {
      postData = <div>No posts found.</div>;
    }
    return postData;
  }

  render() {
    const post = this.renderPostContent(this.blogPost, this.blogPostIsLoading, this.blogPostIsError);
    return (
      <div class="blog-post-page">
        <div class="blog-post-content">
          <div class="top-buttons-container">
            <div class="back-link align-left">
              <stencil-route-link url={'/blog'}>
                <a>
                  <i class="fa fa-angle-left" aria-hidden="true" />
                  Back
                </a>
              </stencil-route-link>
            </div>
            <div class="d-none d-md-block d-lg-none clear">
              <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">
                <span>
                  Get the Newsletter &nbsp; <i class="fa fa-envelope" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>
          <div>{post}</div>
        </div>
        <div class="blog-next-posts-header">
          <div class="blog-next-posts-divider">
            <div class="line-break" />
            <div class="spacer" />
          </div>
          <div class="blog-next-posts-title">Read Next</div>
          <div class="blog-next-posts-divider">
            <div class="line-break" />
            <div class="spacer" />
          </div>
        </div>
        <div class="next-posts">{this.nextPostsHelper}</div>
        <div class="d-md-none back-link">
          <stencil-route-link url={'/blog'}>
            <a>
              <i class="fa fa-angle-left" aria-hidden="true" />
              Back to blog posts
            </a>
          </stencil-route-link>
        </div>
        <app-footer />
      </div>
    );
  }
}
