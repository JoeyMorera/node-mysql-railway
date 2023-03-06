import express from 'express'               //Importamos express
import {pool} from './db.js'

const app = express()                       

app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
})

app.get('/ping', async (req, res) => {
    const result = await pool.query('Select "hello world" as result')
    console.log(result)
    res.send('Binvenido')
})

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users (name) VALUES ("Joey")')
    res.json(result)
})


app.listen(3000)                            
console.log('Servidor en el puerto 3000')