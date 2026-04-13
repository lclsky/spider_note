var hook_debugger=function(injectFunction) {

    // 返回一个新函数，用于处理输入参数并调用原始函数
    return function() {
        console.log('first',injectFunction.name)
        // 如果没有传入参数，直接调用原始的 injectFunction
        if (!arguments.length)
            return injectFunction.apply(this, arguments);

        // 获取参数的最后一个值，并替换掉 "debugger" 字符串
        arguments[arguments.length - 1] = arguments[arguments.length - 1].replace(/debugger/g, '"debugger".indexOf("d")');

        console.log('last')

        // 调用原始函数并返回结果
        return injectFunction.apply(this,arguments);
    }
}

// // --- 拦截 Function.prototype.constructor ---
// // 备份原始的 Function 构造器
// window.oldFunctionConstructor = window.Function.prototype.constructor;

// // 使用 hook_debugger 包装 Function 构造器，并拦截 debugger
// window.Function.prototype.constructor = hook_debugger(oldFunctionConstructor);

// // // 为了保持代码一致性，绑定原始的 toString 方法到新构造器
// // // 这样可以让 toString 方法输出原始代码
// window.Function.prototype.constructor.toString = oldFunctionConstructor.toString.bind(oldFunctionConstructor);
// window.Function.prototype.constructor.protoytpe= function(){};

// // --- 拦截 Function ---
// // 备份原始 Function 对象
// let  oldFunction = Function;

// // 替换全局 Function 对象，并拦截 debugger
// window.Function = hook_debugger(oldFunction);

// // 同样，为了保持一致性，绑定原始的 toString 方法到新的 Function 对象
// window.Function.toString = oldFunction.toString.bind(oldFunction);
// window.Function.prototype=function(){};

// // --- 拦截 eval ---
// // 备份原始 eval 函数
var oldEval = window.eval;

// // 使用 hook_debugger 包装 eval 函数
window.eval = hook_debugger(oldEval);

// // 同样绑定原始的 toString 方法，以便 eval.toString() 返回原始代码
window.eval.toString = oldEval.toString.bind(oldEval);


// // --- 拦截 GeneratorFunction ---
// // 获取生成器函数的原型构造器（通常为 GeneratorFunction）
// let oldGeneratorFunctionConstructor = Object.getPrototypeOf(function*() {}).constructor;

// // 使用 hook_debugger 包装生成器函数构造器
// let newGeneratorFunctionConstructor = hook_debugger(oldGeneratorFunctionConstructor);

// // 绑定原始 toString 方法
// newGeneratorFunctionConstructor.toString = oldGeneratorFunctionConstructor.toString.bind(oldGeneratorFunctionConstructor);

// // 将拦截后的构造器重新定义为 GeneratorFunction 的构造器
// Object.defineProperty(oldGeneratorFunctionConstructor.prototype, "constructor", {
//     value: newGeneratorFunctionConstructor,
//     writable: false, // 不允许修改
//     configurable: true // 允许重新配置
// });


// // --- 拦截 AsyncFunction ---
// // 获取异步函数的原型构造器（通常为 AsyncFunction）
// let oldAsyncFunctionConstructor = Object.getPrototypeOf(async function() {}).constructor;

// // 使用 hook_debugger 包装异步函数构造器
// let newAsyncFunctionConstructor = hook_debugger(oldAsyncFunctionConstructor);

// // 绑定原始 toString 方法
// newAsyncFunctionConstructor.toString = oldAsyncFunctionConstructor.toString.bind(oldAsyncFunctionConstructor);

// // 将拦截后的构造器重新定义为 AsyncFunction 的构造器
// Object.defineProperty(oldAsyncFunctionConstructor.prototype, "constructor", {
//     value: newAsyncFunctionConstructor,
//     writable: false, // 不允许修改
//     configurable: true // 允许重新配置
// });