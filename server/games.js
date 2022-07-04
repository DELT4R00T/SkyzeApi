const express = require('express')
var router = express.Router();

const { tebakgambar } = require('../scraper/index') 
const { asahotak, tebakkata, caklontong } = require('@bochilteam/scraper')


router.get('/tebakgambar', async(req, res) => {
	var hasil = await tebakgambar()
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/asahotak', async(req, res) => {
	var hasil = await asahotak()
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

router.get('/tebakkata', async(req, res) => {
	var hasil = await tebakkata()
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

router.get('/caklontong', async(req, res) => {
	var hasil = await caklontong()
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

module.exports = router
