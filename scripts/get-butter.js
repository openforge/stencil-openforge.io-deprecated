const fs = require('fs');

const request = require('sync-request');
const res = request('GET', 
    'https://api.buttercms.com/v2/posts/?page=1&page_size=1000000&auth_token=150aed013009daf59b81dd9ad8d7aac75777ee79', 
    {}
);

const dataString = 'export const BLOG_DATA = ' + JSON.stringify(JSON.parse(res.body.toString()), null, "\t");

fs.writeFileSync('src/pages/app-blog-post/prerender-blog-data.ts', dataString);