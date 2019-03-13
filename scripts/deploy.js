var exec = require('child_process').exec;

var branch = process.env.TRAVIS_BRANCH,
    pr = process.env.TRAVIS_PULL_REQUEST,
    pr_branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;

var token = process.env.FIREBASE_TOKEN

function deployToFirebase(project) {
    exec("firebase use default && firebase deploy --token " + token, function(error, stdout, stderr) {
        console.log(error);
        console.log(stdout);
        console.log(stderr);
      });



    /*
    return new Promise(function (resolve, reject) {
        console.log('Deploying to firebase project openforge-'+project);

        var child;
        if(project === "dev"){
            child = exec("firebase use default && firebase deploy --token " + token);
        } else {
            child = exec("firebase use production && firebase deploy --token " + token);
        }

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
    */
}

if (
    (branch == 'develop' ) // && (!pr || pr == 'false') )
) {
    deployToFirebase('dev');
} else if (branch == 'master' && (!pr || pr == 'false')) {
    deployToFirebase('prod');
}