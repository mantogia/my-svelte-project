<script>
    import Router from "svelte-spa-router";
    import routes from "./routes";

</script>

    <p>Navigation</p>

    <ul>
        <li><a href = "#/feedback">Feedback</a> </li>
        <li><a href = "#/nahrungsmittel">Nahrungsmittel</a> </li>
    </ul>

    <main class="container">
        
        <Router {routes} />

    </main>

<style>
</style>