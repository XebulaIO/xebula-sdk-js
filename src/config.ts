import { DEFAULT_BASE_URL, DEFAULT_TIMEOUT } from './default';

export class Config {
    base_url: string;
    timeout: number;
    validateStatus: (status: number) => boolean;

    constructor({
        base_url = DEFAULT_BASE_URL,
        timeout = DEFAULT_TIMEOUT,

        validateStatus = (
            (status: number) => true
        )
    }) {
        this.base_url = base_url;
        this.timeout = timeout;
        this.validateStatus = validateStatus;
    }
}