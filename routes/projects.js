const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('List projects')
})


router.get('/new', (req, res) => {
    res.send('new project')
})


router
    .route('/edit/:id')
    .get((req, res) => {
        res.send(`Get project with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update project with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete project with ID ${req.params.id}`)
    })


router
    .route('/view/:code')
    .get((req, res) => {
        res.send(`Get project with Code ${req.params.id}`)
    })


module.exports = router