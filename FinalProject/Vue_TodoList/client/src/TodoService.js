import axios from 'axios';

const url = 'http://localhost:5000/api/todos';

class TodoService {
	// Create
	static addTodo(title) {
		return axios.post(url, {
			title,
		});
	}

	// Read
	static async getTodos() {
		try {
			const { data } = await axios.get(url);

			return data;
		} catch (err) {
			return err;
		}
	}

	// Update
	static updateTodo(id, newData) {
		return axios.patch(`${url}/${id}`, newData);
	}

	// Delete
	static deleteTodo(id) {
		return axios.delete(`${url}/${id}`);
	}
}

export default TodoService;
