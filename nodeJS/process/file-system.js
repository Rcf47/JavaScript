const fs = require('fs')
const path = require('path')

fs.mkdirSync(path.resolve('dir', 'dir2', 'dir3'), { recursive: true })
