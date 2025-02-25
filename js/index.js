// 1. Поиск и обрезка массива
// Описание:
// Напишите функцию findAndSlice(arr, value), которая принимает массив arr и
// значение value.
// Функция должна найти индекс первого вхождения value в массиве и вернуть новый
// массив, в котором остаются элементы только после найденного значения
// (включительно). Если значение value не найдено, возвращается пустой массив.
// Пример:
// javascript
// CopyEdit
// findAndSlice([1, 2, 3, 4, 5], 3); // [3, 4, 5]
// findAndSlice(['a', 'b', 'c'], 'b'); // ['b', 'c']
// findAndSlice([10, 20, 30], 50); // []

function findAndSlice(arr, value) {
  const newArr = arr.slice(arr.indexOf(value));
  console.log(newArr);
}

// findAndSlice(["a", "b", "c"], "b");

// 2. Удаление элементов из массива
// Описание:
// Напишите функцию removeItems(arr, startIndex, deleteCount), которая
// принимает массив arr, индекс startIndex и количество элементов для удаления
// deleteCount.
// Функция должна удалить элементы из массива начиная с индекса startIndex и
// вернуть новый массив.
// Пример:
// javascript
// CopyEdit
// removeItems([1, 2, 3, 4, 5], 2, 2); // [1, 2, 5]
// removeItems(['apple', 'banana', 'cherry'], 1, 1); // ['apple',
// 'cherry']
// removeItems([10, 20, 30], 0, 3); // []

function removeItems(arr, startIndex, deleteCount) {
  let deleteArr = arr.splice(startIndex, deleteCount);
  console.log(arr, deleteArr);
}

// removeItems(["apple", "banana", "cherry"], 1, 1);

const fruits = ["яблоко", "груша", "слива", "драконы"];
fruits.splice(1, 1, "банан", "арбуз", "дом");
console.log(fruits); // ["яблоко", "банан", "слива"]
