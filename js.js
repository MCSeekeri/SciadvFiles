//import convert from 'webp-batch-convert';
const convert = require('webp-batch-convert');
let res;

// 将 img 目录下的所有图片转换为 webp 文件，输出至 webp 目录
const cwebpOpts = {
    quiet: true, // 不输出详情
    q: 75 // 质量
};
res = convert.cwebp('./pic','./webp', cwebpOpts);
console.log('total: ', res);