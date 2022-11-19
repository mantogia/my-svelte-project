<script>
    import NahrungsmittelComponent from "./NahrungsmittelComponent.svelte";



export let data;


</script>



    Nahrungsmittel List

    {#each data as nm (nm.id)} 

        <NahrungsmittelComponent nahrungsmittel={nm}></NahrungsmittelComponent>

    {/each}


