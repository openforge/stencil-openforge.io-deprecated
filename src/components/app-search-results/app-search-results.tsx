import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';
import { BlogMeta } from '../../model/blog-meta.model';
import * as Fetch from '../../shared/fetch-handler';

@Component({
  tag: 'app-search-results',
  styleUrl: 'app-search-results.scss',
})
export class AppSearchResults {
  // Use searchQuery to keep track of whether or not search is being used
  @State() searchQuery: string = '';
  @State() allBlogPosts: BlogPost[] = [];
  @State() searchPostsData: BlogPost[] = [];
  @State() searchNumberOfPages: number = 0;
  @State() searchCurrentPage: number = 1;
  @State() searchMeta: BlogMeta;
  @State() searchIsError: boolean = false;
  @State() searchIsLoading: boolean = false;

  @Event() close: EventEmitter;

  pageSize = 3;
  increment = 3;

  handleSearch(query) {
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

  getSearchPosts(page) {
    this.searchIsLoading = true;
    Fetch.fetchSearchPosts(this.searchQuery, page, this.pageSize).then(resp => {
      if (resp.data) {
        this.searchPostsData = resp.data;
        this.searchMeta = resp.meta;

        this.searchNumberOfPages = Math.ceil(this.searchPostsData.length / this.pageSize);
        this.searchCurrentPage = page;
      } else {
        this.searchIsError = true;
      }
    });
    this.searchIsLoading = false;
  }

  loadMore() {
    this.pageSize += this.increment;
    this.getSearchPosts(1);
  }

  handleClose(pageChanged) {
    (document.querySelector('#blog-search') as HTMLInputElement).value = '';
    this.handleSearch('');
    this.pageSize = 3;
    this.close.emit({ pageChanged });
  }

  render() {
    return (
      <div class="search-results">
        <div class="row header">
          <div class="col-12">
            <div class="blog-search-group">
              <span class="blog-search-icon">
                <span class="fa fa-search" />
              </span>
              <input id="blog-search" type="search" class="blog-search-input" placeholder="Search" onKeyUp={e => this.handleSearch(e.target['value'])} />
              <span class="blog-close-icon" onClick={() => this.handleClose(false)}>
                <span class="far fa-times-circle" />
              </span>
            </div>
          </div>
        </div>
        <div class="bkg" />
        <div class="divider" />
        {this.searchPostsData.map(e => {
          const url = `/blog/${e.slug}`;
          return (
            <div class="row result">
              <div class="col-12">
                <h1>
                  <stencil-route-link onClick={() => this.handleClose(true)} url={url}>
                    {e.title}
                  </stencil-route-link>
                </h1>
                <p>{e.summary}</p>
                <div class="categories">
                  {e.categories.map(c => {
                    return <div>{c.name}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
        {this.searchMeta && this.searchPostsData && this.searchMeta.count > this.searchPostsData.length ? (
          <div class="load-more" onClick={() => this.loadMore()}>
            Load More
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
