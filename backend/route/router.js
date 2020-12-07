const e = require('express')
const express = require('express')
const esClient = require('../middleware/Search')
const router = express.Router()

router.get('/search', (req, res) => {
    const func = async () => {
        const { body } = await esClient.search({
            index: 'tn_airport*',
            body: {
                query: { bool: { must: [{ match_phrase_prefix: { airport_name: req.query.search } }] } },
                sort: {
                    '@timestamp': 'desc',
                    id: 'desc'
                },
                size: 10
            }
        })
        const hitsTarget = body.hits.hits.map((item) => {
            return item._source
        })
        res.json({
            success: true,
            target_Info: hitsTarget
        })
    }

    func()
        .catch(err => {
            console.error(err)
            res.json({
                success: false,
                message: err
            })
        })
})

router.get('/axios', (req, res) => {
    res.send('Hello')
    res.json({ message: 'hello~' })
})

module.exports = router