var exec = require('child_process').exec;

var branch = process.env.TRAVIS_BRANCH,
    pr = process.env.TRAVIS_PULL_REQUEST,
    pr_branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;

function deployToFirebase(project) {
    return new Promise(function (resolve, reject) {
        console.log('Deploying to firebase project openforge-'+project);
        var child = exec('npm run firebase:deploy:'+project);

        child.stdout.on('data', function (data) {
            process.stdout.write(data);
        });

        child.on('error', function (data) {
            process.stdout.write(data);
            reject('Firebase errored!');
        });

        child.on('exit', function () {
            resolve('Firebase deployed successfully');
        });
    });
}

if (
    (branch == 'develop' ) // && (!pr || pr == 'false') )
) {
    deployToFirebase('dev');
} else if (branch == 'master' && (!pr || pr == 'false')) {
    deployToFirebase('prod');
}