import { BUTTER_API_KEY } from '../butter-api/butter-api-key';

const urlPosts = 'https://api.buttercms.com/v2/posts/';
const urlSearch = 'https://api.buttercms.com/v2/search/';
const authToken = `auth_token=${BUTTER_API_KEY}`;

export async function fetchOneBlogPost(postNum: number = 0) {
  return await fetch(`${urlPosts}'?'${authToken}`)
    .then(res => res.json())
    .then(resp => {
      if (resp.data.length > postNum) {
        return resp.data[postNum];
      }
      return null;
    })
    .catch(resp => {
      console.log(resp);
      return null;
    });
}

export async function fetchBlogPosts() {
  return await fetch(`${urlPosts}?${authToken}`)
    .then(res => res.json())
    .then(resp => {
      return resp;
    })
    .catch(resp => {
      console.log(resp);
      return null;
    });
}

export async function fetchFilteredPosts(slug: string, page: number, pageSize: number, excludeBody: boolean) {
  const slugKey = encodeURIComponent(slug);
  const query = `?page=${page}&page_size=${pageSize}&exclude_body=${excludeBody}&category_slug=${slugKey}&`;
  console.log(urlPosts + query + authToken);
  return await fetch(urlPosts + query + authToken)
    .then(res => res.json())
    .then(resp => resp.data)
    .catch(resp => {
      console.log(resp);
      return null;
    });
}

export async function fetchSearchPosts(search: string, page: number, pageSize: number) {
  const searchKey = encodeURIComponent(search);
  console.log(searchKey);
  const query = `?page=${page}&page_size=${pageSize}&query=${searchKey}&`;
  return await fetch(urlSearch + query + authToken)
    .then(res => res.json())
    .then(resp => resp)
    .catch(resp => {
      console.log(resp);
      return null;
    });
}

export async function fetchPostContent(page: number, pageSize: number, excludeBody: boolean) {
  const query = `?page=${page}&page_size=${pageSize}&exclude_body=${excludeBody}&`;
  return await fetch(urlPosts + query + authToken)
    .then(res => res.json())
    .then(resp => resp)
    .catch(resp => {
      console.log(resp);
      return null;
    });
}

export async function fetchPostWithSlug(slug: string) {
  return await fetch(`${urlPosts}${slug}/?${authToken}`)
    .then(res => res.json())
    .then(resp => resp)
    .catch(resp => {
      console.log(resp);
      return null;
    });
}
