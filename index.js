const express = require('express')
require('./src/db/connect.js')
const userRouter = require('./src/routers/user.js')

const app = express()
app.use(express.json());
app.use(userRouter)


const port = 3001

app.listen(port, (err) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log('Server is up on port: ', port)
    }
})