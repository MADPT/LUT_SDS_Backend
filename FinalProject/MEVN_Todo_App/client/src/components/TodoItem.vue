<template>
	<li
		class="todo__item px-4 text-gray-600 justify-between py-3 border-b-2 border-gray-100 bg-white hover:bg-gray-100"
	>
		<div
			class="todo__view flex flex-row items-center justify-between"
			v-bind:class="{ hidden: todo === editedTodo }"
		>
			<div class="todo__check-text flex flex-row items-center w-full pr-4">
				<div
					class="mr-4 bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center"
				>
					<input
						type="checkbox"
						class="opacity-0 absolute"
						:checked="todo.completed"
						@change="$parent.$emit('update-todo', todo._id, { completed: !todo.completed })"
					/>
					<svg
						class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none hover:block hover:opacity-50"
						viewBox="0 0 20 20"
					>
						<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
					</svg>
				</div>
				<!-- <input
					type="checkbox"
					class="mr-4 form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none focus:ring-0 transition ease-in duration-100"
					:checked="todo.completed"
					@change="$parent.$emit('update-todo', todo._id, { completed: !todo.completed })"
				/> -->
				<span v-bind:class="{ 'line-through': todo.completed }">
					{{ todo.title }}
				</span>
			</div>
			<div class="todo__buttons flex flex-row items-center">
				<button
					class="w-10 h-10 text-gray-300 border-0 transition ease-in duration-100 uppercase rounded hover:bg-gray-300 hover:text-white focus:outline-none"
					@click="editTodo(todo)"
				>
					<font-awesome-icon icon="edit" />
				</button>
				<button
					class="w-10 h-10 ml-2 text-gray-300 border-0 transition ease-in duration-100 uppercase rounded hover:bg-gray-300 hover:text-white focus:outline-none"
					@click="$parent.$emit('del-todo', todo._id)"
				>
					<font-awesome-icon icon="trash-alt" />
				</button>
			</div>
		</div>
		<div class="todo__edit pl-7" v-bind:class="{ hidden: todo !== editedTodo }">
			<form class="flex flex-row items-center justify-between w-full" @submit="doneEdit">
				<input
					class="flex-1 px-4 mr-4 rounded border border-gray-300 border-transparent bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
					type="text"
					ref="newTitle"
					v-model="newTitle"
					@keyup.enter="doneEdit"
					@keyup.esc="cancelEdit"
					placeholder="Add Todo..."
					required
				/>
				<div class="todo__buttons flex flex-row items-center">
					<button
						value="Submit"
						@click="doneEdit"
						class="w-10 h-10 text-gray-300 border-0 transition ease-in duration-100 uppercase rounded hover:bg-gray-300 hover:text-white focus:outline-none"
					>
						<font-awesome-icon icon="check" />
					</button>
					<button
						@click="cancelEdit"
						class="w-10 h-10 ml-2 text-gray-300 border-0 transition ease-in duration-100 uppercase rounded hover:bg-gray-300 hover:text-white focus:outline-none"
					>
						<font-awesome-icon icon="times" />
					</button>
				</div>
			</form>
		</div>
	</li>
	<!-- 
	<li
		class="flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800"
	>
		<div class="flex items-center justify-start text-sm">
			<span class="mx-4">
				04
			</span>
			<span class="line-through">
				Google logo design
			</span>
		</div>
		<svg
			width="20"
			height="20"
			fill="currentColor"
			viewBox="0 0 1024 1024"
			class="text-green-500 mx-4"
		>
			<path
				d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
				fill="currentColor"
			></path>
		</svg>
	</li> -->
	<!-- 
	<div
		class=""
		
	>
		<div class="">
			<input
				type="checkbox"
				:checked="todo.completed"
				@change="$parent.$emit('update-todo', todo._id, { completed: !todo.completed })"
			/>
			<div>
				<label>{{ todo.title }}</label>
				{{ `${createdAt.getDate()}/${createdAt.getMonth()}/${createdAt.getFullYear()}` }}
				<button @click="editTodo(todo)">Edit</button>
				<button @click="$emit('del-todo', todo._id)" class="del">x</button>
			</div>
		</div>
		<div class="todo__edit">
			<input
				type="text"
				ref="newTitle"
				v-model="newTitle"
				@keyup.enter="doneEdit"
				@keyup.esc="cancelEdit"
			/>
			<button @click="doneEdit">V</button>
			<button @click="cancelEdit">X</button>
		</div>
	</div> -->
</template>

<script>
export default {
	name: 'TodoItem',
	props: ['todo'],
	data() {
		return {
			newTitle: this.todo.title,
			editedTodo: null,
			createdAt: new Date(this.todo.createdAt),
		};
	},
	methods: {
		editTodo(todo) {
			this.newTitle = todo.title;
			this.editedTodo = todo;

			this.$nextTick(() => this.$refs.newTitle.focus());
		},
		doneEdit(e) {
			e.preventDefault();

			if (!this.editedTodo) {
				return;
			}
			this.editedTodo = null;
			this.$parent.$emit('update-todo', this.todo._id, { title: this.newTitle });
		},
		cancelEdit() {
			this.editedTodo = null;
		},
	},
};
</script>

<style>
input:checked + svg {
	display: block;
}
</style>
