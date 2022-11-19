<script>
    import NahrungsmittelList from "../components_2/NahrungsmittelList.svelte";
    import { nahrungsmittelliste } from '../store.js';


    $: number = 0;
    let liste;
    nahrungsmittelliste.subscribe(value => {
        liste = value;
    });

    const addOne  = (e) =>{
        number = number + 1;
    }

</script>
    
    
<main class="container">
    
    <h1>Hello!</h1>
	
	<div>{liste[number].id}</div>
    <div>{liste[number].name}</div>
    <div>{liste[number].kategorie[0]}</div>
    <div>{liste[number].kategorie[1]}</div>
    <div>{liste[number].kategorie[2]}</div>
    <div>{liste[number].kategorie[3]}</div>

    <button on:click={addOne}> Button</button>
    
</main>
    