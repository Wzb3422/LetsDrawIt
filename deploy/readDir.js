const fs = require('fs')
const path = require('path')
const { ossPut } = require('./oss')

function readDir (filePath) {
  fs.readdir(filePath, function(err,files) {
    if (err) {
      console.warn(err)
    } else {
      files.forEach(function(filename) {
        let filedir = path.join(filePath, filename);
        fs.stat(filedir, function(eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败');
          } else {
            if (stats.isFile()) {
              ossPut(filedir.substring(__dirname.length - 1), filedir)
            }
            if (stats.isDirectory()) {
              readDir(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      });
    }
  });
}

module.exports = readDir
