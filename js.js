//import convert from 'webp-batch-convert';
const convert = require('webp-batch-convert');

// 将 img 目录下的所有图片转换为 webp 文件，输出至 webp 目录
const res = convert.cwebp('./zip/','./zip/', {
    quiet: true, // 不输出详情
    q: 75        // 质量
});
console.log('total: ', res);