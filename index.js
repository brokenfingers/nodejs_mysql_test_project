let createError = require('http-errors')
let express = require('express')
let path = require('path')
let flash = require('express-flash')
let sessions = require('express-sessions')
let mysql = require('mysql')
let connection = require('./lib/database')

let productRouter = require('.routes/products')
const session = require('express-session')
let app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(sessions({
    cookie: { maxAge: 6000 },
    store: new session.MemoryStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}))

app.use(flash())
app.use('/products', productRouter)

app.use((req, res, next) => {
    next(createError(404))
})

app.listen(3000)