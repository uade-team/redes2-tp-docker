const emojis = require("emoji.json");
const { getRandomIndex } = require("./utils");

const getRandomEmoji = () => {
    return emojis?.length
      ? emojis[getRandomIndex(emojis.length)]
      : null;
}

module.exports = {
    getRandomEmoji,
    emojis
}