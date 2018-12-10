'use strict'

const services = require('../services')

function isAuth (req, res, next){
	if (!req.headers.authoriation){
		return res.status(403).send({ message: 'NO TIENES AUTORIZACION'})
	}
	const token = req.headers.authoriation.split("")[1]
    
    services.decodeToken(token)
    .then(response => {
        req.user = response
        next()
    })
    .cath(response=> {
        res.status(response.status)
    })
}

module.exports = isAuth