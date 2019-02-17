const request = require('request-promise');
const Promise = require("bluebird");
const url = 'https://api.twitter.com/1.1/search/tweets.json';

// curl --request POST \
//   --url https://api.twitter.com/1.1/tweets/search/30day/<ENV>.json \
//     --header 'authorization: Bearer <BEARER_TOKEN>' \
//   --header 'content-type: application/json' \
//   --data '{
// "query":"from:TwitterDev lang:en",
//     "maxResults": "100",
//     "fromDate":"<YYYYMMDDHHmm>",
//     "toDate":"<YYYYMMDDHHmm>"
// }'

const twitter = function (token) {
    return {
        search: function (query) {
            const qs = [];
            const searchResponse = request({
                uri: url,
                qs: {
                    q: query
                },
                headers: {
                    'Authorization': "Bearer " + token
                },
                json: true
            });
            return searchResponse.then(searchResponse => searchResponse.statuses);
        }
    }
}

module.exports = twitter
