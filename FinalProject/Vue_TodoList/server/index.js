const express = require('express');
const app = express();
const todosRouter = require('./routes/api/todos');
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/api/todos', todosRouter);

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});