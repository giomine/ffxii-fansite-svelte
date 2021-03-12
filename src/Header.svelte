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
</script>

<main>
    <div class="header">
        <img class="square-logo" src="https://cdn.sqexeu.com/headerbar/images/SE_Logo_White.svg" alt="square enix logo">
        <nav class="nav-container">
            <div class="navs">
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
        </nav>
		<div class="login-container">
			<nav class="flags">
				<Link to="/">🇬🇧</Link>
				<Link to="jp">🇯🇵</Link>
			</nav>
			<div class="triangle">	
			</div>
			<div class="login" class:loginJP={loginBarJP}>
				<a href="{squareEnixJP}" target="_blank" rel="noopener noreferrer"><p>{join}</p></a>
				<a href="{squareEnixJP}" target="_blank" rel="noopener noreferrer"><p>{login}</p></a>
			</div>
		</div>	
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
    }
    .header{
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
	.flags{
		width: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 20px;
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

	@media (max-width: 400px){
		.square-logo { width: 120px; padding: 0; margin: 10px 15px; }
		.header { border-bottom: none; }
		.nav-container { top: 45px; background: black; }
		.navs { width: 100%; padding: 20px 0; }
		.flags { margin-right: 45px; }
		.triangle { height: 0; width: 0; }
		.login { width: 120px; padding: 0; justify-content: space-evenly; }
	}
</style>