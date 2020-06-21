import * as express from 'express'

import * as middlewares from './lib/middlewares'

const app: express.Express = express()

app.use(middlewares.setCORS)

app.use(express.json())


app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.listen(3000, () => console.log('listening on port 3000'))