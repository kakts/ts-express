import * as express from 'express'
import "reflect-metadata"
import {createExpressServer} from "routing-controllers"
import {UserController} from './controllers/user'

import * as middlewares from './middlewares'

// expressアプリを作成、全てのコントローラールートを登録し、express appインスタンスを取得する
const app: express.Express = createExpressServer({
    controllers: [UserController]
})

app.use(middlewares.setCORS)

app.use(express.json())

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.listen(3000, () => console.log('listening on port 3000'))