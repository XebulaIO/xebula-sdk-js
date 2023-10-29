import secp256k1 from "secp256k1";
import { INetwork, Network } from ".";
import { Config } from "../config";
import { Wallet } from "../wallet";
import crypto from "crypto";

export class TronNetwork extends Network implements INetwork {
    /**
     * 
     * @param {Config} config Xebula client configuration
     */
    constructor(config: Config) {
        super();

        this.config = config;
        this.curve = secp256k1;

        this.wallet = new Wallet(this.config, this);
    }

    network(): Network {
        return this;
    }

    generatePrivateKey(): Uint8Array {
        let privateKey: Uint8Array | undefined;

        do {
            // Generate a random 256-bit private key share
            privateKey = crypto.randomBytes(32);

        } while (!this.curve.privateKeyVerify(privateKey));

        return privateKey;
    }
}