<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    export let feedback = []
    console.log(feedback)
  


</script>
<main>
    Feedback List

    {#each feedback as fb (fb.id)} 
       <FeedbackItem item = {fb} on:delete-feedback/>
    {/each}

</main>