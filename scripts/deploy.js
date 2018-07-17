var exec = require('child_process').exec;

var branch = process.env.TRAVIS_BRANCH,
    pr = process.env.TRAVIS_PULL_REQUEST,
    pr_branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;

// if (
//     (branch == 'develop' && (!pr || pr == 'false') ) ||
//     ((pr && pr != 'false') && pr_branch == 'develop')
// ) {
//     deployToFirebase('dev');
// } else if (branch == 'master' && (!pr || pr == 'false')) {
//     deployToFirebase('prod');
// }
console.log(branch, pr, pr_branch);

function deployToFirebase(project) {
    return new Promise(function (resolve, reject) {
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