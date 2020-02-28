const errors = require("./errors.json");

class AppError extends Error {
  constructor(type = "SERVER_ERROR", params) {
    super(params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
    if (errors[type]) {
      this.name = errors[type].name;
      this.description =
        (params && params.message) ? params.message : errors[type].description;
      this.code = errors[type].code;
      this.status = errors[type].status;
    } else {
      this.name = type;
      this.code = type;
      this.status = 200;
      this.description = (params && params.message) ? {en: params['message'], ar: ''} : {};
    }
    this.date = new Date();
  }
  
}
module.exports = AppError;
