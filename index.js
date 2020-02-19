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
        params ? params.message : '--';
      this.code = errors[type].code;
      this.status = errors[type].status;
      this.date = new Date();
    } else {
      this.name = type;
      this.code = type;
      this.status = 200;
      this.date = new Date();
      this.description = params;
    }
  }
}
module.exports = AppError;
