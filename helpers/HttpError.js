const errorMessageList = {
    400: "Bad request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
  };

const HttpError = (status, massage = errorMessageList[status]) => {
    const error = new Error(massage);
    error.status = status;
    return error;
}

module.exports = HttpError;