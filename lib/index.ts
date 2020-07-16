import * as express from 'express'
import "reflect-metadata"
import * as rCon from "routing-controllers"
// import {UserController} from './controllers/user'
import {UserController} from "./controllers/user"
import {BookController} from "./controllers/book"

// TODO 分離する
import * as mongoose from 'mongoose'

const host = 'localhost'
const db = 'test'

// import * as middlewares from './middlewares'

// expressアプリを作成、全てのコントローラールートを登録し、express appインスタンスを取得する
const app: express.Express = rCon.createExpressServer({
    controllers: [UserController, BookController]
})

function setupMongo(uris: string): void {
    console.log(`[setupMongo] setting up mongo client. uris: ${uris}`)
    const mongoOption = { useNewUrlParser: true }
    mongoose.connect(uris)
    const db = mongoose.connection
    db.on('error', (err) => {
        console.error(err)
    })
    db.once('open', () => {
        console.log("db connection opened")
    })
}
setupMongo(`mongodb://${host}/${db}`)
// app.use(middlewares.setCORS)

app.use(express.json())

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.listen(3000, () => console.log('listening on port 3000'))