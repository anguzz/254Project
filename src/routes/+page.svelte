<script>
	export let data;
</script>
<h3>Todo</h3>



<div>
	<ol>
		{#each data?.records as record}
			<li>{`${record.task}`}</li>
		{/each}
	</ol>
</div>


<style>
    a{
        text-decoration: none;
        color:#1034e8;
        font-weight: 800;
        font-size: 1.2em;
    }
    a:hover{
        text-decoration: underline;
    }
</style>