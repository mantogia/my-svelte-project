<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    import {fade, scale} from 'svelte/transition';
    import {onMount, onDestroy} from 'svelte'

    export let feedback
    onMount(() => {

    })

    onDestroy(() => {

    })


</script>
<main>
    Feedback List

    {#each feedback as fb (fb.id)} 
        <div in:scale out:fade="{{duration: 500 }}">
            <FeedbackItem item = {fb} on:delete-feedback/>
        </div>
    {/each}

</main>