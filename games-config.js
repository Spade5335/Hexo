// ===================================================================
// ZERO LAG GAMES - GAME CONFIGURATION
// ===================================================================
// Add all your games here. Both the home page and games page will 
// automatically use this data.
// ===================================================================

const games = [
    {
        universeId: '7436755782',
        placeId: '126884695634066',
        description: 'Plant seeds, watch them grow, and harvest amazing crops!'
    },
    {
        universeId: '7220976771',
        placeId: '124303827481398',
        description: 'An amazing adventure game with stunning visuals and engaging gameplay.'
    },
    {
        universeId: '9099047604',
        placeId: '99386576172436',
        description: 'An amazing adventure game with stunning visuals and engaging gameplay.'
    },
    // Add more games below - just copy the format above
    // {
    //     universeId: 'YOUR_UNIVERSE_ID',
    //     placeId: 'YOUR_PLACE_ID',
    //     description: 'Your custom description here'
    // },
];

// ===================================================================
// HELPER FUNCTIONS (Don't modify these)
// ===================================================================

// Format numbers (e.g., 1000 -> 1K, 1000000 -> 1M)
function formatNumber(num) {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

// Fetch game data from Roblox API
async function fetchGameData(universeId) {
    try {
        let response;
        try {
            response = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
        } catch {
            response = await fetch(`https://corsproxy.io/?https://games.roblox.com/v1/games?universeIds=${universeId}`);
        }
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error('Error fetching game data:', error);
        return null;
    }
}

// Fetch game icon from Roblox API
async function fetchGameIcon(universeId) {
    try {
        let response;
        try {
            response = await fetch(`https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`);
        } catch {
            response = await fetch(`https://corsproxy.io/?https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`);
        }
        const data = await response.json();
        return data.data[0]?.imageUrl;
    } catch (error) {
        console.error('Error fetching icon:', error);
        return null;
    }
}
