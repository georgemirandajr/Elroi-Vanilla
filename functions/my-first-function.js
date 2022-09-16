const { GAS_KEY } = process.env;
API_URL = "https://api.collectapi.com/gasPrice/fromCity?city=boston";
import fetch from "node-fetch";

exports.handler = async (event) => {
    
    const response = await fetch(API_URL, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `apikey ${GAS_KEY}`
        }
    });

    const data = await response.json();
    // console.log(data);

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: data
        }), 
    };
};
    