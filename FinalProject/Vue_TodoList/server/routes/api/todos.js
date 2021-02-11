require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const router = express.Router();

const loadTodosCollection = async (req, res, next) => {
	let todosColl;

	try {
		const client = await MongoClient.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		todosColl = await client.db('VueTodoList').collection('todos');
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}

	res.todos = todosColl;
	next();
};

router.get('/', loadTodosCollection, async (req, res) => {
	try {
		res.send(await res.todos.find({}).toArray());
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.get('/:id', loadTodosCollection, async (req, res) => {
	try {
		res.send(await res.todos.find({ _id: new ObjectID(req.params.id) }).toArray());
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post('/', loadTodosCollection, async (req, res) => {
	try {
		await res.todos.insertOne({
			title: req.body.title,
			completed: false,
			createdAt: new Date(),
		});

		res.status(201).send({ message: 'Todo added' });
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.delete('/:id', loadTodosCollection, async (req, res) => {
	try {
		await res.todos.deleteOne({ _id: new ObjectID(req.params.id) });

		res.status(200).send('Todo deleted');
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = router;
