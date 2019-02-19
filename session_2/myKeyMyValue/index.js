
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Here is the home page. How can I help you?'))
app.get('/get/json/myKey/myValue', (req, res) => res.json({myKey:'myValue'}))

app.get('/get/json/:myKey/:myValue', (req, res) => {
  const obj = {};
  obj[req.params.myKey] = req.params.myValue;
  res.json(obj);
});


app.get('/get/text/myKey/myValue', (req, res) => res.send('myKey = myValue'))
app.listen(port, () => console.log(`Server running on port ${port}!`))
