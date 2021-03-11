<script>
    import Header from "./Header.svelte"
</script>



<main>
    <Header HomeJP="ホーム" CharJP="キャラクター" GameJP="ゲーム" join="新規登録" login="ログイン" loginBarJP={true} squareEnixJP="https://www.jp.square-enix.com" />

    <div class="main-container">
        <h2>日本のサイトはもうすぐです。</h2>
    </div>
</main>


<style>
    main{
        background: #F6F6F6;
    }
    .main-container{
        height: 85vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>