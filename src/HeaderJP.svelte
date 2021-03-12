<script>
	import { Link } from "svelte-navigator";
	export let loginBarJP = true;
</script>

<main>
    <div class="header">
        <img class="square-logo" src="https://cdn.sqexeu.com/headerbar/images/SE_Logo_White.svg" alt="square enix logo">
        <nav class="nav-container">
            <div class="navs">
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
        </nav>
		<div class="login-container">
			<nav class="flags">
				<Link to="/">🇬🇧</Link>
				<Link exact to="/jp">🇯🇵</Link>
			</nav>
			<div class="triangle">	
			</div>
			<div class="login" class:loginJP={loginBarJP}>
				<a href="https://www.jp.square-enix.com" target="_blank" rel="noopener noreferrer"><p>新規登録</p></a>
				<a href="https://www.jp.square-enix.com" target="_blank" rel="noopener noreferrer"><p>ログイン</p></a>
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
		.square-logo { width: 150px; padding: 15px 10px; }
		.triangle { height: 0; width: 0; }
		.login { width: 120px; padding: 0; justify-content: space-evenly; }
	}
</style>