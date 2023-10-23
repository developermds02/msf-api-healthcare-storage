/* eslint-disable object-shorthand */
const express = require('express')
const { saveFileAttentionAttach, getFileAttentionAttach } = require('../controller/saveFile')
const multer = require('multer')
const storages = multer.memoryStorage()
const upload = multer({ storage: storages })

const router = express.Router()

router.post('/attach', upload.single('files'), saveFileAttentionAttach)
router.post('/attachSearch', getFileAttentionAttach)

module.exports = router
