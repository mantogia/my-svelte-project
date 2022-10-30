<script>

	import FeedbackList from "./components/FeedbackList.svelte";
	let feedback = [
        {
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
        },
        ]
		
	const deleteFeedback = (e) => {

		console.log(e.detail)
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}

</script>

<main class="container">

	<h1>Hello!</h1>
	<FeedbackList feedback={feedback} on:delete-feedback={deleteFeedback}/>
</main>

<style>
</style>