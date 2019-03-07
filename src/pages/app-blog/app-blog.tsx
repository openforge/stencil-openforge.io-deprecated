import { Component, Prop, State } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';
import { BlogMeta } from '../../model/blog-meta.model';
import { BlogCategory } from '../../model/blog-category.model';

declare var fbq;

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.scss',
})
export class AppBlog {
  @Prop({ context: 'isServer' })
  private isServer: boolean;
  @Prop() butter: any;

  @State() featuredPost: BlogPost = null;
  @State() featuredIsError: boolean = false;
  @State() featuredIsLoading: boolean = true;

  // To keep track of the filter state - if the user clears the search query, it will return to this
  @State() blogFilter: string = ''; // Filter cannot be used at the same time as search
  @State() blogPostsData: BlogPost[] = [];
  @State() blogNumberOfPages: number = 0;
  @State() blogCurrentPage: number = 1;
  @State() blogMeta: BlogMeta;
  @State() blogIsError: boolean = false;
  @State() blogIsLoading: boolean = true;

  // Use searchQuery to keep track of whether or not search is being used
  @State() searchQuery: string = '';
  @State() searchPostsData: BlogPost[] = [];
  @State() searchNumberOfPages: number = 0;
  @State() searchCurrentPage: number = 1;
  @State() searchMeta: BlogMeta;
  @State() searchIsError: boolean = false;
  @State() searchIsLoading: boolean = false;

  private filters: BlogCategory[] = [
    {
      name: 'All',
      slug: '',
    },
    {
      name: 'Announcements',
      slug: 'announcements',
    },
    {
      name: 'Development',
      slug: 'development',
    },
    {
      name: 'Design',
      slug: 'design',
    },
    {
      name: 'Business',
      slug: 'business',
    },
  ];

  componentWillLoad() {
    if (!this.isServer) {
      this.getFeaturedPost();
      this.getBlogPosts(1);
    }
  }

  getFeaturedPost() {
    this.featuredIsLoading = true;
    const listOptions = { page: 1, page_size: 1, exclude_body: true, tag_slug: 'featured' };
    this.butter.post
      .list(listOptions)
      .then(resp => {
        if (resp.data.data.length > 0) {
          this.featuredPost = resp.data.data[0];
          this.featuredIsLoading = false;
        }
      })
      .catch(resp => {
        this.featuredIsError = true;
        this.featuredIsLoading = false;
        console.log(resp);
      });
  }

  getSearchPosts(page) {
    this.searchIsLoading = true;
    const pageSize = 3;
    this.butter.post
      .search(this.searchQuery, { page, page_size: pageSize })
      .then(resp => {
        this.searchPostsData = resp.data.data;
        this.searchMeta = resp.data.meta;
        this.searchNumberOfPages = Math.ceil(resp.data.meta.count / pageSize);
        this.searchCurrentPage = page;
        this.searchIsLoading = false;
      })
      .catch(resp => {
        this.searchIsError = true;
        this.searchIsLoading = false;
        console.log(resp);
      });
  }

  getBlogPosts(page: number) {
    this.blogIsLoading = true;
    const pageSize = 3;
    const listOptions = { page, page_size: pageSize, exclude_body: true };
    if (this.blogFilter) {
      listOptions['category_slug'] = this.blogFilter;
    }
    this.butter.post
      .list(listOptions)
      .then(resp => {
        this.blogPostsData = resp.data.data;
        this.blogMeta = resp.data.meta;
        this.blogNumberOfPages = Math.ceil(resp.data.meta.count / pageSize);
        this.blogCurrentPage = page;
        this.blogIsLoading = false;
      })
      .catch(resp => {
        this.blogIsError = true;
        this.blogIsLoading = false;
        console.log(resp);
      });
  }

  handleSearch(event) {
    this.searchQuery = event.target.value;
    if (this.searchQuery) {
      this.getSearchPosts(1);
    } else {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchPostsData = [];
    this.searchMeta = null;
    this.searchNumberOfPages = 0;
    this.searchCurrentPage = 1;
  }

  handleFilter(filterName: string) {
    if (this.blogFilter !== filterName) {
      this.blogFilter = filterName;
      this.getBlogPosts(1);
    }
  }

  handlePaging(event) {
    let newPage;
    switch (event.target.id) {
      case 'nav-to-next':
        if (this.blogMeta.next_page) {
          newPage = this.blogMeta.next_page;
        }
        break;
      case 'nav-to-previous':
        if (this.blogMeta.previous_page) {
          newPage = this.blogMeta.previous_page;
        }
        break;
      default:
        newPage = parseInt(event.target.id.substr(-1), 10);
        break;
    }

    if (this.searchQuery) {
      this.getSearchPosts(newPage);
    } else {
      this.getBlogPosts(newPage);
    }
  }

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }
  }

  renderFeaturedPost(featuredPost: BlogPost, isLoading: boolean, isError: boolean) {
    if (isError) {
      return <div>Error loading featured post</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <app-blog-featured blogPost={featuredPost} />;
  }

  renderFilters(selectedFilter: string, isLoading: boolean) {
    return this.filters.map(filter => {
      let filterClass = selectedFilter === filter.slug ? 'nav-item active' : 'nav-item';
      let filterLinkClass = selectedFilter === filter.slug ? 'nav-link active' : 'nav-link';
      if (isLoading) {
        filterClass += ' disabled';
        filterLinkClass += ' disabled';
      }
      return (
        <li class={filterClass}>
          <a onClick={() => this.handleFilter(filter.slug)} class={filterLinkClass}>
            {filter.name}
          </a>
        </li>
      );
    });
  }

  renderPosts(blogData: BlogPost[], isLoading: boolean, isError: boolean, searchString: string, filterString: string) {
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
      if (searchString) {
        postData = <div>No posts found for search {searchString}.</div>;
      } else if (filterString) {
        postData = <div>No posts found for filter {filterString}.</div>;
      } else {
        postData = <div>No posts found.</div>;
      }
    }
    return postData;
  }

  renderPagination(numberOfPages: number, currentPage: number, isLoading: boolean, isError: boolean) {
    let pagination = <div />;
    if (!isError && numberOfPages > 1) {
      const pageNumbers = [...Array(numberOfPages)].map((_, i) => {
        let pageItemClass = currentPage === i + 1 ? 'page-item active' : 'page-item';
        let pageLinkClass = currentPage === i + 1 ? 'page-link active' : 'page-link';
        if (isLoading) {
          pageItemClass += ' disabled';
          pageLinkClass += ' disabled';
        }
        return (
          <li class={pageItemClass}>
            <a id={`nav-to-page-${i + 1}`} onClick={e => this.handlePaging(e)} class={pageLinkClass}>
              {i + 1}
            </a>
          </li>
        );
      });
      pagination = (
        <nav>
          <ul class="pagination">{pageNumbers}</ul>
        </nav>
      );
    }
    return pagination;
  }

  render() {
    const featuredPost = this.renderFeaturedPost(this.featuredPost, this.featuredIsLoading, this.featuredIsError);
    const filters = this.renderFilters(this.blogFilter, this.searchIsLoading || this.blogIsLoading);
    let postData = <div />;
    let pagination = <div />;
    if (this.searchQuery) {
      pagination = this.renderPagination(this.searchNumberOfPages, this.searchCurrentPage, this.searchIsLoading, this.searchIsError);
      postData = this.renderPosts(this.searchPostsData, this.searchIsLoading, this.searchIsError, this.searchQuery, '');
    } else {
      pagination = this.renderPagination(this.blogNumberOfPages, this.blogCurrentPage, this.blogIsLoading, this.blogIsError);
      postData = this.renderPosts(this.blogPostsData, this.blogIsLoading, this.blogIsError, '', this.blogFilter);
    }

    return (
      <div class="blog-container">
        <div class="featured-post">{featuredPost}</div>
        <div class="blog filters">
          <nav>
            <ul class="nav">{filters}</ul>
          </nav>
        </div>
        <div class="blog-posts">{postData}</div>
        <div class="blog-pagination">{pagination}</div>
        <div class="blog-search">
          <div>
            <label>Search </label>
            <input type="text" onKeyUp={e => this.handleSearch(e)} />
          </div>
        </div>
        <stencil-route-link url="/blog-index" />
      </div>
    );
  }
}
