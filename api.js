API_URL = "https://api.collectapi.com/gasPrice/fromCity?city=boston"

async function getCityGasPrice () {
    const fetchedKey = await fetch( 'https://harmonious-cuchufli-93ffeb.netlify.app/.netlify/functions/my-first-function' );
    const keyString = await fetchedKey.json();
    
    const response = await fetch( API_URL, { 
        headers: {
            'Content-type': 'application/json',
            'Authorization': `apikey ${keyString}`
        }
    } );
    const json = await response.json();
    console.log( json );
};

getCityGasPrice();

