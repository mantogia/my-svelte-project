<script> 
    import {v4 as uuidv4} from 'uuid'   
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte"
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    let text = ""
    let btnDisabled = true

    let min = 10

    let message = null

    let rating = 10

    const handleInput  = () =>{
        if (text.trim().length <= min) {
            message = `You need at least ${min} characters`
            btnDisabled = true
        } else{
            message = null
            btnDisabled = false
        }
    }

    const handleSelect = (e) => {
        rating = e.detail
    }

    const handleSubmit = (e) => {
        if(text.trim().length > min) {
            const newFeedback = {
                id: uuidv4(),
                text, 
                rating: rating
            }
            dispatch('submit-newFeedback', newFeedback)
            console.log(newFeedback)
            text = ""
        
        }
    }
</script>


<Card>

<header>
    <h2>How would you rate us you cunt?</h2>
</header>
<form on:submit|preventDefault={handleSubmit}>
    <!-- Rating Select -->
    <RatingSelect on:rating-select={handleSelect}></RatingSelect>
    <div class="input-group">
        <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us somemthing you cunt">
        <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>
    {#if message}
        <div class="message">
            {message}
        </div>
    {/if}



</form>
</Card>