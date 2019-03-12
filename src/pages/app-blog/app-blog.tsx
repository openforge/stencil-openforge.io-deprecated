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

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }
    const input = document.getElementById('blog-search');
    input.addEventListener('search', () => this.handleSearch(input.innerText));

    document.querySelector("meta[property='og:title']").setAttribute('content', "Mobile Apps: News, Technology, Strategies, and How-To's");
    document
      .querySelector("meta[property='og:description']")
      .setAttribute('content', "The latest on mobile app technologies, strategies, and how-to's. Learn more about updates from OpenForge and projects from our team.");
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/blog/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/blog-header.png');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Mobile apps, mobile app news, mobile applications, mobile app technology, mobile app strategies, mvp apps');
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

  handleSearch(query) {
    console.log(query);
    this.searchQuery = query;
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
    if (!this.searchQuery && this.blogFilter !== filterName) {
      this.blogFilter = filterName;
      this.getBlogPosts(1);
    }
  }

  handlePaging(event) {
    const filters = document.getElementById('blog-filters');
    filters.scrollIntoView(true);
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

  renderFeaturedPost(featuredPost: BlogPost, isLoading: boolean, isError: boolean) {
    if (isError) {
      return <div>Error loading featured post</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <app-blog-featured blogPost={featuredPost} />;
  }

  renderFilters(selectedFilter: string, isLoading: boolean, searchQuery: string) {
    return this.filters.map(filter => {
      let filterClass = selectedFilter === filter.slug ? 'blog-filter-item active' : 'blog-filter-item';
      let filterLinkClass = selectedFilter === filter.slug ? 'blog-filter-link active' : 'blog-filter-item';
      if (isLoading || searchQuery) {
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
      postData = <div class="blog-posts-message">Error loading posts</div>;
    } else if (isLoading) {
      postData = <div class="blog-posts-message">Loading...</div>;
    } else if (blogData.length > 0) {
      postData = blogData.map((post, i, arr) => {
        const cardClass = i !== arr.length - 1 ? 'blog-card-wrapper' : 'blog-card-wrapper-last';
        if (post === null) {
          return <div class={cardClass} />;
        }
        return (
          <div class={cardClass}>
            <app-blog-card blogPost={post} />
          </div>
        );
      });
    } else {
      if (searchString) {
        postData = <div class="blog-posts-message">No posts found for search {searchString}.</div>;
      } else if (filterString) {
        postData = <div class="blog-posts-message">No posts found for filter {filterString}.</div>;
      } else {
        postData = <div class="blog-posts-message">No posts found.</div>;
      }
    }
    return postData;
  }

  renderPagination(numberOfPages: number, currentPage: number, isLoading: boolean, isError: boolean) {
    let pagination = <div />;
    if (!isError && !isLoading && numberOfPages > 1) {
      const pageNumbers = [...Array(numberOfPages)].map((_, i) => {
        const pageItemClass = currentPage === i + 1 ? 'blog-page-item active' : 'blog-page-item';
        const pageLinkClass = currentPage === i + 1 ? 'blog-page-item active' : 'blog-page-item';
        return (
          <li class={pageItemClass}>
            <a id={`nav-to-page-${i + 1}`} onClick={e => this.handlePaging(e)} class={pageLinkClass}>
              {i + 1}
            </a>
          </li>
        );
      });
      pagination = (
        <div>
          <ul class="blog-page-list">{pageNumbers}</ul>
        </div>
      );
    }
    return pagination;
  }

  render() {
    const featuredPost = this.renderFeaturedPost(this.featuredPost, this.featuredIsLoading, this.featuredIsError);
    const filters = this.renderFilters(this.blogFilter, this.searchIsLoading || this.blogIsLoading, this.searchQuery);
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
        <div id="blog-filters" class="blog-filters">
          <div class="blog-filters-header">
            <div class="blog-filters-divider">
              <div class="line-break" />
              <div class="spacer" />
            </div>
            <div class="blog-filters-title">Categories</div>
            <div class="blog-filters-divider">
              <div class="line-break" />
              <div class="spacer" />
            </div>
          </div>
          <div class="blog-filters-nav">
            <ul class="blog-filters-list">{filters}</ul>
          </div>
        </div>

        <div class="blog-search">
          <div class="blog-search-group">
            <span class="blog-search-icon">
              <span class="fa fa-search" />
            </span>
            <input id="blog-search" type="search" class="blog-search-input" placeholder="Search the blog" onKeyUp={e => this.handleSearch(e.target['value'])} />
          </div>
        </div>
        <div class="blog-posts">
          {postData}
          <div class="blog-pagination">{pagination}</div>
        </div>

        <stencil-route-link url="/blog-index" />
        <app-footer />
      </div>
    );
  }
}
