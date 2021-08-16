let text = prompt('Введіть URL');
// console.log(text);
let newText = '';
if (text.startsWith('http://')) {
    newText = text.slice(7, text.length); console.log(newText)
}
else if (text.startsWith('https://')) {
    newText = text.slice(8, text.length); console.log(newText)
}
else console.log('Це неправильне URL');