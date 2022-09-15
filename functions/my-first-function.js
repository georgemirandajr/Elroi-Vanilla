const { GAS_KEY } = process.env;

exports.handler = async () => ({
    statusCode: 200,
    body: { GAS_KEY },
  } );