<script>
    export let data;
    let selectedItem;
    let confirm = false;
</script>


<body>
<h3>Remove task </h3>
<div>
    <ol>
        {#each data?.records as record,index}
        <li> <input id={`job-checkbox-${index}`} checked={selectedItem?.task === record.task} type="checkbox" value={JSON.stringify(record)} on:click={()=> selectedItem = (selectedItem?.task !== record.task)? record  : undefined}/>{`${record.task}  `}</li>
        {/each}
    </ol>
    {#if selectedItem}
    <form method="post" action="?/delete">

        <p>{selectedItem.task}</p>
        <input id="id" name="id" type="hidden" value={selectedItem.id} />
        {#if confirm}
        <label for="delete">confirm delete?</label>
        <button id="delete" name="delete" type="submit">Delete</button>
        {:else}
        <button id="confirm" name="confirm" on:click={()=> confirm = true}>Delete</button>
        {/if}
    </form>
    {/if}
</div>



<style>
    body{
        margin: 0;
        padding: 0;
        background-color: grey;
    }
    form{
        margin-top: .5em;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    form input{
        margin:.5em;
    }
    form p{
        margin:0;
    }
</style>

</body>