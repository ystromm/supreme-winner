const words = function () {
    return {
        histogram: function (texts) {
            const reduce = texts
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
            return Object.values(reduce)
                .sort((a, b) => b.count - a.count)
                .slice(0, 100);
        }
    };
};

module.exports = words;
