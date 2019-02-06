const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Here is the home page. How can I help you?'))
app.get('/living_room', (req, res) => res.send('Have a seat! May I offer you a drink?'))
app.get('/floor/1/bedroom', (req, res) => res.send('Hey, this is a private area!'))
app.listen(port, () => console.log(`Server running on port ${port}!`))

