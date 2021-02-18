<template>
	<div>
		<form class="relative px-4 pb-4 flex" @submit="addTodo">
			<input
				class="flex-1 px-4 mr-4 rounded border border-gray-300 border-transparent bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
				v-model="title"
				type="text"
				name="title"
				placeholder="Add Todo..."
				required
			/>
			<button
				type="submit"
				value="Submit"
				class="w-10 h-10 bg-white text-gray-300 border-gray-300 rounded hover:bg-gray-300 hover:text-white border focus:outline-none transition ease-in duration-100"
			>
				<font-awesome-icon icon="plus" />
			</button>
		</form>
		<div class="border-t-2 border-gray-100"></div>
	</div>
</template>

<script>
export default {
	name: 'AddTodo',
	data() {
		return {
			title: '',
		};
	},
	methods: {
		addTodo(e) {
			e.preventDefault();

			// Send up to parent
			this.$emit('add-todo', this.title);

			this.title = '';
		},
	},
};
</script>

<style></style>
