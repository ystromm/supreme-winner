const request = require('request-promise');
const url = 'https://api.twitter.com/1.1/search/tweets.json';

const twitter = function (token) {
    return {
        texts: function (query) {
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
            return searchResponse.then(searchResponse => searchResponse.statuses)
                .map(status => status.text);
        }
    }
}

module.exports = twitter
