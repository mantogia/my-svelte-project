<script>
    import FeedbackForm from "../components/FeedbackForm.svelte";
	import FeedbackList from "../components/FeedbackList.svelte";
    import FeedbackStats from "../components/FeedbackStats.svelte";

    let feedback = [{
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    }]

	$: count = feedback.length
	$: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length

	const deleteFeedback = (e) => {

		console.log(e.detail)
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}

    const handleNewFeedback = (e) => {
        
        const newFeedback = e.detail
        feedback = [newFeedback, ...feedback]
        
    }

    

</script>


<main class="container">


	<h1>Hello!</h1>
	<FeedbackStats {count} {average}></FeedbackStats>
    <FeedbackForm on:submit-newFeedback={handleNewFeedback}></FeedbackForm>
	<FeedbackList feedback={feedback} on:delete-feedback={deleteFeedback}/>

</main>