'use strict'

const jwr = require ('jwt-simple')
const moment = require('moment')
const confif = require('../config')


fuction createToken (user){
   const payload = {
     sub: user.id,
     iat: moment().unix(),
     exp: moment().add(14, 'days').unix(),
   }    
    return jwt.encode(payload, config.SECRET_TOKEN)
}

fuction decodeToken (token){
	const decode = new Promise((resolve, reject) =>{
		try{
			const payload = jwt.decode(token, config.SECRET_TOKEN)
		    if (payload.exp <= moment().unix()){
		    	resolve({
		    		status: 401,
		    		message: 'EL TOKEN HA EXPIRADO'
		    	})
		    }
		    resolve(payload.sub)

		} catch (err){
			reject({
				status: 500,
				message: 'Invalid Token'
			})
		}
	})
}
return decode
module.exports = createToken