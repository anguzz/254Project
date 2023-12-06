<script>
	export let data;
</script>
<body>
<h3>Todo</h3>



<div>
	<ol>
		{#each data?.records as record}
			<li>{`${record.task} - ${record.date}`}</li>
		{/each}
	</ol>
</div>


<style>
    body{
        background-color: grey; 
    }
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
</body>