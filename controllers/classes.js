const {HttpError, ctrlWrapper} = require('../helpers')
const User = require('../models/classModel')

const getAllClasses = async (req, res) => {
    const result = await User.find()
    console.log(result)
    res.json(result)
}

module.exports = {
    getAllClasses: ctrlWrapper(getAllClasses),
}