//import convert from 'webp-batch-convert';
const convert = require('webp-batch-convert');

// �� img Ŀ¼�µ�����ͼƬת��Ϊ webp �ļ�������� webp Ŀ¼
const res = convert.cwebp('./zip/','./zip/', {
    quiet: true, // ���������
    q: 75        // ����
});
console.log('total: ', res);