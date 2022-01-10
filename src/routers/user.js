const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/user', async function (req, res) {
    const user = new User(req.body)
    try {
        await user.save()
        res.send('Eintrag erfolgreich gespeichert!')
    } catch(e) {
        res.status(500).send(e)
    }
})

router.post('/user/me', async function (req, res) {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        res.send(user)
    } else {
        res.status(404).send('Nutzer nicht gefunden')
    }
})


module.exports = router
