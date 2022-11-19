import { writable } from 'svelte/store';


export const testliste = writable(

[

{test_id: 1, test_username: "Arnold_99", 
bewertungen: [[44, "like"], [33, "dislike"], [2, "superlike"]]},

]

)