import axios from 'axios';

const url = 'api/todos';

class TodoService {
	// Create
	static addTodo(title) {
		return axios.post(url, {
			title,
		});
	}

	// Read
	static getTodos() {
		return new Promise((resolve, reject) => {
			axios
				.get(url)
				.then((res) => {
					const { data } = res;
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
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
