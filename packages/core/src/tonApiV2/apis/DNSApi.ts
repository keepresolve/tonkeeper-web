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


import * as runtime from '../runtime';
import type {
  Auctions,
  DnsRecord,
  DomainBids,
  DomainInfo,
  StatusDefaultResponse,
} from '../models/index';
import {
    AuctionsFromJSON,
    AuctionsToJSON,
    DnsRecordFromJSON,
    DnsRecordToJSON,
    DomainBidsFromJSON,
    DomainBidsToJSON,
    DomainInfoFromJSON,
    DomainInfoToJSON,
    StatusDefaultResponseFromJSON,
    StatusDefaultResponseToJSON,
} from '../models/index';

export interface DnsResolveRequest {
    domainName: string;
}

export interface GetAllAuctionsRequest {
    tld?: string;
}

export interface GetDnsInfoRequest {
    domainName: string;
}

export interface GetDomainBidsRequest {
    domainName: string;
}

/**
 * DNSApi - interface
 * 
 * @export
 * @interface DNSApiInterface
 */
export interface DNSApiInterface {
    /**
     * DNS resolve for domain name
     * @param {string} domainName domain name with .ton or .t.me
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    dnsResolveRaw(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DnsRecord>>;

    /**
     * DNS resolve for domain name
     */
    dnsResolve(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DnsRecord>;

    /**
     * Get all auctions
     * @param {string} [tld] domain filter for current auctions \&quot;ton\&quot; or \&quot;t.me\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    getAllAuctionsRaw(requestParameters: GetAllAuctionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Auctions>>;

    /**
     * Get all auctions
     */
    getAllAuctions(requestParameters: GetAllAuctionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Auctions>;

    /**
     * Get full information about domain name
     * @param {string} domainName domain name with .ton or .t.me
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    getDnsInfoRaw(requestParameters: GetDnsInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainInfo>>;

    /**
     * Get full information about domain name
     */
    getDnsInfo(requestParameters: GetDnsInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainInfo>;

    /**
     * Get domain bids
     * @param {string} domainName domain name with .ton or .t.me
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    getDomainBidsRaw(requestParameters: GetDomainBidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainBids>>;

    /**
     * Get domain bids
     */
    getDomainBids(requestParameters: GetDomainBidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainBids>;

}

/**
 * 
 */
export class DNSApi extends runtime.BaseAPI implements DNSApiInterface {

    /**
     * DNS resolve for domain name
     */
    async dnsResolveRaw(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DnsRecord>> {
        if (requestParameters['domainName'] == null) {
            throw new runtime.RequiredError(
                'domainName',
                'Required parameter "domainName" was null or undefined when calling dnsResolve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/dns/{domain_name}/resolve`.replace(`{${"domain_name"}}`, encodeURIComponent(String(requestParameters['domainName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DnsRecordFromJSON(jsonValue));
    }

    /**
     * DNS resolve for domain name
     */
    async dnsResolve(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DnsRecord> {
        const response = await this.dnsResolveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all auctions
     */
    async getAllAuctionsRaw(requestParameters: GetAllAuctionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Auctions>> {
        const queryParameters: any = {};

        if (requestParameters['tld'] != null) {
            queryParameters['tld'] = requestParameters['tld'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/dns/auctions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuctionsFromJSON(jsonValue));
    }

    /**
     * Get all auctions
     */
    async getAllAuctions(requestParameters: GetAllAuctionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Auctions> {
        const response = await this.getAllAuctionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get full information about domain name
     */
    async getDnsInfoRaw(requestParameters: GetDnsInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainInfo>> {
        if (requestParameters['domainName'] == null) {
            throw new runtime.RequiredError(
                'domainName',
                'Required parameter "domainName" was null or undefined when calling getDnsInfo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/dns/{domain_name}`.replace(`{${"domain_name"}}`, encodeURIComponent(String(requestParameters['domainName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainInfoFromJSON(jsonValue));
    }

    /**
     * Get full information about domain name
     */
    async getDnsInfo(requestParameters: GetDnsInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainInfo> {
        const response = await this.getDnsInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get domain bids
     */
    async getDomainBidsRaw(requestParameters: GetDomainBidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainBids>> {
        if (requestParameters['domainName'] == null) {
            throw new runtime.RequiredError(
                'domainName',
                'Required parameter "domainName" was null or undefined when calling getDomainBids().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/dns/{domain_name}/bids`.replace(`{${"domain_name"}}`, encodeURIComponent(String(requestParameters['domainName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainBidsFromJSON(jsonValue));
    }

    /**
     * Get domain bids
     */
    async getDomainBids(requestParameters: GetDomainBidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainBids> {
        const response = await this.getDomainBidsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
