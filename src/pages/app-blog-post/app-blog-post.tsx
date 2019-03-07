import { Component, Prop, State, Watch } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { BlogPost } from '../../model/blog-post.model';

@Component({
  tag: 'app-blog-post',
  styleUrl: 'app-blog-post.scss',
})
export class AppBlogPost {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop() butter: any;

  @State() blogPost: BlogPost;
  @State() blogPostIsError = false;
  @State() blogPostIsLoading = true;

  @State() otherPosts: BlogPost[];
  @State() nextPosts: BlogPost[];
  @State() nextPostsIsError = false;
  @State() nextPostsIsLoading = true;

  @Watch('match')
  watchHandler(newValue: any, oldValue: any) {
    if (newValue.params.slug !== oldValue.params.slug) {
      this.getPostContent();
      this.filterNextPosts(newValue.params.slug);
    }
  }

  componentWillLoad() {
    this.getPostContent();
    // get a bunch of blog posts and pick 3 to display in read next
    // it's kind of a hack but Butter doesn't support getting random posts
    const pageSize = 12;
    const listOptions = { page: 1, page_size: pageSize, exclude_body: true };
    this.butter.post
      .list(listOptions)
      .then(resp => {
        this.otherPosts = resp.data.data;
        this.filterNextPosts(this.match.params.slug);
        this.nextPostsIsLoading = false;
      })
      .catch(resp => {
        this.nextPostsIsError = true;
        this.nextPostsIsLoading = false;
        console.log(resp);
      });
  }

  getPostContent() {
    this.blogPostIsLoading = true;
    this.butter.post
      .retrieve(this.match.params.slug)
      .then(resp => {
        this.blogPost = resp.data.data;
        this.blogPostIsLoading = false;
        // set scroll to top for when navigating to a new blog post
        if (!this.isServer) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }
        document.querySelector("meta[property='og:title']").setAttribute('content', this.blogPost.title);
      })
      .catch(() => {
        this.blogPostIsLoading = false;
        this.blogPostIsError = true;
      });

    // Change meta tags dynamically
    // document
    //   .querySelector("meta[property='og:description']")
    //   .setAttribute('content', 'Skip the technical jargon! This is a report written for business owners on what PWAs (Progressive Web Apps) are and how they can benefit your company.');
    // document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/resources/pwa-white-paper/');
    // document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/resources-header.jpg');
    // document.querySelector("meta[name='keywords']").setAttribute('content', 'Progressive Web App, PWA, White Paper');
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
      post = <div>Loading content</div>;
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
      postData = <div>Loading...</div>;
    } else if (blogData.length > 0) {
      postData = blogData.map(post => (
        <div class="card blog-card">
          <app-blog-card blogPost={post} />
        </div>
      ));
    } else if (blogData === []) {
      postData = <div>No posts found.</div>;
    }
    return postData;
  }

  render() {
    const post = this.renderPostContent(this.blogPost, this.blogPostIsLoading, this.blogPostIsError);
    const nextPosts = this.renderPosts(this.nextPosts, this.nextPostsIsLoading, this.nextPostsIsError);
    return (
      <div class="blog-post">
        <stencil-route-link url={'/blog'}>
          <button type="button" class="btn btn-primary">
            Back to all blog posts
          </button>
        </stencil-route-link>
        <div>{post}</div>
        <div>
          <h1>Read Next</h1>
          {nextPosts}
        </div>
      </div>
    );
  }
}
