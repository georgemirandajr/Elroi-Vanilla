const { GAS_KEY } = process.env;

exports.handler = async () => ({
    statusCode: 200,
    body: { GAS_KEY },
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

