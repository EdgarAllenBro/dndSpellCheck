import express from 'express'
import ViteExpress from 'vite-express'
import handleUser from './controller/users.js'
import session from 'express-session'
import axios from "axios";
import cors from 'cors'

const app =  express()
const port = 8000
app.use(express.json())
app.use(cors())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

let spells = []

axios.get('https://www.dnd5eapi.co/api/spells').then(
    (res)=>{
      res.data.results.forEach( element => {
      axios.get('https://www.dnd5eapi.co' + element.url).then((res)=>{
        console.log(res.data)
        spells.push(res.data)
      }
        )
      });
    }
)
  

app.post('/newUser', handleUser.addUser)
app.post('/loginUser', handleUser.loginUser)
app.get('/sessionCheck', handleUser.sessionCheck)
app.get('/allSpells', (req,res)=>{
  res.send(spells)
} )

ViteExpress.listen(app, port, ()=>{console.log('Server live at http://localhost:' + port )})