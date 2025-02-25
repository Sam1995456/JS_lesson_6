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

function mergeUnique(arr1, arr2) {
  let newArr = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  console.log(newArr);
}
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

function swapElements(arr, index1, index2) {
  let copyArr = [...arr];
  copyArr[index1] = arr[index2];
  copyArr[index2] = arr[index1];

  console.log(copyArr);
}
swapElements(["a", "b", "c"], 0, 2); // ['c', 'b', 'a']
// swapElements([1, 2, 3, 4], 1, 2);
