//const Butter = require();
const fs = require('fs');
const Butter = require('buttercms')

const butter = Butter('fca1bc914c05371263f98c9d3480eaa215fd63d6');

butter.post.list({ page: 1, page_size: 100000, exclude_body: true })
    .then(resp => {
        const dataString = 'export const BLOG_DATA = ' + JSON.stringify(resp, null, "\t");
        fs.writeFileSync('src/pages/app-blog-index/prerender-blog-data.ts', dataString);
    })
    .catch(resp => {
        console.error("Could not load blog data   ", resp);
    });


