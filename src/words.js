const words = function () {
    return {
        histogram: function (texts) {
            return texts
                .flatMap(text => text.split(' '))
                .reduce((words, word) => {
                    if (words.hasOwnProperty(word)) {
                        words[word] = {word: words[word].word, count: words[word].count + 1};
                    }
                    else {
                        words[word] = {word: word, count: 1};
                    }
                    return words;
                }, {});
        }
    };
};

module.exports = words;
