<template>
	<ul>
		<TodoItem v-bind:key="todo._id" v-for="todo in todos" v-bind:todo="todo" />
	</ul>
</template>

<script>
import TodoItem from './TodoItem';

export default {
	name: 'Todos',
	components: {
		TodoItem,
	},
	props: ['todos'],
};
</script>

<style scoped></style>
