<template>
	<main class="relative overflow-hidden bg-gray-100 h-screen p-4">
		<div class="flex flex-col shadow-lg bg-white my-auto">
			<Header v-bind:todos="todos" />
			<h1 v-if="loading">Loading...</h1>
			<div v-if="!loading">
				<AddTodo @add-todo="addTodo" />
				<Todos v-bind:todos="todos" @update-todo="updateTodo" @del-todo="deleteTodo" />
			</div>

			<div v-if="error" class="bg-red-600">
				<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
					<div class="flex items-center justify-between flex-wrap">
						<div class="w-0 flex-1 flex items-center">
							<p class="ml-3 font-medium text-white truncate">
								<span>
									{{ error }}
								</span>
							</p>
						</div>
						<div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
							<button
								type="button"
								class="-mr-1 flex p-2 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
								@click="dismissError"
							>
								<span class="sr-only">
									Dismiss
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="h-6 w-6 text-white"
									viewBox="0 0 1792 1792"
								>
									<path
										d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<!-- 
        <div class="app-container bg-gray-100">
		<Header v-bind:todos="todos" />
		<h1 v-if="loading">Loading...</h1>
		<div v-if="!loading">
			<AddTodo @add-todo="addTodo" />
			<Todos v-bind:todos="todos" @update-todo="updateTodo" @del-todo="deleteTodo" />
		</div>
		<p class="error" v-if="error">{{ error }}</p>
	</div>
     -->
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
		dismissError() {
			this.error = null;
		},
	},
	async created() {
		// Fetch Todos
		try {
			this.todos = await TodoService.getTodos();
			this.loading = false;
		} catch (err) {
			this.error = err.message;
			console.error(err);
		}
	},
};
</script>

<style></style>
