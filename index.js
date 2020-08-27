const express = require('express')
const app = express()
const port = 3000
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(process.cwd() + '/public', {
    maxage: '0d'
}));
app.use('/node_modules', express.static(process.cwd() + '/node_modules', {
    maxage: '0d'
}))
app.use('/models', express.static(process.cwd() + '/models', {
    maxage: '0d'
}))
app.get('/', (req, res) => {
    res.render("index.html")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
