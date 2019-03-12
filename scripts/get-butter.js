const fs = require('fs');

const request = require('sync-request');
const res = request('GET', 
    'https://api.buttercms.com/v2/posts/?page=1&page_size=1000000&auth_token=fca1bc914c05371263f98c9d3480eaa215fd63d6', 
    {}
);

const dataString = 'export const BLOG_DATA = ' + JSON.stringify(JSON.parse(res.body.toString()), null, "\t");

fs.writeFileSync('src/pages/app-blog-post/prerender-blog-data.ts', dataString);