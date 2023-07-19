const emojis = ["😍","😍","💖","💖","😵","😵","😢","😢","😎","😎","😀","😀","🤬","🤬","👍","👍"]

var shuffle_emojis = emojis.sort(() => Math.random() - 0.5)
console.log(shuffle_emojis)