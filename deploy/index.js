const readDir = require('./readDir')
const path = require('path')

readDir(path.resolve(__dirname, '../dist'), path.resolve(__dirname))
