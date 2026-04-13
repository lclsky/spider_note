function getCurrentLineNumber() {
    try {
        throw new Error();
    } catch (e) {
        // 解析stack字符串获取行号
        const stackLines = e.stack.split('\n');
        // 不同浏览器stack格式可能不同，这里处理Chrome/Firefox格式
        const callerLine = stackLines[2] || stackLines[1];
        const lineNumberMatch = callerLine.match(/:(\d+):\d+/);
        return lineNumberMatch ? parseInt(lineNumberMatch[1]) : null;
    }
}

// 示例使用
console.log('当前行号:', getCurrentLineNumber());
