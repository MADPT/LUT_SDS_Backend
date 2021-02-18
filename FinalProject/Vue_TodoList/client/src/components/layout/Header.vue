<template>
	<header class="header">
		<p class="font-bold text-md p-4 text-black">
			Todo List
			<span class="text-gray-500 dark:text-gray-300"> ({{ todos.length }}) </span>
		</p>
	</header>
</template>

<script>
export default {
	name: 'Header',
	props: ['todos'],
};
</script>

<style scoped></style>
