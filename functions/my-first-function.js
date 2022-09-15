exports.handler = async () => ({
    statusCode: 200,
    body: {
        API_URL:"https://api.collectapi.com/gasPrice/fromCity?city=boston",
        API_KEY:"6JBsufP4GegihSRoEDsEsB:7i0kqhMWLNYcfmfMJReaaS"
    },
  } );


// async function getCityGasPrice () {
//     const response = await fetch( API_URL, { 
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': `apikey ${API_KEY}`
//         }
//     } );
//     const json = await response.json();
//     console.log( json );
// };

// getCityGasPrice();

