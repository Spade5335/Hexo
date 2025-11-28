// ===================================================================
// ZERO LAG GAMES - GAME CONFIGURATION
// ===================================================================
// Add all your games here. Both the home page and games page will 
// automatically use this data.
// ===================================================================

const games = [
    { // Yeet Troll Tower
        universeId: '8712947205',
        placeId: '131613915463964',
        description: ''
    },
    { // Survive the 99 nights
        universeId: '9099047604',
        placeId: '99386576172436',
        description: ''
    },
    { // Dont wake the 67 up
        universeId: '8934653557',
        placeId: '74805461262368',
        description: ''
    },
    { // Dont wake the K-Pop demon up
        universeId: '8548339583',
        placeId: '134319041221248',
        description: ''
    },
    { // Dont wake the zoo
        universeId: '8762440226',
        placeId: '103474254498352',
        description: ''
    },
    { // Unknown
        universeId: '9233836512',
        placeId: '129455795245776',
        description: ''
    },
     { // Unknown 2
        universeId: '8681395451',
        placeId: '77353193309833',
        description: ''
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

// CORS Proxy URL - routes requests through a proxy to avoid CORS issues
const CORS_PROXY = 'https://corsproxy.io/?';

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
        const response = await fetch(`${CORS_PROXY}https://games.roblox.com/v1/games?universeIds=${universeId}`);
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
        const response = await fetch(`${CORS_PROXY}https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`);
        const data = await response.json();
        return data.data[0]?.imageUrl || '';
    } catch (error) {
        console.error('Error fetching icon:', error);
        return '';
    }
}
