module.exports = class HttpError extends Error {
    public status: number;
    public message: string;

    constructor(status: number, message: string) {
      super(message);
      this.status = status;
    }
  
    static UnauthorizedError(message = "Not authorized") {
      return new HttpError(401, message);
    }
  
    static BadRequest(message = "Bad Request") {
      return new HttpError(400, message);
    }
  
    static ForbiddenError() {
      return new HttpError(403, "Forbidden.");
    }
  
    static NotFoundError(message = "Not Found.") {
      return new HttpError(404, message);
    }
    
    static ConflictError(message = "Conflict.") {
      return new HttpError(409, message);
    }
  };