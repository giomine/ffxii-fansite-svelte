<script>
    import Header from "./Header.svelte"

        // ------------ this timeOut is only a temp solution ------------vv
        setTimeout(function(){                  
            if(!window.location.hash) {
                    window.location = window.location + '#loaded';
                    window.location.reload();
                }
        }, 10);
    // ------------ this timeOut is only a temp solution ------------^^

    window.onload = () => { 
        const app = document.getElementById('root')
        const containers = document.createElement('div')
        containers.setAttribute('class', 'containers')

        fetch('https://www.moogleapi.com/api/v1/games/8e801e49-4f82-4899-39a4-08d6b0a627a3')
        .then(res => res.json())
        .then(data => {
            data.forEach((ff12) => {
            console.log(ff12.picture + " Name: " + ff12.title + ", Platform: " + ff12.platform + ", Release Date: " + ff12.releaseDate + ", Description: " + ff12.description)  

            const cards = document.createElement('div')
            cards.setAttribute('class', 'cards gameCard')

            const image = document.createElement('img');
            image.src = ff12.picture
            image.setAttribute('class', 'gameImage')

            const imageContainer = document.createElement('div')
            imageContainer.setAttribute('class', 'gameImageContainer')

            const title = document.createElement('h2');
            title.textContent = ff12.title;
            title.setAttribute('class', 'charH2')

            const platform = document.createElement('p');
            platform.textContent = ff12.platform;

            const releaseDate = document.createElement('p');
            releaseDate.textContent = "Release Date: " + ff12.releaseDate;

            const description = document.createElement('p');
            description.textContent = ff12.description;
            description.setAttribute('class', 'gameDescription')

            containers.appendChild(cards)
            cards.appendChild(imageContainer)
            imageContainer.appendChild(image)
            cards.appendChild(title)
            cards.appendChild(platform)
            cards.appendChild(releaseDate)
            cards.appendChild(description)
        })
            app.appendChild(containers)
        })
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ', error)
        })
    }
</script>

<Header />
<main>
    <div id="root"></div>  
</main>

<style>
    main{
        display: flex;
        align-items: center;
        height: 100%;
        display: block;
    }
</style>