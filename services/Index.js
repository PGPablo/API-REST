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

module.exports = createToken