function filterArray(numbers, value) {//* Оголошуємо функцію*/ 

  //* Створюємо порожній масив для чисел/
  let resultArray = [];

  //* Проходимо циклом по кожнму елементу масиву/
  for (let i = 0; i < numbers.length; i++) {

    //*Перевірка, чи поточний елемент більший за задане значення
    if (numbers[i] > value) {

      //* Додаємо поточне число до масиву
      resultArray.push(numbers[i]);
    }
  }
  //* Повертаємо масив чисел*/
  return resultArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]