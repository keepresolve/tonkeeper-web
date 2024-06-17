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
import type { MarketTonRates } from './MarketTonRates';
import {
    MarketTonRatesFromJSON,
    MarketTonRatesFromJSONTyped,
    MarketTonRatesToJSON,
} from './MarketTonRates';

/**
 * 
 * @export
 * @interface GetMarketsRates200Response
 */
export interface GetMarketsRates200Response {
    /**
     * 
     * @type {Array<MarketTonRates>}
     * @memberof GetMarketsRates200Response
     */
    markets: Array<MarketTonRates>;
}

/**
 * Check if a given object implements the GetMarketsRates200Response interface.
 */
export function instanceOfGetMarketsRates200Response(value: object): value is GetMarketsRates200Response {
    if (!('markets' in value) || value['markets'] === undefined) return false;
    return true;
}

export function GetMarketsRates200ResponseFromJSON(json: any): GetMarketsRates200Response {
    return GetMarketsRates200ResponseFromJSONTyped(json, false);
}

export function GetMarketsRates200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMarketsRates200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'markets': ((json['markets'] as Array<any>).map(MarketTonRatesFromJSON)),
    };
}

export function GetMarketsRates200ResponseToJSON(value?: GetMarketsRates200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'markets': ((value['markets'] as Array<any>).map(MarketTonRatesToJSON)),
    };
}

