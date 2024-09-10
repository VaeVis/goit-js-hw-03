// Kod w trybie ścisłym - zalecany aby uniknąć niektórych błędów i przestarzałych konstrukcji:
'use strict';

function slugify(title) {
    const titleLow = title.toLowerCase();
    const titleSplit = titleLow.split(' ');
    const titleSeparate = titleSplit.join('-');

    return titleSeparate;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"