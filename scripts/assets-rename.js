var fs = require('fs');

function getHashCode() {
    return '_' + (+new Date).toString(36);
}

// Get all assets
var allAssets = fs.readdirSync('src/assets/icon');
// For each asset
allAssets.forEach(function (assetFile) {
    var hashCode = getHashCode();
    // Rename the file
    fs.renameSync('src/assets/icon/' + assetFile, 'src/assets/icon/' + assetFile + hashCode);

    // Get all src files from pages
    var allSrcFiles = fs.readdirSync('src/pages');
    // For each src file
    allSrcFiles.forEach(function (srcFile) {
        // Replace the old name for the new name
        var data = fs.readFileSync('src/pages' + srcFile, 'utf-8');
        var newValue = data.replace('src/assets/icon/' + assetFile, 'src/assets/icon/' + assetFile + hashCode);
        fs.writeFileSync('src/pages' + srcFile, newValue, 'utf-8');
    });

    // Get all src files from components
    var allSrcFiles = fs.readdirSync('src/components');
    // For each src file
    allSrcFiles.forEach(function (srcFile) {
        // Replace the old name for the new name
        var data = fs.readFileSync('src/components' + srcFile, 'utf-8');
        var newValue = data.replace('src/assets/icon/' + assetFile, 'src/assets/icon/' + assetFile + hashCode);
        fs.writeFileSync('src/components' + srcFile, newValue, 'utf-8');
    });
});
