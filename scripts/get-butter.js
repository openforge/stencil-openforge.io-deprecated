const fs = require('fs');
require('typescript-require');

const request = require('sync-request');
// const BUTTER_API_KEY = require('../src/butter-api/butter-api-key.ts');
const BUTTER_API_KEY = require('../src/butter-api/butter-api-key.ts').BUTTER_API_KEY;

console.log(BUTTER_API_KEY);

if(BUTTER_API_KEY == '') {
  console.error('Butter API key is blank');
  // throw new Error('BUTTER_API_KEY is blank');
}

const res = request('GET',
    `https://api.buttercms.com/v2/posts/?page=1&page_size=1000000&auth_token=${BUTTER_API_KEY}`,
    {}
);

const dataString = 'export const BLOG_DATA = ' + JSON.stringify(JSON.parse(res.body.toString()), null, "\t");

fs.writeFileSync('src/pages/app-blog-post/prerender-blog-data.ts', dataString);
