//节流的原理很简单：

// 如果你持续触发事件，每隔一段时间，只执行一次事件。

// 根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
// 我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

// 关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。  ??轮训?
// 时间戳 可以实现首次执行
function throttleV1_1(callback, wait) {
  let previous = 0;

  return function () {
    const now = +new Date();

    if (now - previous > wait) {
      callback.apply(this, arguments);
      previous = now;
    }
  };
}
// 计时器 可以实现最后一次执行
function throttleV1_2(callback, wait) {
  let timer;

  return function () {
    const _this = this;
    const arg = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        callback.apply(_this, arg);
        timer = null;
      }, wait);
    }
  };
}

// 融合两种方案 支持首次尾次调用
function throttleV2(callback, wait) {
  let previous = 0;
  let timer = null;

  return function () {
    const _this = this;
    const arg = arguments;
    const now = +new Date();
    const rest = wait - (now - previous);
    if (rest <= 0) {
      callback.apply(_this, arg);
      previous = now;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    } else if (!timer) {
      timer = setTimeout(function () {
        callback.apply(_this, arg);
        timer = null;
        previous = +new Date();
      }, rest);
    }
  };
}

// 支持首尾调用配置化
function throttleV3(callback, wait, option = {}) {
  let previous = 0;
  let timer = null;

  return function () {
    const _this = this;
    const arg = arguments;
    const now = +new Date();
    // 第一次且不触发第一次的条件
    if (!previous && option.leading === false) {
      previous = now;
    }
    const rest = wait - (now - previous);
    if (rest <= 0) {
      callback.apply(_this, arg);
      // 置空条件
      previous = option.leading === false ? 0 : now;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    } else if (!timer && option.trailing !== false) {
      timer = setTimeout(function () {
        callback.apply(_this, arg);
        timer = null;
        previous = +new Date();
      }, rest);
    }
  };
}
