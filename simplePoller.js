let i = 0;

function queryFn() {
  return ++i === 4;
}
function callback(value) {
  console.log("execute", value);
}

function simplePoller(queryFn, callback) {
  let timer;
  let gap = 1;
  function listener() {
    timer && clearTimeout(timer);
    if (queryFn()) {
      clearTimeout(timer);
      callback(gap);
    } else {
      timer = setTimeout(() => {
        gap *= 1.5;
        listener();
      }, gap * 1000);
    }
  }
  listener();
}

simplePoller(queryFn, callback);
