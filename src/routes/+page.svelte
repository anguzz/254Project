<script>
	export let data;
</script>
<body>
<h3>Todo</h3>

<<<<<<< Updated upstream
=======
<h3>Todo <img src="src/routes/checkbox.jpg" alt="Check Mark Logo" width="50" height="50"> </h3>
>>>>>>> Stashed changes


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