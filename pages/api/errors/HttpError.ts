export class HttpError {
    httpStatus: number;
    code: number;
    message: string;
    
    constructor(httpStatus: number, code: number, message: string) {
        this.httpStatus = httpStatus;
        this.code = code;
        this.message = message;
    }
}