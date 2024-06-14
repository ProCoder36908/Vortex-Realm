document.addEventListener("DOMContentLoaded", function() {
    // Define your game list here with game name and image file
    const games = [
        { name: "Sonic Advance 3", image: "Sonic_Advance3.png" },
        { name: "Roblox", image: "roblox.png" },
        { name: "RocketBot Royale", image: "rocketbotroyale.webp" },
        { name: "Rooftop", image: "rooftop.webp" },
        { name: "Settings", image: "settings.png" },
        { name: "Shell Shockers", image: "shell-shockers.webp" },
        { name: "Slither", image: "slither.webp" },
        { name: "Slope", image: "slope.png" },
        { name: "Snorlax", image: "snorlax.webp" },
        { name: "Snowball", image: "snowball.webp" },
        { name: "Snow Rider 3D", image: "snowrider3d.webp" },
        { name: "Splash", image: "splash.png" },
        { name: "Stickman", image: "stickman.webp" },
        { name: "Stumble Guys", image: "stumble.png" },
        { name: "Subway Surfers", image: "subway.png" },
        { name: "Tabs", image: "tabs.png" },
        { name: "Time Shooter 2", image: "timeshooter2.webp" },
        { name: "Tomb of the Mask", image: "tombofmask.png" },
        { name: "Tunnel Rush", image: "tunnel.jpg" },
        { name: "Venge.io", image: "venge.webp" },
        { name: "Vex 5", image: "vex5 (1).png" },
        { name: "Vex 7", image: "vex7.png" },
        { name: "ZombsRoyale.io", image: "zombsroyale.png" },
        { name: "Basketball Stars", image: "basketball-stars.webp" },
        { name: "Backgrounds", image: "bg.png" },
        { name: "BitLife", image: "bitlife.png" },
        { name: "Clicker Heroes", image: "clickerheros.webp" },
        { name: "Call of Duty", image: "cod.webp" },
        { name: "Computer Monitor Icon", image: "computer-monitor-icon-on-black-background-vector-25959580.jpg" },
        { name: "Cookie Clicker", image: "cookie.png" },
        { name: "Crossy Road", image: "crossyroad.png" },
        { name: "Doge Miner", image: "doge-miner-1.png" },
        { name: "Doge Miner 2", image: "dogeminer2.png" },
        { name: "Download", image: "download (1).png" },
        { name: "Drift Boss", image: "driftboss.png" },
        { name: "Drift Hunters", image: "drift-hunters (1).png" },
        { name: "Duck Life", image: "ducklife (1).webp" },
        { name: "Emulator JS", image: "emulatorjs.png" },
        { name: "Evades.io", image: "evadesio.webp" },
        { name: "GBA", image: "gba.png" },
        { name: "Geo Dash", image: "geodash.png" },
        { name: "Geo Scratch Icon", image: "geoscratchicon.png" },
        { name: "Getaway Shootout", image: "getaway.webp" },
        { name: "Happy Wheels", image: "happywheels.jpg" },
        { name: "Hole.io", image: "hole.png" },
        { name: "Icon", image: "icon.png" },
        { name: "Icon 144", image: "icon-144.png" },
        { name: "Icons8 Game", image: "icons8-game-35.png" },
        { name: "Icons8 Home", image: "icons8-home-35 (2).png" },
        { name: "Just Fall LOL", image: "justfall.png" },
        { name: "Krunker", image: "krunker (1).png" },
        { name: "Math Games", image: "math.png" },
        { name: "Moto X3M", image: "moto.png" },
        { name: "Mr. Mine", image: "mrmine.png" },
        { name: "Music Games", image: "music.png" },
        { name: "NitroClash.io", image: "nitro.png" },
        { name: "Now GG", image: "nowgg.png" },
        { name: "Paper.io", image: "paper.png" },
        { name: "Platinum Solitaire 3", image: "platinum.png" },
        { name: "Pokemon Games", image: "pokemon.png" },
        { name: "Poki Games", image: "poki.png" },
        { name: "Pool Games", image: "pool.png" },
        { name: "Red Ball 4", image: "red.png" },
        { name: "Retro Games", image: "retro.png" },
        { name: "Retro Games", image: "retro.webp" },
        { name: "1v1 LOL", image: "1v1-lol.webp" },
        { name: "2D Rocket League", image: "2D-Rocket-League.webp" },
        { name: "2048", image: "2048.png" },
        { name: "4x4 Soccer", image: "4181324-200.png" },
        { name: "Agar.io", image: "agario.png" },
        { name: "Age of War", image: "ageofwar.jpg" },
        { name: "Ani Ball", image: "ani.png" },
        { name: "Apex Legends", image: "apex.webp" },
        { name: "App Logo", image: "app_logo.png" },
        { name: "Ball Games", image: "ball.png" },
        { name: "Basket Games", image: "basket.png" },
        { name: "BGS", image: "BGS.png" },
        { name: "Fortnite", image: "Fortnite.png" }
    ];

    const gameLinksContainer = document.querySelector(".game-links");

    // Loop through the games array and create HTML elements for each game link
    games.forEach(function(game) {
        // Create elements
        const gameLink = document.createElement("div");
        gameLink.classList.add("game-link", "card");

        const anchor = document.createElement("a");
        anchor.href = "#";  // Replace with actual link if available

        const img = document.createElement("img");
        img.src = game.image;
        img.alt = game.name;

        const p = document.createElement("p");
        p.textContent = game.name;

        // Append elements
        anchor.appendChild(img);
        anchor.appendChild(p);
        gameLink.appendChild(anchor);
        gameLinksContainer.appendChild(gameLink);
    });
});
