<script>
    export let data;

</script>


<div>
    <ol>
        {#each data?.records as record}
        <li>{`${record.task}`}</li>
        {/each}
    </ol>
</div>