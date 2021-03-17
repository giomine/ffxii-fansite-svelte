<script>
	import { Link } from "svelte-navigator";
	export let join = "JOIN";
	export let login = "LOG IN";
	export let loginBarJP = false;
	export let squareEnixJP = "http://square-enix-games.com";
	export let HomeJP = "Home"
	export let CharJP = "Characters"
	export let GameJP = "Game Info"
	export let MovieJP = "Movie"

	function mobileNav() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  }
</script>

<main>
    <div class="headers">
		<img class="square-logo" src="https://cdn.sqexeu.com/headerbar/images/SE_Logo_White.svg" alt="square enix logo">
		

        <div class="nav-container">
			<div class="navs right hide-on-med-and-down">
                <Link exact to="/">
                    <h2>{ HomeJP }</h2>
                </Link>
                <Link exact to="/characters">
                    <h2>{ CharJP }</h2>
				</Link>
				<Link exact to="/movie">
                    <h2>{ MovieJP }</h2>
                </Link>
                <Link exact to="/gameinfo">
                    <h2>{ GameJP }</h2>
				</Link>
            </div>
        </div>
		<div class="login-container right hide-on-med-and-down">
			<div class="flags">
				<Link to="/">🇬🇧</Link>
				<Link to="jp">🇯🇵</Link>
			</div>
			<div class="triangle">	
			</div>
			<div class="login" class:loginJP={loginBarJP}>
				<a href="{squareEnixJP}" target="_blank" rel="noopener noreferrer"><p>{join}</p></a>
				<a href="{squareEnixJP}" target="_blank" rel="noopener noreferrer"><p>{login}</p></a>
			</div>
		</div>	
		<a href="#" data-target="mobile-demo" class="sidenav-trigger hide-on-large-only hamburger-icon" on:click={mobileNav}><i class="material-icons white-text right">menu</i></a>
			


		
		  <ul class="sidenav black" id="mobile-demo">
			<div class="login-container-small">
				<div class="login-small" class:loginJP={loginBarJP}>
					<a href="{squareEnixJP}" target="_blank" rel="noopener noreferrer"><p>{join}</p></a>
					<a href="{squareEnixJP}" target="_blank" rel="noopener noreferrer"><p>{login}</p></a>
				</div>
			</div>	
			<Link exact to="/">
				<h2>{ HomeJP }</h2>
			</Link>
			<Link exact to="/characters">
				<h2>{ CharJP }</h2>
			</Link>
			<Link exact to="/movie">
				<h2>{ MovieJP }</h2>
			</Link>
			<Link exact to="/gameinfo">
				<h2>{ GameJP }</h2>
			</Link>
			<div class="flag-small-container">
				<div class="flags-small">
					<Link class="flag-logo" to="/">🇬🇧</Link>
					<Link class="flag-logo" to="jp">🇯🇵</Link>
				</div>
			</div>
		  </ul>

	</div>
</main>

<style>
    a{
        text-decoration-line: none;
        color: black;
    }
    a:hover{
        color: rgb(184, 62, 16);
    }

    h2{
		color: white;
		font-size: 1.4rem;
		margin: 0;
    }
    .headers{
		width: 100vw;
		height: 50px;
		background: black;
		display: flex;
        justify-content: space-between;
        align-items: center;
		border-bottom: 2px solid rgb(14, 14, 14);
	}

	.square-logo{
		height: 20px;
		margin-top: 5px;
		padding: 0 20px;
    }

    .nav-container {
        width: 100%;
		z-index: 1;
        position: absolute;
        display: flex;
        justify-content: center;
		align-items: center;
    }
    
    .navs{
        width: 40%;
        display: flex;
		justify-content: space-evenly;
    }

	.login-container{
		display: flex;
		z-index: 2;
        position: relative;
	}
	.login-container-small{
		display: flex;
		justify-content: center;
		z-index: 2;
		position: relative;
		width: 100%;
		background: white;
	}
	.flags{
		width: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 20px;
	}
	.flag-small-container{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.flags-small{
		width: 50%;
		display: flex;
		justify-content: space-evenly;
	}
	.login{
		background: white;
		height: 50px;
		width: 140px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		font-size: 0.8rem;
		font-weight: bold;
	}
	.login-small{
		background: white;
		height: 50px;
		width: 60%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		font-size: 0.9rem;
		font-weight: bold;
	}
	.loginJP{
		width: 140px;
		font-size: 0.9rem;
		padding-left: 5px;
	}
	.triangle{
		 background:linear-gradient(to bottom right,rgb(0, 0, 0) 50%,rgb(255, 255, 255) 50%);
		 height: 50px;
		 width: 50px;
	}
	.hamburger-icon{
		margin-right: 20px;
	}

	/* @media (width: 823px){
		.navs { width: 50%; }
		.flags { margin-right: -10px; flex-direction: column; justify-content: center; }
	}

	@media (width: 812px){
		.navs { width: 50%; }
		.flags { margin-right: -10px; flex-direction: column; justify-content: center; }
	}

	@media (width: 768px){
		.square-logo { width: 180px; }
		.navs { width: 50%; }
		.flags { margin-right: -10px; flex-direction: column; justify-content: center; }
		.login { width: 110px; padding-left: 0; }
	}

	@media (width: 736px){
		.square-logo { width: 180px; }
		.navs { width: 50%; }
		.flags { margin-right: -10px; margin-top: 5px; height: 40px; flex-direction: column; justify-content: center; }
		.login { width: 110px; padding-left: 0; }
	}

	@media (max-width: 735px){
		main { width: 100vw; }
		.square-logo { width: 150px; padding: 0; margin: 10px 15px; }
		.headers { border-bottom: none; width: 100vw; }
		.nav-container { top: 45px; background: black; }
		.navs { width: 100vw; padding: 20px 0; }
		.triangle { height: 0; width: 0; }
		.login { width: 120px; padding: 0; justify-content: space-evenly; }
	}

	@media (max-width: 450px){
		.square-logo { width: 140px; padding: 0; margin: 10px 15px; }
	}

	@media (max-width: 320px){
		.square-logo { width: 100px; padding: 0; margin: 10px 15px; }
	}

	@media (max-width: 280px){
		.flags { flex-direction: column; padding-top: 10px; justify-content: space-evenly; }
		.login { width: 100%; height: 70px; padding-top: 10px; flex-direction: column; }
		.navs { flex-direction: column; }
		.navs h2 { padding: 5px 0;}
    } */
</style>