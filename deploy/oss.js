const OSS = require('ali-oss')

let ossClient = new OSS({
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAI4FiAx1aTBMtBWLxdUTTH',
  accessKeySecret: 'BpzEypglOl7BYMW4n23IgqJSJuNTMA',
  bucket: 'wzb-draw',
});

async function ossPut (uploadFileName, filePath) {
  try {
    let result = await ossClient.put(uploadFileName, filePath)
    console.log(result.name)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  ossClient,
  ossPut
}
