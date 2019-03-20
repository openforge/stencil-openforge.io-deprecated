const fs = require('fs');
// require('typescript-require');

const request = require('sync-request');

const API_KEY_PATH = 'src/butter-api/butter-api-key.js';
let BUTTER_API_KEY;

if(process.env.BUTTER_API_KEY){
  // if this is a travis build, get the API Key from environment variable
  BUTTER_API_KEY = process.env.BUTTER_API_KEY;
  const newAPIString = `
      // Use an API Token from ButterCMS in order to access the blog
      export const BUTTER_API_KEY = '${BUTTER_API_KEY}';`
      fs.writeFileSync(API_KEY_PATH, blankAPIString);
} else {
  
  // else if this is a local build, get the key from the gitignored file

  const blankAPIString = `
      // Use an API Token from ButterCMS in order to access the blog
      export const BUTTER_API_KEY = '';`

  // if the /src/butter-api/butter-api-key.ts doesn't exist, write a blank file to disk to fix build errors
  if(!fs.existsSync(API_KEY_PATH)){
    fs.writeFileSync(API_KEY_PATH, blankAPIString);
    BUTTER_API_KEY = '';
  } else {
    const fileString = fs.readFileSync(API_KEY_PATH, 'utf-8');
    let keyLine = fileString.match(new RegExp("export const BUTTER_API_KEY \= '.+'"))
    if(!keyLine){
      fs.writeFileSync(API_KEY_PATH, blankAPIString);
      keyLine = ["export const BUTTER_API_KEY = ''"];
    }
    let keyString = keyLine[0].match(new RegExp("'.+'"));
    if(!keyString){
      fs.writeFileSync(API_KEY_PATH, blankAPIString);
      keyString = ['']
    }
  
    BUTTER_API_KEY = keyString[0].substring(1, keyString[0].length - 1);
  
  }  
}

if(BUTTER_API_KEY == '') {
  console.error('Butter API key is blank');
  throw new Error(`BUTTER_API_KEY is blank. Please add a ButterCMS API Key to src/butter-api/butter-api-key.js`);
}

const res = request('GET',
    `https://api.buttercms.com/v2/posts/?page=1&page_size=1000000&auth_token=${BUTTER_API_KEY}`,
    {}
);

if(res.statusCode >= 200 && res.statusCode < 300){

  const dataString = 'export const BLOG_DATA = ' + JSON.stringify(JSON.parse(res.body.toString()), null, "\t");
  fs.writeFileSync('src/pages/app-blog-post/prerender-blog-data.ts', dataString);

}