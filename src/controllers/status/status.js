const axios = require('axios');

async function getStatus(req, res, next) {
  let callResponse;
  try {
    callResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.status(200).json(callResponse.data);

  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return next(error);
  }

}

module.exports = getStatus;
