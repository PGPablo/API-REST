-'use strick'

const express = require('express')
const bodyParser = require  ('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3001


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/product',(req, res)=>{
	res.send(200, {products: []})
	
})
app.get('/api/product/:productId',(req, res)=>{
})

app.post('/api/product',(req, res)=> {
	console.log(req.doby)
	res.status(484).send({message: 'E1 producto no existe'})
})

app.put('/api/product/:productId', (req, res)=> {
})

app.delete('/api/product/:productId', (req, res)=>{
})

mongoose.connect('mongodb://localhost:27017/shop', (err, res)=> {
	if (err) throw err 
		console.log('Conexion a la base de datos establecida...')
})


app.listen(port, () => {
	console.log(`API REST corriendo desde http://localhost:${port}`)
})
