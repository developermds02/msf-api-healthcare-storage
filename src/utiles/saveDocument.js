const fs = require('fs')
const path = require('path')

const saveDocuments = (data, dataJson) => {
  const { typeAttention, attentionId, typeFormat } = dataJson
  const folderBasePath = typeAttention === 'aux' ? '../saveDocument/attachAux' : '../saveDocument/attachProc'
  const fileName = `${typeAttention}-${attentionId}.${typeFormat}`

  const folderName = path.join(__dirname, folderBasePath, `${typeAttention}-${attentionId}`)
  // path.join(__dirname, folderBasePath, dni)

  // if folder exists
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName, { recursive: true })
  }

  // add document save
  fs.writeFileSync(path.join(folderName, fileName), data)

  // return ruta
  return path.join(folderName, fileName)
}

const searchDocumentos = (pathname) => {
  // read file
  return fs.readFileSync(pathname)
}

module.exports = {
  saveDocuments,
  searchDocumentos
}