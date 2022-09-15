API_URL = "https://api.collectapi.com/gasPrice/fromCity?city=boston"

async function getKey() {
    const response = await fetch( 'https://harmonious-cuchufli-93ffeb.netlify.app/.netlify/functions/my-first-function' );
    const newKey = await response.json();
    console.log( newKey );
};

async function getCityGasPrice () {
    const response = await fetch( API_URL, { 
        headers: {
            'Content-type': 'application/json',
            'Authorization': `apikey ${newKey}`
        }
    } );
    const json = await response.json();
    console.log( json );
};

getCityGasPrice();

