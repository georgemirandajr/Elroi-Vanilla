API_URL = "https://api.collectapi.com/gasPrice/fromCity?city=boston"
// const { GAS_KEY } = process.env;
import {GAS_KEY} from './.netlify/functions/my-first-function'

async function getCityGasPrice () {
    const response = await fetch( API_URL, { 
        headers: {
            'Content-type': 'application/json',
            'Authorization': `apikey ${GAS_KEY}`
        }
    } );
    const json = await response.json();
    console.log( json );
};

getCityGasPrice();

