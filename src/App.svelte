<script>
	import { Router, Route } from "svelte-navigator"
	import Home from "./Home.svelte"
	import Characters from "./Characters.svelte"
	import GameInfo from "./GameInfo.svelte"
	import Footer from "./Footer.svelte"
</script>


<Router>
	<main>
		<Route path="/">
			<Home />
		</Route>
		<Route path="/characters">
			<Characters />
		</Route>
		<Route path="/gameinfo">
			<GameInfo />
		</Route>
		<Footer />		
	</main>
</Router>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>