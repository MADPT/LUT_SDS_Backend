const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 5000;
const app = express();

const members = require('./Members');

// const logger = require('./middleware/logger');

// app.get('/', (req, res) => {
// 	// res.send('<h1>Hello World!</h1>');
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Init middleware
// app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body parsers middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get('/', (req, res) => res.render('index', { title: 'Members App', members }));

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}.`);
});
