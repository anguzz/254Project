<form method="post" action="?/create">
	<h3>Add task </h3>
	<input type="text" required name="task" />

	<button type="submit">add</button>
</form>

<style>
	form {
		margin-top: 0.5em;
		display: flex;
		flex-direction: column;
	}
	form input {
		margin: 0.5em;
	}
</style>
