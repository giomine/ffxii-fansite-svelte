<script>
	import { Link } from "svelte-navigator";
	export let loginBarJP = true;

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
                <Link exact to="/jp">
                    <h2>ホーム</h2>
                </Link>
                <Link exact to="/characters/jp">
                    <h2>キャラクター</h2>
                </Link>
                <Link exact to="/movie/jp">
                    <h2>ムービー</h2>
                </Link>
                <Link exact to="/gameinfo/jp">
                    <h2>ゲーム</h2>
                </Link>
            </div>
        </div>
		<div class="login-container right hide-on-med-and-down">
			<div class="flags">
				<Link to="/">🇬🇧</Link>
				<Link exact to="/jp">🇯🇵</Link>
			</div>
			<div class="triangle">	
			</div>
			<div class="login" class:loginJP={loginBarJP}>
				<a href="https://www.jp.square-enix.com" target="_blank" rel="noopener noreferrer"><p>新規登録</p></a>
				<a href="https://www.jp.square-enix.com" target="_blank" rel="noopener noreferrer"><p>ログイン</p></a>
			</div>
		</div>	
		<a href="#" data-target="mobile-demo" class="sidenav-trigger hide-on-large-only hamburger-icon" on:click={mobileNav}><i class="material-icons white-text right">menu</i></a>
			


		
		  <ul class="sidenav black" id="mobile-demo">
			<div class="login-container-small">
				<div class="login-small" class:loginJP={loginBarJP}>
					<a href="https://www.jp.square-enix.com" target="_blank" rel="noopener noreferrer"><p>新規登録</p></a>
					<a href="https://www.jp.square-enix.com" target="_blank" rel="noopener noreferrer"><p>ログイン</p></a>
				</div>
			</div>	
			<Link exact to="/">
				<h2>ホーム</h2>
			</Link>
			<Link exact to="/characters">
				<h2>キャラクター</h2>
			</Link>
			<Link exact to="/movie">
				<h2>ムービー</h2>
			</Link>
			<Link exact to="/gameinfo">
				<h2>ゲーム</h2>
			</Link>
			<div class="flag-small-container">
				<div class="flags-small">
					<Link to="/">🇬🇧</Link>
					<Link to="jp">🇯🇵</Link>
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
</style>