<script>
    import Header from "./Header.svelte"
</script>



<main>
    <Header />

    <div class="main-container">
        <h2>Movies coming soon.</h2>
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