var exec = require('child_process').exec;

var branch = process.env.TRAVIS_BRANCH,
    pr = process.env.TRAVIS_PULL_REQUEST,
    pr_branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;

var token = process.env.FIREBASE_TOKEN

function deployToFirebase(project) {
    console.log('Deploying to firebase project openforge-'+project);
    if(project === 'dev'){
        exec('firebase use default', function() {
            exec('firebase functions:config:set travis.rebuild_branch="develop"', function() {
                exec('firebase deploy --token ' + token);
            });
        });
    } else if(project === 'qa') {
        exec('firebase use qa', function() {
            exec('firebase functions:config:set travis.rebuild_branch="qa"', function() {
                exec('firebase deploy --token ' + token);
            });
        });
    } else if(project === 'staging') {
        exec('firebase use staging', function() {
            exec('firebase functions:config:set travis.rebuild_branch="staging"', function() {
                exec('firebase deploy --token ' + token);
            });
        });
    } else if(project === 'prod') {
        exec('firebase use production', function() {
            exec('firebase functions:config:set travis.rebuild_branch="master"', function() {
                exec('firebase deploy --token ' + token);
            });
        });
    }
}

if (
    (branch == 'develop' && (!pr || pr == 'false') )
) {
    deployToFirebase('dev');
} else if (branch == 'qa' && (!pr || pr == 'false')) {
    deployToFirebase('qa');
} else if (branch == 'staging' && (!pr || pr == 'false')) {
    deployToFirebase('staging');
} else if (branch == 'master' && (!pr || pr == 'false')) {
    deployToFirebase('prod');
}