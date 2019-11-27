import { Component, h, State } from '@stencil/core';
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
  pageSize = 3;

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

        console.log(this.searchPostsData);
      } else {
        this.searchIsError = true;
      }
    });
    this.searchIsLoading = false;
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
              <span class="blog-close-icon">
                <span class="far fa-times-circle" />
              </span>
            </div>
          </div>
        </div>
        <div class="row results">
          <div class="col-12">Results</div>
        </div>
        <div class="bkg" />
      </div>
    );
  }
}
