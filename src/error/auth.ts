class UnauthenticatedError extends Error {
    constructor(msg: string) {
        super(msg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnauthenticatedError.prototype);
    }

    toString(): string  {
        return "hello " + this.message;
    }
}

export default UnauthenticatedError;