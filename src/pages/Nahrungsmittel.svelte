<script>
    import NahrungsmittelItem from "../components_2/NahrungsmittelItem.svelte";
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

    const saveVote = (e) =>{
        number = number + 1;

        const newVote = e.detail;
        console.log("hallo " + newVote)

    }

</script>
    
    

    
    <h1>Wie gerne essen Sie dieses Nahrungsmittel?</h1>
	
    <NahrungsmittelItem objekt={liste[number]} on:save-Vote={saveVote}></NahrungsmittelItem>

    <div>TEST</div>
	<div>{liste[number].id}</div>
    <div>{liste[number].name}</div>
    <div>{liste[number].kategorie[0]}</div>
    <div>{liste[number].kategorie[1]}</div>
    <div>{liste[number].kategorie[2]}</div>
    <div>{liste[number].kategorie[3]}</div>

    <button on:click={addOne}> Button</button>

    <NahrungsmittelList data = {liste}></NahrungsmittelList>
    

    <style>
        h1 { 
            display: flex;
            justify-content: center;
        }



    </style>
