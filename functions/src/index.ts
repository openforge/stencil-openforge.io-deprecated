import * as functions from 'firebase-functions';
import { HttpsError } from 'firebase-functions/lib/providers/https';

const https = require('https');

export const rebuildMaster = functions.https.onRequest((butterRequest, butterResponse) => {
    const travisToken = butterRequest.headers['x-travis-token'];

    const options = {
        hostname: 'api.travis-ci.org',
        port: 443,
        path: '/repo/openforge%2FOPENFORGE.IO/requests',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Travis-API-Version": "3",
            "Authorization": `token ${travisToken}`
        }
      };

    const body = `{"request": {"branch":"${functions.config().travis.rebuild_branch}"}}`;
      
    const travisRequest = https.request(options, (travisResponse: any) => {
    
        travisResponse.on('data', (d: any) => {
            process.stdout.write(d);
        });
    });
    
    travisRequest.on('error', (e: HttpsError) => {
            console.error(e);
        });
    travisRequest.end(body);
    
    butterResponse.statusCode = 200;
    butterResponse.end();
});
