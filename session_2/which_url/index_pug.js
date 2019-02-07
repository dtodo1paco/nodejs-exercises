const path = require('path')
const express = require('express')
const app = express()
const port = 3000
// view engine setup
// app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.send('Here is the home page. How can I help you?'))
app.get('/living_room', (req, res) => res.send('Have a seat! May I offer you a drink?'))
app.get('/floor/:floor_num/bedroom', function (req, res) {
	const f_num = req.params.floor_num;
	res.render('bedroom', { floor: f_num} );
  //res.render('bedroom', { 'a': 7} );
});
app.listen(port, () => console.log(`Server running on port ${port}!`))

