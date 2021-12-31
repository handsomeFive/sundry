/**
 * 闭包就是将一个使用多个参数的函数转换成
 * 考点闭包，递归，apply, call, arguments, fn.length
 * 1. 实现一个闭包函数，将源函数的参数组合到一起再执行
 * 2. 实现一个闭包+递归函数，根据参数的长度判断，如果参数长度小于源函数的，那就递归调用1函数，否则直接执行
 *
 */

function subCurry(fn) {
  const args = [].slice.call(arguments, 1);
  return function () {
    const result = args.concat([].slice.call(arguments));
    return fn.apply(this, result);
  };
}

function curry(fn, length) {
  length = fn.length || length;
  return function () {
    if (arguments.length < length) {
      const args = [fn].concat([].slice.call(arguments));
      return curry(subCurry.apply(this, args), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

function add(x, y) {
  console.log(x + y);
}

const show = curry(add);

const show2 = show(1);

show(1, 2);
show2(2);

function debounce(fn, wait) {
  let timer;

  return function () {
    const arg = arguments;
    const _this = this;
    timer && clearTimeout(timer);

    timer = setTimeout(function () {
      fn.apply(_this, arg);
      clearTimeout(timer);
    }, wait);
  };
}

function throttle(fn, wait) {
  let previous = 0;

  return function () {
    const now = +new Date();
    if (now - previous > wait) {
      fn.call(this, arguments);
      previous = now;
    }
  };
}

function throttle(fn, wait) {
  let timer;

  return function () {
    if (!timer) {
      const _this = this;
      const args = arguments;
      timer = setTimeout(() => {
        fn.apply(_this, args);
        clearTimeout(timer);
        timer = null;
      }, wait);
    }
  };
}

function _new() {
  const obj = {};
  const Constructor = [].shift.call(arguments);
  obj.proto = Constructor.prototype;
  const result = Constructor.apply(obj, arguments);
  return result || obj;
}
