let native = require('./build/Release/bindings.node')
let paths = native.readFilePaths()
console.log(paths)
