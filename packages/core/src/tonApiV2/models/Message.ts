/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { StateInit } from './StateInit';
import {
    StateInitFromJSON,
    StateInitFromJSONTyped,
    StateInitToJSON,
} from './StateInit';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    msgType: MessageMsgTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    createdLt: number;
    /**
     * 
     * @type {boolean}
     * @memberof Message
     */
    ihrDisabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Message
     */
    bounce: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Message
     */
    bounced: boolean;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    value: number;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    fwdFee: number;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    ihrFee: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof Message
     */
    destination?: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof Message
     */
    source?: AccountAddress;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    importFee: number;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    createdAt: number;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    opCode?: string;
    /**
     * 
     * @type {StateInit}
     * @memberof Message
     */
    init?: StateInit;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    hash: string;
    /**
     * hex-encoded BoC with raw message body
     * @type {string}
     * @memberof Message
     */
    rawBody?: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    decodedOpName?: string;
    /**
     * 
     * @type {any}
     * @memberof Message
     */
    decodedBody?: any | null;
}


/**
 * @export
 */
export const MessageMsgTypeEnum = {
    IntMsg: 'int_msg',
    ExtInMsg: 'ext_in_msg',
    ExtOutMsg: 'ext_out_msg'
} as const;
export type MessageMsgTypeEnum = typeof MessageMsgTypeEnum[keyof typeof MessageMsgTypeEnum];


/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): value is Message {
    if (!('msgType' in value) || value['msgType'] === undefined) return false;
    if (!('createdLt' in value) || value['createdLt'] === undefined) return false;
    if (!('ihrDisabled' in value) || value['ihrDisabled'] === undefined) return false;
    if (!('bounce' in value) || value['bounce'] === undefined) return false;
    if (!('bounced' in value) || value['bounced'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('fwdFee' in value) || value['fwdFee'] === undefined) return false;
    if (!('ihrFee' in value) || value['ihrFee'] === undefined) return false;
    if (!('importFee' in value) || value['importFee'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('hash' in value) || value['hash'] === undefined) return false;
    return true;
}

export function MessageFromJSON(json: any): Message {
    return MessageFromJSONTyped(json, false);
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
    if (json == null) {
        return json;
    }
    return {
        
        'msgType': json['msg_type'],
        'createdLt': json['created_lt'],
        'ihrDisabled': json['ihr_disabled'],
        'bounce': json['bounce'],
        'bounced': json['bounced'],
        'value': json['value'],
        'fwdFee': json['fwd_fee'],
        'ihrFee': json['ihr_fee'],
        'destination': json['destination'] == null ? undefined : AccountAddressFromJSON(json['destination']),
        'source': json['source'] == null ? undefined : AccountAddressFromJSON(json['source']),
        'importFee': json['import_fee'],
        'createdAt': json['created_at'],
        'opCode': json['op_code'] == null ? undefined : json['op_code'],
        'init': json['init'] == null ? undefined : StateInitFromJSON(json['init']),
        'hash': json['hash'],
        'rawBody': json['raw_body'] == null ? undefined : json['raw_body'],
        'decodedOpName': json['decoded_op_name'] == null ? undefined : json['decoded_op_name'],
        'decodedBody': json['decoded_body'] == null ? undefined : json['decoded_body'],
    };
}

export function MessageToJSON(value?: Message | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'msg_type': value['msgType'],
        'created_lt': value['createdLt'],
        'ihr_disabled': value['ihrDisabled'],
        'bounce': value['bounce'],
        'bounced': value['bounced'],
        'value': value['value'],
        'fwd_fee': value['fwdFee'],
        'ihr_fee': value['ihrFee'],
        'destination': AccountAddressToJSON(value['destination']),
        'source': AccountAddressToJSON(value['source']),
        'import_fee': value['importFee'],
        'created_at': value['createdAt'],
        'op_code': value['opCode'],
        'init': StateInitToJSON(value['init']),
        'hash': value['hash'],
        'raw_body': value['rawBody'],
        'decoded_op_name': value['decodedOpName'],
        'decoded_body': value['decodedBody'],
    };
}

