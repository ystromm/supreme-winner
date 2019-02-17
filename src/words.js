const words = function () {
    return {
        histogram: function (texts) {
            return texts
                .flatMap(text => text.split(' '))
                .reduce((words, word) => {
                    if (words.hasOwnProperty(word)) {
                        words[word] = words[word] + 1;
                    }
                    else {
                        words[word] = 1;
                    }
                    return words;
                }, {});
        }
    };
};

module.exports = words;
