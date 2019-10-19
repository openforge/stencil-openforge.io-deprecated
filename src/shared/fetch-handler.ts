import { BUTTER_API_KEY } from '../butter-api/butter-api-key';

const urlPosts = "https://api.buttercms.com/v2/posts/";
const auth_token = 'auth_token=' + BUTTER_API_KEY;

export async function fetchOneBlogPost() {
  return await fetch(urlPosts + '?' + auth_token)
    .then(res => res.json())
    .then(resp => {
      if (resp.data.length > 0) {
        return resp.data[0];
      }
      return null;
    })
    .catch(resp => {
      console.log(resp);
      return null;
    });
} 
