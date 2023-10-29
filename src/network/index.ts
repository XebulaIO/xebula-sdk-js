import { Config } from "../config";
import { Wallet } from "../wallet";

export abstract class Network {
    protected config: Config;
    protected curve: any;

    // Network entities
    wallet: Wallet;
}

export interface INetwork {
    generatePrivateKey(): Uint8Array;
}