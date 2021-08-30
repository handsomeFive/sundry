/**
 *  问题：callback中this???
 */
function debounceV1(callback, interval) {
    // 需要记录上一次是否执行，未便更新计时器，故这里要使用闭包
    let timer

    return function () {
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            // this 始终指向全局
            callback()
        }, interval)
    }
}
/**
 * 问题：一些函数的回调参数未传递
 */
function debounceV2(callback, interval) {
    let timer
    return function () {
        let _this = this
        timer && clearTimeout(timer)
        timer = setTimeout(function () { callback.call(_this) }, interval)
    }
}

const mouseMove = function () {
    // 被包裹后的函数的this也是对应的触发环境了
    console.log(this)
}
const debouncedMove = debounceV2(mouseMove, 1000)

/**
 * 问题：还不支持立即执行
 */
function debounceV3(callback, interval) {
    let timer
    return function () {
        const _this = this
        const arg = arguments

        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            callback.apply(_this, arg)
        }, interval)
    }
}

/**
 * 问题：不支持立即返回值及手动取消
 */

// 第一次执行 多次执行在interval后执行
function debounceV4(callback, interval, immediate) {
    let timer
    return function () {
        const _this = this
        const arg = arguments
        const isFirstImmediate = immediate && !timer

        timer && clearTimeout(timer)
        if (isFirstImmediate) {
            callback.apply(_this, arg)
        }

        timer = setTimeout(function () {
            if (!isFirstImmediate) {
                callback.apply(_this, arg)
            }
            timer = null
        }, interval)
    }
}

// function test() {
//     console.log('____test____')
// }
// const debouncedTest = debounceV4(test, 5000, true)
// let count = 0
// const timer = setInterval(function () {
//     debouncedTest()
//     if (count === 10) {
//         console.log('???')
//         clearInterval(timer)
//     }
//     count++
// }, 1000)

/**
 * 
 * @param {*} callback 
 * @param {*} interval 
 * @param {*} immediate 
 * @returns  
 */

function debounce(callback, interval, immediate) {
    let timer, result;
    const debounced = function () {
        const _this = this
        const arg = arguments
        const isFirstImmediate = immediate && !timer

        timer && clearTimeout(timer)

        timer = setTimeout(function () {
            if (!isFirstImmediate) {
                callback.apply(_this, arg)
            }
        }, interval)

        if (isFirstImmediate) {
            result = callback.apply(_this, arg)
        }
        return result
    }
    debounced.cancel = function () {
        timer && clearTimeout(timer)
        timer = null
    }
    return debounced
}