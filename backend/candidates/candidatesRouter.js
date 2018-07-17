const express = require('express')
const router = express.Router()
const Candidate = require('./Candidate')

router.get('/', (req, res) => {
    Candidate.find()
        .then(candidates => {
            res.status(200).json(candidates)
        })
        .catch(err => {
            throw new Error(err.message)
        })
})

module.exports = router
