import { Config } from "./config";
import { Entity } from "./entity";
import { INetwork } from "./network";

export class Wallet extends Entity {
    config: Config;
    network: INetwork;

    /**
     * 
     * @param {Config} config Xebula client configuration
     * @param {Network} network Blockchain network
     */
    constructor(config: Config, network: INetwork) {
        super(config);
        this.network = network;
    }

    async create() {
        let d1 = this.network.generatePrivateKey();

    }
}