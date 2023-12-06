<script>
    export let data;

    let selectedItem;


</script>

<body>
<h3>Update task </h3>
<div>
    <ol>
        {#each data?.records as record,index}
        <li> <input id={`job-checkbox-${index}`} checked={selectedItem?.task === record.task} type="checkbox" value={JSON.stringify(record)} on:click={()=> selectedItem = (selectedItem?.task !== record.task)? record  : undefined}/>{`${record.task}`}</li>
        {/each}
    </ol>
    {#if selectedItem}
    <form method="post" action="?/update">
        <label for="task">New task</label>
        <input id="task" name="task" type="text" required value={selectedItem.task}/>
        
        <input id="id" name="id" type="hidden" value={selectedItem.id} />
        <button type="submit">Submit</button>
    </form>
    {/if}
</div>


<style>
    body{
        background-color: grey; 
    }
    form{
        margin-top: .5em;
        display: flex;
        flex-direction: column;
    }
    form input{
        margin:.5em;
    }
</style>
</body>