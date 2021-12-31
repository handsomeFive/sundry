const originData = [1, 1, 1, 1, 22, 3, 22, 1, 4, 21, 23, 23, "1"];
//** 使用set集合去重 */
function deleteRepetitionV1(array) {
  return Array.from(new Set(array));
}
//** 使用双重循环去重 */
function deleteRepetitionV2(array) {
  const _array = [];
  for (let i = 0; i < array.length; i++) {
    let j = 0;
    for (j; j < _array.length; j++) {
      if (array[i] === _array[j]) {
        break;
      }
    }
    if (j === _array.length) {
      _array.push(array[i]);
    }
  }
  return _array;
}

//** 使用es6去重 */
function deleteRepetitionV3(array) {
  const _array = [];
  array.forEach((value) => {
    if (_array.indexOf(value) === -1) {
      _array.push(value);
    }
  });
  return _array;
}

//** 先使用排序再去重 */
function deleteRepetitionV4(array) {
  const sorted = array.slice().sort((a, b) => a - b);
  const result = [];
  let previous;
  for (let i = 0; i < sorted.length; i++) {
    if (previous !== sorted[i]) {
      previous = sorted[i];
      result.push(sorted[i]);
    }
  }
  return result;
}

//** 使用对象键值来去重 */
function deleteRepetitionV5(array) {
  const compare = {};
  const result = [];
  array.forEach((value) => {
    const key = typeof value + value;
    if (compare[key] === undefined) {
      compare[key] = value;
      result.push(value);
    }
  });
  return result;
}

console.log(
  deleteRepetitionV1(originData),
  deleteRepetitionV2(originData),
  deleteRepetitionV3(originData),
  deleteRepetitionV4(originData),
  deleteRepetitionV5(originData)
);
