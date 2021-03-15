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

	@media (width: 823px){
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
		.login { width: 110px; padding-left: 0; font-size: 0.7rem; }
	}

	@media (max-width: 735px){
		main { width: 100vw; }
		.square-logo { width: 150px; padding: 0; margin: 10px 15px; }
		.header { border-bottom: none; width: 100vw; }
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
    }
</style>