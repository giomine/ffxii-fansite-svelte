<script>

</script>



<main>
    <div class="container">
        <div class="icon-container">
            <div class="icons">
                <img class="rating-logo" src="/images/RP.png" alt="rating logo">
            </div>
            <div class="icons">
                <img src="/images/xbox-logo.png" alt="Xbox logo">
            </div>
            <div class="icons">
                <img src="/images/ps4logo.png" alt="playstation 4 logo">
            </div>
            <div class="icons">
                <img src="/images/Steam.png" alt="steam logo">
            </div>
            <div class="icons">
                <img class="pc-logo" src="/images/PC.png" alt="PC logo">
            </div>   
        </div>

        <div class="squarelogo">
            <img src="/images/squarelogo.png" alt="square enix logo">
        </div>

        <div class="legal">
            <p>Final Fantasy XII: The Zodiac Age © 2017 Square Enix Ltd. Square Enix and the Square Enix logo are registered trademarks of Square Enix
                Holdings Co., Ltd. "Playstation" and the "PS" Family logo are registered trademarks and "PS3", "PS4" and the 
                Playstation Network logo are trademarks of Sony Computer Entertainment Inc. Microsoft, Kinect, Xbox, Xbox 360, Xbox LIVE,
                 and the Xbox logos are trademarks of The Microsoft Group of companies and are used under license from Microsoft. The rating 
                 icon is a registered trademark of the Pan European Game Information. All other trademarks are the property of their respective 
                 owners. All rights reserved.
            </p>
        </div>

        <div class="legal-links">
            <p>COOKIE POLICY • TERMS OF USE • PRIVACY POLICY • SUPPORT • MATERIAL USAGE</p>
        </div>

    </div>
</main>



<style>
    main{
		height: 45vh;
        background: white;
        color: rgb(150, 150, 150);
    }
    img{
        width: 180px;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .icon-container{
        /* height: 100px; */
        height: 90px;
        margin: 50px 200px;
        display: flex;
        justify-content: space-between;
    }
    .icons{
        display: flex;
        align-items: center;
        margin: 0 10px;
    }
    .rating-logo{
        width: 280px;
    }
    .pc-logo{
        width: 70px;
    }
    .squarelogo{
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .squarelogo img {
        width: 250px;
    }

    .legal{
        font-size: 10.4px;
        margin: 25px 30px;
        line-height: 1.6;
        letter-spacing: .01em;
        text-align: center;   
    }
    .legal-links{
        display: flex;
        justify-content: center;
        font-size: 13px;
    }
    .legal-links p{
        margin: 0;
    }

    @media (max-width: 1000px){
        .icon-container { width: 100vw; justify-content: space-evenly; }
        img { width: 130px; }
        .pc-logo { width: 50px; }
        .icons { margin: 0; }
		.rating-logo { width: 230px; }
	}

    @media (max-width: 1100px){
        main { height: 100%; }
        .icon-container { margin: 50px 0; }
        img { width: 100px; }
        .rating-logo { width: 200px; }
    }

    @media (max-width: 600px){
        img { width: 85px; }
        .rating-logo { width: 170px; }
    }

    @media (max-width: 480px){
        main { height: 100%; }
    }

    @media (max-width: 450px){
        img { width: 50px; }
        .rating-logo { width: 100px; }
    }

    @media (max-width: 280px){
        img { width: 40px; }
        .rating-logo { width: 60px; }
    }
</style>