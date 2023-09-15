const express = require('express')
const {ctrlClasses} = require('../../controllers')
const {validateBody} = require('../../middelewares')


const router = express.Router()

router.get("/", ctrlClasses.getAllClasses)

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })


module.exports = router