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

        fetch('https://www.moogleapi.com/api/v1/characters/search?origin=xii')
        .then(res => res.json())
        .then(data => {
            data.forEach((char) => {
            console.log(char.pictures[0].url + " Name: " + char.name + ", Origin: " + char.origin + ", About: " + char.description)  

            const cards = document.createElement('div')
            cards.setAttribute('class', 'cards')

            const image = document.createElement('img');
            image.src = char.pictures[0].url
            image.setAttribute('class', 'charImages')

            const imageContainer = document.createElement('div')
            imageContainer.setAttribute('class', 'imageContainer')

            const name = document.createElement('h2');
            name.textContent = char.name;
            name.setAttribute('class', 'charH2')

            const origin = document.createElement('p');
            origin.textContent = char.origin;
            origin.setAttribute('class', 'cardText');

            const description = document.createElement('p');
            description.textContent = char.description;
            description.setAttribute('class', 'cardText');

            containers.appendChild(cards)
            cards.appendChild(imageContainer)
            imageContainer.appendChild(image)
            cards.appendChild(name)
            cards.appendChild(origin)
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
        height: 3240px;
        height: 100%;
        display: block;
    }

    @media (max-width: 700px){
        main { height: 100%; }
    }
</style>