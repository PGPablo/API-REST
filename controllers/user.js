'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../service')

function singUp(req, res){
	const user = new User({
        email: req.body.displayName
        displayName: req.body.displayName,
        password: req.body.password
		)}
	
}

user.save((err) => {
	if (err) res.status(500).send({ message: 'Error al crear el usuario: ${err}'})

	return res.status(201).send({ token: service.createToken(user)})
})

function singIn(req, res){
	User.find({eail.req.body.email}, (err, user)=>{
		if (err) return res.status(500).send({message: err})
        if (!user) return res.status(404).send({message: 'NO EXISTE EL usuario'})

        req.user = user
        res.status(200).send({
        	message: 'TE HAS LOGUEADO CORRECTAMENTE',
            	token: service.createToken(user)
        })
		})
}

module.exports ={
	signUp,
	signIn

}