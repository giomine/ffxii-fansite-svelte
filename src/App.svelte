<script>
	import { Router, Route } from "svelte-navigator"
	import Home from "./Home.svelte"
	import Characters from "./Characters.svelte"
	import GameInfo from "./GameInfo.svelte"
	import Header from "./Header.svelte"
	import Footer from "./Footer.svelte"
	import Jp from "./Jp.svelte"
</script>


<Router>
	<main>
		<Header />
		<Route path="/">
			<Home />
		</Route>
		<Route path="/characters">
			<Characters />
		</Route>
		<Route path="/gameinfo">
			<GameInfo />
		</Route>
		<Route path="jp">
			<Jp />
		</Route>
		<Route path="jp#loaded">
			<Jp />
		</Route>
		<Route path="jp/jp">
			<Jp />
		</Route>
		<Route path="jp/jp/jp">
			<Jp />
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