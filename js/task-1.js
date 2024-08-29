function slugify(title) {  //*функція slugify(title), яка приймає заголовок статті, параметр (title) */

  //*повертає slug, створений із цього рядка.

  return title.toLowerCase() //* Перетворює рядок в нижній регістр
    .split(' ')//* Pозділяє слова за допомогою пробілів
    .join('-');//* Заміна пробілів на тире  
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"