<script>

    import Card from "./Card.svelte";
    export let nahrungsmittel;

 
</script>   


<Card>
    <div class="num-display"> {nahrungsmittel.id} </div>

    <p class="text-display">
        {nahrungsmittel.name}
    </p>
</Card>