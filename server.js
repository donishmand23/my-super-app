const express = require('express')
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

const PORT = process.env.PORT || 4000

app.get('/', (request, response) => {
	response.render('home')
})

app.get('/about', (request, response) => {
	response.render('me')
})

app.listen(PORT, () => {
	console.log('Server ready at http://localhost:' + PORT)
})