const {
  createDefaultFormatter,
} = require('fork-ts-checker-webpack-plugin/lib/formatter/DefaultFormatter');
const os = require('os');

const {
  createCodeframeFormatter,
} = require('fork-ts-checker-webpack-plugin/lib/formatter/CodeframeFormatter');

// 将文件行和列 从 (line,row) 替换成 :line:row
function createFormatter(fmt) {
  return (issue) => {
    const data = fmt(issue);
    const arr = data.split(os.EOL);
    arr[0] = arr[0].replace(/\((\d+)(,(\d+))?\):?(?=\u001b)/, ':$1:$3');
    return arr.join(os.EOL);
  };
}

module.exports = {
  base: createFormatter(createDefaultFormatter()),
  codeFrame: createFormatter(createCodeframeFormatter()),
};
