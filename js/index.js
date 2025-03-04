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

// 3. Объединение массивов без дубликатов
// Описание:
// Напишите функцию mergeUnique(arr1, arr2), которая принимает два массива и
// возвращает новый массив, содержащий все уникальные элементы из обоих массивов.
// Пример:
// javascript
// CopyEdit
// mergeUnique([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
// mergeUnique(['a', 'b'], ['b', 'c', 'd']); // ['a', 'b', 'c', 'd']
// mergeUnique([], [1, 2]); // [1, 2]

// function mergeUnique(arr1, arr2) {
//   let newArr = [...arr1];
//   for (let i = 0; i < arr2.length; i++) {
//     if (!newArr.includes(arr2[i])) {
//       newArr.push(arr2[i]);
//     }
//   }
//   console.log(newArr);
// }
// mergeUnique(["a", "b"], ["b", "c", "d"]);
// mergeUnique([1, 2, 3], [3, 4, 5]);

// 4. Перестановка элементов массива
// Описание:
// Напишите функцию swapElements(arr, index1, index2), которая принимает
// массив arr и два индекса index1 и index2. Функция должна поменять местами
// элементы по этим индексам. Верните новый массив.
// Пример:
// javascript
// CopyEdit
// swapElements([1, 2, 3, 4], 1, 3); // [1, 4, 3, 2]
// swapElements(['a', 'b', 'c'], 0, 2); // ['c', 'b', 'a']
// swapElements([10, 20, 30], 1, 1); // [10, 20, 30]

// function swapElements(arr, index1, index2) {
//   let copyArr = [...arr];
//   copyArr[index1] = arr[index2];
//   copyArr[index2] = arr[index1];

//   console.log(copyArr);
// }
// swapElements(["a", "b", "c"], 0, 2); // ['c', 'b', 'a']
// swapElements([1, 2, 3, 4], 1, 2);

// 5. Разделение массива на подмассивы
// Описание:
// Напишите функцию splitArray(arr, size), которая принимает массив arr и
// число size. Функция должна разделить массив на подмассивы длиной size.
// Последний подмассив может быть меньше, если элементов не хватает.

// function splitArray(arr, size) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }

// console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// 6. Очередь с использованием push и shift
// Описание:
// Напишите функцию queueOperations(arr, element), которая реализует очередь с
// помощью методов push и shift. Функция должна добавлять элемент в конец массива
// с помощью push, а затем удалять первый элемент с помощью shift. Верните
// изменённый массив.

// function queueOperations(arr, element) {
//   arr.push(element);
//   arr.shift();
//   return arr;
// }

// console.log(queueOperations([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// 7. Реверс массива с использованием push и pop
// Описание:
// Напишите функцию reverseArray(arr), которая переворачивает массив с
// использованием методов push и pop. Функция должна последовательно извлекать
// элементы из исходного массива с помощью pop и добавлять их в новый массив с
// помощью push.
// Пример:
// javascript
// CopyEdit
// reverseArray([1, 2, 3, 4]); // [4, 3, 2, 1]
// reverseArray(['a', 'b', 'c']); // ['c', 'b', 'a']
// reverseArray([10, 20, 30, 40]); // [40, 30, 20, 10]\

// function reverseArray(arr) {
//   let newArr = [];
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let element = arr.pop();
//     newArr.push(element);
//   }
//   return newArr;
// }

// console.log(reverseArray([1, 2, 3, 4]));
