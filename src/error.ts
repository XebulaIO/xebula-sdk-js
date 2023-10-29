class XebulaError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class InvalidURLError extends XebulaError {
    details: string;

    constructor(details: string) {
        super('invalid API url');
        this.details = details;
    }

    get message(): string {
        return `${super.message}: ${this.details}`;
    }
}

export class NotImplementedError extends XebulaError {
    constructor() {
        super('method not implemented');
    }
}