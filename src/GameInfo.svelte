<script>
    import Navbar from "./Navbar.svelte"

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
        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        fetch('https://www.moogleapi.com/api/v1/games/8e801e49-4f82-4899-39a4-08d6b0a627a3')
        .then(res => res.json())
        .then(data => {
            data.forEach((ff12) => {
            console.log(ff12.picture + " Name: " + ff12.title + ", Platform: " + ff12.platform + ", Release Date: " + ff12.releaseDate + ", Description: " + ff12.description)  

            const card = document.createElement('div')
            card.setAttribute('class', 'card gameCard')

            const image = document.createElement('img');
            image.src = ff12.picture
            image.setAttribute('class', 'gameImage')

            const imageContainer = document.createElement('div')
            imageContainer.setAttribute('class', 'gameImageContainer')

            const title = document.createElement('h2');
            title.textContent = ff12.title;

            const platform = document.createElement('p');
            platform.textContent = ff12.platform;

            const releaseDate = document.createElement('p');
            releaseDate.textContent = "Release Date: " + ff12.releaseDate;

            const description = document.createElement('p');
            description.textContent = ff12.description;
            description.setAttribute('class', 'gameDescription')

            container.appendChild(card)
            card.appendChild(imageContainer)
            imageContainer.appendChild(image)
            card.appendChild(title)
            card.appendChild(platform)
            card.appendChild(releaseDate)
            card.appendChild(description)
        })
            app.appendChild(container)
        })
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ', error)
        })
    }
</script>


<main>
    <h1><Navbar /> FFXII Info</h1>
    <div id="root"></div>  
</main>

<style>
    
</style>