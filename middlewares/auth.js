'use strict'

const jwt= require('jwt')
const moment = require('moment')
const config = require('../config')

function isAuth (req, res, next){
	if (!req.headers.authoriation){
		return res.status(403).send({ message: 'NO TIENES AUTORIZACION'})
	}
	con st token = req.headers.authoriation.split("")[1]
    const payload = jwt.decode(token, config.SECRET_TOKEN)

    if (payload.exp < moment().unix()){
    	return res.status(401).send({ message: 'EL TOKEN A EXPIRADO'})

    }

    req.user = payload.sub
    next()
}

module.exports = isAuth