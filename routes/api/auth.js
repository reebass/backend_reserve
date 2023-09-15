const express = require('express');

const {ctrlAuth} = require('../../controllers');

const router = express.Router();

const {validateBody} = require('../../middelewares')

const {schemas} = require('../../models/user')

router.post("/register", validateBody(schemas.registerSchema), ctrlAuth.register)

module.exports = router;