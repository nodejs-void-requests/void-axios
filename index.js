module.exports = function axios(url, config) {
  const validateStatus =
    (config ? config.validateStatus : null) ||
    function(stat) {
      Math.floor(+stat / 200) == 2;
    };
  const response = {
    data: "",
    status: 404,
    statusText: "Not Found",
    headers: (config ? config.headers : null) || {},
    config,
    request: {}
  };
  if (validateStatus(404)) {
    return Promise.resolve(response);
  } else {
    return Promise.reject({
      response,
      error: new Error(),
      request: {},
      message: "Connection is rejected",
      config
    });
  }
};

module.exports.get = module.exports.delete = module.exports.head = module.exports.options = module.exports.post = module.exports.put = module.exports.patch =
  module.exports;
