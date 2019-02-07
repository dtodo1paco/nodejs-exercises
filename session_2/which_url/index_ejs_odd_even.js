const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Here is the home page. How can I help you?'))
app.get('/living_room', (req, res) => res.send('Have a seat! May I offer you a drink?'))
app.get('/floor/:floor_num/bedroom', function (req, res) {
	const f_num = req.params.floor_num;
	if (f_num % 2 === 0)
		res.render('bedroom_even.ejs', { floor: f_num} );
	else
		res.render('bedroom_odd.ejs', { floor: f_num} );
});
app.listen(port, () => console.log(`Server running on port ${port}!`))

