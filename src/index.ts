import { Config } from "./config";
import { TronNetwork } from "./network/tron";

export class Xebula {
    config: Config;
    tron: TronNetwork;

    /**
     * 
     * @param {Config} config Xebula client configuration 
     */
    constructor(config: Config) {
        // Configuration
        this.config = config;

        // Blokchain networks
        this.tron = new TronNetwork(this.config);
    }
}