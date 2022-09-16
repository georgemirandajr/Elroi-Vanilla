my_url = '/.netlify/functions/my-first-function'

fetch( my_url ).then( response => response.json()).then( data=> {
    // do something with data
    console.log(data);
}).catch(error => {
    //handle the error here
    return {
        status: 400,
        body: 'something went wrong'
    }
});
