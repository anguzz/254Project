<script>
	export let data;

	let selectedItem;
</script>

<div>
	<ol>
		{#each data?.records as record, index}
			<input
				id={`job-checkbox-${index}`}
				checked={selectedItem?.task === record.task}
				type="checkbox"
				value={JSON.stringify(record)}
				on:click={() => (selectedItem = selectedItem?.task !== record.task ? record : undefined)}
			/>
		{/each}
	</ol>
	{#if selectedItem}
		<form method="post" action="?/update">
			<label for="task">New task</label>
			<input id="task" name="task" type="text" required value={selectedItem.task} />

			<input id="id" name="id" type="hidden" value={selectedItem.id} />
			<button type="submit">Submit</button>
		</form>
	{/if}
</div>

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
