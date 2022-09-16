const { GAS_KEY } = process.env;
API_URL = "https://api.collectapi.com/gasPrice/fromCity?city=boston";

exports.handler = async (event) => {
    
    const response = await fetch(API_URL, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `apikey ${GAS_KEY}`
        }
    });

    const json = await response.json();
    console.log(json);

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: GAS_KEY
        }), 
    };
};
    