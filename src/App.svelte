<script>
	import { Router, Route } from "svelte-navigator"
	import Home from "./Home.svelte"
	import Characters from "./Characters.svelte"
	import Monsters from "./Monsters.svelte"
</script>


<Router>
	<main>
		<Route path="/">
			<Home />
		</Route>
		<Route path="/characters">
			<Characters />
		</Route>
		<Route path="/monsters">
			<Monsters />
		</Route>		
	</main>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>