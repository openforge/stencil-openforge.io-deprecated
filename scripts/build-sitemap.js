var generateSitemap = require('sitemap-static');
var fs = require('fs');

var writer = fs.createWriteStream('./www/sitemap.xml');
 
var options = {
    findRoot: './www',
    ignoreFile: '',
    prefix: 'https://openforge.io/',
    pretty: false
};

generateSitemap(writer, options);