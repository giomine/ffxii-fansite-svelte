<script>
    import HeaderJP from "./HeaderJP.svelte"
</script>



<main>
    <HeaderJP />

    <!-- This was the previous way, kept for reference. Had to be inserted into all JP page files, didn't work with links. -->
    <!-- <Header HomeJP="ホーム" CharJP="キャラクター" GameJP="ゲーム" join="新規登録" login="ログイン" loginBarJP={true} squareEnixJP="https://www.jp.square-enix.com" /> -->

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