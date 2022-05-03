type requestErrorProps = {
  status?: number,
  message: string
}

class RequestError extends Error {
  private readonly _status: number = null;

  constructor({ status, message }: requestErrorProps) {
    super(message);
    this._status = status;
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, RequestError.prototype);
  }

  public get status() {
    return this._status;
  }
}

export default RequestError;
