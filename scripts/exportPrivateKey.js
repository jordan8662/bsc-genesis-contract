const Web3 = require('web3');
const fs = require('fs');
const keythereum = require('keythereum');

// 设置路径
const keystorePath = './keystores/1'; // UTC--开头的文件
const password = 'dfKFsf578sdf345SlojGUI';

// 读取keystore文件
const keystore = JSON.parse(fs.readFileSync(keystorePath, 'utf8'));

// 使用keythereum解密
const privateKey = keythereum.recover(password, keystore);
console.log('Private Key:', '0x' + privateKey.toString('hex'));