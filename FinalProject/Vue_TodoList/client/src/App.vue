<template>
	<main class="relative overflow-hidden bg-gray-100 h-screen p-4">
		<div class="flex flex-col shadow-lg bg-white my-auto">
			<Header v-bind:todos="todos" />
			<h1 v-if="loading">Loading...</h1>
			<div v-if="!loading && !error">
				<AddTodo @add-todo="addTodo" />
				<Todos v-bind:todos="todos" @update-todo="updateTodo" @del-todo="deleteTodo" />
			</div>

			<div v-if="error" class="bg-red-600">
				<div class="p-4">
					<p class="font-medium text-white truncate">
						{{ error }}
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import TodoService from './TodoService';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

export default {
	name: 'App',
	components: {
		Header,
		AddTodo,
		Todos,
	},
	data() {
		return {
			todos: [],
			error: '',
			text: '',
			loading: true,
		};
	},
	methods: {
		async addTodo(title) {
			try {
				const { data } = await TodoService.addTodo(title);

				// this.todos = await TodoService.getTodos();
				this.todos.push(data);
			} catch (err) {
				this.error = err.message;
				console.error(err);
			}
		},
		async deleteTodo(id) {
			try {
				const { data } = await TodoService.deleteTodo(id);

				// this.todos = await TodoService.getTodos();
				this.todos = this.todos.filter((todo) => todo._id !== data._id);
			} catch (err) {
				this.error = err.message;
				console.error(err);
			}
		},
		async updateTodo(id, newData) {
			try {
				console.log('updateTodo', newData);
				const { data } = await TodoService.updateTodo(id, newData);

				// this.todos = await TodoService.getTodos();
				const updatedTodoIndex = this.todos.findIndex((x) => x._id === data._id);
				this.todos[updatedTodoIndex] = data;
			} catch (err) {
				this.error = err.message;
				console.error(err);
			}
		},
	},
	async created() {
		// Fetch Todos
		try {
			this.todos = await TodoService.getTodos();
			this.loading = false;
		} catch (err) {
			this.error = err.message;
			this.loading = false;
			console.error(err);
		}
	},
};
</script>

<style></style>
