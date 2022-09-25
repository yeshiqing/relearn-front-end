// example 1
// const nonEnglishText = "Приключения Алисы в Стране чудес";
// const regexpUPE = /\p{L}+/gu;
// console.table(nonEnglishText.match(regexpUPE));

// example 2
// const sentence = 'A ticket to 大阪 costs ¥2000 👌.';
// const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
// console.log(sentence.match(regexpEmojiPresentation));
// // expected output: Array ["👌"]

// example 3
const regexpTilde = /\u{7E}/u
console.table("asdf~!@#$!@#$ASDFZXVz".match(regexpTilde))