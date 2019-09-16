import { ClientBase } from '../ClientBase'
/**
 * Client for the stats chainsize
 */
export class ClientProxyEthGetblockByNumber extends ClientBase  {
    /**
     * Module to call
     */
    static module: string = 'proxy'
    /**
     * Action to call
     */
    static action: string = 'eth_getBlockByNumber'

}