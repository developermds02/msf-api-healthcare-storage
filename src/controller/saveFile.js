const { saveDocuments, searchDocumentos } = require('../utiles/saveDocument')

const getFileAttentionAttach = async (req, res) => {
  try {
    const { path } = req.body

    const resultDocument = searchDocumentos(path)

    res.status(200).json({
      message: 'search file ok',
      data: resultDocument
    })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const saveFileAttentionAttach = async (req, res) => {
  try {
    // add multer
    const dataJson = JSON.parse(JSON.stringify(req.body))
    const data = req.file.buffer
    const pathUrl = saveDocuments(data, dataJson)

    res.status(200).json({
      message: 'saved documents',
      path: pathUrl
    })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  saveFileAttentionAttach,
  getFileAttentionAttach
}
