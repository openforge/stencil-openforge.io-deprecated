import { Component, Prop, State } from '@stencil/core';
// import * as Butter from 'buttercms';

declare var fbq;

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.scss',
})
export class AppBlog {
  @Prop({ context: 'isServer' })
  private isServer: boolean;

  private butter;
  @State() blogData = [];
  @State() numberOfPages: number = 0;
  @State() currentPage: 1;
  @State() blogMeta;

  componentWillLoad() {
    //   this.butter = Butter('fca1bc914c05371263f98c9d3480eaa215fd63d6')
    this.getPosts(1);
  }

  getPosts(page: number, searchQuery?: string) {
    const pageSize = 2;
    if (!this.isServer) {
      if (searchQuery) {
        console.log(searchQuery);
        this.butter.post
          .search(searchQuery)
          .then(resp => {
            console.log(resp);
            this.updateBlogData(resp, page);
          })
          .catch(resp => {
            console.log(resp);
          });
      } else {
        this.butter.post
          .list({ page, page_size: pageSize, exclude_body: true })
          .then(resp => {
            this.updateBlogData(resp, page);
          })
          .catch(resp => {
            console.log(resp);
          });
      }
    }
  }

  updateBlogData(resp, page) {
    this.blogData = resp.data.data;
    this.blogMeta = resp.data.meta;
    this.numberOfPages = Math.ceil(resp.data.meta.count / 2);
    this.currentPage = page;
  }

  handleSearch(event) {
    this.getPosts(1, event.target.value);
  }

  handlePaging(event) {
    switch (event.target.id) {
      case 'nav-to-next':
        if (this.blogMeta.next_page) {
          this.getPosts(this.blogMeta.next_page);
        }
        break;
      case 'nav-to-previous':
        if (this.blogMeta.previous_page) {
          this.getPosts(this.blogMeta.previous_page);
        }
        break;
      default:
        const page = parseInt(event.target.id.substr(-1), 10);
        this.getPosts(page);
        break;
    }
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
      postData = this.blogData.map(post => (
        <div class="card blog-card">
          <app-blog-card blogPost={post} />
        </div>
      ));
    } else if (this.blogData === []) {
      postData = <div>No posts found</div>;
    }
    let pagination = <nav />;
    if (this.numberOfPages > 1) {
      const pageNumbers = [...Array(this.numberOfPages)].map((_, i) => {
        return (
          <li class="page-item">
            <a id={`nav-to-page-${i + 1}`} onClick={e => this.handlePaging(e)} class="page-link">
              {i + 1}
            </a>
          </li>
        );
      });
      pagination = (
        <nav>
          <ul class="pagination">
            <li class="page-item">
              <a id={`nav-to-previous`} onClick={e => this.handlePaging(e)} class="page-link">
                Previous
              </a>
            </li>
            {pageNumbers}
            <li class="page-item">
              <a id={`nav-to-next`} onClick={e => this.handlePaging(e)} class="page-link">
                Next
              </a>
            </li>
          </ul>
        </nav>
      );
    }

    return (
      <div class="blog-container">
        <div>
          <label>Search </label>
          <input type="text" onKeyUp={e => this.handleSearch(e)} />
        </div>
        {postData}
        {pagination}
      </div>
    );
  }
}
