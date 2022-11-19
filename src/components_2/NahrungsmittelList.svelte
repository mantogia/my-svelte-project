<script>

export let data;


</script>



    Nahrungsmittel List

    {#each data as nm (nm.id)} 

        <div>{nm.name}</div>

    {/each}


