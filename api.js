API_URL = "https://api.collectapi.com/gasPrice/fromCity?city=boston"
const api_key = API_KEY;

async function getCityGasPrice () {
    const response = await fetch( API_URL, { 
        headers: {
            'Content-type': 'application/json',
            'Authorization': `apikey ${api_key}`
        }
    } );
    const json = await response.json();
    console.log( json );
};

getCityGasPrice();

