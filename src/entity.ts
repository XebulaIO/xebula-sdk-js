import axios, { AxiosInstance } from "axios";
import { Config } from "./config";
import { InvalidURLError } from "./error";
import { VERSION } from "./default";

export class Entity {
    private _axios: AxiosInstance;

    config: Config;

    /**
     * 
     * @param {Config} config Xebula client configuration
     */
    constructor(config: Config) {
        this.config = config;
        this._axios = axios.create({
            baseURL: this.config.base_url,
            timeout: this.config.timeout,
            validateStatus: this.config.validateStatus,
            withCredentials: true,
        });
    }

    buildURL(path: string): string {
        if (!path) {
            throw new InvalidURLError(path);
        }

        return `${this.config.base_url}/${VERSION}/${path}`;
    }

    async get(path: string, params: any | undefined): Promise<any> {
        const url = this.buildURL(path);
        const response = await this._axios.get(url, { params });
        return response.data;
    }

    async post(path: string, body: any): Promise<any> {
        const url = this.buildURL(path);
        const response = await this._axios.post(url, body);
        return response.data;
    }
}