const express = require('express');
const cors = require('cors');
const app = express();
const todosRouter = require('./routes/api/todos');
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/todos', todosRouter);

// Handle production
if (process.env.NODE_ENV === 'production ') {
	// Static folder
	app.use(express.static(__dirname + '/public'));

	// Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
