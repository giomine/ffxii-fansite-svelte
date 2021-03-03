<script>
    import { Link } from "svelte-navigator";
</script>


<main>
    <nav>
        <div class="nav-container">
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to="/characters">
                <h2>Characters</h2>
            </Link>
            <Link to="/gameinfo">
                <h2>Game Info</h2>
            </Link>
        </div>
    </nav>

</main>


<style>
     main {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        width: 100%;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-container{
        width: 40%;
        display: flex;
        justify-content: space-evenly;
    }

    :global(a) h2 {
        color: rgb(70, 70, 70);
    }

    @media (max-width: 1050px) {
        .nav-container { width: 60%; }
    }

    @media (max-width: 720px) {
            .nav-container { width: 90%; }
    }

    @media (max-width: 450px) {
            .nav-container { width: 100%; }
    }
</style>