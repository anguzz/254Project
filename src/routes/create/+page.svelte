<body>
	<form method="post" action="?/create">
		<h3>Add task </h3>
		<input type="text" required name="task" />
		<h3> Add a date </h3>
		<input type="date" required name="date" />

		<button type="submit">add</button>
	</form>
	

<style>
	body{
		background-color: grey;
	}
	form {
		margin-top: 0.5em;
		display: flex;
		flex-direction: column;
	}
	form input {
		margin: 0.5em;
	}
</style>

</body>