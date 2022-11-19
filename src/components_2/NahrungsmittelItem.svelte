<script>
    import Card from "../components/Card.svelte";
    import {createEventDispatcher} from "svelte"

    export let objekt;

    const dispatch = createEventDispatcher()
    
    const handleVote = (vote) => {
        console.log(vote)
        dispatch("save-Vote", vote)
    }

</script>


<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
        <p class="card-text">
            <Card>{objekt.name}</Card>
        </p>
      <button class="btn btn-primary" on:click={() => handleVote(0)}>dislike</button>
      <button class="btn btn-primary" on:click={() => handleVote(1)}>like</button>
      <button class="btn btn-primary" on:click={() => handleVote(2)}>superlike</button>
    </div>
</div>

