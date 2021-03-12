<script>
	import { Router, Route } from "svelte-navigator"
	import Home from "./Home.svelte"
	import Characters from "./Characters.svelte"
	import Movie from "./Movie.svelte"
	import GameInfo from "./GameInfo.svelte"
	import Footer from "./Footer.svelte"
	import Jp from "./Jp.svelte"
	import CharsJP from "./CharsJP.svelte"
	import MovieJP from "./MovieJP.svelte"
	import GameInfoJP from "./GameInfoJP.svelte";
</script>


<Router>
	<main>
		<Route path="/">
			<Home />
		</Route>
		<Route path="/characters">
			<Characters />
		</Route>
		<Route path="/movie">
			<Movie />
		</Route>
		<Route path="/gameinfo">
			<GameInfo />
		</Route>
		<Route path="jp">
			<Jp />
		</Route>
		<Route path="characters/jp">
			<CharsJP />
		</Route>
		<Route path="/movie/jp">
			<MovieJP />
		</Route>
		<Route path="gameinfo/jp">
			<GameInfoJP />
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